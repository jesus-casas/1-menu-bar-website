# Deepflow — marketing site

Marketing website for **Deepflow**, a macOS menu-bar focus timer. Deployed to
[deepflowfocus.com](https://deepflowfocus.com) via GitHub Pages.

## Repo layout

- **`docs/`** — the live site. GitHub Pages deploys from `main` → `/docs`, so *everything*
  served at deepflowfocus.com lives here (HTML pages, `support.js`, `assets/`, `CNAME`,
  `.nojekyll`, `robots.txt`, `sitemap.xml`). New public files go in `docs/`.
- **Repo root** — developer docs only, tracked but **not** served: `README.md`, `handoff.md`.
- Editing the homepage means editing **both** `docs/index.html` and `docs/Deepflow.dc.html`
  and keeping them byte-identical (`diff` them). `Deepflow.dc.html` is the source of record.

See `handoff.md` for the full session history and rationale.

## Page update tips

### Get Google to pick up changes faster (favicon, site name, page copy)

On-page edits (title, favicon, `WebSite` JSON-LD, etc.) only change the Google result after
Google recrawls the homepage — on its own schedule. To nudge a faster recrawl:

1. Google Search Console → top **URL Inspection** search bar
2. Paste `https://deepflowfocus.com/` and hit enter
3. Click **Request Indexing** (or "Test Live URL" first, then Request Indexing)

This drops the URL into a priority crawl queue — typically recrawled within hours to ~3 days
(vs. days-to-weeks if you just wait). There's no way to force it and no guaranteed date; Google
decides whether to display a given favicon/site name.

**Expected timing after a recrawl:** site name usually updates within days–2 weeks; favicons
lag longer (~1–2 weeks+) because Google crawls them on a separate, slower pipeline.

### Sitemap

`docs/sitemap.xml` lists the four canonical URLs (`/`, `/privacy`, `/terms`, `/support`). If you
add or remove a public page, update it there and resubmit in Search Console → Sitemaps. Bumping a
page's `<lastmod>` to the edit date is a mild recrawl nudge.
