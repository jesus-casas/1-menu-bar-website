# Deepflow — Session Handoff

_Last updated: 2026-07-20_

Two independent tracks of work were done in this session. Track 1 is merged to `main`;
Track 2 lives on its own branch and is intentionally **not** for `main`.

> Note: this file sits at the repo root, so once `main` is pushed it is publicly reachable at
> `https://deepflowfocus.com/handoff.md` (it is not linked or in the sitemap, so it won't be
> indexed). Move it to a private location or add it to `.gitignore` if you'd rather it not ship.

---

## Track 1 — Google search appearance (merged to `main`)

### Problem
The site ranks well for "deepflow focus," but the Google result looked bland:
1. **Generic favicon** — Google showed its default globe instead of the Deepflow mark.
2. **Bare domain as the site name** — the top line read "deepflowfocus.com" over the URL.

### Root causes
- The only favicon, `assets/favicon.png`, was **32×32** — below Google's recommended
  multiple-of-48 (≥48×48) minimum, so Google declined to use it.
- The site had **no structured data at all**. `og:site_name="Deepflow"` existed only on the
  homepage, but Google's reliable lever for the displayed site name is `WebSite` JSON-LD, which
  was absent.

### Changes made
- **Favicon:** added `assets/favicon-96.png` (96×96, trimmed/reframed from the 1024² master
  `assets/deepflow-icon.png` to match the existing tight crop). Referenced it as the primary
  `rel="icon"` with the 32px as fallback across all pages, and added `apple-touch-icon` to the
  sub-pages that lacked it.
- **Site name:** added `WebSite` JSON-LD (`name: "Deepflow"`, `alternateName: "Deepflow Focus"`)
  to the homepage's static `<head>` so Google shows "Deepflow" instead of the domain.
- **Crawl hygiene:** added `robots.txt` (allow all + sitemap pointer) and `sitemap.xml` (the four
  canonical URLs: `/`, `/privacy`, `/terms`, `/support`).

### Files touched
`index.html`, `Deepflow.dc.html`, `privacy.html`, `terms.html`, `support.html`,
`assets/favicon-96.png` (new), `robots.txt` (new), `sitemap.xml` (new).
Commit: **`21a4eac`** — _Improve Google search appearance: favicon + site name_.

### Constraint respected
`index.html` must stay **byte-identical** to `Deepflow.dc.html` (the design-component source of
record). Both got the same `<head>` edits; verified with `diff index.html Deepflow.dc.html`
(empty). All SEO tags live in the real static `<head>`, so crawlers see them without running
`support.js`.

### Status & how to deploy
Merged to local `main` but **not pushed**. GitHub Pages deploys from `origin/main`, so the change
goes live only after:
```
git push origin main
```
GitHub Pages then rebuilds within ~1 minute.

### When will the Google result actually change?
**Not immediately — and not on the day you deploy.** These are signals Google reads on its next
recrawl of the homepage; it controls the timing. Rough expectation, assuming you push on
**2026-07-20**:

| Step | Typical timing |
|---|---|
| Site live after `git push` | ~1 minute (GitHub Pages build) |
| Google recrawls the homepage (no action) | a few days to a few weeks |
| Google recrawls after Search Console "Request Indexing" | often within hours to ~3 days |
| Favicon appears in results | commonly ~1–2 weeks after recrawl |
| "Deepflow" site name appears | commonly within days to ~2 weeks after recrawl |

**Realistic window:** earliest a few days out (around **2026-07-24**), most likely within
**2–4 weeks** (through roughly **mid-August 2026**). There is **no guaranteed date** — Google may
take longer, and it ultimately decides whether to display a given favicon/site name.

### Post-deploy checklist (to speed Google up)
1. In **Google Search Console**, verify the `deepflowfocus.com` property (no verification file/meta
   tag is in the repo yet — ask if you want one added).
2. Submit `https://deepflowfocus.com/sitemap.xml`.
3. Use **URL Inspection → Request Indexing** on `https://deepflowfocus.com/`.
4. Validate the structured data live with the **Rich Results Test** / **Schema Markup Validator**.

### Known trade-off (not addressed, by request)
The brand favicon is two-tone on a transparent background (near-black top triangle, light-gray
bottom triangle), so one half is faint on white and the other on dark. We kept it as-is to match
the existing brand favicon. A filled rounded-square variant (brand-dark or white background) would
read better in every context — deferred for now.

---

## Track 2 — App Store showcase screenshots (`demo` branch, not merged)

Built three App Store screenshots at **2880×1800** from the exact UI code in `index.html`.

- **Location:** `screenshots/` on the local-only **`demo`** branch (commit `a17f813`). Intentionally
  never merged to `main`.
- **Contents:** `screenshots/scenes/{01-widget,02-timer,03-stats}.html` + `shared.css`,
  `screenshots/capture.sh`, and rendered PNGs in `screenshots/out/`.
- **The three screens:** habit/streak grid, menu-bar timer/stopwatch popover, and the Focus Stats
  panel — each on the brand gradient with a headline caption and float shadow.
- **How to regenerate:** on the `demo` branch, run `bash screenshots/capture.sh` (renders each
  1440×900 scene in headless Chrome at 2× → exact 2880×1800, and asserts dimensions with `sips`).
- **Note:** there is no native macOS app in this repo; the screenshots recreate the app UI in
  HTML/CSS, which is why they can render razor-sharp at any resolution.

---

## Reminders for whoever picks this up
- Editing the homepage means editing **both** `index.html` and `Deepflow.dc.html` and keeping them
  byte-identical (`diff` them).
- The homepage depends on `support.js` (a React runtime loaded from unpkg) to hydrate the `<x-dc>`
  template, but all SEO-critical `<head>` tags are static and crawler-visible.
