import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Database,
  FileText,
  Layers3,
  Mail,
  Scale,
  Sparkles,
  Users,
} from "lucide-react";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import PlatformPilotContact from "../../components/PlatformPilotContact";
import { BlogRelatedSection } from "../../components/BlogRelatedSection";
import { EMAIL_PLATFORMS } from "../../components/contact";

export const metadata: Metadata = {
  title: "SIP: Semantic Intelligence Platform | ShandayAI",
  description:
    "SIP platform pilot for enterprise knowledge: governed retrieval, semantic context, evidence-backed answers, and agent-ready context across documents, metadata, and workflows.",
};

const workflowCards = [
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Product and engineering knowledge assistants",
    desc: "Help teams retrieve grounded context across specifications, designs, documents, issues, and internal knowledge.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Support and escalation intelligence",
    desc: "Connect customer cases, known issues, product metadata, incident history, and remediation context.",
  },
  {
    icon: <Scale className="h-6 w-6" />,
    title: "Policy and compliance knowledge retrieval",
    desc: "Provide governed retrieval across policies, procedures, controls, obligations, and decision history.",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Data catalog and metadata intelligence",
    desc: "Connect data assets, lineage, ownership, definitions, quality, and business meaning.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Sales and solution enablement",
    desc: "Help customer-facing teams find accurate product, technical, commercial, and workflow context.",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Employee and advisor workflow copilots",
    desc: "Prepare agent-ready context for business workflows that need retrieval, reasoning, and human approval.",
  },
];

const pilotDeliverables = [
  "Source inventory and ingestion plan",
  "Domain knowledge map",
  "Metadata and semantic enrichment strategy",
  "Business entity and relationship model",
  "Retrieval quality baseline",
  "Evidence-backed answer workflow",
  "Access and governance model",
  "Evaluation approach",
  "Pilot findings and production-readiness roadmap",
];

const ragContrast = [
  {
    generic: "Retrieves chunks and generates answers.",
    sip: "Builds an AI-ready semantic context layer with metadata, business meaning, relationships, permissions, source authority, evidence, and evaluation.",
  },
  {
    generic:
      "Often works in a demo but struggles with trust, governance, source authority, and workflow boundaries.",
    sip: "Focuses on production readiness, access boundaries, evidence-backed outputs, evaluation, and agent-ready context.",
  },
  {
    generic: "Treats retrieval as a search problem.",
    sip: "Treats retrieval as a business-context problem that must understand entities, relationships, policies, ownership, source quality, and workflow intent.",
  },
];

const architectureFlow = [
  {
    step: 1,
    title: "Ingest knowledge sources",
    desc: "Documents, policies, data catalogs, metadata, tickets, product knowledge, customer cases, workflows, and operational knowledge.",
  },
  {
    step: 2,
    title: "Enrich with semantic context",
    desc: "Entities, relationships, source authority, ownership, definitions, taxonomy, ontology, lineage, and access boundaries.",
  },
  {
    step: 3,
    title: "Retrieve with governance",
    desc: "Permission-aware retrieval, metadata filters, business-context ranking, citations, and source traceability.",
  },
  {
    step: 4,
    title: "Reason with evidence",
    desc: "Grounded answers, alternative hypotheses, confidence signals, and evidence bundles.",
  },
  {
    step: 5,
    title: "Prepare agent-ready context",
    desc: "Tool access, workflow boundaries, human approvals, escalation paths, and auditability.",
  },
];

const thoughtLeadership = [
  {
    title: "Why Enterprise Knowledge Needs a Semantic Layer",
    desc: "Raw documents and data catalogs are not enough for trusted enterprise AI. Business meaning, source authority, and retrieval boundaries must come first.",
  },
  {
    title: "From RAG to Evidence-Backed Enterprise Intelligence",
    desc: "Moving beyond chunk retrieval toward context assembly, citations, evaluation, and workflow-ready outputs.",
  },
  {
    title: "Making Enterprise Data AI-Ready with Metadata, Context, and Governance",
    desc: "How metadata, entity models, access controls, and semantic enrichment prepare data for production AI systems.",
  },
  {
    title: "How Semantic Context Makes Agents Trustworthy",
    desc: "Why agents need governed context, evidence bundles, and human approval paths before they can act safely in enterprise workflows.",
  },
];

