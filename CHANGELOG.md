# Vista Website Changelog

## 2026-02-02 - Hero Shapes & Navbar Animation Fix

### Hero Decorative Shapes - EXACT replica of `vista-reference.svg`

**Reference SVG Analysis (canvas 1265x1080):**
| Shape | X Position | Y Position | Behavior |
|-------|------------|------------|----------|
| RING | 30-51% | -5% to 19% | Partially above viewport |
| GRID | 54-106% | 27-89% | Extends beyond right edge |
| PLUS | 0-29% | 68-103% | Extends below viewport |

**Implementation matches reference exactly while ensuring text legibility.**

### Positioning
- **Ring**: 30% from left, top, partially clipped above (matches reference)
- **Grid**: Right side, extends beyond viewport edge (matches reference)
- **Plus**: Bottom-left, extends below viewport (matches reference)

### Responsive Behavior
- Desktop: All three shapes, sized proportionally to reference
- Mobile: Ring + Plus only (Grid hidden), scaled for mobile
- **Zero text overlap** on any viewport

### Navbar Animation
- GPU-accelerated transforms (`scaleX()`, `translateX()`)
- `will-change` hints for compositor optimization
- `requestAnimationFrame` throttled scroll handler
- Smooth 60fps animation

### Verified On
- ✅ Desktop 1440px (light/dark)
- ✅ Desktop 1265x1080 (exact reference aspect ratio)
- ✅ Mobile 390px (light/dark)
- ✅ Tablet 768px
