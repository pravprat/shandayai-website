import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Compass,
  Database,
  GitBranch,
  Layers3,
  Mail,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { EMAIL_ADVISORY, EMAIL_PLATFORMS } from "./components/contact";

const thesisBlocks = [
  {
    title: "AI Tools",
    desc: "Copilots, assistants, LLMs, agents, automation",
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    title: "Enterprise Context",
    desc: "Data, documents, metadata, policies, workflows, customer and product knowledge",
    icon: <Database className="h-5 w-5" />,
  },
  {
    title: "Trust Layer",
    desc: "Security, access, lineage, source authority, governance, evaluation",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    title: "Workflow Integration",
    desc: "Human approvals, escalation, tool access, operational processes",
    icon: <GitBranch className="h-5 w-5" />,
  },
  {
    title: "Validated Value",
    desc: "Productivity, cost reduction, customer impact, better decisions, risk reduction",
    icon: <Target className="h-5 w-5" />,
  },
];

const businessLines = [
  {
    title: "AI Strategy & Architecture",
    accent: "purple",
    forLabel: "Executives, platform leaders, data leaders, AI leaders, product teams, investors, and technology vendors.",
    helps: [
      "Enterprise AI strategy",
      "AI-ready data architecture",
      "Agentic workflow design",
      "RAG and semantic retrieval strategy",
      "Vendor and platform evaluation",
      "Governance, risk, and measurement",
      "Fractional AI operating partner support",
    ],
    outcome:
      "Clear decisions, practical architecture, better platform choices, and measurable AI adoption.",
    href: "/advisory",
    cta: "Explore Advisory",
    email: EMAIL_ADVISORY,
  },
  {
    title: "Reliability Intelligence Platform",
    accent: "cyan",
    forLabel:
      "Operations, SRE, platform, and infrastructure teams that need evidence-backed root-cause analysis from logs and incident data.",
    helps: [
      "Evidence-backed RCA from logs and alerts",
      "Local container trials and pilots",
      "AI-assisted investigation and reporting",
      "Enterprise deployment options",
      "Governance, auditability, and integrations",
      "Scoped pilots and design partner programs",
    ],
    outcome:
      "Move from alert noise to clear root-cause findings, evidence-backed reports, and guided next steps.",
    href: "/platforms",
    cta: "Explore Platforms",
    email: EMAIL_PLATFORMS,
  },
];

const audiences = [
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Enterprises",
    desc: "For teams moving from AI pilots to governed AI operating models.",
  },
  {
    icon: <Layers3 className="h-6 w-6" />,
    title: "Platform and data teams",
    desc: "For teams building AI-ready data, retrieval, agent workflows, and evaluation patterns.",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Technology vendors and startups",
    desc: "For teams needing enterprise architecture narrative, product positioning, and buyer-aligned differentiation.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Investors and expert networks",
    desc: "For teams evaluating AI, data, cloud, storage, observability, and platform infrastructure markets.",
  },
];

