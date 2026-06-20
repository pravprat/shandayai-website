# Phase 1.7 Status Report — Website Verified Demo Snapshot

**Date:** 2026-06-20  
**Milestone:** Verified RCA packet website demo  
**Repo modified:** `shandayai-site` only  
**Status:** **Complete**

---

## Objective

Create a polished website section explaining the Phase 1.6 RCA packet workflow using sanitized output from the verified OSIP run — without inventing product claims.

---

## Page placement

| Location | URL | Role |
|----------|-----|------|
| **Primary (full demo)** | `/platforms/demo/verified-rca-packet/` | Full interactive 6-step flow, verified vs roadmap claims |
| **Platforms page teaser** | `/platforms/` → Verified demo section | Compact auto-play + link to full demo |
| **Demo hub card** | `/platforms/demo/` | Featured first card |
| **Interactive demos CTA** | `/platforms/` → PlatformDemosSection | Third grid link |

**Recommendation:** Link executives to `/platforms/demo/verified-rca-packet/`; use the platforms page section for first-touch on the product page.

---

## Files changed

| File | Change |
|------|--------|
| `public/demo/osip-rca-packet-verified.json` | Sanitized Phase 1.6 metrics snapshot |
| `src/data/osip-rca-packet-verified.json` | Bundled copy for TypeScript import |
| `src/lib/verified-rca-packet-demo.ts` | Stages, claims, roadmap lists |
| `src/app/components/platforms/VerifiedRcaPacketFlow.tsx` | Interactive 6-step demo component |
| `src/app/components/platforms/VerifiedRcaPacketSection.tsx` | Compact platforms-page section |
| `src/app/platforms/demo/verified-rca-packet/page.tsx` | Dedicated demo page |
| `src/app/platforms/page.tsx` | Embeds verified section |
| `src/app/platforms/demo/page.tsx` | Featured demo card |
| `src/app/components/platforms/PlatformDemosSection.tsx` | Link card |
| `docs/PHASE1_7_STATUS_REPORT.md` | This report |

**Not modified:** `osip-control-plane`, `semantic-rca`, `scrca-agentic-platform`

---

## Local preview

```bash
cd shandayai-site
npm run dev
```

Open:

- http://localhost:3000/platforms/demo/verified-rca-packet/
- http://localhost:3000/platforms/ (scroll to “Verified demo” section)

Build verified: `npm run build` succeeds; route `/platforms/demo/verified-rca-packet/` exported.

---

## Rendered section description

The section opens with a **Verified demo** callout (cyan badge) stating event-level grounding only.

Below: **six metric chips** — C1, 3 evidence, 203 ContentUnits, event-level, human review required, replay reconstructed.

**Horizontal step strip** (6 cards, click or auto-advance):

1. Enterprise source signal — k8s audit fixture, customer-controlled
2. Shared control plane — OSIP job, artifacts, audit
3. Domain intelligence — SCRCA subprocess, raw preservation
4. Evidence grounding — ContentUnits, event-level citations
5. RCA packet — rca_packet.md + output_packet.json previews
6. Audit and replay — timeline + validation without re-run

**Detail panel** shows stage-specific sanitized lines from the Phase 1.6 run.

**Verified vs roadmap** columns at bottom (full page only) — green checkmarks for verified claims, muted list for roadmap items not shown.

---

## Verified claims (shown on site)

- Local OSIP CLI run with real semantic-rca subprocess
- Primary finding cluster **C1** (SCRCA ranking, not OSIP re-rank)
- **3** supporting evidence items, **event-level** citations only
- **203** ContentUnits registered
- **Human review required**
- Replay **reconstructed** with valid lineage and hashes
- Raw SCRCA v2 preserved before mapping

## Roadmap claims (explicitly not shown as current)

- Production-ready SaaS / marketplace
- Autonomous remediation
- Line-level citations for all formats
- Platform delegation / agentic integration
- RCA Assist in this workflow

---

## Source artifacts (Phase 1.6 run)

Sanitized from `phase1_6_demo` run:

- `outputs/rca_packet.md`
- `outputs/output_packet.json`
- `outputs/evidence_grounding_summary.json`
- `audit/audit.md`
- `replay/replay_summary.json`
- `scrca_raw/invocation.json`

Local paths and stderr noise removed from public snapshot.

---

## Recommended next milestone

**Phase 2:** Platform delegation demo (when OSIP can invoke agentic platform) **or** update website when line-level / parquet grounding lands — refresh snapshot metrics only, keep honest citation language.
