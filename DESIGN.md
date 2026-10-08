---
name: O Que Eu Postaria?
description: Agência de Comunicação e Marketing, presented as a sticker album you complete.
colors:
  terra: "#ae361b"
  terra-deep: "#922b13"
  terra-dark: "#5c1a0a"
  terra-tint: "#f6d6cb"
  foil: "#f2c230"
  foil-deep: "#c9971a"
  ink: "#17110e"
  ink-soft: "#4a3a33"
  paper: "#f4f1eb"
  paper-line: "#ddd5c8"
  white: "#ffffff"
typography:
  display:
    fontFamily: "'Alfa Slab One', 'Rockwell', Georgia, serif"
    fontSize: "clamp(2.9rem, 7.2vw, 7rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Alfa Slab One', 'Rockwell', Georgia, serif"
    fontSize: "clamp(2.4rem, 6vw, 5.4rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Figtree Variable', 'Figtree', system-ui, sans-serif"
    fontSize: "clamp(1.35rem, 2.3vw, 1.9rem)"
    fontWeight: 800
    lineHeight: 1.2
  body:
    fontFamily: "'Figtree Variable', 'Figtree', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0.03em"
    fontFeature: "'tnum' 1"
rounded:
  check: "0.2rem"
  chip: "0.3rem"
  sticker: "0.6rem"
  card: "1rem"
  pill: "999px"
spacing:
  gutter: "clamp(1rem, 4vw, 3rem)"
  max: "88rem"
  section: "clamp(4rem, 9vw, 8rem)"
  sticker-border: "0.45rem"
components:
  button-foil:
    backgroundColor: "{colors.foil}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.4rem"
    height: "3.25rem"
  button-foil-hover:
    backgroundColor: "#f7cf4d"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.4rem"
    height: "3.25rem"
  button-ink-hover:
    backgroundColor: "#2b211c"
  button-line:
    textColor: "currentColor"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.4rem"
    height: "3.25rem"
  filter-chip:
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0.55rem 1rem"
  filter-chip-active:
    backgroundColor: "{colors.white}"
    textColor: "{colors.terra}"
  sticker:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sticker}"
    padding: "0.45rem 0.45rem 0"
  sticker-plate:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    padding: "0.5rem 0.65rem 0.6rem"
  sticker-number:
    backgroundColor: "{colors.terra}"
    textColor: "{colors.white}"
    rounded: "{rounded.chip}"
    padding: "0.2rem 0.4rem"
  album-slot:
    backgroundColor: "{colors.terra-deep}"
    rounded: "{rounded.sticker}"
  newsletter-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.35rem"
  quote-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "clamp(1.5rem, 3vw, 2.4rem)"
---

# Design System: O Que Eu Postaria?

## Overview

**Creative North Star: "Álbum de Figurinhas"**

The agency is a sticker album you complete. Pages are printed in the logo's terracotta with a faint print grain; work, team and clients are figurinhas with a number, a name and a category, stuck onto the page with a slight tilt. The home is the album's opening spread: cover, collection pages, a printed checklist, the one shiny sticker, and the contact stickers of real people.

Density follows the album. Collection pages are generous grids of uniform stickers on terracotta; checklist pages switch to paper and carry dense, numbered lists with printed check squares. Titles speak like a newsstand headline: heavy slab caps, a nod to the founder's journalism roots. Everything that is "printed on the sticker" speaks in condensed caps.

Motion belongs to the stickers. They drop, spring out of the torn pack and get glued into slots with overshoot; every other surface moves on a calm exponential ease-out. Reduced motion removes the theatre and keeps the content.

