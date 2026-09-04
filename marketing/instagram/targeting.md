# Deepflow — Meta / Instagram ad targeting

Working notes for running the creative in `out/` and `out/reels-ads/`.
Objective is **Traffic** (Meta's *App Installs* objective is iOS/Android only, so
it isn't available for a Mac App Store app). Destination: `deepflowfocus.com` or
the App Store URL.

---

## The filter that matters more than any interest

Deepflow only installs on macOS, and Instagram traffic is overwhelmingly mobile.
Every tap from someone without a Mac is wasted budget. **Qualify for Mac first,
then worry about intent.**

If `Behaviors → Digital activities → Operating System Used` still offers a macOS
option in your account, use it — it beats every interest proxy below. Meta has
been pruning detailed targeting for years, so check rather than assume.

### Interests that look right and aren't

`Apple Inc.` · `iPhone` · `iPad` · `AirPods` · `Apple Music`

Enormous audiences, almost entirely phone owners. iPhone ownership barely
predicts Mac ownership, so these spend Apple-fan CPMs on people who can't
install the app. Avoid.

---

## The Mac stack

Things that only make sense if there's already a Mac on the desk. OR these
together — this stack *is* the Mac filter.

**Tier 1 · Mac-exclusive software** — the strongest signal

`Final Cut Pro` · `Logic Pro` · `Xcode` · `Swift (programming language)` · `Sketch (app)` · `Setapp` · `macOS`

Final Cut and Logic are the best of these: Mac-only, and their users already work
in long uninterrupted sessions.

**Tier 2 · Mac media & communities**

`MacRumors` · `9to5Mac` · `Macworld` · `Product Hunt`

People who read about Mac software are people who buy Mac software. Product Hunt
adds the habitual indie-tool trier.

**Tier 3 · Mac hardware** — weaker, plenty of aspirational interest without ownership

`MacBook Pro` · `MacBook Air` · `iMac` · `Mac Mini` · `Mac Studio`

---

## Intent interests (for narrowing, not standalone)

Use these as an AND condition on top of the Mac stack, via **Narrow audience**:

```
[ Mac stack — OR ]  AND  [ intent cluster — OR ]
```

- **Focus & time** — `Pomodoro Technique` · `Time management` · `Toggl` · `RescueTime` · `Forest (app)` · `Freedom (app)`
- **Habits** — `Atomic Habits` · `James Clear` · `Cal Newport` · `Deep work` · `Self-improvement`
- **Knowledge work** — `Computer programming` · `Graphic design` · `UX design` · `Copywriting` · `Freelancer` · `Remote work`
- **Students** — `Study skills` · `Exam preparation` · `Note-taking` · `Notion (app)` · `Medical school` · `Law school`
- **Privacy** — `Signal (app)` · `Proton Mail` · `DuckDuckGo` · `Internet privacy`

The privacy cluster is the interesting one. "No account, no tracking, your data
never leaves your Mac" is a genuine differentiator against every cloud
productivity app, and it's the only cluster where that stance is the hook rather
than a footnote.

---

## Structure: three ad sets, not eight

A small budget spread across many ad sets never exits the learning phase.

| Ad set | Definition | Why |
|---|---|---|
| **A · Mac natives** | Tier 1 + Tier 2, OR'd. No narrowing. | The core audience. Broad enough to deliver. |
| **B · Mac natives ∩ focus** | Same stack, narrowed by the Focus & time + Habits clusters. | Sharpest intent, smallest reach. |
| **C · Broad control** | Geo and age only. No interests. | Meta's optimisation often beats hand-picked stacks. Worth knowing before tuning interests for months. |

Same creative across all three — that's what makes the comparison mean anything.
Start with **reel ad 1** (the free menu bar timer): "free, one click, lives in
your menu bar" is a far easier first ask than the $34.99 tier.

---

## The rest of the setup

- **Geo:** US, UK, Canada, Australia, Germany, Netherlands, Nordics — high Mac penetration, high willingness to pay for software.
- **Age:** 22–45.
- **Language:** English (site and app are English-only).
- **Placements:** let the Reels stills run in Reels; the 4:5 posts suit Feed and Explore.

## What to read

Cost per **landing-page view**, not impressions or clicks — it filters out
accidental taps. Then judge App Store conversion separately: Meta cannot observe
Mac App Store installs, so no in-platform conversion number will ever reflect
your actual signups.

---

## Caveats

- Meta renames and removes interests constantly. Type these as keywords into the
  detailed-targeting search and take whatever actually appears; several may not
  exist in your account.
- Everything here is strategy, not verified against live Ads Manager. Sanity-check
  objectives, placements and behaviour options before budgeting around them.
- **Deliberately not included:** a Meta pixel on deepflowfocus.com. It would let
  you build Custom and Lookalike audiences from real visitors — reliably better
  than hand-picked interests — and is the only way to measure which ad set drives
  traffic. Deferred because it's cross-site ad-network tracking, which sits
  awkwardly beside the About page's "no tracking, no analytics SDKs" stance. The
  site currently runs only cookieless Cloudflare Web Analytics. Revisit if the
  interest approach plateaus.
