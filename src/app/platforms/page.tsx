import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Database,
  Eye,
  GitBranch,
  Layers3,
  Mail,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import PlatformPilotContact from "../components/PlatformPilotContact";
import { MiniFlowStrip, PlatformFlowVisual } from "../components/PlatformFlowVisual";
import { EMAIL_PLATFORMS } from "../components/contact";

export const metadata: Metadata = {
  title: "Semantic Intelligence Platforms & Pilots | ShandayAI",
  description:
    "ShandayAI semantic intelligence platform services: evidence-backed operational RCA and enterprise knowledge intelligence through targeted SCRCA and SIP pilots.",
};

const foundationFlow = [
  {
    label: "Raw enterprise signals and knowledge",
    desc: "Logs, events, traces, metrics, tickets, documents, metadata, policies, cases, data assets, and operational workflows.",
  },
  {
    label: "Semantic enrichment",
    desc: "Entities, relationships, ownership, lineage, definitions, source authority, access boundaries, and business context.",
  },
  {
    label: "Evidence and graph context",
    desc: "Timelines, clusters, knowledge maps, dependency graphs, evidence bundles, confidence signals, and alternative hypotheses.",
  },
  {
    label: "Model and agent reasoning",
    desc: "RAG, semantic retrieval, LLM reasoning, agent workflows, tool access, evaluation gates, and human review.",
  },
  {
    label: "Validated action",
    desc: "RCA packets, evidence-backed answers, support escalation, workflow context, remediation guidance, and production-readiness roadmap.",
  },
];

const differentiation = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Not generic AI answers",
    desc: "Generic AI produces plausible outputs. ShandayAI platforms focus on evidence, context, traceability, and reviewable reasoning.",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Not brittle RAG",
    desc: "Generic RAG retrieves chunks. ShandayAI platforms build semantic context with metadata, relationships, source authority, access boundaries, and evaluation.",
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: "Not another dashboard",
    desc: "Operational teams do not need more noise. SCRCA converts operational signals into incident structure, RCA evidence, and escalation-ready context.",
  },
];

const principles = [
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Evidence before narrative",
    desc: "AI outputs should be backed by source data, timelines, metadata, relationships, and confidence signals.",
  },
  {
    icon: <Layers3 className="h-5 w-5" />,
    title: "Semantic context before generation",
    desc: "Raw data and documents need business meaning, source authority, relationships, and retrieval boundaries before LLMs are asked to reason.",
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: "Customer data boundaries",
    desc: "Platform pilots should respect data locality, access controls, and customer-managed deployment patterns where needed.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Human review for higher-risk actions",
    desc: "The platform should support human-in-the-loop approval for remediation, escalation, and workflow execution.",
  },
  {
    icon: <GitBranch className="h-5 w-5" />,
    title: "Explainability and auditability",
    desc: "Every answer, RCA, or recommendation should be traceable to the evidence used.",
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: "Pilot-first deployment",
    desc: "Start with a scoped pilot, validate value, then decide whether to expand into production patterns.",
  },
];

const scrcaPilotOutputs = [
  "Signal inventory",
  "Event clusters",
  "Incident windows",
  "Root cause candidates",
  "Evidence bundle",
  "RCA summary",
  "Escalation packet",
  "Production-readiness roadmap",
];

const sipPilotOutputs = [
  "Source inventory",
  "Knowledge map",
  "Semantic enrichment approach",
  "Retrieval baseline",
  "Evidence-backed answer workflow",
  "Governance model",
  "Agent-ready context plan",
  "Production-readiness roadmap",
];

