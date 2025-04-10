#!/bin/bash

set -e  # Stop the script immediately if any command fails

echo "🔍 Looking for Vite processes..."

# Get the PIDs of all Vite processes, avoiding the grep and the script itself
PIDS=$(ps -eo pid,cmd | grep "[v]ite" | grep -v "$0" | awk '{print $1}')

if [ -z "$PIDS" ]; then
  echo "⚠️  No Vite processes found."
else
  echo "🛑 Killing Vite processes: $PIDS"
  for PID in $PIDS; do
    kill -9 "$PID"
    echo "✅ Process $PID killed."
  done
fi

sleep 1  # Small delay to ensure processes are fully stopped

# Change to the project directory
cd /app/code || {
  echo "❌ Failed to access /app/code"
  exit 1
}

# Start Vite and redirect logs to Docker's main output
echo "🚀 Starting Vite (yarn dev)..."
yarn dev >> /proc/1/fd/1 2>> /proc/1/fd/2 &
echo "📜 Vite restarted and running in the background (visible in Docker logs)."
