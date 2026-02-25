

## Fix Readability, Alignment, and Menu Background

Three issues to address:

### 1. About Page -- Text Too Transparent

The About page uses `text-muted-foreground` and `text-foreground` classes throughout the body content (lines 105-128). On the dark layered background, these semantic colors may not have enough contrast. The fix is to use explicit white text with higher opacity values:

- Headings: `text-foreground` to `text-white`
- Body text: `text-muted-foreground` to `text-white/80`
- Stat card labels: `text-muted-foreground` to `text-white/70`
- Stat card values: `text-foreground` to `text-white`
- Section titles across all sections (Signature Dishes, What Sets Us Apart, Gallery, CTA): same pattern
- Dish card text: `text-foreground` to `text-white`, descriptions `text-muted-foreground` to `text-white/70`

### 2. Index Page -- "About Spice Villa" Section Alignment

The homepage "Popular Dishes" section (line 206 onward) uses `bg-card` and `text-card-foreground` on dish cards which creates a visible background mismatch against the page's dark background. The section itself has no background, so the cards stand out with a different color. The fix:

- Remove `bg-card text-card-foreground` from dish cards and use the same glass-morphism style as other pages: `bg-white/[0.04] backdrop-blur-sm`
- Update card text to use explicit `text-white` and `text-white/70` instead of semantic card colors
- This ensures no visible "line" or background mismatch between sections

### 3. Menu Page -- Different Background Image

The Menu page and Homepage both use `menu-collage-bg.jpg`. The Menu page needs a distinct background. Available options from assets:

- Use `interior.jpeg` (currently used by About page) -- not ideal since it's shared
- Use `dining-area.jpeg` -- a good fit for a fine-dining menu page
- Use `kitchen.jpeg` -- shows the restaurant kitchen, unique atmosphere

**Choice**: Use `dining-area.jpeg` for the Menu page background to differentiate it from the homepage.

### Files to Edit

1. **src/pages/About.tsx** -- Replace all `text-foreground` with `text-white`, all `text-muted-foreground` with `text-white/80` or `text-white/70` for better readability
2. **src/pages/Index.tsx** -- Fix the Popular Dishes card styling to use glass-morphism instead of `bg-card` to eliminate the visible background seam
3. **src/pages/Menu.tsx** -- Change background from `menu-collage-bg.jpg` to `dining-area.jpeg`

### Technical Details

**About.tsx changes:**
- Lines 105-128: Story section -- headings and body paragraphs get `text-white` and `text-white/80`
- Lines 119-131: Stat cards -- values `text-white`, labels `text-white/70`
- Lines 155-161: Signature dishes heading -- `text-white`
- Lines 171-183: Dish cards -- name `text-white`, desc `text-white/70`
- Lines 192-223: "What Sets Us Apart" -- titles `text-white`, desc `text-white/70`
- Lines 229-238: Gallery heading -- `text-white`
- Lines 263-266: CTA heading and text -- `text-white`, `text-white/70`

**Index.tsx changes:**
- Lines 240: Change `bg-card text-card-foreground` to `bg-white/[0.04] backdrop-blur-sm`
- Line 258: Change `text-card-foreground/60` to `text-white/60`

**Menu.tsx changes:**
- Line 6: Import `diningAreaBg` from `@/assets/dining-area.jpeg` instead of `menuCollageBg`
- Line 33: Use the new background image
