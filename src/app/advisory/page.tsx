import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Cloud,
  Compass,
  Database,
  GitBranch,
  Layers3,
  Mail,
  Scale,
  ShieldCheck,
} from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { EMAIL_ADVISORY } from "../components/contact";

export const metadata: Metadata = {
  title: "AI Strategy & Architecture | ShandayAI",
  description:
    "Founder-led enterprise AI strategy and architecture advisory — GenAI platforms, agentic AI, RAG, semantic retrieval, governance, heterogeneous infrastructure, and measurable adoption.",
};

const helpAreas = [
  {
    icon: <Compass className="h-6 w-6" />,
    title: "Enterprise AI Strategy",
    desc: "Roadmaps for GenAI, agentic AI, enterprise assistants, workflow automation, knowledge intelligence, and AI adoption across business and technology teams.",
  },
  {
    icon: <Layers3 className="h-6 w-6" />,
    title: "AI & Data Platform Architecture",
    desc: "Architecture guidance across data platforms, semantic layers, lakehouse/warehouse patterns, retrieval systems, model gateways, observability, and cloud-native infrastructure.",
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "Agentic AI Operating Models",
    desc: "Patterns for agents, tools, workflow orchestration, human-in-the-loop approvals, prompt/model versioning, evaluation gates, escalation, and operational support.",
  },
  {
    icon: <GitBranch className="h-6 w-6" />,
    title: "RAG & Semantic Retrieval",
    desc: "Design patterns for enterprise knowledge retrieval, grounding, citations, metadata, permissions, context assembly, evaluation, and hallucination control.",
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Heterogeneous Infrastructure Strategy",
    desc: "Architecture tradeoffs across SaaS, PaaS, cloud, on-prem, hybrid-cloud, customer-managed, storage, GPU, inference, and edge deployment models.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Governance, Risk & Measurement",
    desc: "Practical guardrails for data handling, access boundaries, AI usage policies, vendor risk, evaluation, monitoring, cost tracking, adoption, and business-value measurement.",
  },
];

const valueBullets = [
  "Clarify AI strategy and investment priorities",
  "Evaluate build, buy, and partner options",
  "Design scalable enterprise AI and data platform foundations",
  "Define reusable RAG, agent, and model gateway patterns",
  "Establish governance, evaluation, and adoption metrics",
  "Translate AI architecture into business outcomes, cost visibility, and execution roadmaps",
];

const engagements = [
  {
    icon: <Compass className="h-6 w-6" />,
    title: "AI Strategy Sprint",
    duration: "2–4 weeks",
    desc: "Clarify priorities, assess current architecture, identify gaps, define target-state AI/data platform strategy, and produce an executive roadmap.",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Architecture & Vendor Review",
    duration: "Focused engagement",
    desc: "Evaluate platform choices, vendor positioning, cloud/on-prem patterns, AI tools, data architecture, model deployment options, and cost/performance tradeoffs.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Fractional AI Operating Partner",
    duration: "Ongoing advisory",
    desc: "Partner with executives and platform teams on AI roadmap execution, architecture reviews, governance, team guidance, vendor strategy, and operating cadence.",
  },
];

const goodFitBullets = [
  "AI pilots are growing but platform standards are unclear",
  "Data platforms are not yet AI-ready",
  "RAG or assistant prototypes are not trusted enough for production",
  "Teams need a build/buy/partner strategy",
  "Vendor choices are hard to compare",
  "Leaders need measurable adoption, risk, cost, and business-value metrics",
  "Platform teams need reusable patterns for agents, retrieval, model access, and governance",
];

