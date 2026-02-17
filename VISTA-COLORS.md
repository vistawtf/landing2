# Vista Official Color Palette

Reference this file when choosing colors. **Use ONLY these values** (no arbitrary grays, browns, or off-brand tints).

## NEUTRALS

| Name | Hex | Usage |
|------|-----|-------|
| **VISTA BLACK** | `#111111` | Primary text, dark sections |
| **VISTA LIGHT** | `#E4E2D8` | Page background, light sections |
| **ULTRA GRAY** | `#191919` | Near-black accents |
| **IDLE GRAY** | `#2D2D2D` | Dark UI elements |
| **MEDIUM GRAY** | `#575757` | Secondary text, muted content |
| **LIGHT GRAY** | `#999999` | Tertiary text, subtle labels |

## PRIMARY

| Name | Hex | Usage |
|------|-----|-------|
| **ULTRA ORANGE** | `#FF5233` | Brand accent, CTAs, stars |
| **MEDIUM ORANGE** | `#FF7043` | Hover states, secondary CTAs |
| **LIGHT ORANGE** | `#FF8A65` | Subtle accents, backgrounds |

## SECONDARY

| Name | Hex | Usage |
|------|-----|-------|
| **ULTRA BLUE** | `#2962FF` | Secondary accents |
| **MEDIUM BLUE** | `#448AFF` | Interactive elements |
| **LIGHT BLUE** | `#90CAF9` | Backgrounds, highlights |
| **ULTRA PURPLE** | `#BA68C8` | Accent variation |
| **MEDIUM PURPLE** | `#EA80FC` | Highlight variation |
| **LIGHT PURPLE** | `#CE93D8` | Subtle backgrounds |
| **MEDIUM LIME** | `#B2FF59` | Accent variation |
| **LIGHT LIME** | `#C5E1A5` | Subtle backgrounds |

---

## Tailwind Config Reference

When adding to `tailwind.config.ts`:

```typescript
colors: {
  vista: {
    black: '#111111',
    light: '#E4E2D8',
    gray: {
      ultra: '#191919',
      idle: '#2D2D2D',
      medium: '#575757',
      light: '#999999',
    },
    orange: {
      ultra: '#FF5233',
      medium: '#FF7043',
      light: '#FF8A65',
    },
    blue: {
      ultra: '#2962FF',
      medium: '#448AFF',
      light: '#90CAF9',
    },
    purple: {
      ultra: '#BA68C8',
      medium: '#EA80FC',
      light: '#CE93D8',
    },
    lime: {
      medium: '#B2FF59',
      light: '#C5E1A5',
    },
  }
}
```

---

## Common Replacements

| Off-brand | On-brand replacement |
|-----------|---------------------|
| `#B06B58` | `#575757` (Medium Gray) or `#999999` (Light Gray) |
| `#F2F1EC`, `#ECEAE1` | `#E4E2D8` (Vista Light) or `transparent` |
| `#3F3F3F` | `#111111` (Vista Black) or `#575757` (Medium Gray) |
| Any arbitrary gray | Pick closest from neutrals list |
| White (`#FFFFFF`) | Use `#E4E2D8` for backgrounds, keep white only for text on dark |

---

**Golden rule:** If it's not on this list, it shouldn't be in the codebase.
