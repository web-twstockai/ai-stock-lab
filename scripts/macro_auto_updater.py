import argparse
import json
import subprocess
import sys
import time
from datetime import datetime, timedelta
from pathlib import Path


ROOT_DIR = Path(__file__).resolve().parents[1]
DATA_FILE = ROOT_DIR / "data" / "macro-robot.json"
UPDATE_SCRIPT = ROOT_DIR / "scripts" / "update_macro_robot.py"


def has_actual(event):
    value = str(event.get("actual") or "").strip()
    return bool(value and value not in {"-", "--", "—"} and value.lower() not in {"n/a", "none", "null"})


def parse_publish_time(event):
    for field in ("publishTime", "timestamp"):
        value = str(event.get(field) or "").strip()
        if not value:
            continue
        try:
            return datetime.strptime(value[:16], "%Y/%m/%d %H:%M")
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
    now = datetime.now()
    due_at = now - timedelta(seconds=grace_seconds)
    due = []
    for event in payload.get("events", []):
        publish_at = parse_publish_time(event)
        if publish_at and publish_at <= due_at and not has_actual(event):
            due.append(event)
    return due


def seconds_until_next_event(payload, poll_seconds):
    now = datetime.now()
    waits = []
    for event in payload.get("events", []):
        publish_at = parse_publish_time(event)
        if publish_at and publish_at > now and not has_actual(event):
            waits.append((publish_at - now).total_seconds())
    if not waits:
        return poll_seconds
    return max(1, min(poll_seconds, int(min(waits))))


def run_update():
    print("[macro-auto] Running macro data update...", flush=True)
    result = subprocess.run([sys.executable, str(UPDATE_SCRIPT)], cwd=ROOT_DIR)
    if result.returncode == 0:
        print("[macro-auto] Macro data update finished.", flush=True)
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
    return run_update()


def watch(args):
    print("[macro-auto] Watching macro events. Press Ctrl+C to stop.", flush=True)
    while True:
        payload = load_macro_payload()
        due = due_unpublished_events(payload, args.grace_seconds)
        if due:
            print(f"[macro-auto] Found {len(due)} due unpublished macro events.", flush=True)
            run_update()
            time.sleep(args.retry_seconds)
            continue
        sleep_seconds = seconds_until_next_event(payload, args.poll_seconds)
        time.sleep(sleep_seconds)


def parse_args():
    parser = argparse.ArgumentParser(description="Automatically refresh macro data when an event reaches its publish time.")
    parser.add_argument("--once", action="store_true", help="Run one due-event check and exit.")
    parser.add_argument("--poll-seconds", type=int, default=60, help="Maximum seconds to sleep before checking the next event.")
    parser.add_argument("--retry-seconds", type=int, default=300, help="Seconds between retries when due events still have no actual value.")
    parser.add_argument("--grace-seconds", type=int, default=0, help="Seconds to wait after publish time before running the fetch.")
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
