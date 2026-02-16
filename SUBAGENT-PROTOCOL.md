# Subagent Protocol for Vista Website Changes

## MANDATORY: Dev Server Restart After Changes

**CRITICAL:** After making ANY code changes to this project, you MUST restart the dev server for changes to be visible via ngrok.

### Restart Process

1. After completing your changes and verifying build success
2. Run these commands:

```bash
# Kill existing dev server
pkill -9 -f "next dev"
pkill -9 -f "node.*vista-website"

# Clean lock file if needed
rm -f /root/clawd/vista-website/.next/dev/lock

# Start fresh dev server in background
cd /root/clawd/vista-website
nohup npm run dev > /tmp/vista-dev-restart-$(date +%s).log 2>&1 &

# Wait for server to be ready
sleep 8

# Verify it's working
curl -s -o /dev/null -w 'localhost: %{http_code}\n' http://localhost:3000/landing2
curl -s -o /dev/null -w 'ngrok: %{http_code}\n' https://pericentric-cytoplasmic-pilar.ngrok-free.dev/landing2
```

3. Both curls should return **200**
4. Include restart confirmation in your completion report

### Why This Matters

- User (Isaac) reviews changes via ngrok URL
- Without restart, he sees stale cached version
- This causes confusion and wasted iterations
- **Always restart = always see latest changes**

### Completion Report Template

```
✅ Changes completed
✅ Build passed
✅ Dev server restarted
✅ Verified localhost: 200
✅ Verified ngrok: 200
```

## DO NOT SKIP THIS STEP

This is non-negotiable. If you don't restart the server, the user won't see your changes and will think you didn't do the work correctly.
