from __future__ import annotations

import argparse
import base64
import hashlib
import hmac
import json
import re
import sqlite3
import time
import uuid
from datetime import datetime, timezone
from http import HTTPStatus
from http.cookies import SimpleCookie
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse


ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "public-dist"
DATA_DIR = ROOT / "data"
DB_PATH = DATA_DIR / "public-users.sqlite"
SESSION_COOKIE = "aiStockLabSession"
SESSION_TTL_SECONDS = 14 * 24 * 60 * 60
ACCOUNT_PATTERN = re.compile(r"^[A-Za-z0-9_.@-]{3,80}$")


def utc_now() -> str:
    return datetime.now(timezone.utc).isoformat()


def hash_password(password: str, salt: str | None = None, iterations: int = 240_000) -> str:
    salt = salt or base64.urlsafe_b64encode(uuid.uuid4().bytes + uuid.uuid4().bytes).decode("ascii").rstrip("=")
    digest = hashlib.pbkdf2_hmac("sha256", password.encode("utf-8"), salt.encode("utf-8"), iterations)
    encoded = base64.urlsafe_b64encode(digest).decode("ascii").rstrip("=")
    return f"pbkdf2_sha256${iterations}${salt}${encoded}"


def verify_password(password: str, password_hash: str) -> bool:
    try:
        algorithm, iterations, salt, expected = password_hash.split("$", 3)
        if algorithm != "pbkdf2_sha256":
            return False
        actual = hash_password(password, salt=salt, iterations=int(iterations)).split("$", 3)[3]
        return hmac.compare_digest(actual, expected)
    except Exception:
        return False


def normalize_account(value: object) -> str:
    return str(value or "").strip().lower()


def safe_user(row: sqlite3.Row | dict[str, object]) -> dict[str, object]:
    return {
        "account": row["account"],
        "nickname": row["nickname"] or row["account"],
        "role": row["role"] or "basic",
        "roleLabel": row["role_label"] or "Basic member",
        "createdAt": row["created_at"],
    }


