

## Improve Text Readability Across All Pages

The text on every page (except Home) uses very low opacity values making it difficult to read. This plan increases text opacity/contrast throughout without changing any background brightness or styling.

### What Changes

All text opacity values will be boosted across 7 files. No background layers, gradients, or glow effects will be modified.

### Opacity Mapping (Before -> After)

| Current | New | Used For |
|---------|-----|----------|
| `text-white/20` | `text-white/50` | Footer notes, subtle labels |
| `text-white/30` | `text-white/60` | Dish descriptions, secondary text |
| `text-white/40` | `text-white/70` | Subtitles, filter buttons, labels |
| `text-white/50` | `text-white/75` | Descriptions, info text |
| `text-primary/30` | `text-primary/60` | Dish numbers |
| `text-primary/50` | `text-primary/70` | Category labels |
| `text-primary/60` | `text-primary/80` | Subtitle labels, ornament text |
| `text-primary/80` | `text-primary` | Prices |
| `text-white/90` | `text-white` | Dish names |
| `border-white/[0.04]` | `border-white/[0.08]` | Divider lines between items |
| `border-white/[0.08]` (dotted) | `border-white/[0.15]` | Dotted price leaders |

### Files to Update

1. **src/pages/Menu.tsx** -- Subtitle text, dish names, descriptions, prices, filter buttons, footer note
2. **src/pages/About.tsx** -- Hero subtitle, body text, stat cards, gallery captions
3. **src/pages/Contact.tsx** -- Hero subtitle, form labels, info cards, transport descriptions
4. **src/pages/Catering.tsx** -- Hero subtitle, form labels, descriptions
5. **src/pages/Lunch.tsx** -- Hero subtitle, dish descriptions, day filter buttons
6. **src/pages/Reservation.tsx** -- Hero subtitle, form labels, info text
7. **src/pages/Iftar.tsx** -- Hero subtitle, course descriptions, info cards

### Technical Details

- Only CSS class opacity values change (e.g., `text-white/40` becomes `text-white/70`)
- No structural HTML changes
- No background-related classes touched
- Ornament decorative elements get slightly higher opacity for better visibility
- Form input placeholder and label text also gets boosted
- Hover states on filter buttons adjusted proportionally

