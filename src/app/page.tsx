import {
  Activity,
  ArrowRight,
  Brain,
  BrainCircuit,
  CheckCircle2,
  CircuitBoard,
  Clock,
  FileChartColumn,
  GitBranch,
  Layers3,
  LockKeyhole,
  Network,
  Rocket,
  Shield,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import SiteHeader from "./components/SiteHeader";


const platformLayers = [
  {
    label: "Signal Ingestion",
    desc: "Logs, alerts, metrics, traces, deployments, tickets, and infrastructure metadata.",
  },
  {
    label: "Semantic Intelligence",
    desc: "Entity normalization, relationship mapping, retrieval, and system context grounding.",
  },
  {
    label: "Deterministic RCA",
    desc: "Incident clustering, causal graph construction, evidence chains, assertions, and attribution.",
  },
  {
    label: "Agentic Orchestration",
    desc: "Workflow agents coordinate tools, CI/CD inspection, approvals, and operational next steps.",
  },
  {
    label: "Governed Automation",
    desc: "Human-in-the-loop remediation, policy controls, verification, audit, and feedback learning.",
  },
];

const workflow = [
  "Alert",
  "Context",
  "RCA",
  "Change Detection",
  "Approval",
  "Remediation",
  "Verification",
];

const capabilities = [
  {
    icon: <Network className="h-6 w-6" />,
    title: "Semantic Infrastructure Context",
    desc: "Understand services, dependencies, namespaces, pods, containers, deployments, and operational relationships.",
  },
  {
    icon: <CircuitBoard className="h-6 w-6" />,
    title: "Deterministic Root Cause Intelligence",
    desc: "Move beyond generic summaries into repeatable, evidence-backed RCA with causal structure and validation.",
  },
  {
    icon: <BrainCircuit className="h-6 w-6" />,
    title: "Agentic AI Operations",
    desc: "Coordinate diagnostic workflows across logs, tickets, alerts, CI/CD, and operational tools with governed agents.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Trust, Evidence, and Governance",
    desc: "Every recommendation should be explainable, traceable, and controlled before moving toward automation.",
  },
];

const executiveFlow = [
  {
    label: "Any Signal",
    desc: "Logs, metrics, traces, screens, APIs, events, and operational signals.",
    icon: <Activity className="h-7 w-7" />,
    tone: "from-violet-400 to-purple-500",
  },
  {
    label: "Semantic Understanding",
    desc: "Normalize signals into entities, events, relationships, and context.",
    icon: <Brain className="h-7 w-7" />,
    tone: "from-purple-400 to-fuchsia-500",
  },
  {
    label: "Causal Intelligence",
    desc: "Build timelines, infer relationships, and identify likely root causes.",
    icon: <Network className="h-7 w-7" />,
    tone: "from-blue-400 to-cyan-500",
  },
  {
    label: "Insights & Explanations",
    desc: "Generate evidence-backed RCA, impact analysis, and what happened.",
    icon: <FileChartColumn className="h-7 w-7" />,
    tone: "from-cyan-400 to-teal-500",
  },
  {
    label: "Actions & Automation",
    desc: "Enable recommendations, alerts, workflows, integrations, and remediation.",
    icon: <Rocket className="h-7 w-7" />,
    tone: "from-emerald-400 to-green-500",
  },
];

const outcomeCards = [
  {
    title: "Resolve Issues Faster",
    desc: "Reduce MTTR and downtime",
    icon: <Clock className="h-5 w-5" />,
  },
  {
    title: "Improve Reliability",
    desc: "Prevent recurrence and risk",
    icon: <Shield className="h-5 w-5" />,
  },
  {
    title: "Increase Efficiency",
    desc: "Automate insights to actions",
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    title: "Scale with Confidence",
    desc: "Enterprise-grade and extensible",
    icon: <Users className="h-5 w-5" />,
  },
];

function ExecutiveVisionVisual() {
  return (
    <section id="vision" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-cyan-950/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(124,58,237,0.20),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.18),transparent_30%)]" />

        <div className="relative">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-5 inline-flex rounded-full border border-purple-300/30 bg-purple-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-purple-200">
              Level 1 Vision
            </div>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Operational Intelligence. Causal Clarity. Confident Actions.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
              Shandayai transforms operational signals into evidence-backed insights
              so teams can prevent issues, resolve faster, and operate with confidence.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-5">
            {executiveFlow.map((item, index) => (
              <div key={item.label} className="relative">
                <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-center backdrop-blur">
                  <div
                    className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${item.tone} text-slate-950 shadow-lg`}
                  >
                    {item.icon}
                  </div>

                  <h3 className="mt-5 text-base font-semibold uppercase tracking-wide text-white">
                    {item.label}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.desc}
                  </p>
                </div>

                {index < executiveFlow.length - 1 && (
                  <div className="absolute right-[-1.25rem] top-1/2 z-10 hidden -translate-y-1/2 text-cyan-300 lg:block">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:grid-cols-2 lg:grid-cols-4">
            {outcomeCards.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="rounded-2xl bg-cyan-300/10 p-3 text-cyan-300 ring-1 ring-cyan-300/20">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{item.title}</h4>
                  <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArchitectureVisual() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-slate-950/80 p-6 shadow-2xl shadow-cyan-950/40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_35%)]" />
      <div className="relative">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Architecture</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Operational Intelligence Stack</h3>
          </div>
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
            <Layers3 className="h-7 w-7" />
          </div>
        </div>

        <div className="space-y-4">
          {platformLayers.map((layer, index) => (
            <div key={layer.label} className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/15 text-sm font-semibold text-cyan-300 ring-1 ring-cyan-400/30">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{layer.label}</h4>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{layer.desc}</p>
                </div>
              </div>
              {index < platformLayers.length - 1 && (
                <div className="absolute -bottom-4 left-9 h-4 w-px bg-cyan-400/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkflowVisual() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
      <div className="mb-6 flex items-center gap-3">
        <Zap className="h-6 w-6 text-cyan-300" />
        <h3 className="text-2xl font-semibold">Closed-loop diagnostic workflow</h3>
      </div>
      <div className="grid gap-3 md:grid-cols-7">
        {workflow.map((item, index) => (
          <div key={item} className="relative">
            <div className="flex min-h-28 flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/80 p-4 transition hover:border-cyan-300/40 hover:bg-slate-900">
              <div className="text-xs font-medium uppercase tracking-widest text-cyan-300">0{index + 1}</div>
              <div className="text-sm font-semibold text-white">{item}</div>
            </div>
            {index < workflow.length - 1 && (
              <div className="absolute right-[-1.2rem] top-1/2 z-10 hidden -translate-y-1/2 text-cyan-300 md:block">
                <ArrowRight className="h-5 w-5" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function RemediationVisual() {
  const nodes = [
    ["EMS Alert", "Detect anomaly"],
    ["Agent Platform", "Receive, route, gather"],
    ["SCRCA", "Compute RCA"],
    ["CI/CD", "Inspect change"],
    ["Human Approval", "Control risk"],
    ["Action", "Remediate + verify"],
  ];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-purple-400/20 bg-slate-950 p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_45%)]" />
      <div className="relative">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-300">Agentic Operations</p>
          <h3 className="mt-3 text-3xl font-semibold">From diagnosis to governed action</h3>
          <p className="mt-4 text-slate-400">
            Agents coordinate the workflow, deterministic RCA identifies the cause, CI/CD connects the cause to change, and humans approve bounded remediation before execution.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {nodes.map(([title, desc], index) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-purple-400/15 text-sm font-semibold text-purple-200 ring-1 ring-purple-300/30">
                {index + 1}
              </div>
              <h4 className="text-sm font-semibold text-white">{title}</h4>
              <p className="mt-2 text-xs leading-5 text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ShandayaiLandingPageV2() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.28),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.24),transparent_30%),linear-gradient(to_bottom,transparent,rgba(3,7,18,1))]" />
          <div className="absolute left-1/2 top-24 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full border border-cyan-300/10" />
          <div className="absolute left-1/2 top-40 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full border border-purple-300/10" />

          <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36">
            <div className="mx-auto max-w-5xl text-center">
              <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 shadow-2xl shadow-cyan-950/30">
                <LockKeyhole className="h-4 w-4 text-cyan-300" />
                Enterprise-grade operational intelligence for autonomous infrastructure
              </div>

              <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-8xl">
                From observability to
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  intelligent operations.
                </span>
              </h1>

              <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
                Shandayai is a platform vision for semantic infrastructure intelligence, deterministic root cause analysis, and agentic operational workflows — built to turn alerts, logs, and system signals into trusted diagnosis and governed action.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <button className="rounded-2xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-200">
                  Explore the Platform
                </button>
                <button className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3 font-semibold text-white hover:bg-white/[0.06]">
                  See Architecture
                </button>
              </div>
            </div>
          </div>
        </section>

        <ExecutiveVisionVisual />

        <section id="platform" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Platform Thesis</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                AI operations need more than chat. They need grounding, evidence, and control.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-400">
                Generic agents can summarize information, but infrastructure operations require stronger guarantees: clear context, deterministic diagnostics, evidence-linked reasoning, policy-aware workflows, and human approval before risky actions.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-400">
                Shandayai brings these layers together into a platform-grade architecture for modern SRE, support, and infrastructure teams.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 hover:border-cyan-300/30">
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

        <section id="architecture" className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-8">
            <ArchitectureVisual />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Embedded Architecture</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                A layered intelligence model for operational systems.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-400">
                Shandayai separates orchestration from reasoning. Agents coordinate workflows and tools. Semantic intelligence grounds context. Deterministic RCA computes the cause. Governance controls actions.
              </p>
              <div className="mt-8 space-y-4">
                {["Agents coordinate", "Semantic context grounds", "Deterministic RCA diagnoses", "Humans approve risky actions"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="workflow" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Workflow</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Alert to evidence-backed RCA in one operational flow.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              The platform turns alerts into scoped context, invokes deterministic analysis, correlates changes, routes approvals, and verifies outcomes.
            </p>
          </div>
          <WorkflowVisual />
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <RemediationVisual />
        </section>

        <section id="trust" className="border-t border-white/10 bg-gradient-to-b from-slate-950 to-[#030712]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Trust Model</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Trust before autonomy.
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-400">
                  Infrastructure automation cannot rely on opaque guesses. Shandayai is designed around explainability, validation, auditability, and controlled progression from diagnosis to action.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  ["Evidence-linked conclusions", "Claims should trace back to logs, clusters, events, and time windows."],
                  ["Human-in-the-loop approval", "Risky actions require explicit authorization before execution."],
                  ["Policy-aware automation", "Actions are classified by blast radius, reversibility, and operational risk."],
                  ["Feedback-driven learning", "Outcomes are captured to improve playbooks, patterns, and future diagnosis."],
                ].map(([title, desc]) => (
                  <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
          <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-10 shadow-2xl shadow-cyan-950/30">
            <GitBranch className="mx-auto h-10 w-10 text-cyan-300" />
            <h2 className="mt-6 text-4xl font-semibold tracking-tight">Build the intelligence layer between alerts and action.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Shandayai is designed for the next generation of operational systems — where diagnosis is explainable, workflows are agentic, and automation is governed.
            </p>
            <button className="mt-8 rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-slate-200">
              Start the Conversation
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-slate-500">
        © 2026 Shandayai. Operational intelligence, deterministic AI, and agentic infrastructure systems.
      </footer>
    </div>
  );
}
