import Link from "next/link";
import { ArrowRight, BrainCircuit, Compass, Sparkles } from "lucide-react";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import ContactSection from "./components/ContactSection";
import WhyShandayAI from "./components/WhyShandayAI";
import FounderSection from "./components/FounderSection";
import EngagementModels from "./components/EngagementModels";
import PlatformsHomeSection from "./components/PlatformsHomeSection";
import UseCasesSection from "./components/UseCasesSection";
import { articles } from "./blog/articles";

const offerings = [
  {
    id: "advisory",
    title: "AI Advisory & Strategy",
    desc: "Executive advisory and fractional AI operating partner support for enterprise AI strategy, data platform architecture, GenAI adoption, vendor evaluation, governance, operating models, and measurable execution.",
    href: "/advisory",
    icon: <Compass className="h-7 w-7" />,
    accent: "purple",
    bullets: [
      "Enterprise AI and GenAI strategy",
      "AI/data platform architecture",
      "Cloud, SaaS, PaaS, storage, observability, and AI infrastructure evaluation",
      "RAG, semantic retrieval, agents, model gateways, and governance",
      "GPU provisioning, training, inference, and cost/performance tradeoffs",
      "Hybrid-cloud, on-prem, customer-managed, and edge deployment patterns",
      "AI operating model, adoption strategy, and executive roadmap planning",
    ],
  },
  {
    id: "platforms-offering",
    title: "Semantic Intelligence Platforms",
    desc: "Semantic platforms that connect raw enterprise data, operational signals, documents, logs, metadata, embeddings, knowledge graphs, evidence bundles, and LLM reasoning into explainable, auditable AI systems.",
    href: "/platforms",
    icon: <BrainCircuit className="h-7 w-7" />,
    accent: "cyan",
    bullets: [
      "SCRCA: Semantic Root Cause Analysis for observability, logs, incidents, and operational intelligence",
      "SIP: Semantic Intelligence Platform for enterprise knowledge, data, retrieval, and evidence-backed reasoning",
      "Agent-assisted ingestion, schema understanding, eventization, clustering, graph reasoning, and narrative generation",
      "Evidence-backed outputs with confidence, lineage, alternatives, and auditability",
      "Semantic context layers that help enterprises move beyond generic chat toward trusted AI decision support",
    ],
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.20),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.18),transparent_30%),linear-gradient(to_bottom,transparent,rgba(3,7,18,1))]" />
          <div className="absolute left-1/2 top-24 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full border border-cyan-300/10" />
          <div className="absolute left-1/2 top-40 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full border border-purple-300/10" />

          <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36">
            <div className="mx-auto max-w-5xl text-center">
              <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
                <Sparkles className="h-4 w-4 text-cyan-300" />
                Enterprise AI Advisory & Semantic Intelligence
              </div>

              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Enterprise AI Advisory &{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Semantic Intelligence Platforms
                </span>
              </h1>

              <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
                ShandayAI helps enterprises move from AI experiments to governed, production-ready
                AI systems through executive AI advisory, platform architecture, and semantic
                intelligence systems for operational data, enterprise knowledge, and agentic
                workflows.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/#advisory"
                  className="rounded-2xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-200"
                >
                  Explore AI Advisory
                </Link>
                <Link
                  href="/#platforms"
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3 font-semibold text-white hover:bg-white/[0.06]"
                >
                  Explore Semantic Platforms
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Two Offerings */}
        <section id="advisory" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Two Connected Verticals
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Two Ways We Help Enterprises Operationalize AI
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {offerings.map((offering) => (
              <div
                key={offering.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"
              >
                <div
                  className={`mb-6 inline-flex rounded-2xl p-3 ring-1 ${
                    offering.accent === "purple"
                      ? "bg-purple-300/10 text-purple-300 ring-purple-300/20"
                      : "bg-cyan-300/10 text-cyan-300 ring-cyan-300/20"
                  }`}
                >
                  {offering.icon}
                </div>
                <h3 className="text-2xl font-semibold">{offering.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{offering.desc}</p>
                <ul className="mt-6 space-y-2.5">
                  {offering.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={offering.href}
                  className="mt-8 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <WhyShandayAI />

        <FounderSection />

        <EngagementModels />

        <PlatformsHomeSection />

        <UseCasesSection />

        {/* Blog */}
        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="mb-12 flex items-end justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                  Insights
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Enterprise AI, semantic intelligence, and operational systems.
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden items-center gap-2 text-cyan-300 hover:text-cyan-200 sm:flex"
              >
                All articles
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {articles.slice(0, 2).map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition hover:border-cyan-300/30"
                >
                  <div className="mb-4 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-200">
                    {article.tag}
                  </div>
                  <h3 className="text-xl font-semibold">{article.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{article.subtitle}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
