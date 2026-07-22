# Deepflow — Session Handoff

_Last updated: 2026-07-21_

Three areas of work this session. Tracks 1 and 3 are merged to `main` and live; Track 2 lives on
its own branch and is intentionally **not** for `main`.

> Repo layout: the live site deploys from the **`docs/`** folder (GitHub Pages → `main` → `/docs`).
> This file and `README.md` live at the **repo root**, which is *not* served — so they are tracked in
> git for developers but never appear on deepflowfocus.com. Anything meant to be public goes in `docs/`.

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

### Status
Merged to `main` and **deployed** (pushed to `origin/main`; live on GitHub Pages). `sitemap.xml`
was submitted in Google Search Console and returned **Success** (4 URLs). The favicon + site-name
change surfaces in the SERP only on Google's next recrawl — see the timeline below.

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
1. ✅ **Done** — `sitemap.xml` submitted in **Google Search Console**; returned **Success** (4 URLs).
2. **Remaining:** URL Inspection → **Request Indexing** on `https://deepflowfocus.com/` — this is
   what pulls in the new favicon + site name fastest.
3. Optional: validate the structured data live with the **Rich Results Test** / **Schema Markup
   Validator**. (No Search Console verification file/meta tag is in the repo yet — ask if you want one.)

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

## Track 3 — Serve site from `docs/` (merged to `main`)

### Why
`README.md` and `handoff.md` are developer-onboarding docs that shouldn't be on the public site,
but GitHub Pages serves *every* tracked file at the domain root. Jekyll's exclude list can't be used
safely here (the homepage's `{{ }}` template syntax would be mangled by Liquid), so the fix is to
deploy from a subfolder — root-level dev docs then stay tracked but unserved.

### What changed
- Moved all published files into **`docs/`** (via `git mv`, history preserved): the HTML pages,
  `support.js`, `deepflow-asset.js`, `assets/`, `uploads/`, the `.dc.html` sources, `CNAME`,
  `.nojekyll`, `robots.txt`, `sitemap.xml`.
- Kept `README.md`, `handoff.md`, `.gitignore` at the **repo root** (tracked, never served);
  `handoff.md` was un-gitignored and is now tracked.
- Switched **GitHub Pages → Settings → Pages → Deploy from a branch → `main` / `/docs`** (must be
  done in the GitHub UI; it also auto-creates `docs/CNAME` to keep the custom domain).

### No URLs changed
`docs/` became the site root, so every public URL resolves the same (`/`, `/privacy`, `/assets/…`,
sitemap entries, canonicals). Verified live: all site URLs `200`; `/handoff.md` and `/README.md`
return `404`.

Commits: **`1c3fa06`** — _Serve site from docs/; keep dev docs at repo root_, plus merge
**`94b538d`** integrating GitHub's auto-created `docs/CNAME`.

---

## Branch state (after cleanup)
- **`main`** — live; deploys from `docs/`; up to date with `origin/main`.
- **`demo`** — App Store screenshots (Track 2); local-only, intentionally not merged.
- **Deleted** (all local-only, never pushed): `feat/google-search-appearance`, `docs/handoff`,
  `chore/gitignore-handoff`, `chore/serve-from-docs` (all fast-forward merged into `main`), and
  `feat/mobile-responsive` (force-deleted — its mobile work was already squashed into `main` via
  `f25f28e "Optimize site for mobile"`, and everything else on it was an older, superseded state).

---

## Reminders for whoever picks this up
- **The live site deploys from `docs/`.** Everything served at deepflowfocus.com lives in `docs/`
  (including `CNAME`, `.nojekyll`, `robots.txt`, `sitemap.xml`). Root-level files (`README.md`,
  `handoff.md`, `.gitignore`) are tracked but **not** served — put new public files under `docs/`.
- Editing the homepage means editing **both** `docs/index.html` and `docs/Deepflow.dc.html` and
  keeping them byte-identical (`diff` them).
- The homepage depends on `support.js` (a React runtime loaded from unpkg) to hydrate the `<x-dc>`
  template, but all SEO-critical `<head>` tags are static and crawler-visible.