export default function SipPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.24),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.16),transparent_30%),linear-gradient(to_bottom,transparent,rgba(3,7,18,1))]" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
                Semantic Intelligence Pilot
              </div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                SIP: Semantic Intelligence Platform for Enterprise Knowledge
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                A platform pilot for turning documents, data assets, metadata, policies, customer
                cases, product knowledge, and operational workflows into governed, evidence-backed
                AI context.
              </p>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-400">
                Enterprise AI fails when models retrieve fragments without enough business context,
                source authority, permissions, or workflow grounding. SIP helps organizations
                build semantic context layers that make enterprise knowledge searchable,
                explainable, auditable, and agent-ready.
              </p>
              <a
                href={`mailto:${EMAIL_PLATFORMS}?subject=${encodeURIComponent("SIP pilot inquiry")}`}
                className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-purple-400 px-7 py-3.5 font-semibold text-slate-950 hover:bg-purple-300"
              >
                <Mail className="h-5 w-5" />
                Discuss a SIP Pilot
              </a>
              <p className="mt-5 text-sm text-slate-500">
                <a
                  href={`mailto:${EMAIL_PLATFORMS}`}
                  className="text-slate-400 hover:text-purple-300"
                >
                  {EMAIL_PLATFORMS}
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Where SIP creates value */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Where SIP creates value
            </h2>
            <p className="mt-4 max-w-3xl text-slate-400">
              SIP supports enterprise workflows where trusted retrieval, semantic context, and
              evidence-backed reasoning matter more than generic chat responses.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {workflowCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:border-purple-300/30"
                >
                  <div className="inline-flex rounded-xl bg-purple-300/10 p-3 text-purple-300 ring-1 ring-purple-300/20">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 text-base font-semibold leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pilot deliverables */}
        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              What a SIP pilot produces
            </h2>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {pilotDeliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-purple-300" />
                  <span className="text-sm leading-6 text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Generic RAG vs SIP */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              How SIP is different from generic RAG
            </h2>
            <div className="mt-12 space-y-6">
              {ragContrast.map((row, index) => (
                <div
                  key={index}
                  className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:grid-cols-2"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Generic RAG
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{row.generic}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-purple-300">
                      SIP
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{row.sip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture flow */}
        <section id="flow" className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              SIP architecture flow
            </h2>
            <div className="mt-12 grid gap-4 lg:grid-cols-5">
              {architectureFlow.map((item, index) => (
                <div key={item.step} className="relative">
                  <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-300/10 text-sm font-semibold text-purple-300 ring-1 ring-purple-300/20">
                      {item.step}
                    </div>
                    <h3 className="mt-4 text-sm font-semibold leading-snug text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 flex-1 text-xs leading-5 text-slate-400">{item.desc}</p>
                  </div>
                  {index < architectureFlow.length - 1 && (
                    <div className="absolute right-[-0.75rem] top-1/2 z-10 hidden -translate-y-1/2 text-purple-300 lg:block">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SCRCA relationship */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
                  SIP and SCRCA relationship
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Shared semantic intelligence, different primary domains.
                </h2>
                <p className="mt-6 text-base leading-8 text-slate-400">
                  SIP and SCRCA share a common semantic intelligence approach: context, evidence,
                  explainability, and auditability. SCRCA focuses on observability and operational
                  signals. SIP focuses on enterprise knowledge, documents, data assets, and
                  decision-support workflows.
                </p>
                <Link
                  href="/platforms/scrca"
                  className="mt-6 inline-flex items-center gap-2 text-purple-300 hover:text-purple-200"
                >
                  Explore SCRCA
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="rounded-2xl border border-purple-300/20 bg-purple-300/5 p-8">
                <Layers3 className="h-8 w-8 text-purple-300" />
                <h3 className="mt-6 text-xl font-semibold">Why enterprises can trust the approach</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  ShandayAI platform services are built on evidence-backed reasoning, customer
                  data boundaries, explainability, and pilot-first validation. SIP is an emerging
                  platform capability, not a mature marketplace product. Engagements start with
                  scoped pilots designed to prove value before broader rollout.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Thought leadership */}
        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-purple-300">
              Thought leadership
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Why semantic context matters for enterprise knowledge
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {thoughtLeadership.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <BookOpen className="h-5 w-5 text-purple-300" />
                  <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.desc}</p>
                </div>
              ))}
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