const proofCards = [
  {
    icon: <Compass className="h-5 w-5" />,
    title: "Enterprise AI operating experience",
    desc: "20+ years across AI, data, product, platform, cloud, analytics, and infrastructure ecosystems.",
  },
  {
    icon: <GitBranch className="h-5 w-5" />,
    title: "Architecture-first thinking",
    desc: "Focus on data readiness, context, governance, workflows, evaluation, and operating model before tools.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Semantic intelligence thesis",
    desc: "Move beyond generic AI answers toward evidence-backed reasoning, traceability, and validated action.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Pilot-friendly execution",
    desc: "Start with scoped advisory engagements or targeted platform pilots, then expand based on evidence and value.",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Business-value orientation",
    desc: "Measure adoption, quality, cost, productivity, risk reduction, customer impact, and operating leverage.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.12),transparent_30%),linear-gradient(to_bottom,transparent,rgba(3,7,18,1))]" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Turn enterprise AI from scattered experiments into trusted operating systems.
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                ShandayAI helps leaders connect AI strategy, AI-ready data, semantic intelligence,
                agentic workflows, governance, and measurable business value.
              </p>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-400">
                Most organizations already have AI tools. The harder problem is making those tools
                work with trusted data, business context, security boundaries, workflows, and
                measurable outcomes. ShandayAI helps enterprises move from fragmented pilots to
                governed AI systems that produce evidence-backed reasoning and validated action.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/advisory"
                  className="inline-flex items-center gap-2 rounded-2xl bg-purple-400 px-6 py-3 font-semibold text-slate-950 hover:bg-purple-300"
                >
                  Explore AI Strategy
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/platforms"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-3 font-semibold text-white hover:bg-white/[0.08]"
                >
                  Explore Platforms
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-6 text-sm text-slate-500">
                <a href={`mailto:${EMAIL_ADVISORY}`} className="text-slate-400 hover:text-purple-300">
                  {EMAIL_ADVISORY}
                </a>
                <span className="mx-3 text-slate-600">·</span>
                <a href={`mailto:${EMAIL_PLATFORMS}`} className="text-slate-400 hover:text-cyan-300">
                  {EMAIL_PLATFORMS}
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Core thesis */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                AI tools are not the strategy.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-400">
                Copilots, assistants, model APIs, SaaS AI features, RAG demos, and agent frameworks
                are useful. But they do not automatically create enterprise value. Real AI value
                requires AI-ready data, semantic context, governance, workflow integration,
                evaluation, and adoption measurement.
              </p>
            </div>
            <div className="mt-12 overflow-x-auto pb-2">
              <div className="flex min-w-max gap-3 lg:min-w-0 lg:grid lg:grid-cols-5">
                {thesisBlocks.map((block, index) => (
                  <div key={block.title} className="relative w-52 shrink-0 lg:w-auto">
                    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                      <div className="inline-flex rounded-lg bg-white/[0.06] p-2 text-purple-300">
                        {block.icon}
                      </div>
                      <h3 className="mt-4 text-sm font-semibold text-white">{block.title}</h3>
                      <p className="mt-2 text-xs leading-5 text-slate-400">{block.desc}</p>
                    </div>
                    {index < thesisBlocks.length - 1 && (
                      <div className="absolute right-[-0.75rem] top-1/2 z-10 hidden -translate-y-1/2 text-slate-500 lg:block">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-8 max-w-3xl text-base font-medium leading-8 text-slate-300">
              The goal is not more AI activity. The goal is trusted AI execution that creates
              measurable value.
            </p>
          </div>
        </section>

        {/* Two business lines */}
        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Two ways ShandayAI helps.
            </h2>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {businessLines.map((line) => (
                <div
                  key={line.title}
                  className={`rounded-2xl border bg-white/[0.04] p-8 ${
                    line.accent === "purple"
                      ? "border-purple-300/25"
                      : "border-cyan-300/25"
                  }`}
                >
                  <h3 className="text-2xl font-semibold">{line.title}</h3>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    For
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{line.forLabel}</p>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    What it helps with
                  </p>
                  <ul className="mt-3 space-y-2">
                    {line.helps.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                        <CheckCircle2
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            line.accent === "purple" ? "text-purple-300" : "text-cyan-300"
                          }`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Outcome
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{line.outcome}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <Link
                      href={line.href}
                      className={`inline-flex items-center gap-2 text-sm font-semibold ${
                        line.accent === "purple"
                          ? "text-purple-300 hover:text-purple-200"
                          : "text-cyan-300 hover:text-cyan-200"
                      }`}
                    >
                      {line.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={`mailto:${line.email}`}
                      className="text-xs text-slate-500 hover:text-slate-300"
                    >
                      {line.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform preview */}
        <section id="platforms" className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Reliability intelligence from logs to root cause.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-400">
                ShandayAI helps teams move from raw logs and alerts to evidence-backed RCA,
                AI-assisted reports, and enterprise deployment options.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-cyan-300/25 bg-cyan-300/5 p-7">
                <h3 className="text-lg font-semibold">ShandayAI RCA Core</h3>
                <p className="mt-2 text-sm font-medium text-slate-300">Run deterministic RCA locally.</p>
                <p className="mt-4 text-sm leading-6 text-slate-400">
                  Lightweight container for evidence-backed root-cause findings from logs and
                  incident data.
                </p>
              </div>

              <div className="rounded-2xl border border-teal-300/25 bg-teal-300/5 p-7">
                <h3 className="text-lg font-semibold">ShandayAI RCA Assist</h3>
                <p className="mt-2 text-sm font-medium text-slate-300">
                  Add AI-assisted investigation and reporting.
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-400">
                  RCA Core plus AI-assisted summaries, hypotheses, remediation suggestions, and
                  support-ready incident reports.
                </p>
              </div>

              <div className="rounded-2xl border border-violet-300/25 bg-violet-300/5 p-7">
                <h3 className="text-lg font-semibold">ShandayAI Reliability Intelligence Platform</h3>
                <p className="mt-2 text-sm font-medium text-slate-300">
                  Scale incident intelligence across the enterprise.
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-400">
                  Governed incident workflows with evidence bundles, auditability, integrations,
                  and enterprise deployment options.
                </p>
              </div>
            </div>

            <Link
              href="/platforms"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200"
            >
              View all platform offerings
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Who it's for */}
        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Built for leaders who need AI clarity, not more noise.
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {audiences.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <div className="inline-flex rounded-lg bg-white/[0.06] p-2.5 text-purple-300">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why different */}
        <section id="about" className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Strategy depth plus platform execution.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-400">
                ShandayAI combines executive AI strategy with hands-on enterprise platform
                architecture. The work is grounded in production AI systems, large-scale data
                platforms, cloud and hybrid infrastructure, semantic retrieval, RAG, agentic
                workflows, observability, governance, and measurable adoption.
              </p>
              <p className="mt-5 text-sm leading-7 text-slate-400">
                Founder-led by Praveen Pratury, an enterprise AI and data platform operator with
                20+ years of experience across AI platforms, data strategy, cloud infrastructure,
                semantic retrieval, RAG, agentic workflows, and production AI systems.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {proofCards.map((card, index) => (
                <div
                  key={card.title}
                  className={`rounded-2xl border border-white/10 bg-white/[0.04] p-6 ${
                    index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="inline-flex rounded-lg bg-purple-300/10 p-2 text-purple-300">
                    {card.icon}
                  </div>
                  <h3 className="mt-4 font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to move from AI experiments to trusted AI execution?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400">
              Whether you need AI strategy, platform architecture, vendor clarity, semantic
              intelligence, or a targeted pilot, ShandayAI can help you create a practical path
              forward.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-purple-300/25 bg-purple-300/5 p-6">
                <h3 className="font-semibold text-white">AI Strategy & Architecture</h3>
                <Link
                  href="/advisory"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-purple-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-purple-300"
                >
                  Start an Advisory Conversation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`mailto:${EMAIL_ADVISORY}`}
                  className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400 hover:text-purple-300"
                >
                  <Mail className="h-3.5 w-3.5" />
                  {EMAIL_ADVISORY}
                </a>
              </div>
              <div className="rounded-2xl border border-cyan-300/25 bg-cyan-300/5 p-6">
                <h3 className="font-semibold text-white">Reliability Intelligence Platform</h3>
                <Link
                  href="/platforms"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-200"
                >
                  Discuss a Platform Pilot
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`mailto:${EMAIL_PLATFORMS}`}
                  className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-300"
                >
                  <Mail className="h-3.5 w-3.5" />
                  {EMAIL_PLATFORMS}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