export default function AdvisoryPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.20),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.10),transparent_35%),linear-gradient(to_bottom,transparent,rgba(3,7,18,1))]" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
                <Compass className="h-4 w-4 text-purple-300" />
                AI Strategy & Architecture
              </div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                AI Strategy & Architecture for the Agentic Enterprise
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                ShandayAI helps technology leaders design and operationalize enterprise AI across
                heterogeneous data, cloud, application, model, and infrastructure environments.
              </p>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-400">
                We advise leaders on how to move from scattered GenAI pilots and disconnected tools
                to reusable AI platforms, governed data foundations, agentic workflows, measurable
                adoption, and production-ready execution.
              </p>
              <a
                href={`mailto:${EMAIL_ADVISORY}?subject=${encodeURIComponent("Advisory conversation")}`}
                className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-purple-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-purple-300"
              >
                Start an Advisory Conversation
                <ArrowRight className="h-5 w-5" />
              </a>
              <p className="mt-5 text-sm text-slate-500">
                <a
                  href={`mailto:${EMAIL_ADVISORY}`}
                  className="text-slate-400 transition hover:text-purple-300"
                >
                  {EMAIL_ADVISORY}
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Opening Point of View */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              AI strategy is no longer a model-selection exercise.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-slate-400">
              <p>
                Enterprise AI now spans data platforms, semantic retrieval, model gateways,
                agentic workflows, governance, security, observability, GPU/inference economics,
                cloud/on-prem deployment patterns, and business adoption. The hard part is not
                launching another assistant. The hard part is designing the operating layer that
                makes AI reusable, trusted, measurable, and aligned to business outcomes.
              </p>
              <p>
                ShandayAI helps organizations make those decisions clearly: what to build, what to
                buy, where to partner, how to govern, how to measure, and how to scale.
              </p>
            </div>
          </div>
        </section>

        {/* What We Help With */}
        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
                What we help with
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Strategy and architecture across the full enterprise AI stack.
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {helpAreas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-purple-300/25"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-purple-300/10 p-3 text-purple-300 ring-1 ring-purple-300/20">
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{area.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Where We Add Value */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
                  Where we add value
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  From architecture choices to operating leverage.
                </h2>
                <p className="mt-6 text-base leading-8 text-slate-400">
                  ShandayAI is built for leaders who need clear thinking across both business and
                  technical layers. We help teams connect strategy to platform decisions, platform
                  decisions to delivery patterns, and delivery patterns to measurable outcomes.
                </p>
              </div>
              <ul className="space-y-4">
                {valueBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-slate-300">
                    <Scale className="mt-0.5 h-5 w-5 shrink-0 text-purple-300" />
                    <span className="text-sm leading-6 sm:text-base">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Advisory Engagements */}
        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
                Engagements
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Advisory engagements built for real decisions.
              </h2>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {engagements.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-7"
                >
                  <div className="inline-flex w-fit rounded-xl bg-purple-300/10 p-3 text-purple-300 ring-1 ring-purple-300/20">
                    {item.icon}
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-purple-300">
                    {item.duration}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-6 text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder-Led Perspective */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
              Founder-led
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Founder-led by an enterprise AI and data platform operator.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-slate-400">
              <p>
                ShandayAI is led by Praveen Pratury, an enterprise AI and data platform leader with
                20+ years of experience across AI platforms, data strategy, cloud infrastructure,
                semantic retrieval, RAG, agentic workflows, observability, analytics, and production
                AI systems.
              </p>
              <p>
                His work spans enterprise AI strategy, AI/data platform architecture, GenAI
                enablement, hybrid-cloud and on-prem deployment patterns, model gateways,
                governance, evaluation, and large-scale systems tied to measurable business outcomes.
              </p>
              <p>
                The advisory practice combines executive-level strategy with hands-on platform
                architecture experience, helping clients move from AI ambition to practical roadmap,
                implementation patterns, and measurable value.
              </p>
            </div>
          </div>
        </section>

        {/* Good-Fit Clients */}
        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
                  Best fit
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Organizations serious about enterprise AI.
                </h2>
                <p className="mt-6 text-base leading-8 text-slate-400">
                  ShandayAI is a strong fit for organizations that are serious about enterprise AI
                  but need clarity on architecture, governance, operating model, and execution.
                </p>
              </div>
              <ul className="space-y-3">
                {goodFitBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-300" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Move from AI experiments to an enterprise AI operating model.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400">
              Schedule an advisory conversation to discuss your AI strategy, architecture
              tradeoffs, vendor choices, platform roadmap, or agentic AI operating model.
            </p>
            <a
              href={`mailto:${EMAIL_ADVISORY}?subject=${encodeURIComponent("Advisory conversation")}`}
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-purple-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-purple-300"
            >
              <Mail className="h-5 w-5" />
              {EMAIL_ADVISORY}
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
