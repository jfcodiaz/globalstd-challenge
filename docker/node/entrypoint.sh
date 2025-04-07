#!/bin/bash

cd /app/code

if [ ! -d "node_modules" ] || [ -z "$(ls -A node_modules)" ]; then
    echo "node_modules not found or is empty. Installing dependencies..."
    yarn install
else
    echo "node_modules already exists and is not empty. Skipping dependency installation."
fi

yarn run dev & tail -f /dev/null
