# REDI Design System

**Ratner Early Detection Initiative (REDI)** is a think tank and foundation working to make
early cancer detection a standard of care. In its own words:

> Ratner Early Detection Initiative (REDI) is reshaping outdated approaches to early detection
> to revolutionize cancer prevention and improve outcomes.
>
> By expanding access to screening, advancing technologies, and challenging how systems operate,
> REDI works to ensure cancer is caught early — when it's most curable.
>
> We are committed to making early detection a standard of cancer care.

It was founded by Bruce Ratner after losing family and friends to cancer, and the site is built
around his voice: the homepage opens on a full-width quote of his, and a whole black section is
given over to his story.

## Products in scope

One product: the **REDI marketing website**. The source file defines it at three breakpoints —
desktop (1920), tablet (1024) and mobile (375) — across four page types:

| Page | Purpose |
| --- | --- |
| Home | Hero quote → welcome → mission → what we do → Bruce's story → get involved |
| About ("Meet Redi") | Advisory board and Redi team, with portraits |
| Press | Video grid and article grid |
| Mobile menu | Full-screen overlay navigation |

There is no app, dashboard, docs site, or slide template in the source, so none are built here.

## Sources

- **Figma:** `Redi_Website_Final.fig`, attached to this project as a mounted file. Two pages:
  `Website-Design` (16 frames — the four page types × three breakpoints, plus prototype assets)
  and `Style-Guide` (14 frames — typography per breakpoint, colour, components, active states,
  headers and footers per breakpoint). No public Figma URL was supplied.
- **Fonts:** supplied by the user as font binaries (see *Typefaces* below).
- **Logo:** supplied by the user as `Redo_Logo_Red.svg`, matching the "Logo" entry on the
  style-guide Components board.
- No codebase, repository or slide deck was provided.

---

## Content fundamentals

**Voice.** Plain, declarative, urgent. Sentences are short and do not hedge. The site speaks as
"we" ("We are committed to making early detection a standard of cancer care") and addresses the
reader indirectly — there is almost no second person, and no imperative marketing copy beyond
the CTAs themselves. Bruce Ratner speaks in the first person, always inside quotation marks and
always attributed.

**Register.** Institutional but not clinical. Words like *stigma*, *disparities*, *equity*,
*status quo* sit next to *screening*, *insurance reform*, *pilot initiatives*. The copy names
the problem before naming the solution: "reshaping outdated approaches", "challenge the status
quo", "regulatory hurdles won't help us win".

**Casing.** Deliberately inconsistent, and the inconsistency is the system:

| Element | Case | Example |
| --- | --- | --- |
| Headlines, pull quotes | Sentence | "Welcome to Ratner Early Detection Initiative." |
| Section titles (H2/H3) | Title | "Our Mission", "Bruce's Story", "What We Do" |
| Nav items, mobile menu | lowercase | `info`, `our mission`, `press`, `get involved`, `contact` |
| Button labels | UPPERCASE | `OUR MISSION`, `PRESS`, `READ THE BOOK` |
| Eyebrows / annotations | UPPERCASE | `SCROLLABLE LIST`, `BRAND ICONS` |
| Footer links | Capitalised | "Contact Us", "What We do" |
| "What We Do" list | capitalize | `01 research`, `02 Policy, Advocacy & Insurance Reform` |

