# ShandayAI Website Evolution & Methodology

This document captures how the ShandayAI website evolved from a single-product landing page to its current structure. Use it as institutional knowledge before making the next round of changes.

**Last updated:** June 2026  
**Current production commit reference:** `fecd6cf` — *Refine ShandayAI positioning for AI strategy and semantic platform pilots*

---

## 1. Purpose of this document

- Record **why** changes were made, not just **what** changed
- Preserve positioning decisions so future edits stay coherent
- Provide **git revert anchors** if a direction needs to be rolled back
- Avoid repeating mistakes (e.g. overcrowding the homepage, overclaiming product maturity)

---

## 2. Evolution at a glance

| Phase | Approx. commit | Site identity | Homepage role |
|-------|----------------|---------------|---------------|
| **V0 — Product landing** | `b8a4ca7` … pre-`5cb3823` | SCRCA / operational intelligence platform | Single long product page |
| **V1 — Company reposition** | `5cb3823` | Enterprise AI company with two verticals | Company bridge + many sections |
| **V2 — Contact & logo polish** | `0b1e5db`, `7ae6240` | Same as V1 + professional contact | Same structure, better trust signals |
| **V3 — KISS simplification** | `fecd6cf` *(current)* | AI strategy + semantic platform pilots | 6 focused sections only |

---

## 3. V0 — Original site (single-product RCA platform)

### What it was

One homepage (`src/app/page.tsx`, ~470 lines) presenting ShandayAI as an **observability / operational intelligence / SCRCA platform**.

### Hero message

- *"From observability to intelligent operations"*
- Platform vision for semantic infrastructure intelligence, deterministic RCA, agentic workflows

### Homepage sections (all on `/`)

| Section ID | Content |
|------------|---------|
| Hero | Product-first observability → intelligent operations |
| `#vision` | Executive vision visual — 5-step flow (signals → actions) |
| `#platform` | Platform thesis + 4 capability cards |
| `#architecture` | Operational intelligence stack (5 layers) |
| `#workflow` | Alert → RCA → remediation loop |
| — | Remediation / agentic operations visual |
| `#trust` | Trust before autonomy |
| `#contact` | "Start the conversation" |

### Navigation

`Vision` · `Platform` · `Architecture` · `Workflow` · `Trust` · `Blog`

### Other pages

- `/blog` — 4 technical articles (operational intelligence, deterministic AI, semantic infrastructure, agentic ops)
- No `/advisory`, `/platforms`, or product subpages

### Design language

- Dark navy background `#030712`
- Cyan / purple gradients
- Architecture-inspired visuals (`TechnicalVisuals.tsx`)
- Executive, infrastructure-grade tone

### What worked

- Strong SCRCA / evidence-backed RCA narrative
- Credible architecture and workflow visuals
- Good blog content for platform vertical

### What did not work for company positioning

- Entire site read as **one product**, not a company with multiple offerings
- No advisory / strategy lane for executive buyers
- Homepage was too deep for LinkedIn / first-impression visitors
- "Platform vision" language felt early-stage and product-internal

---

## 4. V1 — Company reposition (two verticals)

**Commit:** `5cb3823` — *Restructure site for advisory and platform positioning*

### Strategic decision

Reposition ShandayAI as:

```
ShandayAI (company)
├── AI Advisory & Strategy        → services / executive buyers
└── Semantic Intelligence Platforms → SCRCA, SIP / platform buyers
```

**Key rule:** Do not delete SCRCA content — **move it down one level**, don't throw it away.

### Information architecture introduced

| Route | Purpose |
|-------|---------|
| `/` | Company homepage — two offerings, founder, engagement models |
| `/advisory` | AI Advisory & Strategy |
| `/platforms` | Platforms overview |
| `/platforms/scrca` | Full SCRCA product story (migrated from old homepage) |
| `/platforms/sip` | SIP overview (light) |
| `/blog` | Unchanged content, still platform-leaning |

### Homepage sections added (V1)

1. Hero — two-offering company message
2. Two Connected Verticals — long bullet lists per offering
3. Why ShandayAI
4. Founder-Led Advisory
5. Engagement Models (Advisory Sprint, Fractional Partner, Semantic Pilot)
6. Semantic Intelligence Platforms (SCRCA/SIP summary)
7. Use Cases (6 cards)
8. Blog highlights
9. Contact

### Navigation (V1)

`Home` · `AI Advisory` · `Semantic Platforms` · `Use Cases` · `About` · `Contact`

### Components created