**Key Characteristics:**
- Terracotta album pages (#ae361b family) alternating with paper checklist pages and a dark-terracotta page for the team and footer.
- White-bordered, rounded stickers with an ink name plate, a terracotta "OQEP nn" number chip and a foil category.
- One foil "brilhante" sticker per album; foil otherwise only on primary actions, focus, selection and found-state rings.
- Three faces with one job each: Alfa Slab One newsstand headlines, Barlow Condensed plate caps, Figtree for reading.
- Spring motion on stickers only; neutral black-alpha shadows.

## Colors

A single warm hue at three depths, a paper neutral, an ink near-black and one foil yellow that is rationed.

### Primary
- **Album Terracotta** (terra): the logo color. The body ground, the hero cover, the album and testimonial pages, the header strip, sticker number chips, checklist numerals and accent titles on paper. Binding brand color; never shifted.
- **Print-Shadow Terracotta** (terra-deep): the empty album slot well and the sticker image well behind photos. Reads as the page's printed recess.
- **Binding Terracotta** (terra-dark): the team page and footer ground, the scrollbar thumb, and secondary text on the foil sticker.
- **Terracotta Tint** (terra-tint): secondary text on terracotta grounds (descriptors, sub-lines, contact band text) and the scrollbar track.

### Secondary
- **Sticker Foil** (foil): the one shiny sticker, primary buttons, the focus outline, text selection, the found-slot ring and category text on ink plates.
- **Foil Shade** (foil-deep): the darker stop of foil gradients on the pack wrapper.

### Neutral
- **Plate Ink** (ink): sticker name plates, body text on paper, the ink button, checklist check-square strokes.
- **Soft Ink** (ink-soft): secondary body copy on paper and white (service descriptions, testimonial full text, contact copy).
- **Album Paper** (paper): the checklist and contact page ground.
- **Ruled Line** (paper-line): dividers between checklist rows and inside quote cards.
- **Sticker White** (white): sticker borders, quote cards, the newsletter field, text on terracotta and ink.

### Named Rules
**The One Brilhante Rule.** Exactly one sticker per album is foil (the founder's). Foil appears elsewhere only as an action or state signal: primary button, focus, selection, found ring, plate category text. Never as a section ground or decorative panel.

**The Logo Ink Rule.** Terracotta is #ae361b, the logo's color, everywhere it reads as "the brand". Deeper terracottas are its print shadows, not substitutes.

## Typography

**Display Font:** Alfa Slab One (with Rockwell, Georgia, serif), self-hosted via @fontsource. One weight (400), never synthesized.
**Label Font:** Barlow Condensed 600/700 (with Arial Narrow, sans-serif), self-hosted via @fontsource.
**Body Font:** Figtree Variable (with system-ui, sans-serif), self-hosted via @fontsource-variable.

**Character:** The newsstand. Fat slab caps read like a newspaper or magazine headline (the agency was founded by a journalist); condensed bold caps read like the printed plate of a sticker; Figtree keeps long reading friendly and modern. Chosen by the client on 2026-10-08 over a wide rounded poster sans and a soft editorial serif.

### Hierarchy
- **Display** (Alfa Slab One, clamp(2.9rem, 7.2vw, 7rem), line-height 0.92, uppercase): the hero question only.
- **Headline** (Alfa Slab One, clamp(2.4rem, 6vw, 5.4rem), line-height 0.92, uppercase, balanced): section titles. The slab also carries phase titles, empty-slot numbers, the facts row, testimonial highlights and blog post titles (sentence case there). One- or two-word page names ("O álbum", "O time") may run up to clamp(3rem, 10vw, 8rem).
- **Title** (800, clamp(1.35rem, 2.3vw, 1.9rem), line-height 1.2): the hero answer and lead statements, max about 26ch. Founder intro and blog subheads stay in Figtree 800-900.
- **Body** (400, 1.0625rem, line-height 1.55): running copy, 44-50ch on paper and terracotta. Secondary copy steps down to 0.95rem at line-height 1.45.
- **Label** (Barlow Condensed 700, 0.72-1.2rem, letter-spacing 0.03em, uppercase, tabular numerals): sticker numbers, names and categories, checklist group titles, stat terms, person plates, the wordmark in the header.

### Named Rules
**The Three Voices Rule.** Headlines are slab, plates are condensed, everything you read or press is Figtree. Each face has one job; do not add a fourth or swap their roles.

**The Handwritten Exception.** One title on the home, "Feedbacks", is centered and hand-lettered in Permanent Marker (loaded only on the home), as if written on the album page. It is the only centered title and the only marker text; do not spread it.

**The Plate Voice Rule.** Condensed caps label a thing that exists (a sticker, a slot, a stat, a list group). They are not used as decorative lines above section titles.

## Layout

Pages are full-bleed bands; content sits in a centered wrap of min(100% - 2 x gutter, 88rem) with a fluid gutter of clamp(1rem, 4vw, 3rem). Sections breathe with clamp(4rem, 9vw, 8rem) vertical padding; the hero is tighter on top so the next page's edge shows at the fold.

Collection pages use auto-fill sticker grids (minmax(min(100%, 15.5rem), 1fr) for portfolio slots, 17.5rem for contact stickers) with gaps of clamp(1rem, 2.2vw, 1.8rem). Two-column compositions (hero 1.35fr/1fr, founder 4fr/7fr, services head/list) collapse to one column at 56rem; testimonials stack at 48rem. Below 56rem the header links fold into a menu button panel; service descriptions become disclosure rows below 40rem; the newsletter field stacks below 26rem.

Stickers sit at small, rhythmic tilts (between -1.2deg and 1.2deg, set per nth-child) and straighten on hover. Larger hero-only tilts (up to 14deg) belong to the fanned pack.

## Elevation & Depth

Depth is physical: stickers sit on the page, slots are pressed into it, the pack floats above it. Shadows are neutral black alpha in two stacked layers (contact plus ambient); recesses use an inset shadow. A multiply-blended fractal grain (12% on terracotta, 6% on paper) gives every page its printed tooth.

### Shadow Vocabulary
- **Sticker rest** (`box-shadow: 0 0.15rem 0.3rem rgb(0 0 0 / 0.25), 0 0.9rem 1.6rem -0.4rem rgb(0 0 0 / 0.35)`): stickers, quote cards, the newsletter field.
- **Sticker lift** (`box-shadow: 0 0.3rem 0.6rem rgb(0 0 0 / 0.25), 0 1.6rem 2.6rem -0.6rem rgb(0 0 0 / 0.45)`): hovered or focused stickers, flying stickers, the foil sticker.
- **Slot recess** (`box-shadow: inset 0 0.15rem 0.5rem rgb(0 0 0 / 0.35)`): empty album slots.
- **Foil button** (`box-shadow: 0 0.15rem 0.35rem rgb(0 0 0 / 0.25), 0 0.8rem 1.4rem -0.6rem rgb(0 0 0 / 0.5)`): the primary button.
- **Viewer** (`box-shadow: 0 2rem 4rem -1rem rgb(0 0 0 / 0.6)`): the enlarged sticker dialog.

### Named Rules
**The Neutral Shadow Rule.** Shadows are black alpha, never tinted with terracotta or ink. Color depth comes from the terracotta ramp, not from colored shadows.

**The Gloss Rule.** Every sticker carries a static diagonal gloss (white at 22-32% alpha); on hover the highlight sweeps across in 0.8s ease-out. Gloss is the sticker's material, not a page effect.

## Shapes

Sticker corners are gently rounded (0.6rem) with the inner image well 0.25rem tighter so the white border reads even. Cards and the foil sticker round a little more (0.9-1rem). Every control is a pill (999px): buttons, filter chips, the newsletter field. Small printed parts stay nearly square: number chips (0.3rem) and checklist squares (0.2rem with a 2px ink stroke). The logo appears as a circle with a white ring. Empty slots show a dashed 1.5px inner outline (white at 35%) with the slot's printed number in display caps. The pack wrapper has crimped (zigzag) top and bottom edges.

## Components

### Buttons
Tactile, rounded and confident.
- **Shape:** full pill (999px), min-height 3.25rem (2.75-2.9rem in header, form and contact rows), 800 weight at normal width, optional 1.25rem leading icon.
- **Foil (primary):** foil ground, ink text, foil-button shadow. Newsletter submit, header WhatsApp, primary section actions.
- **Ink:** ink ground, white text. Secondary actions on paper.
- **Line:** transparent with a 2px inset ring in currentColor. Tertiary actions on any ground.
- **Hover / Active:** lift 2px on hover, press 1px on active, 0.25s ease-out; foil lightens to #f7cf4d, ink to #2b211c. Disabled drops to 60% opacity with a progress cursor.
- **Focus:** 3px foil outline at 3px offset, globally.

### Chips
- **Filter chips:** pill, white at 10% ground with a 1.5px white-at-50% inset ring, white 700 text. Hover raises the ground to 20%. Pressed (aria-pressed) flips to white ground with terracotta text.

### Cards / Containers
- **Quote cards:** white, 1rem corners, sticker-rest shadow, fluid padding clamp(1.5rem, 3vw, 2.4rem), tilted about 1deg, a ruled paper-line divider above the attribution.
- **Checklist panel (paper pages):** white, 1rem corners, padding clamp(1.4rem, 3vw, 2.4rem), holding a multi-column list of strategy deliverables.

### Inputs / Fields
- **Newsletter field:** a white pill holding a transparent input and an inset foil button, sticker-rest shadow on terracotta; on paper the shadow becomes a 2px ink inset ring. Placeholder #7a6a62.
- **Focus:** the global foil outline with zero offset on the input.
- **Error:** 2px terracotta outline plus a polite live message below the row.

### Navigation
- **Header strip:** sticky terracotta bar, 4.25rem tall, 1px white-at-16% bottom rule. Logo circle with white ring and condensed wordmark left; 700-weight links with a 2px underline that grows from the left on hover (0.3s ease-out); foil WhatsApp button right. Below 56rem the links fold into a panel opened by a menu button (closes on link, outside tap or Escape); below 30rem the WhatsApp button collapses to its icon.

### Sticker (signature)
The unit of the whole system.
- **Body:** white border (0.45rem), 0.6rem corners, sticker-rest shadow, static gloss.
- **Image well:** 16:9, cover-fit, terra-deep behind the image.
- **Plate:** full-bleed ink bar in label type: a terracotta "OQEP nn" chip spanning two rows, the name (0.95rem, ellipsis) and the category in foil (0.72rem, 600).
- **States:** hover or focus lifts 6px, scales 1.02, straightens the tilt, sweeps the gloss and switches to the lift shadow, on the spring easing.
- **Variants:** person stickers add a terracotta band ("OQEP Cn") above the plate; the foil sticker is the single brilhante with a halftone foil ground and a 4:5 portrait well.

### Album slot
A terra-deep recess with the sticker's printed number and name behind a dashed outline. Empty slots invite a tap; a sticker glued in plays a spring settle and a foil ring that fades out.

### Sticker pack
A 5:7 foil wrapper printed with the logo, crimped edges, leaning at -7deg with a drop shadow. Tearing it flings the top strip away and springs five stickers out (rotate from about -10deg, scale 1.3 to 1).

### Motion
- **Spring** (`linear()` spring curve, cubic-bezier(0.34, 1.56, 0.64, 1) fallback): sticker drop-in, pack spawn, gluing, sticker and pack hover. Stickers only.
- **Ease-out** (cubic-bezier(0.16, 1, 0.3, 1)): everything else (buttons, links, gloss sweep, viewer, fades), 0.25-0.9s.
- **Reduced motion:** smooth scroll, keyframe animations, sticker drop-ins and pack flights are skipped; stickers appear in place and gluing is instant.

## Do's and Don'ts

### Do:
- **Do** present work, people and clients as numbered stickers ("OQEP nn") with an ink plate in condensed caps.
- **Do** keep terracotta (#ae361b) as the page ground for collection pages and switch to paper (#f4f1eb) for dense lists and contact.
- **Do** use the slab caps for page titles and the condensed caps for anything printed on a sticker or slot.
- **Do** reserve the spring easing for stickers and use the exponential ease-out for every other transition.
- **Do** use black-alpha shadows from the sticker-rest / sticker-lift vocabulary.
- **Do** keep every control a pill and every focus state a 3px foil outline.

### Don't:
- **Don't** add a second foil sticker or use foil as a section background.
- **Don't** put condensed-caps kicker lines above section titles; labels name objects, not sections.
- **Don't** tint shadows with terracotta or ink.
- **Don't** apply spring or overshoot motion to buttons, links, cards or page sections.
- **Don't** add another typeface beyond the three voices and the one handwritten "Feedbacks" title, fake-bold the slab, or set long body copy in it.
- **Don't** shift the terracotta hue away from the logo color.