class AuthStore:
    def __init__(self, db_path: Path):
        self.db_path = db_path
        self.db_path.parent.mkdir(parents=True, exist_ok=True)
        self.init_db()

    def connect(self) -> sqlite3.Connection:
        connection = sqlite3.connect(self.db_path)
        connection.row_factory = sqlite3.Row
        return connection

    def init_db(self) -> None:
        with self.connect() as db:
            db.execute(
                """
                CREATE TABLE IF NOT EXISTS users (
                  account TEXT PRIMARY KEY,
                  nickname TEXT NOT NULL,
                  password_hash TEXT NOT NULL,
                  role TEXT NOT NULL DEFAULT 'basic',
                  role_label TEXT NOT NULL DEFAULT 'Basic member',
                  created_at TEXT NOT NULL,
                  updated_at TEXT NOT NULL,
                  last_login_at TEXT
                )
                """
            )
            db.execute(
                """
                CREATE TABLE IF NOT EXISTS sessions (
                  token TEXT PRIMARY KEY,
                  account TEXT NOT NULL,
                  created_at TEXT NOT NULL,
                  expires_at REAL NOT NULL,
                  FOREIGN KEY(account) REFERENCES users(account) ON DELETE CASCADE
                )
                """
            )
            db.execute("CREATE INDEX IF NOT EXISTS idx_sessions_account ON sessions(account)")
            db.execute("CREATE INDEX IF NOT EXISTS idx_sessions_expires_at ON sessions(expires_at)")

    def create_user(self, account: str, nickname: str, password: str) -> tuple[dict[str, object] | None, str | None]:
        account = normalize_account(account)
        nickname = str(nickname or "").strip()
        if not ACCOUNT_PATTERN.match(account):
            return None, "Account must be 3-80 characters: letters, numbers, dot, dash, underscore, or email."
        if not nickname:
            return None, "Name is required."
        if len(password) < 6:
            return None, "Password must be at least 6 characters."

        now = utc_now()
        try:
            with self.connect() as db:
                db.execute(
                    """
                    INSERT INTO users (account, nickname, password_hash, role, role_label, created_at, updated_at)
                    VALUES (?, ?, ?, 'basic', 'Basic member', ?, ?)
                    """,
                    (account, nickname[:120], hash_password(password), now, now),
                )
                row = db.execute("SELECT * FROM users WHERE account = ?", (account,)).fetchone()
                return safe_user(row), None
        except sqlite3.IntegrityError:
            return None, "This account already exists."

    def create_or_update_admin(self, account: str, nickname: str, password: str) -> tuple[dict[str, object] | None, str | None]:
        account = normalize_account(account)
        nickname = str(nickname or "").strip() or account
        if not ACCOUNT_PATTERN.match(account):
            return None, "Account must be 3-80 characters: letters, numbers, dot, dash, underscore, or email."
        if len(password) < 10:
            return None, "Admin password must be at least 10 characters."
        now = utc_now()
        with self.connect() as db:
            existing = db.execute("SELECT * FROM users WHERE account = ?", (account,)).fetchone()
            if existing:
                db.execute(
                    """
                    UPDATE users
                    SET nickname = ?, password_hash = ?, role = 'admin', role_label = 'Admin', updated_at = ?
                    WHERE account = ?
                    """,
                    (nickname[:120], hash_password(password), now, account),
                )
            else:
                db.execute(
                    """
                    INSERT INTO users (account, nickname, password_hash, role, role_label, created_at, updated_at)
                    VALUES (?, ?, ?, 'admin', 'Admin', ?, ?)
                    """,
                    (account, nickname[:120], hash_password(password), now, now),
                )
            row = db.execute("SELECT * FROM users WHERE account = ?", (account,)).fetchone()
        return safe_user(row), None

    def login(self, account: str, password: str) -> tuple[dict[str, object] | None, str | None]:
        account = normalize_account(account)
        with self.connect() as db:
            row = db.execute("SELECT * FROM users WHERE account = ?", (account,)).fetchone()
            if not row or not verify_password(password, row["password_hash"]):
                return None, "Invalid account or password."
            db.execute("UPDATE users SET last_login_at = ? WHERE account = ?", (utc_now(), account))
            return safe_user(row), None

    def create_session(self, account: str) -> str:
        token = base64.urlsafe_b64encode(uuid.uuid4().bytes + uuid.uuid4().bytes).decode("ascii").rstrip("=")
        with self.connect() as db:
            db.execute("DELETE FROM sessions WHERE expires_at <= ?", (time.time(),))
            db.execute(
                "INSERT INTO sessions (token, account, created_at, expires_at) VALUES (?, ?, ?, ?)",
                (token, account, utc_now(), time.time() + SESSION_TTL_SECONDS),
            )
        return token

    def user_for_session(self, token: str | None) -> dict[str, object] | None:
        if not token:
            return None
        with self.connect() as db:
            row = db.execute(
                """
                SELECT users.* FROM sessions
                JOIN users ON users.account = sessions.account
                WHERE sessions.token = ? AND sessions.expires_at > ?
                """,
                (token, time.time()),
            ).fetchone()
            return safe_user(row) if row else None

    def delete_session(self, token: str | None) -> None:
        if not token:
            return
        with self.connect() as db:
            db.execute("DELETE FROM sessions WHERE token = ?", (token,))

    def list_users(self) -> list[dict[str, object]]:
        with self.connect() as db:
            rows = db.execute(
                """
                SELECT account, nickname, role, role_label, created_at, last_login_at
                FROM users
                ORDER BY created_at DESC
                """
            ).fetchall()
        return [dict(row) for row in rows]

    def set_role(self, account: str, role: str) -> tuple[dict[str, object] | None, str | None]:
        account = normalize_account(account)
        role = str(role or "").strip().lower()
        role_labels = {
            "basic": "Basic member",
            "advanced": "Advanced member",
            "admin": "Admin",
        }
        if role not in role_labels:
            return None, "Role must be one of: basic, advanced, admin."
        with self.connect() as db:
            row = db.execute("SELECT * FROM users WHERE account = ?", (account,)).fetchone()
            if not row:
                return None, "User not found."
            db.execute(
                "UPDATE users SET role = ?, role_label = ?, updated_at = ? WHERE account = ?",
                (role, role_labels[role], utc_now(), account),
            )
            updated = db.execute("SELECT * FROM users WHERE account = ?", (account,)).fetchone()
        return safe_user(updated), None

    def delete_user(self, account: str) -> tuple[bool, str | None]:
        account = normalize_account(account)
        with self.connect() as db:
            cursor = db.execute("DELETE FROM users WHERE account = ?", (account,))
            db.execute("DELETE FROM sessions WHERE account = ?", (account,))
        if cursor.rowcount <= 0:
            return False, "User not found."
        return True, None