| Component | Role |
|-----------|------|
| `SiteFooter.tsx` | Shared footer |
| `ContactSection.tsx` | Shared contact CTA |
| `WhyShandayAI.tsx` | Operating model vs tools-first |
| `FounderSection.tsx` | Praveen Pratury credibility |
| `EngagementModels.tsx` | 3 engagement cards |
| `PlatformsHomeSection.tsx` | Platform principles on homepage |
| `UseCasesSection.tsx` | 6 use case cards |
| `platforms/scrca/ScrcaPageContent.tsx` | Migrated V0 homepage product content |

### Runtime RCA placement

Runtime RCA (customer-hosted Spark/JVM/Kubernetes) was added as a **section on `/platforms/scrca`**, not the company homepage — correct insertion point for engineering product work.

### V1 problem (why V3 followed)

After review, the homepage felt **crowded**:

- Too many sections above the fold
- Long bullet lists read like a generic AI agency
- Use cases + engagement models + blog + platforms duplicated messaging
- Hard to explain the company in 30 seconds

---

## 5. Logo & contact iterations (between V1 and V3)

### Logo (`public/ShandayAI.png`)

| Issue | Resolution | Commit |
|-------|------------|--------|
| Separate icon + text in header | Single combined PNG | `42e0c42` |
| Image had navy matte background visible on header | Flood-fill transparency + `#030712` header match | `75eee48`, `7ae6240` |
| White corner artifact pixels | Removed + size bump | `6a9bf55` |

**Current implementation:** `ShandayaiLogo.tsx` — single `ShandayAI.png`, `h-10 md:h-12`, link wrapper `bg-[#030712]`, header `bg-[#030712]`.

**Do not:** Re-upload a PNG with baked-in background without re-processing transparency. Do not shrink logo to `h-8` without checking header blend.

### Contact email split

| Address | Vertical |
|---------|----------|
| `advisory@shandayai.com` | AI Strategy & Architecture |
| `platforms@shandayai.com` | Semantic Platforms & Pilots (SCRCA/SIP) |

**Constants:** `src/app/components/contact.ts`

### Branch hygiene (2026)

Logo-only work on `cursor/single-logo-image-87ab` diverged from `main` and reintroduced legacy nav. **All site content lives on `main`.** Merge `main` before any logo or packaging change; see `AGENTS.md`.

---

## 6. V3 — KISS simplification (current)

**Commit:** `fecd6cf` — *Refine ShandayAI positioning for AI strategy and semantic platform pilots*

### Strategic decision

Apply **KISS**: two clear offerings, no buzzword walls, SCRCA/SIP as **pilots** not mature products.

### Primary positioning (current)

> ShandayAI helps enterprises design and operationalize governed AI systems across heterogeneous data, cloud, application, and model environments.

### Two offerings (final naming)

1. **AI Strategy & Architecture** (was "AI Advisory & Strategy")
2. **Semantic Intelligence Platforms & Pilots**

### Homepage — 6 sections only

| # | Section | ID / link |
|---|---------|-----------|
| 1 | Hero | CTAs → `/advisory`, `/platforms` |
| 2 | What We Do | 2 cards |
| 3 | How We Help | 4 cards |
| 4 | Semantic Platforms & Pilots | `#platforms` |
| 5 | Founder-Led Perspective | `#about` |
| 6 | Contact | `#contact` |

### Removed from homepage (not deleted from repo)

- Engagement Models section
- Use Cases section
- Blog highlights
- Why ShandayAI standalone section
- Long per-offering bullet lists
- Decorative hero badge clutter

### Navigation (current)

`Home` · `AI Strategy` → `/advisory` · `Semantic Platforms` → `/platforms` · `About` → `/#about` · `Contact` → `/#contact`

### SCRCA/SIP wording rules (current)

**Use:**

- pilot service
- emerging platform capability
- available for targeted pilots
- designed with future cloud / marketplace deployment patterns in mind

**Do not use:**

- "Available on AWS/GCP marketplace"
- Language implying fully mature packaged SaaS products

### Subpages (current)

| Page | Scope |
|------|-------|
| `/advisory` | AI Strategy & Architecture — hero + 4 focus cards + contact |
| `/platforms` | Two pilot cards (SCRCA, SIP) |
| `/platforms/scrca` | Full V0 technical content + Runtime RCA section; hero reframed as pilot |
| `/platforms/sip` | Lighter pilot page |
| `/blog` | Still live; not in main nav |

---

## 7. Current file map

