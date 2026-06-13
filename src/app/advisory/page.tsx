import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Compass,
  Database,
  Layers3,
  Mail,
  Rocket,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { EMAIL_ADVISORY } from "../components/contact";

export const metadata: Metadata = {
  title: "AI Strategy & Architecture | ShandayAI",
  description:
    "ShandayAI helps enterprises, startups, investors, and platform teams turn AI ambition into a governed operating model: AI-ready data, agentic workflows, governance, and measurable adoption.",
};

const strategyQuestions = [
  "Are these tools connected to trusted enterprise data?",
  "Can AI systems respect data locality, access boundaries, security, and compliance requirements?",
  "Does the data carry enough business context for models and agents to reason correctly?",
  "Are workflows designed for human approval, escalation, auditability, and rollback?",
  "Can leaders measure quality, adoption, cost, risk, customer impact, and productivity lift?",
];

const dataFlowStages = [
  {
    title: "Raw Enterprise Data",
    examples:
      "Databases, warehouses, lakehouses, SaaS systems, documents, tickets, logs, events, customer interactions, product records, financial records, policies, and operational workflows.",
  },
  {
    title: "AI-Ready Data Pivots",
    examples:
      "Data quality, ownership, lineage, freshness, metadata, access controls, data products, data locality, privacy, compliance boundaries, and source authority.",
  },
  {
    title: "Semantic and Business Context",
    examples:
      "Business entities, customer context, product context, process context, knowledge graphs, taxonomy, ontology, retrieval boundaries, citations, definitions, and relationships.",
  },
  {
    title: "Models and Agentic Workflows",
    examples:
      "RAG, semantic retrieval, model gateways, assistants, workflow agents, tool access, prompt and model versioning, human approvals, evaluation gates, and monitoring.",
  },
  {
    title: "Validated Action and Value Creation",
    examples:
      "Customer impact, productivity lift, cost reduction, cycle-time reduction, risk reduction, better decisions, trusted automation, measurable adoption, and operating leverage.",
  },
];

const problemCards = [
  {
    title: "Scattered AI pilots",
    problem:
      "Teams are experimenting with GenAI tools, assistants, copilots, and workflow automation, but there is no common platform, governance, or measurement model.",
    help: "Define reusable AI platform patterns, operating standards, governance, and adoption metrics.",
  },
  {
    title: "Data is not AI-ready",
    problem:
      "Enterprise data exists across warehouses, lakehouses, SaaS systems, documents, logs, and operational platforms, but it lacks quality, ownership, metadata, semantic context, or safe retrieval boundaries.",
    help: "Design AI-ready data products, semantic layers, metadata patterns, data locality strategies, retrieval boundaries, and data quality controls.",
  },
  {
    title: "RAG and agents stuck in prototype mode",
    problem:
      "RAG and assistant demos work in narrow cases but are not reliable, explainable, permission-aware, or production-ready.",
    help: "Define grounding, citations, context assembly, evaluation, escalation, and human-in-the-loop patterns.",
  },
  {
    title: "Vendor and platform confusion",
    problem:
      "Leaders need to compare hyperscalers, SaaS and PaaS platforms, data platforms, model providers, observability tools, GPU and inference options, and AI vendors.",
    help: "Create decision frameworks, vendor scorecards, architecture tradeoff analysis, and build, buy, partner recommendations.",
  },
  {
    title: "AI governance slows delivery",
    problem:
      "Risk, compliance, security, and legal requirements are often handled late, slowing adoption or creating shadow AI.",
    help: "Build governance into architecture through data boundaries, access policies, prompt and model versioning, evaluation gates, auditability, and usage controls.",
  },
  {
    title: "Unclear business value",
    problem:
      "AI activity is increasing, but leaders cannot clearly measure adoption, quality, time saved, cost, risk reduction, customer impact, or productivity impact.",
    help: "Define value telemetry, adoption metrics, cost per workflow, quality measures, and executive operating dashboards.",
  },
];

