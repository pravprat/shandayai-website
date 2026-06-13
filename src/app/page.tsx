import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import ContactSection from "./components/ContactSection";
import FounderSection from "./components/FounderSection";

const whatWeDo = [
  {
    title: "AI Strategy & Architecture",
    desc: "Advisory and architecture support for enterprise AI, agentic AI, GenAI platforms, RAG, model gateways, governance, evaluation, adoption, and hybrid-cloud / on-prem deployment patterns.",
    href: "/advisory",
    accent: "purple",
  },
  {
    title: "Semantic Intelligence Platforms & Pilots",
    desc: "Platform and pilot work for semantic root cause analysis, enterprise knowledge intelligence, evidence-backed reasoning, logs, documents, operational data, and AI-ready context layers.",
    href: "/platforms",
    accent: "cyan",
  },
];

const howWeHelp = [
  {
    title: "Enterprise AI Roadmaps",
    desc: "Strategy, architecture, operating model, governance, and measurable execution plans.",
  },
  {
    title: "Agentic AI Enablement",
    desc: "Reusable agent patterns, tool access, retrieval boundaries, evaluation gates, human-in-the-loop workflows, and adoption playbooks.",
  },
  {
    title: "Heterogeneous Platform Architecture",
    desc: "Patterns across SaaS, PaaS, cloud, on-prem, hybrid-cloud, data platforms, observability systems, storage, GPUs, and edge environments.",
  },
  {
    title: "AI Governance & Measurement",
    desc: "Guardrails, risk controls, quality measurement, hallucination checks, lineage, auditability, cost tracking, and business-value metrics.",
  },
];

const pilots = [
  {
    title: "SCRCA: Semantic RCA Pilot",
    desc: "A pilot service for observability and operations teams that transforms logs, events, traces, and incident data into evidence-backed root cause candidates, incident narratives, confidence signals, and remediation context.",
    bullets: [
      "Log and event ingestion",
      "Event clustering and trigger analysis",
      "Incident window detection",
      "Graph-based RCA",
      "Evidence bundles and LLM summaries",
      "Human-reviewed remediation context",
    ],
    href: "/platforms/scrca",
  },
  {
    title: "SIP: Semantic Intelligence Pilot",
    desc: "A pilot service for enterprise knowledge, data, and workflow intelligence that helps organizations create AI-ready semantic context layers across documents, data assets, metadata, policies, and operational knowledge.",
    bullets: [
      "Knowledge ingestion",
      "Metadata and semantic enrichment",
      "Retrieval and context assembly",
      "Evidence-backed answers",
      "Governance and access boundaries",
      "Agent-ready enterprise context",
    ],
    href: "/platforms/sip",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.14),transparent_30%),linear-gradient(to_bottom,transparent,rgba(3,7,18,1))]" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Enterprise AI Strategy. Agentic Systems.{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Semantic Intelligence.
                </span>
              </h1>
              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
                ShandayAI helps enterprises move from AI experiments to governed, measurable AI
                platforms across heterogeneous data, cloud, application, and model ecosystems.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/advisory"
                  className="rounded-2xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-200"
                >
                  Explore AI Strategy
                </Link>
                <Link
                  href="/platforms"
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3 font-semibold text-white hover:bg-white/[0.06]"
                >
                  Explore Semantic Platforms
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What We Do</h2>
              <p className="mt-5 text-lg leading-8 text-slate-400">
                ShandayAI helps technology leaders define AI strategy, modernize data platforms,
                design agentic workflows, evaluate vendors, and build semantic intelligence systems
                that can be governed, measured, and scaled.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {whatWeDo.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-8 transition hover:border-cyan-300/25"
                >
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{item.desc}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm text-cyan-300">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How We Help */}
        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
              How We Help
            </h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {howWeHelp.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Semantic Platforms & Pilots */}
        <section id="platforms" className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Semantic Platforms & Pilots
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-400">
                ShandayAI is building semantic intelligence services that connect raw enterprise
                data, operational signals, logs, documents, metadata, embeddings, graph relationships,
                and LLM reasoning into explainable and auditable AI workflows. These platform
                services are available for targeted pilots and designed with future cloud and
                marketplace deployment patterns in mind.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {pilots.map((pilot) => (
                <div
                  key={pilot.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-8"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
                    Pilot service
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">{pilot.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{pilot.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {pilot.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={pilot.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200"
                  >
                    View pilot details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FounderSection />

        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