```
src/app/
├── page.tsx                          # Homepage (6 sections)
├── layout.tsx                        # Site metadata
├── advisory/page.tsx                 # AI Strategy & Architecture
├── platforms/
│   ├── page.tsx                      # Semantic Platforms & Pilots overview
│   ├── scrca/
│   │   ├── page.tsx
│   │   └── ScrcaPageContent.tsx      # Deep SCRCA content (from V0)
│   └── sip/page.tsx
├── blog/                             # Technical articles
└── components/
    ├── SiteHeader.tsx
    ├── SiteFooter.tsx
    ├── ShandayaiLogo.tsx
    ├── ContactSection.tsx
    ├── contact.ts                    # hello@ / sales@ constants
    ├── FounderSection.tsx
    ├── TechnicalVisuals.tsx          # Used on blog + SCRCA page
    │
    │   # Legacy — not on homepage after V3, still in repo:
    ├── WhyShandayAI.tsx
    ├── EngagementModels.tsx
    ├── PlatformsHomeSection.tsx
    └── UseCasesSection.tsx
```

---

## 8. Design & tone principles (established)

| Principle | Application |
|-----------|-------------|
| **Company first, product second** | Homepage sells ShandayAI; SCRCA depth lives on `/platforms/scrca` |
| **Two offerings max on homepage** | Avoid "we do everything" |
| **Executive tone** | Clear, practical, architecture-oriented — no hype |
| **Active voice** | "ShandayAI helps…" not "platform vision" |
| **Evidence & governance** | Keep for platform vertical; don't overclaim autonomy |
| **Visual style** | Dark navy `#030712`, cyan/purple accents, simple cards, no cartoon AI art |
| **Static site** | Next.js `output: "export"` → Cloudflare Pages `out/` |

---

## 9. Deployment

| Setting | Value |
|---------|-------|
| Host | Cloudflare Pages |
| Build | `npm run build` |
| Output | `out/` |
| Node | 22 |
| Domain | shandayai.com, www.shandayai.com |

See `CLOUDFLARE_DEPLOY.md` and `README.md`.

---

## 10. Git revert anchors

Use these commits to restore prior versions if needed:

| Restore to | Command |
|------------|---------|
| **Current (V3 KISS)** | `git checkout fecd6cf` |
| **V2 with contact emails, crowded homepage** | `git checkout 0b1e5db` |
| **V1 company reposition (full)** | `git checkout b3d44e5` |
| **V0 single-product site** | `git checkout 5cb3823~1` or browse pre-`5cb3823` |
| **Logo fix only** | `7ae6240` |

---

## 11. Decision checklist for future changes

Before adding homepage content, ask:

1. **Does this belong on the company homepage or a subpage?**  
   Product depth → `/platforms/scrca`. Strategy depth → `/advisory`.

2. **Does this add a third offering?**  
   If yes, reconsider — the site is intentionally two-lane.

3. **Are we overclaiming product maturity?**  
   SCRCA/SIP are pilots until explicitly launched as products.

4. **Will this crowd the homepage?**  
   Target 6–8 sections max on `/`. Move detail to subpages.

5. **Does copy pass the LinkedIn test?**  
   Can a CTO understand ShandayAI in 30 seconds from the hero?

6. **Are contact paths clear?**  
   Strategy → `hello@`. Platforms/pilots → `sales@`.

---

## 12. Suggested next steps (not yet done)

These were discussed but intentionally deferred:

- [ ] Cal.com / scheduling link on contact section
- [ ] Blog link back in nav (removed in V3 for simplicity)
- [ ] Dedicated `/about` page (currently `/#about` anchor)
- [ ] Case studies / customer logos
- [ ] Runtime RCA dedicated subpage under SCRCA
- [ ] Remove or repurpose unused V1 components (`EngagementModels.tsx`, etc.)
- [ ] Update README project files section to reflect new IA

---

## 13. Related product context (not on website yet)

The **Runtime RCA Pack** (customer-hosted Docker API for Spark/JVM/Kubernetes) is engineering work positioned under SCRCA — not the company homepage. Marketing stays on `/platforms/scrca` until the API is ready for public docs.

---

## 14. Summary one-liner

**V0:** "We are an ops RCA platform."  
**V1:** "We are a company with advisory + platforms" *(but homepage too busy)*.  
**V3:** "We help enterprises with AI strategy and semantic intelligence pilots" *(clean, credible, two offerings)*.

---

## 15. Platform naming revamp (2026-06)

Public platform copy now uses **Reliability Intelligence** product language:

| Public name | Role |
|-------------|------|
| ShandayAI RCA Core | Lightweight local RCA container |
| ShandayAI RCA Assist | RCA Core + AI-assisted investigation |
| ShandayAI Reliability Intelligence Platform | Full enterprise incident intelligence |

**Do not use publicly:** SCRCA, SIP, OSIP, OES, AI Gateway, Model Gateway, Agent Gateway, Control Plane.

Legacy URLs `/platforms/scrca/` and `/platforms/sip/` redirect to `/platforms/`.

Nav label: **Platforms** (was Semantic Platforms).

When in doubt, read this doc, look at commit `fecd6cf`, and prefer **moving content down** over **adding more homepage sections**.
