#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
git -C "$ROOT" config core.hooksPath .githooks
chmod +x "$ROOT/.githooks/"*
echo "OK: git hooksPath -> .githooks (ShandayAI Agent co-author, not Cursor)"
