# BIA Finance Club — Design System

A design system for **BIA Finance Club**, a young-professionals investing club. The brand language is **old-money / Ivy League editorial**: deep navy, gold accents, serif-led typography, generous whitespace, abstract financial chart imagery, and a confident-but-academic voice.

> **No source materials were provided.** This system was authored from scratch based on the user's brief (Ivy League editorial, deep navy + gold, serif-led, abstract data-viz imagery, minimal iconography, academic deck style). All visual assets are original. If the club has existing branding, logos, or member-portal code, please attach them and we'll re-derive everything against the source of truth.

---

## Index

| Path | Purpose |
|---|---|
| `README.md` | This file — context, voice, visual foundations, iconography, manifest |
| `SKILL.md` | Front-matter for Claude Code / Agent Skills consumption |
| `colors_and_type.css` | Color + type CSS variables and semantic element styles |
| `fonts/` | Web fonts (none bundled — see Typography below; Google Fonts CDN used) |
| `assets/` | Logos, brand marks, monogram, illustrative chart placeholders |
| `preview/` | Design-system cards rendered for the Design System tab |
| `ui_kits/marketing/` | Marketing website UI kit (homepage, about, events, membership, contact, research) |
| `ui_kits/newsletter/` | Market commentary / newsletter UI kit |
| `ui_kits/pitch/` | Pitch competition & portfolio showcase UI kit |
| `slides/` | Academic-style lecture slide template |

---

## Brand Overview

**BIA Finance Club** is a members-only investment society for young professionals. Think Harvard Investment Association meets a modern editorial publication. Members come for rigorous market discussion, guest speakers, peer-led research, and an annual pitch competition.

The brand should feel **earned, not flashy**. Restraint is the loudest signal.

**Inspiration touchstones:** *The Economist*'s typographic discipline, the visual restraint of Ivy League institutional identities (HBS, Yale SOM), the editorial cadence of *Bloomberg Businessweek*, and the quiet authority of legacy private banks (Brown Brothers Harriman, Pictet).

---

## Content Fundamentals

### Voice

Confident, literate, slightly understated. Never hype. Never emoji. Never exclamation marks except in genuine commemoration. The reader is treated as an intelligent peer.

- **Person:** Mostly third-person institutional ("The Club", "Members", "BIA"). First-person plural ("We") only in editorial / commentary contexts.
- **Tense:** Present and active. "The Club convenes Thursdays" — not "will be convening".
- **Sentence shape:** Short declaratives, then one longer rhetorical sentence. Cadence matters.

### Casing

- **Title Case** for major navigation, page titles, section headings, and proper nouns: *Markets in Review*, *The Spring Pitch Competition*, *Membership*.
- **Sentence case** for body, captions, and metadata.
- **ALL CAPS** with wide letter-spacing (`0.16em`) for eyebrow labels, section kickers, and metadata tags only — never for body or buttons.
- "The Club" is capitalized when referring to BIA specifically.

### Sample copy

> **Hero (homepage)**
> *A society for the serious student of markets.*
> Founded by analysts, traders, and investors in their first decade of practice. We meet Thursdays, publish weekly, and compete each spring.
>
> **Eyebrow / kicker**
> ESTABLISHED 2019 · NEW YORK
>
> **Event blurb**
> **Macro Outlook: Q3.** James Holloway (Citadel) joins us to discuss the rate path, dollar strength, and the odds of a soft landing. Members and one guest. Thursday, 6:30 PM, Library.
>
> **Membership CTA**
> *Apply for Membership* — Applications open twice yearly. We read every one.
>
> **Newsletter intro**
> Three things worth your attention this week, written by members for members.

### Tone rules

