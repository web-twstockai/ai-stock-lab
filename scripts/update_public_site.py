from __future__ import annotations

import argparse
import subprocess
import sys
import time
from datetime import datetime
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PYTHON = sys.executable


def run_step(label: str, command: list[str], keep_going: bool = False) -> bool:
    started = time.time()
    print(f"\n[{datetime.now().isoformat(timespec='seconds')}] START {label}")
    print(" ".join(command))
    result = subprocess.run(command, cwd=ROOT)
    elapsed = time.time() - started
    if result.returncode == 0:
        print(f"[{datetime.now().isoformat(timespec='seconds')}] OK {label} ({elapsed:.1f}s)")
        return True
    print(f"[{datetime.now().isoformat(timespec='seconds')}] FAILED {label} code={result.returncode} ({elapsed:.1f}s)")
    if not keep_going:
        raise SystemExit(result.returncode)
    return False


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Update source data, rebuild site data, and refresh the public frontend package."
    )
    parser.add_argument("--workers", type=int, default=12, help="Parallel workers for daily candidate data.")
    parser.add_argument(
        "--only",
        choices=["all", "daily", "intelligence", "market-tools", "public-dist"],
        default="all",
        help="Run one update group. public-dist only rebuilds the public package.",
    )
    parser.add_argument("--skip-fetch", action="store_true", help="Only rebuild site-data and public-dist from existing data.")
    parser.add_argument("--keep-going", action="store_true", help="Continue optional fetch groups after failures.")
    parser.add_argument("--skip-regular-volume", action="store_true", help="Skip regular board volume update.")
    parser.add_argument("--skip-short-margin", action="store_true", help="Skip short margin ratio update.")
    return parser.parse_args()


def main() -> int:
    args = parse_args()

    if args.only in {"all", "daily"} and not args.skip_fetch:
        run_step("daily candidates", [PYTHON, "scripts/update_data.py", "--workers", str(args.workers)])

    if args.only in {"all", "market-tools"} and not args.skip_fetch and not args.skip_regular_volume:
        run_step("regular board volume", [PYTHON, "scripts/update_regular_board_volume.py"], keep_going=args.keep_going)

    if args.only in {"all", "market-tools"} and not args.skip_fetch and not args.skip_short_margin:
        run_step("short margin ratio", [PYTHON, "scripts/update_short_margin_ratio.py"], keep_going=args.keep_going)

    if args.only in {"all", "intelligence"} and not args.skip_fetch:
        run_step("intelligence robots", [PYTHON, "scripts/update_intelligence.py", "--target", "all"], keep_going=args.keep_going)

    if args.only in {"all", "daily"}:
        run_step("site data", [PYTHON, "scripts/build_site_data.py"])

    if args.only in {"all", "public-dist", "daily", "intelligence", "market-tools"}:
        run_step("public frontend package", [PYTHON, "scripts/build_public_dist.py"])

    print(f"\n[{datetime.now().isoformat(timespec='seconds')}] Public site update finished.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
