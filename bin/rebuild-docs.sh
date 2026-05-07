#!/usr/bin/env bash

set -euo pipefail

echo "Checking for changed packages..."

LAST_TAG=$(git describe --abbrev=0 --tags 2>/dev/null || echo "")

if [ -z "${LAST_TAG}" ]; then
  echo "No previous tags found."
  exit
fi

yarn workspaces foreach --since="${LAST_TAG}" --parallel --jobs 4 --exclude api-clients run build:docs

if git diff --quiet HEAD -- docs; then
  echo "No documentation changes generated."
  exit
fi

echo "Documentation changes generated in docs/."