- **Never use:** "Unlock", "Supercharge", "Elevate", "Game-changer", "🚀", emoji of any kind, "Welcome to BIA!", "Hey there", "Crushing it"
- **Use sparingly:** Numerals (write out one through nine in body copy; numerals for data, dates, prices, ages)
- **Always:** Em dashes — not hyphens — for parenthetical asides. Oxford commas. Curly quotes ("" '').
- **Numbers in headlines:** Use numerals when they are the point ("3 Things This Week"); otherwise spell out.

### Examples — yes vs. no

| ✗ Avoid | ✓ Prefer |
|---|---|
| "Welcome to BIA Finance Club! 🎉" | "BIA Finance Club. A society for the serious student of markets." |
| "Join now and unlock exclusive perks!" | "Apply for Membership." |
| "Our awesome events" | "Calendar" |
| "Check out our latest insights" | "This Week's Commentary" |

---

## Visual Foundations

### Color

A two-axis system: a deep navy spine (`--ink`) with gold accents (`--gold`), grounded on warm parchment (`--paper`), with a small functional palette for charts.

- **Primary:** `--ink` (#0E1E3A) — body, headlines, primary surfaces
- **Accent:** `--gold` (#A8884A) — links, key indicators, the monogram
- **Surfaces:** `--paper` (#F5F0E6) warm cream, `--bone` (#EDE6D6) deeper cream, `--white` (#FFFFFF)
- **Neutrals:** A 9-step warm gray scale tilted toward navy, never pure black
- **Data palette:** Navy, gold, oxblood (`#7A2A2A`), forest (`#2F5240`), slate, used for charts only — never as decorative color blocks

**Usage rules:**
- Body text is `--ink` on `--paper` or `--white`. Never gray-on-gray.
- Gold is precious. Use it for one accent per view: a rule, an underline on a hovered link, a monogram, a numeric figure. Never for full button fills more than once on a page.
- No gradients in surfaces or buttons. The only acceptable gradient is a subtle paper-to-bone vignette behind hero typography.
- No drop shadows on color blocks. Elevation is communicated by hairline rules and color, not depth.

### Typography

Serif-led. Two families do all the work, with a mono for tabular data.

- **Display / Headlines:** **Bodoni Moda** (Google Fonts) — a Didone with high contrast, used at large sizes for hero headlines and section openers. *Substitution flag: ideally we'd use Bodoni 72 or a custom didone; Bodoni Moda is the closest CDN match.*
- **Editorial / Body & subheads:** **Source Serif 4** (Google Fonts) — a transitional serif with excellent reading rhythm, used for body copy, blog posts, captions.
- **UI / Eyebrow / Metadata:** **Google Sans** (brand font, bundled in `fonts/`) — used at small sizes only, for eyebrows, tags, buttons, navigation. Tracked wide (`0.06em` for nav, `0.16em` uppercase for kickers).
- **Mono / Data:** **JetBrains Mono** (Google Fonts) — for tabular data, ticker symbols, prices, percentages.

**Rules:**
- Body never below 16px. Long-form reading is 18–20px Source Serif 4.
- Headlines use tight tracking (`-0.02em` to `-0.03em`).
- All-caps eyebrows get wide tracking (`0.16em`).
- Italic Bodoni Moda is used for emphasis in display headlines (it's the most beautiful cut). Italic Source Serif 4 for inline emphasis in body.

### Spacing

Geometric scale based on a 4px grid:

`4, 8, 12, 16, 24, 32, 48, 64, 96, 128`

Editorial layouts breathe. Section vertical padding is `--space-8` (96px) on desktop, never less than `--space-6` (48px). Containers max out at 1200px with generous side gutters.

### Borders & Hairlines

The system relies on **hairline rules** for structure:
- `1px solid var(--ink)` for emphatic dividers (section opens, table headers)
- `1px solid var(--ink-12)` (12% navy) for soft dividers (cards, list rows)
- Top + bottom rules for editorial section openers — a signature pattern
- Never use box-shadows in place of borders

### Corner Radii

**Almost none.** This is a sharp, set-in-print system.
- `--r-0`: `0` — default (cards, buttons, inputs, images)
- `--r-1`: `2px` — pills, tags
- `--r-2`: `4px` — large cards (rare)
- Never circular avatars unless explicitly editorial portraits

### Cards & Elevation

Cards are defined by **hairlines and color blocks**, not shadows.

- Default card: `--paper` background, `1px solid var(--ink-12)`, no radius, no shadow
- Featured card: `--ink` background, `--paper` text, no radius
- Editorial card: top + bottom 1px ink rule, no side borders
- Hover on a card: background shifts `--paper` → `--bone`, no transform

A single, very subtle shadow exists for floating UI only (menus, modals): `0 1px 0 var(--ink-08), 0 12px 32px -16px var(--ink-24)`.

### Backgrounds

- **Default page:** `--paper` (warm cream). Never pure white for full pages.
- **Featured/dark sections:** `--ink` navy with `--paper` text — used for hero or highlighted blocks
- **Texture:** A subtle paper-grain SVG overlay at 4% opacity is permitted on full-bleed dark sections to evoke uncoated paper stock
- **Imagery:** Abstract financial chart placeholders, monochrome navy-on-cream or cream-on-navy. No photography of skylines, handshakes, or stock-photo people.

### Animation

Restrained. The brand reads, it doesn't move.

- **Easing:** `cubic-bezier(0.2, 0, 0, 1)` — a confident ease-out
- **Durations:** 120ms for tactile feedback (button press), 240ms for state changes (hover, accordion), 480ms for page-level transitions
- **Allowed:** opacity fades, color transitions, underline draw-ins, hairline rule expansions
- **Forbidden:** bounces, spring physics, parallax, scroll-jacking, anything elastic

### Hover / Press States

- **Links (body):** Underline always visible (1px, gold). On hover, underline thickens to 2px.
- **Links (nav):** No underline by default. On hover, a 1px gold rule animates in beneath.
- **Buttons (primary, ink):** On hover, background shifts to `#1a2d52` (a touch lighter). On press, shifts to `#08152d` and translates 1px down.
- **Buttons (secondary, outline):** On hover, background fills `--ink-04`. On press, fills `--ink-08`.
- **Cards:** On hover, `--paper` → `--bone`. No lift.

### Transparency & Blur

- Used **only** for sticky navigation: `--paper` at 88% opacity with a 12px backdrop blur.
- Never used for cards, modals, or content surfaces.

### Layout Rules

- Page max-width: 1200px (`--container`). Editorial reading column: 680px.
- Sticky elements: only the top nav and (optionally) a section anchor rail
- Grid: 12 columns on desktop, 8 on tablet, 4 on mobile, 24px gutter
- Hero sections always include an eyebrow + headline + subhead + CTA stack — never just an image

---

## Iconography

**Minimal. Avoid icons whenever possible.** The brand favors typographic and rule-based affordances over icons. When an icon is essential (close, expand, social), use **Lucide** at stroke `1.5` for harmony with the typographic weight — loaded via CDN.

Specifically:
- **No icon font** is bundled. Lucide is loaded via CDN: `https://unpkg.com/lucide@latest`
- **No emoji.** Ever.
- **No unicode glyphs as icons** (no ★, ▶, →). Exception: `·` and `—` as typographic separators are encouraged.
- **Bullets:** A single `–` (en-dash) or a `1px × 1px` square. Never `•`.
- **Arrows:** When essential, a hairline SVG arrow (`assets/arrow.svg`), not unicode.
- **Logos:** The BIA monogram is the signature mark; full wordmark is reserved for headers and footers.

**Substitution flag:** Lucide is a CDN substitution for the bespoke icon set this brand would ideally have. We've biased toward minimalism so substitutions are nearly invisible. If you have a custom icon set, drop SVGs into `assets/icons/` and we'll re-wire.

---

## Asset Sources

None provided. Everything authored fresh in this project. Logos, monogram, and chart placeholders are original SVGs in `assets/`.
