import sys

import update_intelligence


if __name__ == "__main__":
    sys.argv = [sys.argv[0], "--target", "macro"]
    update_intelligence.main()
