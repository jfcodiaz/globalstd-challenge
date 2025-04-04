#/bin/bash

cd /app/code

if [ ! -d "node_modules" ]; then
    echo "node_modules not found. Installing dependencies..."
    yarn install
else
    echo "node_modules already exists. Skipping dependency installation."
fi

yarn run dev && tail -f /dev/null