from pathlib import Path
import shutil


def backup_file(path):
    target = Path(path)
    if not target.exists() or not target.is_file():
        return None
    backup = target.with_name(f"{target.name}.bak")
    shutil.copy2(target, backup)
    return backup
