import sys

import update_intelligence


if __name__ == "__main__":
    sys.argv = [sys.argv[0], "--target", "institutional"]
    update_intelligence.main()
