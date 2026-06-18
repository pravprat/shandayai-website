# ShandayAI Platforms — product narrative

> Source of truth for `/platforms/` copy. Update this before changing the page.

## One-line pitch (10 seconds)

**ShandayAI Reliability Intelligence Platform** helps operations and SRE teams move from logs and alerts to evidence-backed root-cause findings and reports. Core capability: **evidence-backed RCA from incident logs.**

## Hero hierarchy

1. **H1:** ShandayAI Reliability Intelligence Platform
2. **Purpose:** Incident intelligence for ops/SRE teams; complements observability
3. **Core capability:** Evidence-backed root cause analysis from incident logs
4. **How to start:** Local container today; pilots for Assist and enterprise

## Who it is for

Operations, SRE, platform, infrastructure, and support teams that already collect logs and alerts but need **faster, evidence-backed root cause analysis** without replacing their observability stack.

## What it is not

- Not a log dashboard or observability replacement
- Not a generic AI chatbot
- Not autonomous remediation (guidance and reports, with human review)

## Product line (one foundation, three entry points)

| Product | Role |
|---------|------|
| **ShandayAI RCA Core** | Deterministic RCA in a local or customer-managed container |
| **ShandayAI RCA Assist** | RCA Core plus AI-assisted investigation and reporting |
| **ShandayAI Reliability Intelligence Platform** | Full enterprise incident intelligence with governance and integrations |

Customers start at the tier that matches their maturity. Each tier builds on the same RCA foundation.

## Available today

- **RCA Core:** local container deployment; log ingest; incident window detection; failure clustering; root-cause candidate ranking; evidence-linked RCA reports
- **Investigation deliverables:** root-cause finding, confidence, timeline, evidence bundle, remediation guidance, support-ready report
- **Private enterprise deployment:** available through scoped design partner pilots (not self-serve GA)

## Design partner pilots (available by engagement)

- **RCA Assist:** AI-assisted summaries, hypotheses, evidence packaging, remediation suggestions, enhanced incident reports
- **Reliability Intelligence Platform:** governed workflows, auditability, broader integration patterns, enterprise deployment in customer VPC or Kubernetes

## On the roadmap (generalized, no IP detail)

- Cloud marketplace procurement (AWS, Azure, GCP)
- Expanded integrations with common observability and ITSM systems
- Additional enterprise governance and multi-team operating patterns
- Standardized marketplace metering and private offers

## Deployment

| Model | Status |
|-------|--------|
| Local container / customer-managed | Available today (RCA Core) |
| Private enterprise (VPC, Kubernetes) | Design partner pilots |
| Marketplace | Roadmap |

## Page structure (do not duplicate)

1. Hero — platform name + purpose + evidence-backed RCA + sample report + availability + CTA
2. Proof strip — why teams evaluate (honest, no fake logos)
3. Product tiers — one section only; each card shows today vs future releases
4. How it works — one flow diagram
5. Standard deliverables — compact list
6. Deployment — today vs roadmap labels
7. Fits your stack — short differentiation
8. Contact

## Copy rules

- No em dashes
- Use **ShandayAI** (capital AI)
- Do not use SCRCA, SIP, OSIP, gateway, or control plane names publicly
- Do not claim GA, marketplace live status, or specific integrations unless shipped
- Prefer "design partner pilot," "available today," "on the roadmap"
