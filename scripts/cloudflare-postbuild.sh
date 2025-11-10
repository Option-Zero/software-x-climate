#!/bin/bash
# Post-build script to prepare Cloudflare Pages deployment
# This copies the worker to the assets directory with the correct name

echo "Copying worker to assets directory..."
cp .open-next/worker.js .open-next/assets/_worker.js
echo "Worker copied successfully!"
