import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Database, GitBranch, Search, ShieldCheck } from "lucide-react";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ContactSection from "../../components/ContactSection";

export const metadata: Metadata = {
  title: "SIP — Semantic Intelligence Pilot | ShandayAI",
  description:
    "Enterprise knowledge, semantic retrieval, and evidence-backed reasoning for trusted AI decision support.",
};

const capabilities = [
  {
    icon: <Search className="h-6 w-6" />,
    title: "Semantic retrieval",
    desc: "Move beyond keyword search to context-aware retrieval over enterprise documents and data.",
  },
  {
    icon: <GitBranch className="h-6 w-6" />,
    title: "Knowledge graph reasoning",
    desc: "Connect entities, relationships, and domain context into a queryable semantic layer.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Evidence-backed outputs",
    desc: "Every answer includes confidence, source lineage, and alternatives for auditability.",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Enterprise context layer",
    desc: "Ground LLM reasoning in structured domain knowledge, workflows, and operational metadata.",
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
                A pilot service for enterprise knowledge and workflow intelligence — building
                AI-ready semantic context layers with evidence-backed reasoning. Available for
                targeted design partner engagements.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
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

        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
                  Relationship to SCRCA
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Shared semantic foundation, different primary domains.
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-400">
                  SIP and SCRCA share a common approach to semantic context, evidence bundles,
                  and explainable reasoning. SCRCA focuses on observability and operational signals.
                  SIP focuses on enterprise knowledge, documents, and decision support workflows.
                </p>
              </div>
              <div className="rounded-[2rem] border border-purple-300/20 bg-purple-300/5 p-8">
                <Database className="h-8 w-8 text-purple-300" />
                <h3 className="mt-6 text-2xl font-semibold">Early design partner opportunities</h3>
                <p className="mt-4 leading-7 text-slate-400">
                  SIP is in active development. We are working with design partners on enterprise
                  knowledge use cases that require semantic retrieval, evidence-backed reasoning,
                  and governed AI outputs.
                </p>
                <Link
                  href="/platforms/scrca"
                  className="mt-6 inline-flex items-center gap-2 text-purple-300 hover:text-purple-200"
                >
                  Explore SCRCA
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ContactSection variant="platforms" />
      </main>

      <SiteFooter />
    </div>
  );
}