**Punctuation.** Curly quotes, em dashes with spaces around them ("caught early — when it's most
curable"), ampersands in list labels. Quotes in the hero use a closing curly quote at both ends —
that is how it is set in the file and it has been reproduced verbatim.

**Length.** Hero quotes run 15–30 words at 95px. Body paragraphs are two or three sentences.
Link labels are two words: "Read More", "Read Article", "View More", "Get Screened".

**No emoji.** None appear anywhere in the source, and none should be added.

---

## Visual foundations

**The idea.** Editorial print, blown up. A slab serif at newspaper-headline scale, a Swiss
grotesk for everything institutional, one red, and a lot of white. Nothing is decorated.

**Colour.** Three reds, two cool greys, black and white — and that is the whole palette.

- `#FF0013` **Redi Red** — the red actually painted throughout the site (111 uses) and the
  value stored in the Figma Variable *Redi Red*.
- `#FF0037` — the red printed on the Color board with full specs (*R255 G0 B55, C0 M90 Y88 K0,
  Pantone Red 032*). It fills the large swatch fields but never appears in a page frame.
  **The two disagree; `#FF0013` is what ships.**
- `#FF0000` — pure red, used only for the hero underline bars.
- `#E9ECEC` neutral 01 (Pantone Cool Gray 1) — footer field, secondary CTA fill.
- `#CED7D7` neutral 02 (Pantone 441) — all type on black.
- `#E3EBEB` mist — the "What We Do" section field.
- `#000000` (Pantone Black), `#FFFFFF`.

Two further conflicts worth knowing: the Figma Variables name `#E9ECEC` "neutral 01" and
`#CED7D7` "neutral 02", while the printed Color board labels them the other way round. This
system follows the Variables, since that is what materialised code resolves against.

Type on black is never pure white — always `#CED7D7`. Type over the red-flooded photo is
`#E9ECEC`.

**Typefaces.**

- **TT Rationalist** — the editorial voice. Bold for headlines, pull quotes, links and nav;
  Normal for subheadings and the numbered "What We Do" list. A slab serif with almost no
  contrast; at 95px with −2% tracking it is the loudest thing on any page.
- **Neue Haas Grotesk Display** — the institutional voice. 75 Bold for section titles, press
  headlines and button labels; 55 Roman for all body copy and eyebrows.

The pairing is strict: a serif never sets a section title, a grotesk never sets a pull quote.

**Scale.** Two sizes dominate: 95px headlines and 24px body, with almost nothing between them
on desktop. That gap is the design. Full table in `guidelines/type-scale.html`.

**Layout.** A fixed 1920 canvas with a 40px gutter and a 1840px content width. Sections split
into two columns: a left rail at the gutter carrying the title, and a right column pinned at
x=970 and 910px wide carrying everything else. The left rail is often mostly empty — that
emptiness is intentional and should not be filled.

**Rules.** The system separates sections with a **15px black bar**, not a hairline. Same bar at
15px in red wipes under hero phrases; at 7px in red it marks the active mobile-menu item; at 3px
it underlines links. The style guide states the underline rule as "thickness = 1/5 of the
height". There is no thin divider anywhere.

**Corners.** 0px for photography and type blocks, **2px** for buttons, rules and press
thumbnails, 5px for the full-bleed image panel in the welcome section, and a full circle for the
play button. Nothing is softly rounded.

**Cards.** There are no cards in the conventional sense — no borders, no shadows, no containers.
A press "card" is an image, a headline and a link stacked with air between them on white.

**Shadows.** Effectively none. Two shadow values exist in the file
(`rgba(255,238,238,0.61)` and `rgba(0,0,0,0.41)`) and both sit on prototype overlays, not on UI.
Do not introduce elevation.

**Backgrounds.** Flat fills only — white, `#E3EBEB`, `#E9ECEC`, black. No gradients as
decoration. The one gradient in the file is a solid Redi Red flooded over a photograph in the
welcome panel, which reads as a duotone, not a gradient.

**Imagery.** Documentary photography, cool and desaturated: portraits, lecture stages, hospital
interiors. Two treatments only — placed straight, or flooded with solid Redi Red. Images are
full-bleed or column-width, never inset in a frame. No grain, no illustration, no stock gloss.

**Transparency and blur.** None. The 50% opacity on style-guide annotation labels is the only
use of alpha, and it is annotation, not UI.

**Hover.** Buttons **invert** — the fill goes black and the label goes `#CED7D7`. Links keep
their type colour and turn only the underline Redi Red. Big text CTAs wipe a 15px rule in from
the left. The play button inverts like a button. The style guide states the rule plainly:
*"CTAs – *Buttons invert on hover."*

**Press / active.** The active state is the same as hover in the source; the current nav page
holds a permanent red underline.

**Motion.** Restrained and linear in feel. The only two named animations in the file are the
loading mark (the redi wordmark with its rule wiping in) and the hero underline (a bar wiping
across a phrase). Both are horizontal scale-x wipes from the left. Use
`var(--dur-slow)` / `var(--ease-standard)`; no bounce, no spring, no fade-up-on-scroll.

**Fixed elements.** None. The header scrolls away; nothing is sticky.

---

## Iconography

**There is almost no iconography, and that is deliberate.** The file defines exactly three
non-typographic marks:

1. **The play triangle** — a rounded-corner regular polygon rotated 90° inside a 58.867px disc
   (74px over a video thumbnail). Shipped as `PlayButton`.
2. **The hamburger** — two 38×7px black bars, 13px apart. Shipped inside `Header`.
3. **The close X** — two 45.785×7px black bars crossed at ±45°. Shipped inside `MobileMenu`.

No icon font, no sprite sheet, no SVG icon library, no CDN set, no emoji, no unicode dingbats.
Everything else that might be an icon elsewhere is set in type: the numbered list uses
superscript numerals, "Read More" is a word with a rule under it.

**Brand marks** are the exception and they are real assets:

- `assets/logo.svg` — the redi wordmark with `fill="currentColor"`
- `assets/logo-black.svg`, `assets/logo-red.svg`, `assets/logo-white.svg`
- The style guide also files the stacked institution name under "brand icons"; it is outlined
  type in the source and is reproduced live as `BrandLockup`.

**If you need an icon this system does not have, set it in type or leave it out.** Do not
introduce Lucide, Heroicons or any other set — none is present in the source and adding one
would be inventing brand language.

---

## Typefaces shipped

| Family declared | Files | Notes |
| --- | --- | --- |
| `TT Rationalist Trl` / `TT Rationalist Trial` | 20 TTFs, Thin→Black + italics | **Trial licence** — replace before production |
| `Neue Haas Grotesk Display Std` / `NeueHaasGroteskDisp W02` | 55 Roman (450), 75 Bold (700) | |
| `NeueHaasGroteskDisp W02 Bd` | 75 Bold | Alias used verbatim by the Figma file |
| `NeueHaasGroteskDisp W02 Lt` | **substituted** → 55 Roman | Light cut not supplied; used by the 140/105px Big Numbers style |
| `Plain` | **substituted** → 55 Roman | Only used on style-guide annotation labels, never in a shipped surface |

Family names are declared exactly as the Figma file writes them, so anything materialised from
the `.fig` resolves without rewriting font stacks.

---

## Components

Six groups, fifteen components. The inventory comes from the style-guide **Components** and
**Active States** boards plus the seven Figma component sets; nothing has been added that the
source does not define.

**`components/brand/`**
- `Logo` — the redi wordmark, black / red / white / currentColor, with or without its rule
- `BrandLockup` — "Ratner Early Detection Initiative" stacked in TT Rationalist Bold
- `LoadingMark` — the loading animation: red mark, rule wiping in

**`components/actions/`**
- `Button` — PRIMARY CTA 1, the full-width filled bar that inverts on hover
- `TextLink` — SECONDARY CTA, underlined link whose rule turns red
- `BigTextCTA` — BIG TEXT CTA ("Get Screened"), 41px red with a 15px rule wiping in
- `PlayButton` — the disc-and-triangle play control

**`components/navigation/`**
- `NavLink` — header nav item with the red current-page rule
- `Header` — desktop / tablet / mobile
- `Footer` — desktop / mobile
- `MobileMenu` — the full-screen 375×688 overlay

**`components/sections/`**
- `SectionRule` — the 15px section divider
- `ProgressTrack` — neutral track, red fill
- `WhatWeDo` — the four-pillar section (Figma sets "04 What We Do" and "04 What we do (Desktop)")

**`components/media/`**
- `MediaCard` — press article and video card
- `Underline` — the hero underline wipe (Figma set "Underline Animation")

**`components/content/`**
- `ScrollableList` — stacked big-text CTAs, one focused in red

**`components/figma-sets/`** — thin aliases so each Figma component set resolves under its own
name. They delegate to the components above; new work should use the primitives directly.
- `OurMissonButtonHoverState` — alias for `Button`, labelled "Our Mission"
- `GetInvolvedButtonHoverState` — alias for `Button`, labelled "Get Involved"
- `GetScreened` — alias for `BigTextCTA`, labelled "Get Screened"
- `UnderlineAnimation` — alias for `Underline`

### Figma component sets → components

| Figma set | Primitive | Alias |
| --- | --- | --- |
| Our Misson Button (Hover State) | `Button` | `OurMissonButtonHoverState` |
| Get Involved Button (Hover State) | `Button` | `GetInvolvedButtonHoverState` |
| Get Screened (`1:1591`) | `BigTextCTA` | `GetScreened` |
| Get Screened (`7:43`) | `BigTextCTA` | `GetScreened` |
| Underline Animation | `Underline` | `UnderlineAnimation` |
| 04 What we do (Desktop) | `WhatWeDo breakpoint="desktop"` | — |
| 04 What We Do | `WhatWeDo breakpoint="mobile"` | — |

## Intentional additions

- `Button` — intentional addition. The Components board's "PRIMARY CTA 1", covering the sets *Our Misson Button (Hover State)* and *Get Involved Button (Hover State)*, which are one control with two labels.
- `BigTextCTA` — intentional addition. The board's "BIG TEXT CTA", covering both *Get Screened* sets (`1:1591`, `7:43`), which are duplicates of one another.
- `TextLink` — intentional addition. The board's "SECONDARY CTA", specified for hover and active on the Active States board.
- `PlayButton` — intentional addition. The board's "PLAY" control.
- `Logo` — intentional addition. The board's "LOGO", matching the supplied `Redo_Logo_Red.svg`.
- `BrandLockup` — intentional addition. The board's "BRAND ICONS" stacked institution name.
- `LoadingMark` — intentional addition. The board's "LOADING ANIMATION".
- `ScrollableList` — intentional addition. The board's "SCROLLABLE LIST".
- `WhatWeDo` — intentional addition. The sets *04 What we do (Desktop)* and *04 What We Do*, one section at two breakpoints.
- `Underline` — intentional addition. The set *Underline Animation*.
- `UnderlineAnimation` — intentional addition. Alias exposing the set *Underline Animation* under its own name.
- `MediaCard` — intentional addition. The repeated press unit on the Redi Press frames (Rectangle 1505 + 30px headline + Group 10968 "Read Article").
- `Header` — intentional addition. The Style-Guide frames *Desktop Header*, *Tablet Header*, *Mobile Header*.
- `Footer` — intentional addition. The Style-Guide frames *Desktop Footer*, *Tablet Footer*, *Mobile Footer*.
- `MobileMenu` — intentional addition. The Website-Design frame *Redi - Mobile Menu*.
- `NavLink` — intentional addition. The nav item with its red current-page rule, repeated in every NAV group but never componentised.
- `SectionRule` — intentional addition. The 15px divider, repeated at the head of every section.
- `ProgressTrack` — intentional addition. The What We Do progress bar, extracted so it can be reused.
- `GetScreened` — intentional addition. Alias exposing the set *Get Screened* under its own name.
- `OurMissonButtonHoverState` — intentional addition. Alias exposing the set *Our Misson Button (Hover State)* under its own name.
- `GetInvolvedButtonHoverState` — intentional addition. Alias exposing the set *Get Involved Button (Hover State)* under its own name.

The file's seven Figma component *sets* only cover the two hover-state buttons, the two
"Get Screened" marks, the underline and the two "What We Do" sections. Everything else REDI
uses is drawn on the style-guide boards or given its own Style-Guide frame rather than being
made into a component set, so the component names above follow **the boards' vocabulary**.
Nothing has been invented: every component listed has a counterpart in the file.

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | Root entry — `@import`s only. Link this one file. |
| `tokens/fonts.css` | `@font-face` rules for every shipped binary |
| `tokens/colors.css` | Palette and semantic aliases |
| `tokens/typography.css` | Families, weights, the full responsive scale, ready-made classes |
| `tokens/layout.css` | Gutters, column split, rules, radii, control sizes, motion, link colours |
| `figma-src/fig-tokens.css` | The six Figma Variables, generated |
| `figma-src/fig-typography.css` | Generated text styles (the file defines none) |
| `assets/logo*.svg` | Wordmark in four tones |
| `assets/fonts/` | 22 font binaries |
| `assets/images/` | Portrait, team photo, eight press thumbnails — all lifted from the file |
| `components/<group>/` | Seventeen components plus four Figma-set aliases, each with `.jsx`, `.d.ts`, `.prompt.md` |
| `guidelines/*.html` | 25 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `ui_kits/website/` | Home, About, Press and mobile recreations + click-through `index.html` |
| `thumbnail.html` | Project tile |
| `SKILL.md` | Agent Skills front matter for use outside this project |

---

## Known gaps

- The **tablet (1024) frames** are not recreated as screens. The tablet type scale is in the
  tokens and components accept `breakpoint="tablet"`.
- The Figma **Text styles** inventory is empty — the file uses no named text styles, so
  `figma-src/fig-typography.css` is generated with zero rules. The scale in
  `tokens/typography.css` was transcribed from the three Typography boards instead.
- The style guide shows a `Logo 4` group (the loading mark) containing a 228-byte bitmap fill.
  It is a rendering artefact of the animation, not artwork, and is not reproduced.
