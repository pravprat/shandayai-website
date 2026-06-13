import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Brain, Building2, Cloud, Compass, Layers3, Scale, Shield, Sparkles, Users } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactSection from "../components/ContactSection";
import { EMAIL_ADVISORY } from "../components/contact";

export const metadata: Metadata = {
  title: "AI Advisory & Strategy | ShandayAI",
  description:
    "Executive AI strategy, platform architecture, GenAI/RAG roadmaps, vendor evaluation, and enterprise AI operating models.",
};

const questions = [
  "What AI capabilities should we build, buy, or partner for?",
  "How should we architect enterprise AI across cloud, hybrid, and on-prem environments?",
  "How do we make GenAI, RAG, agents, model gateways, governance, and evaluation production-ready?",
  "How do we measure value, adoption, risk, and operating impact?",
  "How do we move from fragmented AI tools to a scalable AI operating model?",
];

const advisoryAreas = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Enterprise AI and GenAI strategy",
    desc: "Define the roadmap from experimentation to governed production AI.",
  },
  {
    icon: <Layers3 className="h-6 w-6" />,
    title: "AI and data platform architecture",
    desc: "Design scalable foundations across cloud, hybrid, and on-prem environments.",
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Infrastructure and vendor evaluation",
    desc: "Evaluate cloud, SaaS, PaaS, storage, observability, and AI infrastructure options.",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "RAG, agents, and AI governance",
    desc: "Make semantic retrieval, agentic workflows, model gateways, and evaluation production-ready.",
  },
  {
    icon: <Scale className="h-6 w-6" />,
    title: "GPU, training, and inference tradeoffs",
    desc: "Balance cost, performance, and deployment patterns for AI workloads.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "AI operating model and adoption",
    desc: "Executive roadmap planning, adoption strategy, and fractional AI operating partner support.",
  },
];

export default function AdvisoryPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.22),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.18),transparent_30%),linear-gradient(to_bottom,transparent,rgba(3,7,18,1))]" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
                <Compass className="h-4 w-4 text-purple-300" />
                AI Advisory & Strategy
              </div>
              <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                Executive guidance for
                <span className="block bg-gradient-to-r from-purple-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  production-ready AI.
                </span>
              </h1>
              <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
                For organizations that need executive-level guidance on AI strategy, platform
                architecture, vendor evaluation, data modernization, and enterprise adoption.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
              Critical Questions
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              We help clients answer the questions that matter.
            </h2>
            <ul className="mt-10 space-y-5">
              {questions.map((question) => (
                <li
                  key={question}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-lg text-slate-300"
                >
                  <Building2 className="mt-1 h-5 w-5 shrink-0 text-purple-300" />
                  {question}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
                Advisory Areas
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Strategy, architecture, and operating model.
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {advisoryAreas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 hover:border-purple-300/30"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-purple-300/10 p-3 text-purple-300 ring-1 ring-purple-300/20">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{area.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
                Who We Work With
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Technology leaders, platform teams, and executives.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-400">
                We work with CTOs, CDOs, platform organizations, product teams, and business
                executives who need to move from AI experimentation to governed, production-ready
                systems with measurable impact.
              </p>
            </div>
            <div className="rounded-[2rem] border border-purple-300/20 bg-purple-300/5 p-8">
              <Shield className="h-8 w-8 text-purple-300" />
              <h3 className="mt-6 text-2xl font-semibold">Fractional AI operating partner</h3>
              <p className="mt-4 leading-7 text-slate-400">
                Engagements can include strategy sprints, architecture reviews, vendor evaluations,
                governance frameworks, and ongoing advisory support as you scale AI across the
                enterprise.
              </p>
              <Link
                href={`mailto:${EMAIL_ADVISORY}`}
                className="mt-6 inline-flex items-center gap-2 text-purple-300 hover:text-purple-200"
              >
                Email {EMAIL_ADVISORY}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <ContactSection variant="advisory" />
      </main>

      <SiteFooter />
    </div>
  );
}
