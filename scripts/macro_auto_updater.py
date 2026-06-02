import argparse
import json
import subprocess
import sys
import time
from datetime import datetime, timedelta
from pathlib import Path
from zoneinfo import ZoneInfo


ROOT_DIR = Path(__file__).resolve().parents[1]
DATA_FILE = ROOT_DIR / "data" / "macro-robot.json"
UPDATE_SCRIPT = ROOT_DIR / "scripts" / "update_macro_robot.py"
BUILD_SCRIPT = ROOT_DIR / "scripts" / "build_public_dist.py"
TAIPEI = ZoneInfo("Asia/Taipei")


def has_actual(event):
    value = str(event.get("actual") or "").strip()
    return bool(value and value not in {"-", "--", "—"} and value.lower() not in {"n/a", "none", "null"})


def parse_publish_time(event):
    for field in ("publishTime", "timestamp"):
        value = str(event.get(field) or "").strip()
        if not value:
            continue
        try:
            return datetime.strptime(value[:16], "%Y/%m/%d %H:%M").replace(tzinfo=TAIPEI)
        except ValueError:
            continue
    return None


def load_macro_payload():
    try:
        return json.loads(DATA_FILE.read_text(encoding="utf-8"))
    except FileNotFoundError:
        return {"events": []}
    except json.JSONDecodeError as exc:
        print(f"[macro-auto] Cannot read {DATA_FILE}: {exc}", flush=True)
        return {"events": []}


def due_unpublished_events(payload, grace_seconds):
    now = datetime.now(TAIPEI)
    due_at = now - timedelta(seconds=grace_seconds)
    due = []
    for event in payload.get("events", []):
        publish_at = parse_publish_time(event)
        if publish_at and publish_at <= due_at and not has_actual(event):
            due.append(event)
    return due


def seconds_until_next_event(payload, poll_seconds):
    now = datetime.now(TAIPEI)
    waits = []
    for event in payload.get("events", []):
        publish_at = parse_publish_time(event)
        if publish_at and publish_at > now and not has_actual(event):
            waits.append((publish_at - now).total_seconds())
    if not waits:
        return poll_seconds
    return max(1, min(poll_seconds, int(min(waits))))


def run_command(command):
    return subprocess.run(command, cwd=ROOT_DIR).returncode


def commit_updated_data():
    print("[macro-auto] Rebuilding public package before commit...", flush=True)
    if run_command([sys.executable, str(BUILD_SCRIPT)]):
        print("[macro-auto] Public package rebuild failed; skipping commit.", flush=True)
        return 2

    run_command(["git", "config", "user.name", "ai-stock-lab-bot"])
    run_command(["git", "config", "user.email", "ai-stock-lab-bot@users.noreply.github.com"])
    if run_command(["git", "add", "data"]):
        return 2
    if run_command(["git", "diff", "--cached", "--quiet"]) == 0:
        print("[macro-auto] No macro data changes to commit.", flush=True)
        return 0

    timestamp = datetime.now(TAIPEI).strftime("%Y-%m-%d %H:%M")
    if run_command(["git", "commit", "-m", f"Update macro data at {timestamp}"]):
        return 2
    if run_command(["git", "pull", "--rebase", "origin", "main"]):
        return 2
    if run_command(["git", "push"]):
        return 2
    print("[macro-auto] Macro data committed and pushed.", flush=True)
    return 0


def run_update(args):
    print("[macro-auto] Running macro data update...", flush=True)
    result = subprocess.run([sys.executable, str(UPDATE_SCRIPT)], cwd=ROOT_DIR)
    if result.returncode == 0:
        print("[macro-auto] Macro data update finished.", flush=True)
        if args.commit_after_update:
            return commit_updated_data()
    else:
        print(f"[macro-auto] Macro data update failed with code {result.returncode}.", flush=True)
    return result.returncode


def run_once(args):
    payload = load_macro_payload()
    due = due_unpublished_events(payload, args.grace_seconds)
    if not due:
        print("[macro-auto] No due unpublished macro events.", flush=True)
        return 0
    print(f"[macro-auto] Found {len(due)} due unpublished macro events.", flush=True)
    return run_update(args)


def watch(args):
    print("[macro-auto] Watching macro events. Press Ctrl+C to stop.", flush=True)
    deadline = time.monotonic() + args.max_seconds if args.max_seconds > 0 else None
    while True:
        if deadline and time.monotonic() >= deadline:
            print("[macro-auto] Watch window ended.", flush=True)
            return 0

        payload = load_macro_payload()
        due = due_unpublished_events(payload, args.grace_seconds)
        if due:
            print(f"[macro-auto] Found {len(due)} due unpublished macro events.", flush=True)
            run_update(args)
            time.sleep(args.retry_seconds)
            continue

        sleep_seconds = seconds_until_next_event(payload, args.poll_seconds)
        if deadline:
            sleep_seconds = min(sleep_seconds, max(0, int(deadline - time.monotonic())))
            if sleep_seconds <= 0:
                print("[macro-auto] Watch window ended.", flush=True)
                return 0
        time.sleep(sleep_seconds)


def parse_args():
    parser = argparse.ArgumentParser(description="Automatically refresh macro data when an event reaches its publish time.")
    parser.add_argument("--once", action="store_true", help="Run one due-event check and exit.")
    parser.add_argument("--poll-seconds", type=int, default=60, help="Maximum seconds to sleep before checking the next event.")
    parser.add_argument("--retry-seconds", type=int, default=300, help="Seconds between retries when due events still have no actual value.")
    parser.add_argument("--grace-seconds", type=int, default=0, help="Seconds to wait after publish time before running the fetch.")
    parser.add_argument("--max-seconds", type=int, default=0, help="Maximum watch duration. Use 0 to watch forever.")
    parser.add_argument("--commit-after-update", action="store_true", help="Commit and push data immediately after a successful macro update.")
    return parser.parse_args()


def main():
    args = parse_args()
    if args.once:
        raise SystemExit(run_once(args))
    try:
        watch(args)
    except KeyboardInterrupt:
        print("\n[macro-auto] Stopped.", flush=True)


if __name__ == "__main__":
    main()
