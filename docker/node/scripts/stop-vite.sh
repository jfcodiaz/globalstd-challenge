#!/bin/bash

set -e

echo "🔍 Looking for Vite processes to stop..."

PIDS=$(ps -eo pid,cmd | grep "[v]ite" | grep -v "$0" | awk '{print $1}')

if [ -z "$PIDS" ]; then
  echo "⚠️  No Vite processes found."
else
  echo "🛑 Stopping Vite processes: $PIDS"
  for PID in $PIDS; do
    kill -9 "$PID"
    echo "✅ Process $PID stopped."
  done
fi