class PublicRequestHandler(SimpleHTTPRequestHandler):
    server_version = "AIStockPublic/1.0"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIST), **kwargs)

    def end_headers(self) -> None:
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("X-Frame-Options", "DENY")
        self.send_header("Referrer-Policy", "strict-origin-when-cross-origin")
        super().end_headers()

    def list_directory(self, path):  # noqa: ANN001
        self.send_error(HTTPStatus.NOT_FOUND, "Not found")
        return None

    def send_json(self, payload: dict[str, object], status: HTTPStatus = HTTPStatus.OK, headers: dict[str, str] | None = None) -> None:
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        for key, value in (headers or {}).items():
            self.send_header(key, value)
        self.end_headers()
        self.wfile.write(body)

    def read_json_body(self) -> dict[str, object]:
        length = int(self.headers.get("Content-Length", "0") or "0")
        if length <= 0:
            return {}
        raw = self.rfile.read(length).decode("utf-8")
        return json.loads(raw or "{}")

    def cookie_token(self) -> str | None:
        cookie = SimpleCookie(self.headers.get("Cookie"))
        morsel = cookie.get(SESSION_COOKIE)
        return morsel.value if morsel else None

    def auth_user(self) -> dict[str, object] | None:
        return self.server.auth_store.user_for_session(self.cookie_token())

    def require_admin(self) -> dict[str, object] | None:
        user = self.auth_user()
        if not user:
            self.send_json({"ok": False, "error": "Authentication required"}, HTTPStatus.UNAUTHORIZED)
            return None
        if user.get("role") != "admin":
            self.send_json({"ok": False, "error": "Admin role required"}, HTTPStatus.FORBIDDEN)
            return None
        return user

    def origin_allowed(self) -> bool:
        origin = self.headers.get("Origin")
        if not origin:
            return True
        host = self.headers.get("Host")
        return origin in {f"http://{host}", f"https://{host}"}

    def is_forwarded_https(self) -> bool:
        if self.headers.get("X-Forwarded-Proto", "").lower() == "https":
            return True
        cf_visitor = self.headers.get("Cf-Visitor", "")
        return '"scheme":"https"' in cf_visitor

    def cookie_header(self, token: str) -> str:
        secure = "; Secure" if self.server.secure_cookies or self.is_forwarded_https() else ""
        return f"{SESSION_COOKIE}={token}; Path=/; Max-Age={SESSION_TTL_SECONDS}; HttpOnly; SameSite=Lax{secure}"

    def clear_cookie_header(self) -> str:
        secure = "; Secure" if self.server.secure_cookies or self.is_forwarded_https() else ""
        return f"{SESSION_COOKIE}=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax{secure}"

    def do_GET(self) -> None:
        parsed = urlparse(self.path)
        if parsed.path == "/api/auth/me":
            user = self.server.auth_store.user_for_session(self.cookie_token())
            if not user:
                self.send_json({"ok": False, "error": "Authentication required"}, HTTPStatus.UNAUTHORIZED)
                return
            self.send_json({"ok": True, "user": user})
            return
        if parsed.path == "/api/admin/users":
            if not self.require_admin():
                return
            self.send_json({"ok": True, "users": self.server.auth_store.list_users()})
            return
        return super().do_GET()

    def do_POST(self) -> None:
        parsed = urlparse(self.path)
        if parsed.path.startswith("/api/admin/") and not self.origin_allowed():
            self.send_json({"ok": False, "error": "Invalid request origin"}, HTTPStatus.FORBIDDEN)
            return

        if parsed.path == "/api/auth/register":
            try:
                payload = self.read_json_body()
            except Exception as error:
                self.send_json({"ok": False, "error": f"Invalid JSON: {error}"}, HTTPStatus.BAD_REQUEST)
                return
            user, error = self.server.auth_store.create_user(
                str(payload.get("account") or ""),
                str(payload.get("nickname") or ""),
                str(payload.get("password") or ""),
            )
            if error:
                self.send_json({"ok": False, "error": error}, HTTPStatus.BAD_REQUEST)
                return
            token = self.server.auth_store.create_session(str(user["account"]))
            self.send_json({"ok": True, "user": user}, headers={"Set-Cookie": self.cookie_header(token)})
            return

        if parsed.path == "/api/auth/login":
            try:
                payload = self.read_json_body()
            except Exception as error:
                self.send_json({"ok": False, "error": f"Invalid JSON: {error}"}, HTTPStatus.BAD_REQUEST)
                return
            user, error = self.server.auth_store.login(str(payload.get("account") or ""), str(payload.get("password") or ""))
            if error:
                self.send_json({"ok": False, "error": error}, HTTPStatus.UNAUTHORIZED)
                return
            token = self.server.auth_store.create_session(str(user["account"]))
            self.send_json({"ok": True, "user": user}, headers={"Set-Cookie": self.cookie_header(token)})
            return

        if parsed.path == "/api/auth/logout":
            self.server.auth_store.delete_session(self.cookie_token())
            self.send_json({"ok": True}, headers={"Set-Cookie": self.clear_cookie_header()})
            return

        if parsed.path == "/api/admin/users/role":
            if not self.require_admin():
                return
            try:
                payload = self.read_json_body()
            except Exception as error:
                self.send_json({"ok": False, "error": f"Invalid JSON: {error}"}, HTTPStatus.BAD_REQUEST)
                return
            user, error = self.server.auth_store.set_role(str(payload.get("account") or ""), str(payload.get("role") or ""))
            if error:
                self.send_json({"ok": False, "error": error}, HTTPStatus.BAD_REQUEST)
                return
            self.send_json({"ok": True, "user": user})
            return

        if parsed.path == "/api/admin/users/delete":
            if not self.require_admin():
                return
            try:
                payload = self.read_json_body()
            except Exception as error:
                self.send_json({"ok": False, "error": f"Invalid JSON: {error}"}, HTTPStatus.BAD_REQUEST)
                return
            ok, error = self.server.auth_store.delete_user(str(payload.get("account") or ""))
            if error:
                self.send_json({"ok": False, "error": error}, HTTPStatus.BAD_REQUEST)
                return
            self.send_json({"ok": ok})
            return

        self.send_json({"ok": False, "error": "Unknown endpoint"}, HTTPStatus.NOT_FOUND)


