import Link from "next/link";
import { ArrowRight, BrainCircuit, Database, Network, ShieldCheck } from "lucide-react";

const platformAreas = [
  {
    title: "SCRCA: Semantic RCA for Infrastructure and Observability",
    desc: "Evidence-backed root cause analysis for observability, logs, incidents, and operational intelligence — including customer-hosted Runtime RCA for Spark, JVM, and Kubernetes.",
    href: "/platforms/scrca",
    icon: <Network className="h-6 w-6" />,
  },
  {
    title: "SIP: Semantic Intelligence Platform for Enterprise Knowledge and Data",
    desc: "Semantic retrieval, evidence-backed reasoning, and context layers over enterprise documents, workflows, and domain knowledge.",
    href: "/platforms/sip",
    icon: <Database className="h-6 w-6" />,
  },
  {
    title: "Evidence-Backed Reasoning",
    desc: "Deterministic root cause intelligence with confidence, lineage, alternatives, and auditability — not opaque summaries.",
    icon: <ShieldCheck className="h-6 w-6" />,
  },
  {
    title: "Governed Agentic Operations",
    desc: "Agent-assisted ingestion, schema understanding, eventization, clustering, graph reasoning, and narrative generation with human oversight.",
    icon: <BrainCircuit className="h-6 w-6" />,
  },
];

const principles = [
  "Grounding, evidence, and control",
  "Human-in-the-loop approval",
  "Trust before autonomy",
  "Governed remediation",
];

export default function PlatformsHomeSection() {
  return (
    <section id="platforms" className="border-y border-white/10 bg-gradient-to-b from-slate-950 to-[#030712]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Semantic Intelligence Platforms
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Explainable AI systems for operational and enterprise data.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-400">
            ShandayAI builds semantic platforms that connect raw enterprise data, operational
            signals, documents, logs, metadata, embeddings, knowledge graphs, evidence bundles,
            and LLM reasoning into auditable systems — moving beyond generic chat toward trusted
            AI decision support.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {platformAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"
            >
              <div className="mb-5 inline-flex rounded-2xl bg-cyan-300/10 p-3 text-cyan-300 ring-1 ring-cyan-300/20">
                {area.icon}
              </div>
              <h3 className="text-lg font-semibold leading-7 text-white">{area.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{area.desc}</p>
              {area.href && (
                <Link
                  href={area.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
          <h3 className="text-lg font-semibold text-white">Human-in-the-Loop Control</h3>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
            ShandayAI develops platform patterns where agents coordinate workflows, semantic
            intelligence grounds context, deterministic RCA preserves evidence, and humans approve
            high-risk actions before execution.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {principles.map((principle) => (
              <span
                key={principle}
                className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200"
              >
                {principle}
              </span>
            ))}
          </div>
          <Link
            href="/platforms"
            className="mt-8 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200"
          >
            View all platform capabilities
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
