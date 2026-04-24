---
name: bia-finance-club-design
description: Use this skill to generate well-branded interfaces and assets for BIA Finance Club, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping in the Ivy League editorial style — deep navy and gold, serif-led typography.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Skill manifest

- `README.md` — voice, content fundamentals, visual foundations, iconography
- `colors_and_type.css` — drop-in token + semantic styles. Always import this first.
- `assets/` — wordmark, monogram, app mark, abstract chart imagery, hero background, portrait placeholder, arrow
- `preview/` — design-system reference cards (colors, type, spacing, components)
- `ui_kits/marketing/` — full marketing site (Nav, Hero, Events, Research, Leadership, Membership, Contact, Footer)
- `ui_kits/newsletter/` — weekly commentary publication (NewsHeader, Article, Sidebar)
- `ui_kits/pitch/` — Spring Pitch Competition page (PitchHero, Standings, FeaturedTeam, Judges)
- `slides/` — academic-style lecture deck template

## House rules (do not violate)

- Never use emoji. Never use bluish-purple gradients. Never use "Welcome!" or hype copy.
- Body copy is serif (Source Serif 4). Headlines are Bodoni Moda. UI labels are Inter, tracked wide. Numbers are JetBrains Mono.
- Default page background is `--paper` (warm cream), never pure white.
- Sharp corners by default (`--r-0`). Cards are defined by hairlines, not shadows.
- Gold is precious — use once per view as an accent.
- "The Club" is capitalized. Roman numerals (MMXIX, MMXXVI) in masthead/colophon contexts.
- See README.md "Content Fundamentals" for the full voice + tone reference, with examples.