export default function PlatformsPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.14),transparent_28%),linear-gradient(to_bottom,transparent,rgba(3,7,18,1))]" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Semantic Intelligence Platforms & Pilots
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                ShandayAI builds platform services that convert operational signals, documents,
                metadata, and enterprise knowledge into evidence-backed AI workflows.
              </p>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-400">
                Semantic intelligence connects raw enterprise data to business meaning, context,
                evidence, and action. It helps teams move beyond generic chat, brittle RAG, and
                alert noise toward explainable, auditable, and domain-grounded AI systems.
              </p>
              <a
                href={`mailto:${EMAIL_PLATFORMS}?subject=${encodeURIComponent("Platform pilot inquiry")}`}
                className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-cyan-300 px-7 py-3.5 font-semibold text-slate-950 hover:bg-cyan-200"
              >
                <Mail className="h-5 w-5" />
                Discuss a Platform Pilot
              </a>
              <p className="mt-5 text-sm text-slate-500">
                <a href={`mailto:${EMAIL_PLATFORMS}`} className="text-slate-400 hover:text-cyan-300">
                  {EMAIL_PLATFORMS}
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Why semantic intelligence */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Why semantic intelligence
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-400">
              Most AI systems fail when they reason over raw fragments without enough context,
              ownership, lineage, source authority, relationships, or workflow boundaries.
              Semantic intelligence adds the missing layer between enterprise data and AI action:
              metadata, business meaning, graph context, evidence, access boundaries, and
              evaluation.
            </p>
            <p className="mt-5 text-base font-medium leading-8 text-slate-300">
              The goal is not just generation. The goal is evidence-backed reasoning that teams
              can inspect, trust, and act on.
            </p>
            <p className="mt-5 rounded-xl border border-cyan-300/20 bg-cyan-300/5 px-5 py-4 text-sm leading-7 text-slate-300">
              Generic AI produces answers. ShandayAI platforms produce evidence-backed context,
              reasoning, and validated action.
            </p>
          </div>
        </section>

        {/* Foundation flow */}
        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <PlatformFlowVisual
              badge="Platform Foundation"
              title="Semantic Intelligence Platform Foundation"
              subtitle="A common architecture path from raw enterprise signals and knowledge to validated action."
              stages={foundationFlow}
              accent="cyan"
            />
          </div>
        </section>

        {/* Two pilot paths */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              One semantic foundation. Two pilot paths.
            </h2>
            <p className="mt-4 max-w-3xl text-slate-400">
              Both SCRCA and SIP are emerging platform capabilities available as targeted pilots,
              designed with future cloud and marketplace deployment patterns in mind.
            </p>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                Semantic Intelligence Foundation
              </p>
            </div>

            <div className="mt-6 grid gap-8 lg:grid-cols-2">
              {/* SCRCA path */}
              <div className="rounded-2xl border border-cyan-300/25 bg-gradient-to-b from-cyan-300/5 to-transparent p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
                  Pilot path 1
                </p>
                <h3 className="mt-2 text-2xl font-semibold">SCRCA: Semantic RCA for Operations</h3>
                <div className="mt-6">
                  <MiniFlowStrip
                    accent="cyan"
                    steps={[
                      "Logs, events, traces",
                      "Eventization",
                      "Incident windows",
                      "Causal graph",
                      "Evidence bundle",
                      "Escalation packet",
                    ]}
                  />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  For
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  Observability, SRE, platform, support, and infrastructure teams.
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Use it when
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Teams need to convert logs, events, traces, metrics, tickets, alerts, and
                  incident data into root cause candidates, timelines, evidence bundles, and
                  escalation context.
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-cyan-300/80">
                  Primary outcome
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  Faster incident understanding, stronger escalation packets, better RCA discipline,
                  and a foundation for future human-reviewed remediation workflows.
                </p>
                <Link
                  href="/platforms/scrca"
                  className="mt-6 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200"
                >
                  Explore SCRCA
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* SIP path */}
              <div className="rounded-2xl border border-purple-300/25 bg-gradient-to-b from-purple-300/5 to-transparent p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-purple-300">
                  Pilot path 2
                </p>
                <h3 className="mt-2 text-2xl font-semibold">
                  SIP: Semantic Intelligence for Enterprise Knowledge
                </h3>
                <div className="mt-6">
                  <MiniFlowStrip
                    accent="purple"
                    steps={[
                      "Documents, metadata",
                      "Semantic enrichment",
                      "Knowledge map",
                      "Governed retrieval",
                      "Evidence answers",
                      "Agent-ready context",
                    ]}
                  />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  For
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  Enterprise knowledge, data, product, support, compliance, operations, and business
                  workflow teams.
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Use it when
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Teams need governed retrieval, semantic context, source authority,
                  evidence-backed answers, knowledge maps, and agent-ready enterprise context.
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-purple-300/80">
                  Primary outcome
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  More trusted enterprise AI answers, stronger retrieval quality, clearer access
                  boundaries, and better context for assistants and agents.
                </p>
                <Link
                  href="/platforms/sip"
                  className="mt-6 inline-flex items-center gap-2 text-purple-300 hover:text-purple-200"
                >
                  Explore SIP
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why different */}
        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Why this is different</h2>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {differentiation.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-7"
                >
                  <div className="inline-flex rounded-xl bg-cyan-300/10 p-3 text-cyan-300 ring-1 ring-cyan-300/20">
                    {item.icon}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Shared platform principles
            </h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {principles.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <div className="inline-flex rounded-lg bg-cyan-300/10 p-2.5 text-cyan-300 ring-1 ring-cyan-300/20">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pilot outputs */}
        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              What a pilot produces
            </h2>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/5 p-7">
                <h3 className="text-lg font-semibold text-cyan-200">SCRCA pilot outputs</h3>
                <ul className="mt-5 space-y-2">
                  {scrcaPilotOutputs.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                      <Zap className="h-3.5 w-3.5 shrink-0 text-cyan-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-purple-300/20 bg-purple-300/5 p-7">
                <h3 className="text-lg font-semibold text-purple-200">SIP pilot outputs</h3>
                <ul className="mt-5 space-y-2">
                  {sipPilotOutputs.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                      <Zap className="h-3.5 w-3.5 shrink-0 text-purple-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <PlatformPilotContact product="platforms" />
      </main>

      <SiteFooter />
    </div>
  );
}
