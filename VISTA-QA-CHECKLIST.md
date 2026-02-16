# Vista QA Checklist
*Created: 2026-02-16 (Nightly Build #14)*  
*Born from: Feb 15 "muy mal QA" deployment failure*

## Purpose
Prevent claiming "deployment works" when it doesn't. This checklist is mandatory before reporting Vista changes to Isaac.

## Pre-Deployment (Subagent Protocol)
- [ ] `npm run build` passes (no TypeScript errors)
- [ ] Dev server restarted (see `/root/clawd/vista-website/SUBAGENT-PROTOCOL.md`)
- [ ] Localhost returns 200 status code
- [ ] Ngrok returns 200 status code
- [ ] Hard refresh browser (Cmd+Shift+R or Ctrl+F5)

## Route Verification
- [ ] **Verify EXACT URL user will access** (root `/` for production, not `/landing2` or other dev routes)
- [ ] If changes were made at alternate route (e.g., `/landing2`), move to root BEFORE claiming completion
- [ ] Test the final URL in browser, not intermediate dev paths

## Visual QA (Critical - Screenshots)
- [ ] Take **fresh screenshots** AFTER deployment (not cached/intermediate builds)
- [ ] Desktop screenshot from final URL
- [ ] Mobile screenshot from final URL
- [ ] Compare screenshots to design spec (pixel-level accuracy expected)
- [ ] If user sends screenshot showing problem → **believe them immediately**, don't defend

## Design Fidelity
- [ ] All colors from `/root/clawd/vista-website/VISTA-COLORS.md` official palette
- [ ] Sacred elements preserved (#FF5233, 0° stars ₊˚⊹, 4px spacing)
- [ ] Square philosophy applied (border-radius ≤2px except newsletter inputs/badges/buttons)
- [ ] Typography matches spec (font families, weights, sizes)
- [ ] Spacing/padding matches design (hero ~70vh, section gaps, etc.)

## Browser Cache Management
- [ ] Clear browser cache before final verification
- [ ] Test in incognito/private window if cache suspected
- [ ] Hard refresh after every deployment

## Responsive Check
- [ ] Desktop layout correct
- [ ] Mobile layout correct (breakpoints working)
- [ ] Touch targets adequate for mobile
- [ ] No horizontal scroll on mobile

## Before Reporting to Isaac
- [ ] All checklist items above verified ✅
- [ ] Screenshots are from FINAL deployed URL
- [ ] Can confidently say "sitio funcionando" because you verified user's exact path
- [ ] If ANY doubt → debug first, report after

## What NOT to Do (Lessons from Feb 15)
❌ Don't claim deployment works without verifying the EXACT URL user will use  
❌ Don't send cached screenshots - always regenerate fresh after changes  
❌ Don't assume paths - explicitly verify root vs /landing2 vs any route  
❌ Don't test from developer's perspective - test from user's perspective  
❌ Don't defend when user reports "not working" - believe them and debug  

## Isaac's Quality Standard
> "No quiero que me entregues rápido, quiero que me entregues bien"  
> (Don't deliver fast, deliver well)

Fortune 500 polish expected. Thousands will see this page. Zero tolerance for "close enough."

## Emergency Recovery
If deployment fails QA:
1. Acknowledge failure immediately
2. Debug the exact issue (path? cache? build?)
3. Fix it
4. Re-run FULL checklist from scratch
5. Report with corrected screenshots

**QA is sacred.** Claiming something works when it doesn't destroys trust.
