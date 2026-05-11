# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for **Rejoice**, a French charitable organization offering wellness retreats that fund humanitarian aid for children in developing countries. No build system, no dependencies — pure HTML5, CSS3, and vanilla JavaScript.

## Development

No build step required. Open any `.html` file directly in a browser, or serve locally:

```powershell
# Any static server works, e.g. Python:
python -m http.server 8080
# Or Node:
npx serve .
```

## Architecture

### File Structure

- **Root `.html` files** — French-language pages (primary language)
- **`en/` directory** — English equivalents of each page
- **`assets/styles.css`** — All styles (~684 lines, single file, no preprocessor)
- **`assets/app.js`** — All JavaScript (~306 lines, single file, vanilla)
- **`img/extracted/`** — Pre-optimized images with hash-based filenames (do not rename)
- **`assets/bia/` and `assets/bodhisattva/`** — Legacy project photos (Nepal/India)

### Pages and User Journey

| File | Purpose |
|---|---|
| `index.html` | Homepage: hero, formulas, founder, testimonials |
| `sejours.html` | Retreat offerings: gallery, dates, pricing, FAQ, booking form |
| `projets.html` | Impact: stats, Nepal/India projects, partners |
| `qui-sommes-nous.html` | About: founder biography, mission |
| `don.html` | Donations: amounts, 91.8% transparency infographic |
| `transparence.html` | Full financial transparency |
| `contact.html` | Contact form |
| `confidentialite.html` / `privacy-policy.html` | Privacy policy (FR/EN) |

### Design System (CSS Variables)

Defined at `:root` in `assets/styles.css`:

**Colors:**
- `--yellow: #F5C842` — primary accent
- `--terra: #C85C3A` — secondary accent (CTAs, highlights)
- `--sky: #7DC4E0` — tertiary
- `--sage: #7BA88A` — tertiary
- `--cream: #FDF8F0` — page background
- `--brown: #5C3D2E` — headings
- `--text: #2C1810` — body text
- `--muted: #7A5C4E` — secondary text

**Spacing/Shape:**
- `--r: 20px` — standard border-radius
- `--rsm: 10px` — small border-radius
- `--rpill: 50px` — pill-shaped border-radius

**Typography:** Google Fonts — `Caveat` (headings, playful cursive), `Lora` (body serif), `Inter` (UI sans-serif).

### JavaScript Patterns (`assets/app.js`)

All JS is event-driven vanilla, no modules:
- **Lightbox gallery** — opens on image click, keyboard/touch navigation
- **Intersection Observer** — triggers `.reveal` → `.visible` for scroll animations
- **Accordion FAQ** — `aria-expanded` toggle
- **Video controls** — play/pause for founder interview embeds
- **Navigation** — hides on scroll down, shows on scroll up (mobile)
- **HelloAsso iframe** — embedded donation/booking payment widget

### Responsive Breakpoints

Primary breakpoints in `assets/styles.css`: `880px`, `768px`, `700px`, `640px`, `600px`. No mobile-first convention — desktop-first with `max-width` media queries.

### Multilingual

Each page has a French root version and an English `en/` counterpart. Language alternates are declared via `<link rel="alternate" hreflang="...">` in each page's `<head>`.

### Forms and Payments

- Contact/booking forms use `mailto:` links (no backend)
- Donations use embedded **HelloAsso** iframe (no custom payment logic)
