#!/bin/bash
# Post-build script for Cloudflare Pages Git integration
# Copies all worker dependencies into the assets directory so Cloudflare can bundle them

set -e

echo "📦 Preparing Cloudflare Pages deployment..."

# Check if .open-next exists
if [ ! -d ".open-next" ]; then
  echo "❌ Error: .open-next directory not found. Run 'pnpm run pages:build' first."
  exit 1
fi

cd .open-next

echo "  → Copying worker to assets/_worker.js"
cp worker.js assets/_worker.js

echo "  → Copying worker dependencies to assets/"
# Copy all directories that the worker imports
cp -r cloudflare assets/ 2>/dev/null || true
cp -r server-functions assets/ 2>/dev/null || true
cp -r middleware assets/ 2>/dev/null || true
cp -r .build assets/ 2>/dev/null || true

# Also copy any other files in the root that might be needed
for file in *.js *.json *.mjs; do
  if [ -f "$file" ] && [ "$file" != "worker.js" ]; then
    echo "  → Copying $file to assets/"
    cp "$file" "assets/" 2>/dev/null || true
  fi
done

cd ..

echo "✅ Cloudflare Pages deployment ready!"
echo ""
echo "Build output directory: .open-next/assets"
echo "Worker file: .open-next/assets/_worker.js"
echo ""
