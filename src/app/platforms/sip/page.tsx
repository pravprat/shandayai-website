import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Cloud,
  Container,
  Database,
  GitBranch,
  Layers3,
  Plug,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import PlatformPilotContact from "../../components/PlatformPilotContact";
import { BlogRelatedSection } from "../../components/BlogRelatedSection";

export const metadata: Metadata = {
  title: "SIP — Semantic Intelligence Pilot | ShandayAI",
  description:
    "Enterprise knowledge, semantic retrieval, and evidence-backed reasoning for trusted AI decision support.",
};

const intelligenceFlow = [
  {
    label: "Ingest",
    desc: "Documents, data assets, metadata, tickets, and operational knowledge.",
    icon: <Database className="h-6 w-6" />,
  },
  {
    label: "Enrich",
    desc: "Entity extraction, relationship mapping, and semantic normalization.",
    icon: <Layers3 className="h-6 w-6" />,
  },
  {
    label: "Retrieve",
    desc: "Context-aware search and assembly across enterprise sources.",
    icon: <Search className="h-6 w-6" />,
  },
  {
    label: "Reason",
    desc: "Evidence-backed answers with confidence, lineage, and alternatives.",
    icon: <Brain className="h-6 w-6" />,
  },
  {
    label: "Act",
    desc: "Agent-ready context for governed workflows and decision support.",
    icon: <Sparkles className="h-6 w-6" />,
  },
];

const capabilities = [
  {
    icon: <Search className="h-6 w-6" />,
    title: "Semantic retrieval",
    desc: "Move beyond keyword search to context-aware retrieval over enterprise documents, runbooks, and data catalogs.",
  },
  {
    icon: <GitBranch className="h-6 w-6" />,
    title: "Knowledge graph reasoning",
    desc: "Connect entities, relationships, and domain context into a queryable semantic layer your teams can trust.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Evidence-backed outputs",
    desc: "Every answer includes confidence, source lineage, and alternatives — built for auditability, not black-box summaries.",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Enterprise context layer",
    desc: "Ground LLM reasoning in structured domain knowledge, workflows, and operational metadata instead of generic prompts.",
  },
];

const deploymentOptions = [
  {
    icon: <Container className="h-6 w-6" />,
    title: "Customer-hosted deployment",
    desc: "Run SIP components inside your environment so sensitive documents and knowledge stay within your security boundary.",
    bullets: [
      "Private ingestion and enrichment pipelines",
      "Your data never leaves your infrastructure",
      "Integrates with existing identity and access controls",
    ],
    badge: "Design partner",
  },
  {
    icon: <Plug className="h-6 w-6" />,
    title: "API and workflow integration",
    desc: "Embed semantic retrieval and evidence-backed reasoning into internal tools, support portals, or agent platforms.",
    bullets: [
      "Context assembly for copilots and agents",
      "Source-attributed answers for compliance teams",
      "Plugs into existing knowledge bases and catalogs",
    ],
    badge: "Pilot",
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Scoped design partner pilot",
    desc: "Time-boxed engagement to validate SIP on a specific knowledge or workflow use case with clear success criteria.",
    bullets: [
      "Co-designed scope with your domain experts",
      "Iterative feedback on retrieval quality and governance",
      "Path to broader rollout if validated",
    ],
    badge: "Pilot",
  },
];

export default function SipPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.24),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.16),transparent_30%),linear-gradient(to_bottom,transparent,rgba(3,7,18,1))]" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
                Semantic Intelligence Pilot
              </div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                SIP
                <span className="block bg-gradient-to-r from-purple-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Semantic Intelligence Platform
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Enterprise knowledge and workflow intelligence with evidence-backed semantic
                reasoning. SIP turns fragmented documents and data into governed, agent-ready
                context — so AI decisions are explainable, auditable, and grounded in your domain.
              </p>
            </div>
          </div>
        </section>

        <section id="flow" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.15),transparent_40%)]" />
            <div className="relative">
              <div className="mb-10 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
                  How it works
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  From fragmented knowledge to governed intelligence.
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                  SIP builds a semantic layer that connects what your organization knows with
                  how AI systems reason about it.
                </p>
              </div>
              <div className="grid gap-4 lg:grid-cols-5">
                {intelligenceFlow.map((step, index) => (
                  <div key={step.label} className="relative">
                    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-slate-950/70 p-5 text-center">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-purple-300/10 text-purple-300 ring-1 ring-purple-300/20">
                        {step.icon}
                      </div>
                      <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-white">
                        {step.label}
                      </h3>
                      <p className="mt-2 text-xs leading-5 text-slate-400">{step.desc}</p>
                    </div>
                    {index < intelligenceFlow.length - 1 && (
                      <div className="absolute right-[-1rem] top-1/2 z-10 hidden -translate-y-1/2 text-purple-300 lg:block">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
              What SIP delivers
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Semantic context your teams and agents can trust.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 hover:border-purple-300/30"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-purple-300/10 p-3 text-purple-300 ring-1 ring-purple-300/20">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="deployment" className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
                How you can utilize it
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Deployment options for enterprise knowledge.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-400">
                SIP is in active development with design partners. Engagements are scoped to
                your knowledge domain, security requirements, and workflow integration needs.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {deploymentOptions.map((option) => (
                <div
                  key={option.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 hover:border-purple-300/30"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex rounded-2xl bg-purple-300/10 p-3 text-purple-300 ring-1 ring-purple-300/20">
                      {option.icon}
                    </div>
                    <span className="shrink-0 rounded-full border border-purple-300/20 bg-purple-300/10 px-3 py-1 text-xs font-medium text-purple-200">
                      {option.badge}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{option.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{option.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {option.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-purple-300" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
                Relationship to SCRCA
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Shared semantic foundation, different primary domains.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-400">
                SIP and SCRCA share a common approach to semantic context, evidence bundles,
                and explainable reasoning. SCRCA focuses on observability and operational signals.
                SIP focuses on enterprise knowledge, documents, and decision support workflows.
              </p>
              <Link
                href="/platforms/scrca"
                className="mt-6 inline-flex items-center gap-2 text-purple-300 hover:text-purple-200"
              >
                Explore SCRCA
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-[2rem] border border-purple-300/20 bg-purple-300/5 p-8">
              <Database className="h-8 w-8 text-purple-300" />
              <h3 className="mt-6 text-2xl font-semibold">Why enterprises need this</h3>
              <p className="mt-4 leading-7 text-slate-400">
                Generic LLM deployments fail when answers cannot be traced to sources,
                domain context is missing, or governance teams cannot audit outputs. SIP
                addresses the gap between raw documents and trustworthy AI decision support.
              </p>
            </div>
          </div>
        </section>

        <BlogRelatedSection variant="sip" />
        <PlatformPilotContact product="SIP" />
      </main>

      <SiteFooter />
    </div>
  );
}
