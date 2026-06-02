import argparse
import base64
import hashlib
import hmac
import json
import shutil
import subprocess
import sys
import threading
import time
import uuid
from datetime import datetime, timezone
from http import HTTPStatus
from http.cookies import SimpleCookie
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse


ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "data"
JOB_DIR = DATA_DIR / "admin-jobs"
BACKUP_DIR = DATA_DIR / "admin-backups"
AUDIT_LOG = DATA_DIR / "admin-audit.jsonl"
USERS_FILE = DATA_DIR / "admin-users.json"
SESSION_COOKIE = "aiStockLabAdminSession"
SESSION_TTL_SECONDS = 8 * 60 * 60

TASKS = {
    "daily-market": {
        "label": "每日行情資料",
        "command": [sys.executable, "scripts/update_data.py", "--workers", "12"],
    },
    "intelligence": {
        "label": "情報中心",
        "command": [sys.executable, "scripts/update_intelligence.py"],
    },
    "institutional": {
        "label": "法人機器人",
        "command": [sys.executable, "scripts/update_institutional_robot.py"],
    },
    "macro": {
        "label": "總經資料",
        "command": [sys.executable, "scripts/update_macro_robot.py"],
    },
    "short-margin": {
        "label": "融資融券",
        "command": [sys.executable, "scripts/update_short_margin_ratio.py"],
    },
    "build-site-data": {
        "label": "重建網站資料包",
        "command": [sys.executable, "scripts/build_site_data.py"],
    },
}

DATA_FILES = {
    "site": DATA_DIR / "site-data.json",
    "modelLibrary": DATA_DIR / "model_library.json",
    "intelligence": DATA_DIR / "intelligence-overview.json",
    "institutional": DATA_DIR / "institutional-robot.json",
    "macro": DATA_DIR / "macro-robot.json",
    "shortMargin": DATA_DIR / "shortMarginRatioMockData.json",
    "history": DATA_DIR / "history" / "manifest.json",
}

LOG_FILES = {
    "macro": DATA_DIR / "macro-auto-updater.log",
    "macroError": DATA_DIR / "macro-auto-updater.err.log",
}

jobs = {}
jobs_lock = threading.Lock()
auth_sessions = {}
auth_lock = threading.Lock()


def utc_now():
    return datetime.now(timezone.utc).isoformat()


def hash_password(password, salt=None, iterations=240_000):
    salt = salt or base64.urlsafe_b64encode(uuid.uuid4().bytes + uuid.uuid4().bytes).decode("ascii").rstrip("=")
    digest = hashlib.pbkdf2_hmac("sha256", password.encode("utf-8"), salt.encode("utf-8"), iterations)
    encoded = base64.urlsafe_b64encode(digest).decode("ascii").rstrip("=")
    return f"pbkdf2_sha256${iterations}${salt}${encoded}"


def verify_password(password, password_hash):
    try:
        algorithm, iterations, salt, expected = password_hash.split("$", 3)
        if algorithm != "pbkdf2_sha256":
            return False
        actual = hash_password(password, salt=salt, iterations=int(iterations)).split("$", 3)[3]
        return hmac.compare_digest(actual, expected)
    except Exception:
        return False


def public_user(user):
    return {
        "account": user.get("account"),
        "nickname": user.get("nickname") or user.get("account"),
        "role": user.get("role") or "basic",
        "roleLabel": user.get("roleLabel") or ("管理員" if user.get("role") == "admin" else "會員"),
        "createdAt": user.get("createdAt"),
    }


def ensure_users_file():
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    if USERS_FILE.exists():
        return
    payload = {
        "createdAt": utc_now(),
        "users": [
            {
                "account": "admin",
                "nickname": "系統管理員",
                "role": "admin",
                "roleLabel": "管理員",
                "createdAt": "default",
                "passwordHash": hash_password("admin1234"),
            }
        ],
    }
    USERS_FILE.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")


