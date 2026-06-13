import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactSection from "../components/ContactSection";
import { EMAIL_ADVISORY } from "../components/contact";

export const metadata: Metadata = {
  title: "AI Strategy & Architecture | ShandayAI",
  description:
    "Enterprise AI strategy, agentic AI architecture, GenAI platforms, RAG, governance, and heterogeneous deployment patterns.",
};

const focusAreas = [
  {
    title: "Enterprise AI Roadmaps",
    desc: "Strategy, architecture, operating model, governance, and measurable execution plans.",
  },
  {
    title: "Agentic AI Enablement",
    desc: "Reusable agent patterns, tool access, retrieval boundaries, evaluation gates, and adoption playbooks.",
  },
  {
    title: "Heterogeneous Platform Architecture",
    desc: "Patterns across SaaS, PaaS, cloud, on-prem, hybrid-cloud, data platforms, observability, storage, and GPUs.",
  },
  {
    title: "AI Governance & Measurement",
    desc: "Guardrails, risk controls, quality measurement, lineage, auditability, and business-value metrics.",
  },
];

export default function AdvisoryPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.18),transparent_28%),linear-gradient(to_bottom,transparent,rgba(3,7,18,1))]" />
          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
                <Compass className="h-4 w-4 text-purple-300" />
                AI Strategy & Architecture
              </div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                From AI ambition to governed execution.
              </h1>
              <p className="mx-auto mt-6 text-lg leading-8 text-slate-300">
                ShandayAI advises technology leaders on enterprise AI strategy, data platform
                architecture, agentic workflows, vendor evaluation, and adoption — with a focus on
                systems that can be governed, measured, and scaled.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="text-center text-3xl font-semibold tracking-tight">How We Help</h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {focusAreas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <h3 className="font-semibold text-white">{area.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center lg:px-8">
            <p className="text-lg leading-8 text-slate-300">
              Engagements include strategy sprints, architecture reviews, vendor assessments, and
              ongoing fractional operating partner support.
            </p>
            <Link
              href={`mailto:${EMAIL_ADVISORY}`}
              className="mt-6 inline-flex items-center gap-2 text-purple-300 hover:text-purple-200"
            >
              {EMAIL_ADVISORY}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <ContactSection variant="advisory" />
      </main>

      <SiteFooter />
    </div>
  );
}