const audiences = [
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Enterprises",
    forWhom:
      "For CIO, CTO, CDO, CDAO, product, platform, data, AI, and security leaders building enterprise AI foundations.",
    value:
      "AI strategy, target architecture, governance, platform roadmap, vendor decisions, operating model, adoption metrics.",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Startups and technology vendors",
    forWhom:
      "For AI, data, cloud, observability, storage, and infrastructure companies that need sharper enterprise positioning and product-market clarity.",
    value:
      "Product strategy, architecture narrative, enterprise buyer feedback, competitive differentiation, roadmap pressure testing.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Investors and expert networks",
    forWhom:
      "For investors and research teams evaluating AI and data infrastructure markets, vendors, adoption trends, or platform categories.",
    value:
      "Independent technical perspective, market interpretation, buyer-adoption risk, category assessment.",
  },
  {
    icon: <Layers3 className="h-6 w-6" />,
    title: "Platform and product teams",
    forWhom:
      "For teams building RAG, agents, AI assistants, data products, observability intelligence, or semantic platforms.",
    value:
      "Architecture review, design patterns, governance model, evaluation approach, production-readiness guidance.",
  },
];

const engagements = [
  {
    icon: <Compass className="h-6 w-6" />,
    title: "AI Strategy Sprint",
    duration: "2 to 4 weeks",
    bestFor: "Executives or platform leaders who need a clear AI direction and a practical roadmap.",
    howItWorks: [
      "Discovery with business and technology stakeholders",
      "Current-state review of data, platforms, AI pilots, tools, workflows, and governance",
      "Prioritization of use cases and value pools",
      "Target-state AI and data platform architecture",
      "Roadmap across quick wins, platform foundations, and longer-term capabilities",
    ],
    deliverables: [
      "Executive AI strategy memo",
      "Target-state architecture view",
      "Prioritized use-case roadmap",
      "Build, buy, partner recommendations",
      "Risk, governance, and value measurement model",
    ],
    benefit:
      "Leadership alignment, reduced ambiguity, and a practical path from AI pilots to enterprise AI execution.",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Architecture and Vendor Review",
    duration: "Focused engagement",
    bestFor:
      "Teams evaluating cloud options, data platforms, model providers, AI tools, GPU and inference architecture, observability platforms, vendor solutions, or agentic workflow platforms.",
    howItWorks: [
      "Review current architecture, constraints, and vendor landscape",
      "Compare platform choices against business, cost, security, compliance, and operating requirements",
      "Identify integration risks, lock-in risks, governance gaps, scalability issues, and cost concerns",
      "Provide recommendation options with tradeoffs",
    ],
    deliverables: [
      "Vendor and platform scorecard",
      "Architecture tradeoff analysis",
      "Cost, performance, and deployment considerations",
      "Build, buy, partner recommendation",
      "Executive decision readout",
    ],
    benefit:
      "Better platform decisions, fewer costly wrong turns, and clearer technology investment choices.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Fractional AI Operating Partner",
    duration: "Ongoing advisory",
    bestFor:
      "Organizations that need senior AI and data platform leadership but are not ready for a full-time executive, or need an external operator-advisor to support execution.",
    howItWorks: [
      "Regular executive and platform-team advisory sessions",
      "AI roadmap and architecture reviews",
      "Governance and operating cadence",
      "Vendor and partner evaluation",
      "Team coaching and delivery guidance",
      "Metrics and decision tracking",
    ],
    deliverables: [
      "Monthly operating cadence",
      "Architecture and roadmap reviews",
      "Executive decision memos",
      "Governance and evaluation patterns",
      "Adoption and value-tracking framework",
    ],
    benefit:
      "Senior AI platform leadership, faster decisions, stronger execution discipline, and reduced risk across AI initiatives.",
  },
];

const clientDeliverables = [
  "Enterprise AI strategy and roadmap",
  "Target-state AI and data platform architecture",
  "AI-ready data assessment",
  "Data locality and access pattern recommendations",
  "Semantic enrichment and retrieval design",
  "Agentic AI workflow patterns",
  "Model gateway and tool-access patterns",
  "Governance and risk framework",
  "Evaluation and monitoring approach",
  "Vendor and platform scorecards",
  "Adoption and value measurement model",
  "Executive decision memo",
  "Implementation sequencing plan",
];

const trustBullets = [
  "20+ years of enterprise AI, data, and platform leadership experience",
  "Experience across large-scale data platforms, AI systems, analytics, search, personalization, recommendations, observability, and infrastructure ecosystems",
  "Practical exposure to SaaS, PaaS, cloud, hybrid-cloud, on-prem, customer-managed, GPU, inference, and edge deployment patterns",
  "Advisor perspective across enterprise buyers, investors, expert networks, technology vendors, and platform teams",
  "Focus on architecture, governance, measurable adoption, and business outcomes, not AI hype",
];