def read_admin_users():
    ensure_users_file()
    try:
        payload = json.loads(USERS_FILE.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        payload = {"users": []}
    users = payload.get("users") if isinstance(payload, dict) else []
    return users if isinstance(users, list) else []


def write_admin_users(users):
    ensure_users_file()
    try:
        payload = json.loads(USERS_FILE.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        payload = {}
    payload["users"] = users
    payload["updatedAt"] = utc_now()
    temp_path = USERS_FILE.with_suffix(".json.tmp")
    temp_path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    temp_path.replace(USERS_FILE)


def update_admin_password(account, current_password, new_password):
    users = read_admin_users()
    for index, user in enumerate(users):
        if str(user.get("account") or "") != str(account or ""):
            continue
        if not verify_password(current_password, user.get("passwordHash", "")):
            return None, "Current password is incorrect"
        if len(new_password) < 8:
            return None, "New password must be at least 8 characters"
        users[index] = {**user, "passwordHash": hash_password(new_password), "passwordUpdatedAt": utc_now()}
        write_admin_users(users)
        return users[index], None
    return None, "User not found"


def find_admin_user(account):
    normalized = str(account or "").strip()
    if not normalized:
        return None
    for user in read_admin_users():
        if str(user.get("account") or "") == normalized:
            return user
    return None


def create_session(user):
    token = base64.urlsafe_b64encode(uuid.uuid4().bytes + uuid.uuid4().bytes).decode("ascii").rstrip("=")
    with auth_lock:
        auth_sessions[token] = {
            "user": public_user(user),
            "expiresAt": time.time() + SESSION_TTL_SECONDS,
        }
    return token


def session_user(token):
    if not token:
        return None
    with auth_lock:
        session = auth_sessions.get(token)
        if not session:
            return None
        if session["expiresAt"] < time.time():
            auth_sessions.pop(token, None)
            return None
        return session["user"]


def safe_read_json(path):
    try:
        stat = path.stat()
        with path.open("r", encoding="utf-8-sig") as file:
            data = json.load(file)
        return {
            "ok": True,
            "path": str(path.relative_to(ROOT)),
            "size": stat.st_size,
            "modifiedAt": datetime.fromtimestamp(stat.st_mtime, timezone.utc).isoformat(),
            "data": data,
        }
    except Exception as error:
        return {
            "ok": False,
            "path": str(path.relative_to(ROOT)),
            "error": str(error),
        }


def tail_text(path, limit=80):
    try:
      if not path.exists():
          return []
      lines = path.read_text(encoding="utf-8", errors="replace").splitlines()
      return lines[-limit:]
    except Exception as error:
      return [f"讀取失敗: {error}"]


def audit_operator(payload):
    operator = payload.get("operator") if isinstance(payload, dict) else None
    if not isinstance(operator, dict):
        return {"account": "unknown", "nickname": "Unknown", "role": "unknown"}
    return {
        "account": str(operator.get("account") or "unknown")[:80],
        "nickname": str(operator.get("nickname") or operator.get("account") or "Unknown")[:80],
        "role": str(operator.get("role") or "unknown")[:40],
    }


def append_audit(action, operator=None, status="success", detail=None, request_handler=None):
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    entry = {
        "time": utc_now(),
        "action": action,
        "status": status,
        "operator": operator or {"account": "unknown", "nickname": "Unknown", "role": "unknown"},
        "detail": detail or {},
    }
    if request_handler:
        entry["client"] = request_handler.client_address[0]
    with AUDIT_LOG.open("a", encoding="utf-8") as file:
        file.write(json.dumps(entry, ensure_ascii=False) + "\n")
    return entry


def tail_audit(limit=30):
    if not AUDIT_LOG.exists():
        return []
    entries = []
    for line in AUDIT_LOG.read_text(encoding="utf-8", errors="replace").splitlines()[-limit:]:
        try:
            entries.append(json.loads(line))
        except json.JSONDecodeError:
            entries.append({"time": None, "action": "audit-parse-error", "status": "failed", "detail": {"line": line}})
    return entries


def summarize_data_file(path):
    item = safe_read_json(path)
    data = item.get("data")
    if item["ok"]:
        meta = data.get("meta", data) if isinstance(data, dict) else {}
        item["summary"] = {
            "generatedAt": meta.get("generatedAt") or data.get("generatedAt") if isinstance(data, dict) else None,
            "marketDate": meta.get("marketDate") if isinstance(meta, dict) else None,
            "stockCount": meta.get("stockCount") if isinstance(meta, dict) else None,
            "candidateCount": meta.get("candidateCount") if isinstance(meta, dict) else None,
            "items": len(data) if hasattr(data, "__len__") else None,
        }
        item.pop("data", None)
    return item


def list_backups():
    backups = sorted(
        [*DATA_DIR.rglob("*.bak"), *BACKUP_DIR.rglob("*.*")]
        if BACKUP_DIR.exists()
        else DATA_DIR.rglob("*.bak"),
        key=lambda path: path.stat().st_mtime,
        reverse=True,
    )
    output = []
    for path in backups[:30]:
        stat = path.stat()
        output.append({
            "path": str(path.relative_to(ROOT)),
            "size": stat.st_size,
            "modifiedAt": datetime.fromtimestamp(stat.st_mtime, timezone.utc).isoformat(),
        })
    return output


def create_backups(keys=None):
    selected = list(DATA_FILES.keys()) if not keys else list(keys)
    unknown = [key for key in selected if key not in DATA_FILES]
    if unknown:
        raise ValueError(f"Unknown data file key: {', '.join(unknown)}")

    timestamp = datetime.now().strftime("%Y%m%d-%H%M%S")
    target_dir = BACKUP_DIR / timestamp
    target_dir.mkdir(parents=True, exist_ok=True)

    created = []
    for key in selected:
        source = DATA_FILES[key]
        if not source.exists() or not source.is_file():
            continue
        target = target_dir / source.name
        shutil.copy2(source, target)
        stat = target.stat()
        created.append({
            "key": key,
            "path": str(target.relative_to(ROOT)),
            "size": stat.st_size,
            "modifiedAt": datetime.fromtimestamp(stat.st_mtime, timezone.utc).isoformat(),
        })
    return created


def job_snapshot():
    with jobs_lock:
        return list(jobs.values())


def run_task(job_id, task_key):
    task = TASKS[task_key]
    log_path = JOB_DIR / f"{job_id}.log"
    command = task["command"]

    with jobs_lock:
        jobs[job_id].update({"status": "running", "startedAt": utc_now(), "logPath": str(log_path.relative_to(ROOT))})

    JOB_DIR.mkdir(parents=True, exist_ok=True)
    with log_path.open("w", encoding="utf-8", errors="replace") as log:
        log.write(f"[{utc_now()}] START {task['label']}\n")
        log.write("COMMAND " + " ".join(command) + "\n\n")
        log.flush()
        started = time.time()
        process = subprocess.Popen(
            command,
            cwd=ROOT,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
            encoding="utf-8",
            errors="replace",
        )
        for line in process.stdout or []:
            log.write(line)
            log.flush()
        return_code = process.wait()
        elapsed = round(time.time() - started, 2)
        log.write(f"\n[{utc_now()}] END returnCode={return_code} elapsedSeconds={elapsed}\n")

    with jobs_lock:
        jobs[job_id].update({
            "status": "success" if return_code == 0 else "failed",
            "finishedAt": utc_now(),
            "returnCode": return_code,
            "elapsedSeconds": elapsed,
        })
        job = dict(jobs[job_id])

    append_audit(
        "run-task-complete",
        job.get("operator"),
        "success" if return_code == 0 else "failed",
        {
            "task": task_key,
            "label": task["label"],
            "jobId": job_id,
            "returnCode": return_code,
            "elapsedSeconds": elapsed,
        },
    )


class AdminRequestHandler(SimpleHTTPRequestHandler):
    server_version = "AIStockAdmin/1.0"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def send_json(self, payload, status=HTTPStatus.OK, headers=None):
        body = json.dumps(payload, ensure_ascii=False, indent=2).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        for key, value in (headers or {}).items():
            self.send_header(key, value)
        self.end_headers()
        self.wfile.write(body)

    def read_json_body(self):
        length = int(self.headers.get("Content-Length", "0") or "0")
        if length <= 0:
            return {}
        raw = self.rfile.read(length).decode("utf-8")
        return json.loads(raw or "{}")

    def cookie_token(self):
        cookie = SimpleCookie(self.headers.get("Cookie"))
        morsel = cookie.get(SESSION_COOKIE)
        return morsel.value if morsel else None

    def auth_user(self):
        return session_user(self.cookie_token())

    def require_admin(self):
        user = self.auth_user()
        if not user:
            self.send_json({"ok": False, "error": "Authentication required"}, HTTPStatus.UNAUTHORIZED)
            return None
        if user.get("role") != "admin":
            self.send_json({"ok": False, "error": "Admin role required"}, HTTPStatus.FORBIDDEN)
            return None
        return user

    def session_cookie_header(self, token):
        return f"{SESSION_COOKIE}={token}; Path=/; Max-Age={SESSION_TTL_SECONDS}; HttpOnly; SameSite=Lax"

    def clear_cookie_header(self):
        return f"{SESSION_COOKIE}=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax"

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == "/api/auth/me":
            user = self.auth_user()
            if not user:
                self.send_json({"ok": False, "error": "Authentication required"}, HTTPStatus.UNAUTHORIZED)
                return
            self.send_json({"ok": True, "user": user})
            return

        if parsed.path == "/api/admin/status":
            user = self.require_admin()
            if not user:
                return
            self.send_json({
                "ok": True,
                "user": user,
                "tasks": {key: {"label": value["label"], "command": value["command"]} for key, value in TASKS.items()},
                "dataFiles": {key: summarize_data_file(path) for key, path in DATA_FILES.items()},
                "logs": {key: tail_text(path, 40) for key, path in LOG_FILES.items()},
                "backups": list_backups(),
                "jobs": job_snapshot(),
                "audit": tail_audit(20),
                "serverTime": utc_now(),
            })
            return

        if parsed.path == "/api/admin/audit":
            if not self.require_admin():
                return
            params = parse_qs(parsed.query)
            limit = int(params.get("limit", ["80"])[0])
            self.send_json({"ok": True, "entries": tail_audit(limit)})
            return

        if parsed.path == "/api/admin/logs":
            if not self.require_admin():
                return
            params = parse_qs(parsed.query)
            key = params.get("key", ["macro"])[0]
            limit = int(params.get("limit", ["120"])[0])
            if key not in LOG_FILES:
                self.send_json({"ok": False, "error": "Unknown log key"}, HTTPStatus.NOT_FOUND)
                return
            self.send_json({"ok": True, "key": key, "lines": tail_text(LOG_FILES[key], limit)})
            return

        if parsed.path.startswith("/api/admin/jobs/") and parsed.path.endswith("/log"):
            if not self.require_admin():
                return
            job_id = parsed.path.split("/")[3]
            log_path = JOB_DIR / f"{job_id}.log"
            self.send_json({"ok": True, "jobId": job_id, "lines": tail_text(log_path, 200)})
            return

        return super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path == "/api/auth/login":
            try:
                payload = self.read_json_body()
            except Exception as error:
                self.send_json({"ok": False, "error": f"Invalid JSON: {error}"}, HTTPStatus.BAD_REQUEST)
                return
            user = find_admin_user(payload.get("account"))
            if not user or not verify_password(str(payload.get("password") or ""), user.get("passwordHash", "")):
                append_audit(
                    "auth-login",
                    {"account": str(payload.get("account") or "unknown")[:80], "nickname": "Unknown", "role": "unknown"},
                    "failed",
                    {"reason": "invalid-credentials"},
                    self,
                )
                self.send_json({"ok": False, "error": "Invalid account or password"}, HTTPStatus.UNAUTHORIZED)
                return
            token = create_session(user)
            safe_user = public_user(user)
            append_audit("auth-login", safe_user, "success", {}, self)
            self.send_json({"ok": True, "user": safe_user}, headers={"Set-Cookie": self.session_cookie_header(token)})
            return

        if parsed.path == "/api/auth/logout":
            user = self.auth_user()
            if user:
                append_audit("auth-logout", user, "success", {}, self)
            token = self.cookie_token()
            if token:
                with auth_lock:
                    auth_sessions.pop(token, None)
            self.send_json({"ok": True}, headers={"Set-Cookie": self.clear_cookie_header()})
            return

        if parsed.path == "/api/auth/change-password":
            auth_user = self.require_admin()
            if not auth_user:
                return
            try:
                payload = self.read_json_body()
            except Exception as error:
                self.send_json({"ok": False, "error": f"Invalid JSON: {error}"}, HTTPStatus.BAD_REQUEST)
                return
            updated_user, error = update_admin_password(
                auth_user.get("account"),
                str(payload.get("currentPassword") or ""),
                str(payload.get("newPassword") or ""),
            )
            if error:
                append_audit(
                    "auth-change-password",
                    auth_user,
                    "failed",
                    {"reason": error},
                    self,
                )
                self.send_json({"ok": False, "error": error}, HTTPStatus.BAD_REQUEST)
                return
            safe_user = public_user(updated_user)
            append_audit("auth-change-password", safe_user, "success", {}, self)
            token = self.cookie_token()
            if token:
                with auth_lock:
                    if token in auth_sessions:
                        auth_sessions[token]["user"] = safe_user
            self.send_json({"ok": True, "user": safe_user})
            return

        if parsed.path == "/api/admin/run":
            auth_user = self.require_admin()
            if not auth_user:
                return
            try:
                payload = self.read_json_body()
            except Exception as error:
                self.send_json({"ok": False, "error": f"Invalid JSON: {error}"}, HTTPStatus.BAD_REQUEST)
                return

            task_key = payload.get("task")
            if task_key not in TASKS:
                self.send_json({"ok": False, "error": "Unknown task"}, HTTPStatus.BAD_REQUEST)
                return
            operator = auth_user

            with jobs_lock:
                active = [job for job in jobs.values() if job["task"] == task_key and job["status"] in {"queued", "running"}]
                if active:
                    append_audit(
                        "run-task",
                        operator,
                        "blocked",
                        {"task": task_key, "reason": "Task already running", "jobId": active[-1]["id"]},
                        self,
                    )
                    self.send_json({"ok": False, "error": "Task already running", "job": active[-1]}, HTTPStatus.CONFLICT)
                    return
                job_id = uuid.uuid4().hex[:12]
                jobs[job_id] = {
                    "id": job_id,
                    "task": task_key,
                    "label": TASKS[task_key]["label"],
                    "status": "queued",
                    "createdAt": utc_now(),
                    "operator": operator,
                }

            append_audit(
                "run-task",
                operator,
                "queued",
                {"task": task_key, "label": TASKS[task_key]["label"], "jobId": job_id},
                self,
            )
            thread = threading.Thread(target=run_task, args=(job_id, task_key), daemon=True)
            thread.start()
            self.send_json({"ok": True, "job": jobs[job_id]}, HTTPStatus.ACCEPTED)
            return

        if parsed.path == "/api/admin/backup":
            auth_user = self.require_admin()
            if not auth_user:
                return
            try:
                payload = self.read_json_body()
                operator = auth_user
                created = create_backups(payload.get("keys"))
            except Exception as error:
                append_audit(
                    "create-backup",
                    auth_user,
                    "failed",
                    {"error": str(error)},
                    self,
                )
                self.send_json({"ok": False, "error": str(error)}, HTTPStatus.BAD_REQUEST)
                return
            append_audit(
                "create-backup",
                operator,
                "success",
                {"count": len(created), "paths": [item["path"] for item in created]},
                self,
            )
            self.send_json({"ok": True, "created": created, "backups": list_backups()}, HTTPStatus.CREATED)
            return

        self.send_json({"ok": False, "error": "Unknown endpoint"}, HTTPStatus.NOT_FOUND)


def main():
    parser = argparse.ArgumentParser(description="Serve AI Stock Lab with local admin management APIs.")
    parser.add_argument("--host", default="127.0.0.1", help="Bind host. Keep localhost for admin use.")
    parser.add_argument("--port", type=int, default=4177)
    args = parser.parse_args()

    ensure_users_file()
    httpd = ThreadingHTTPServer((args.host, args.port), AdminRequestHandler)
    print(f"AI Stock Lab admin server: http://{args.host}:{args.port}/admin/")
    print("Press Ctrl+C to stop.")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        httpd.server_close()


if __name__ == "__main__":
    main()