class PublicServer(ThreadingHTTPServer):
    def __init__(self, server_address, handler_class, auth_store: AuthStore, secure_cookies: bool):  # noqa: ANN001
        super().__init__(server_address, handler_class)
        self.auth_store = auth_store
        self.secure_cookies = secure_cookies


def main() -> None:
    parser = argparse.ArgumentParser(description="Serve the public AI Stock Lab site with real local auth.")
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=8080)
    parser.add_argument("--db", default=str(DB_PATH))
    parser.add_argument("--secure-cookies", action="store_true", help="Use Secure cookies. Enable when serving only through HTTPS.")
    parser.add_argument("--list-users", action="store_true", help="Print registered public users and exit.")
    parser.add_argument("--create-admin", nargs=2, metavar=("ACCOUNT", "PASSWORD"), help="Create or reset an admin account.")
    parser.add_argument("--admin-nickname", default="Administrator", help="Nickname to use with --create-admin.")
    parser.add_argument("--set-role", nargs=2, metavar=("ACCOUNT", "ROLE"), help="Set a public user's role: basic, advanced, or admin.")
    parser.add_argument("--delete-user", metavar="ACCOUNT", help="Delete a public user and their sessions.")
    args = parser.parse_args()

    auth_store = AuthStore(Path(args.db))

    if args.list_users:
        for user in auth_store.list_users():
            print(json.dumps(user, ensure_ascii=False))
        return

    if args.create_admin:
        user, error = auth_store.create_or_update_admin(args.create_admin[0], args.admin_nickname, args.create_admin[1])
        if error:
            raise SystemExit(error)
        print(json.dumps({"ok": True, "user": user}, ensure_ascii=False))
        return

    if args.set_role:
        user, error = auth_store.set_role(args.set_role[0], args.set_role[1])
        if error:
            raise SystemExit(error)
        print(json.dumps({"ok": True, "user": user}, ensure_ascii=False))
        return

    if args.delete_user:
        ok, error = auth_store.delete_user(args.delete_user)
        if error:
            raise SystemExit(error)
        print(json.dumps({"ok": ok, "deleted": normalize_account(args.delete_user)}, ensure_ascii=False))
        return

    if not (DIST / "index.html").exists():
        raise SystemExit("public-dist is missing. Run: python scripts/build_public_dist.py")

    httpd = PublicServer((args.host, args.port), PublicRequestHandler, auth_store, args.secure_cookies)
    print(f"AI Stock Lab public server: http://{args.host}:{args.port}/")
    print(f"User database: {Path(args.db).resolve()}")
    print("Expose this through Cloudflare Tunnel with:")
    print(f"cloudflared tunnel --url http://{args.host}:{args.port}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        httpd.server_close()


if __name__ == "__main__":
    main()