const principles = [
  {
    title: "Architecture before tools",
    desc: "We start with business context, data readiness, workflows, risk, and operating model before selecting tools.",
  },
  {
    title: "AI-ready data before AI automation",
    desc: "We assess whether enterprise data has the quality, context, access controls, locality, metadata, and semantic enrichment needed for trusted AI systems.",
  },
  {
    title: "Governance that enables delivery",
    desc: "Governance should create safe adoption patterns, not block every experiment.",
  },
  {
    title: "Measurement from day one",
    desc: "Every AI initiative should define adoption, quality, risk, cost, productivity, customer impact, and business-value metrics.",
  },
  {
    title: "Validated action over generic answers",
    desc: "The goal is to move from model outputs to trusted decisions, workflow execution, and measurable value creation.",
  },
];

function AdvisoryCta({ className = "" }: { className?: string }) {
  return (
    <a
      href={`mailto:${EMAIL_ADVISORY}?subject=${encodeURIComponent("Advisory conversation")}`}
      className={`inline-flex items-center gap-2 rounded-2xl bg-purple-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-purple-300 ${className}`}
    >
      Start an Advisory Conversation
      <ArrowRight className="h-5 w-5" />
    </a>
  );
}

export default function AdvisoryPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.22),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.10),transparent_35%),linear-gradient(to_bottom,transparent,rgba(3,7,18,1))]" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
                <Compass className="h-4 w-4 text-purple-300" />
                AI Strategy & Architecture
              </div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Turn AI ambition into an enterprise operating model.
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                ShandayAI helps executives, platform teams, and technology leaders make clear
                decisions across enterprise AI, agentic systems, data platforms, cloud
                infrastructure, model ecosystems, governance, and measurable adoption.
              </p>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-400">
                AI tools are not the strategy. The strategy is making enterprise data, business
                context, governance, models, agents, and workflows work together to produce
                validated action and measurable value. ShandayAI helps teams connect those layers
                into a governed, reusable, measurable AI platform strategy.
              </p>
              <AdvisoryCta className="mt-10" />
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

        {/* Section 1: Tools vs Strategy */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Using AI tools is not the same as having an AI strategy.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-slate-400">
              <p>
                Most enterprises are already using AI tools. Teams are experimenting with copilots,
                enterprise assistants, SaaS AI features, automation tools, model APIs, and agent
                frameworks. That activity is useful, but it does not answer the harder enterprise
                questions.
              </p>
            </div>
            <ul className="mt-8 space-y-4">
              {strategyQuestions.map((q) => (
                <li key={q} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-slate-300 sm:text-base">
                  <Target className="mt-0.5 h-5 w-5 shrink-0 text-purple-300" />
                  {q}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base leading-8 text-slate-300">
              ShandayAI helps leaders move from tool adoption to an enterprise AI operating model:
              one that connects data, context, governance, models, agents, workflows, measurement,
              and business value.
            </p>
          </div>
        </section>

        {/* Section 2: AI-Ready Data Flow */}
        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                From raw enterprise data to validated action.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-400">
                Enterprise AI value depends on whether data can be trusted, governed, enriched,
                retrieved, reasoned over, and converted into action. Raw data alone is not enough.
                AI-ready data needs context, ownership, quality, access boundaries, and business
                meaning.
              </p>
            </div>

            <div className="mt-12 overflow-x-auto pb-2">
              <div className="flex min-w-[56rem] gap-3 lg:min-w-0 lg:grid lg:grid-cols-5">
                {dataFlowStages.map((stage, index) => (
                  <div key={stage.title} className="relative flex-1">
                    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                      <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-purple-300/10 text-sm font-semibold text-purple-300 ring-1 ring-purple-300/20">
                        {index + 1}
                      </div>
                      <h3 className="text-sm font-semibold leading-snug text-white">
                        {stage.title}
                      </h3>
                      <p className="mt-3 flex-1 text-xs leading-5 text-slate-500">
                        {stage.examples}
                      </p>
                    </div>
                    {index < dataFlowStages.length - 1 && (
                      <div className="absolute right-[-0.65rem] top-1/2 z-10 hidden -translate-y-1/2 text-purple-300 lg:block">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-10 max-w-3xl text-base font-medium leading-8 text-slate-300">
              The goal is not just better answers. The goal is validated action that creates
              measurable enterprise value.
            </p>
          </div>
        </section>

        {/* Section 3: What ShandayAI Helps You Solve */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                What ShandayAI helps you solve
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-400">
                Enterprise AI decisions now cut across data platforms, semantic retrieval, model
                gateways, agentic workflows, cloud and on-prem infrastructure, security,
                governance, observability, GPU and inference economics, and business adoption.
                ShandayAI helps leaders simplify those decisions and turn them into practical
                architecture, roadmap, and execution plans.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {problemCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Problem
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{card.problem}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-purple-300">
                    How we help
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{card.help}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Who We Advise */}
        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Who we advise</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {audiences.map((audience) => (
                <div
                  key={audience.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-7"
                >
                  <div className="inline-flex rounded-xl bg-purple-300/10 p-3 text-purple-300 ring-1 ring-purple-300/20">
                    {audience.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{audience.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-400">{audience.forWhom}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-purple-300">
                    Value
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{audience.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Advisory Engagements */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Advisory engagements that produce decisions, not decks.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-400">
                Each engagement is designed to create a usable decision artifact: a roadmap,
                architecture, scorecard, operating model, or implementation plan that leaders can
                act on.
              </p>
            </div>

            <div className="mt-12 space-y-8">
              {engagements.map((engagement) => (
                <div
                  key={engagement.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 lg:p-10"
                >
                  <div className="flex flex-wrap items-start gap-4">
                    <div className="inline-flex rounded-xl bg-purple-300/10 p-3 text-purple-300 ring-1 ring-purple-300/20">
                      {engagement.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-purple-300">
                        {engagement.duration}
                      </p>
                      <h3 className="mt-1 text-2xl font-semibold text-white">
                        {engagement.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-400">
                        <span className="font-medium text-slate-300">Best for: </span>
                        {engagement.bestFor}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-8 lg:grid-cols-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        How it works
                      </p>
                      <ul className="mt-3 space-y-2">
                        {engagement.howItWorks.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm leading-6 text-slate-400"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-purple-300" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Deliverables
                      </p>
                      <ul className="mt-3 space-y-2">
                        {engagement.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm leading-6 text-slate-400"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-purple-300/80" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Client benefit
                      </p>
                      <p className="mt-3 text-sm leading-6 text-slate-300">{engagement.benefit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: What Clients Get */}
        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              What clients get
            </h2>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {clientDeliverables.map((item) => (
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

        {/* Section 7: Trust */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Why enterprises can trust ShandayAI
                </h2>
                <p className="mt-6 text-base leading-8 text-slate-400">
                  ShandayAI is not a generic AI content or automation shop. The advisory practice
                  is grounded in enterprise platform experience across AI, data, cloud
                  infrastructure, storage, observability, semantic retrieval, RAG, agentic
                  workflows, hybrid deployment, governance, and production systems.
                </p>
                <p className="mt-6 text-base leading-8 text-slate-400">
                  ShandayAI is founder-led by Praveen Pratury, an enterprise AI and data platform
                  operator with 20+ years of experience building and advising on AI platforms,
                  data strategy, cloud infrastructure, semantic retrieval, RAG, agentic workflows,
                  observability, analytics, and production AI systems. His approach combines
                  executive-level strategy with hands-on platform architecture and practical
                  delivery experience.
                </p>
              </div>
              <ul className="space-y-4">
                {trustBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-purple-300" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 8: Principles */}
        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Our advisory principles
            </h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {principles.map((principle, index) => (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-300/10 text-sm font-semibold text-purple-300">
                      {index + 1}
                    </span>
                    <h3 className="font-semibold text-white">{principle.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-400">{principle.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: Final CTA */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Need clarity on your enterprise AI direction?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400">
              Use ShandayAI advisory to pressure-test your AI roadmap, data readiness, platform
              architecture, vendor choices, governance model, or agentic AI execution plan.
            </p>
            <AdvisoryCta className="mt-8" />
            <p className="mt-5">
              <a
                href={`mailto:${EMAIL_ADVISORY}`}
                className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-purple-300"
              >
                <Mail className="h-4 w-4" />
                {EMAIL_ADVISORY}
              </a>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
