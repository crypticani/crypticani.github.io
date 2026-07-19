#!/usr/bin/env python3
"""Render scripts/og/card.html to public/icons/og-card.png via headless chromium."""

# Requires a chromium/chrome binary. Run from the repo root:
#     python3 scripts/generate_og.py

import shutil
import subprocess  # nosec B404 — fixed local browser invocation, no untrusted input
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CARD = ROOT / "scripts" / "og" / "card.html"
OUT = ROOT / "public" / "icons" / "og-card.png"


def find_browser():
    for name in (
        "chromium-browser",
        "chromium",
        "google-chrome",
        "google-chrome-stable",
    ):
        path = shutil.which(name)
        if path:
            return path
    sys.exit("no chromium/chrome binary found on PATH")


def main():
    browser = find_browser()
    subprocess.run(  # nosec B603 — argv list with hardcoded flags and repo-local paths
        [
            browser,
            "--headless",
            "--disable-gpu",
            "--window-size=1200,630",
            "--force-device-scale-factor=1",
            f"--screenshot={OUT}",
            f"file://{CARD}",
        ],
        check=True,
    )
    print(f"wrote {OUT} ({OUT.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
