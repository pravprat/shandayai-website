import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  Database,
  GitBranch,
  Network,
  ShieldCheck,
} from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactSection from "../components/ContactSection";

export const metadata: Metadata = {
  title: "Semantic Intelligence Platforms | ShandayAI",
  description:
    "SCRCA for observability and operational intelligence. SIP for enterprise knowledge, retrieval, and evidence-backed reasoning.",
};

const products = [
  {
    slug: "scrca",
    name: "SCRCA",
    fullName: "Semantic Root Cause Analysis",
    desc: "Evidence-backed RCA for observability, logs, incidents, and operational intelligence. Includes customer-hosted Runtime RCA for Spark, JVM, and Kubernetes.",
    icon: <Network className="h-7 w-7" />,
    href: "/platforms/scrca",
    accent: "cyan",
  },
  {
    slug: "sip",
    name: "SIP",
    fullName: "Semantic Intelligence Platform",
    desc: "Enterprise knowledge, data retrieval, and evidence-backed reasoning over documents, workflows, and domain context.",
    icon: <Database className="h-7 w-7" />,
    href: "/platforms/sip",
    accent: "purple",
  },
];

const principles = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Evidence-backed reasoning",
    desc: "Outputs include confidence, lineage, alternatives, and auditability — not opaque summaries.",
  },
  {
    icon: <GitBranch className="h-6 w-6" />,
    title: "Knowledge graph and causal signals",
    desc: "Connect raw data, metadata, embeddings, and relationships into operational context.",
  },
  {
    icon: <BrainCircuit className="h-6 w-6" />,
    title: "AI-ready enterprise context layer",
    desc: "Semantic context that helps enterprises move beyond generic chat toward trusted AI decision support.",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Agent-assisted ingestion",
    desc: "Schema understanding, eventization, clustering, graph reasoning, and narrative generation.",
  },
];

export default function PlatformsPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.22),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.20),transparent_30%),linear-gradient(to_bottom,transparent,rgba(3,7,18,1))]" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
                Semantic Intelligence Platforms
              </div>
              <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                Reason over complex
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  enterprise data and signals.
                </span>
              </h1>
              <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
                ShandayAI is building semantic intelligence capabilities that connect raw data,
                metadata, embeddings, knowledge graphs, evidence bundles, and LLM reasoning into
                explainable, auditable systems.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={product.href}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:border-cyan-300/30"
              >
                <div
                  className={`mb-6 inline-flex rounded-2xl p-3 ring-1 ${
                    product.accent === "cyan"
                      ? "bg-cyan-300/10 text-cyan-300 ring-cyan-300/20"
                      : "bg-purple-300/10 text-purple-300 ring-purple-300/20"
                  }`}
                >
                  {product.icon}
                </div>
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                  {product.fullName}
                </p>
                <h2 className="mt-2 text-3xl font-semibold">{product.name}</h2>
                <p className="mt-4 leading-7 text-slate-400">{product.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-cyan-300">
                  Explore {product.name}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Shared Platform Principles
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Beyond generic chat toward trusted AI decision support.
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {principles.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-cyan-300/10 p-3 text-cyan-300 ring-1 ring-cyan-300/20">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.desc}</p>
                </div>
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
