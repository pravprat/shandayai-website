import {
  Activity,
  AlertTriangle,
  Bell,
  Box,
  Brain,
  CheckCircle2,
  Code2,
  Database,
  FileSearch,
  GitBranch,
  Layers3,
  Network,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

const cardBase =
  "rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-cyan-950/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.065]";

function FlowArrow() {
  return (
    <div className="hidden flex-1 items-center justify-center lg:flex">
      <div className="h-px w-full bg-gradient-to-r from-cyan-300/10 via-cyan-300/45 to-purple-300/10" />
    </div>
  );
}

export function SignalFlowVisual() {
  const steps = [
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Signals",
      desc: "Alerts, logs, metrics, traces, and change events.",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Semantic Context",
      desc: "Signals are grounded into operational entities.",
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Causal Intelligence",
      desc: "Relationships and timelines shape investigation.",
    },
    {
      icon: <FileSearch className="h-6 w-6" />,
      title: "Evidence",
      desc: "Findings remain tied to observable context.",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Actions",
      desc: "Teams move from diagnosis to guided response.",
    },
  ];

  return (
    <div className="relative my-16 overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-slate-950/80 p-6 shadow-2xl shadow-cyan-950/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(168,85,247,0.18),transparent_30%)]" />
      <div className="relative">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
            Signal to Action
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
            An operational intelligence flow from raw signals to governed action.
          </h3>
        </div>

        <div className="grid gap-4 lg:flex lg:items-stretch">
          {steps.map((step, index) => (
            <div className="contents" key={step.title}>
              <div className={`${cardBase} lg:w-44 lg:flex-none`}>
                <div className="mb-4 inline-flex rounded-2xl bg-cyan-300/10 p-3 text-cyan-200 ring-1 ring-cyan-300/20">
                  {step.icon}
                </div>
                <h4 className="font-semibold text-white">{step.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {step.desc}
                </p>
              </div>
              {index < steps.length - 1 && <FlowArrow />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DeterministicAIVisual() {
  const generic = [
    "Probabilistic response patterns",
    "Higher hallucination risk",
    "Opaque reasoning path",
  ];
  const deterministic = [
    "Evidence-backed diagnostics",
    "Explainable artifacts",
    "Validated and governed workflow",
  ];

  return (
    <div className="relative my-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-purple-950/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(148,163,184,0.12),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.16),transparent_35%)]" />
      <div className="relative grid gap-5 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-500/20 bg-slate-900/60 p-6">
          <div className="mb-5 inline-flex rounded-2xl bg-slate-300/10 p-3 text-slate-300 ring-1 ring-slate-300/20">
            <AlertTriangle className="h-6 w-6" />
          </div>
          <h3 className="text-2xl font-semibold text-white">Generic AI</h3>
          <p className="mt-3 leading-7 text-slate-400">
            Useful for summarization and exploration, but operational workflows
            need additional controls before they influence production decisions.
          </p>
          <div className="mt-6 space-y-3">
            {generic.map((item) => (
              <div
                className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-slate-300"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6 shadow-xl shadow-cyan-950/25">
          <div className="mb-5 inline-flex rounded-2xl bg-cyan-300/10 p-3 text-cyan-200 ring-1 ring-cyan-300/25">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <h3 className="text-2xl font-semibold text-white">
            Deterministic Operational Intelligence
          </h3>
          <p className="mt-3 leading-7 text-slate-300">
            A governed diagnostic layer keeps conclusions traceable, repeatable,
            and suitable for review by engineering and support teams.
          </p>
          <div className="mt-6 space-y-3">
            {deterministic.map((item) => (
              <div
                className="flex items-center gap-3 rounded-2xl border border-cyan-300/20 bg-slate-950/40 px-4 py-3 text-sm text-cyan-50"
                key={item}
              >
                <CheckCircle2 className="h-4 w-4 text-cyan-200" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SemanticInfrastructureVisual() {
  const nodes = [
    { label: "Namespaces", icon: <Layers3 className="h-5 w-5" /> },
    { label: "Pods", icon: <Box className="h-5 w-5" /> },
    { label: "Containers", icon: <Server className="h-5 w-5" /> },
    { label: "Services", icon: <Network className="h-5 w-5" /> },
    { label: "Deployments", icon: <GitBranch className="h-5 w-5" /> },
    { label: "Alerts", icon: <Bell className="h-5 w-5" /> },
    { label: "Logs", icon: <FileSearch className="h-5 w-5" /> },
    { label: "CI/CD", icon: <Code2 className="h-5 w-5" /> },
  ];

  return (
    <div className="relative my-16 overflow-hidden rounded-[2rem] border border-purple-300/15 bg-slate-950 p-6 shadow-2xl shadow-purple-950/25">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(34,211,238,0.14),transparent_32%)]" />
      <div className="relative">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-200">
            Context Topology
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
            Infrastructure signals become useful when they connect to context.
          </h3>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <div className="grid gap-3 sm:grid-cols-2">
            {nodes.slice(0, 4).map((node) => (
              <div className={cardBase} key={node.label}>
                <div className="flex items-center gap-3">
                  <span className="rounded-xl bg-purple-300/10 p-2 text-purple-200 ring-1 ring-purple-300/20">
                    {node.icon}
                  </span>
                  <span className="font-medium text-white">{node.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="relative mx-auto flex h-44 w-44 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 shadow-2xl shadow-cyan-950/30">
            <div className="absolute h-56 w-56 rounded-full border border-cyan-300/10" />
            <Database className="h-9 w-9 text-cyan-200" />
            <div className="absolute bottom-9 max-w-32 text-center text-xs font-semibold uppercase tracking-widest text-cyan-100">
              Operational Context Layer
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {nodes.slice(4).map((node) => (
              <div className={cardBase} key={node.label}>
                <div className="flex items-center gap-3">
                  <span className="rounded-xl bg-cyan-300/10 p-2 text-cyan-200 ring-1 ring-cyan-300/20">
                    {node.icon}
                  </span>
                  <span className="font-medium text-white">{node.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AgenticWorkflowVisual() {
  const steps = [
    { label: "Alert", icon: <Bell className="h-5 w-5" /> },
    { label: "Context Gathering", icon: <Search className="h-5 w-5" /> },
    { label: "Deterministic RCA", icon: <Network className="h-5 w-5" /> },
    { label: "Change Correlation", icon: <GitBranch className="h-5 w-5" /> },
    { label: "Human Approval", icon: <UserCheck className="h-5 w-5" /> },
    { label: "Remediation", icon: <Rocket className="h-5 w-5" /> },
    { label: "Verification", icon: <ShieldCheck className="h-5 w-5" /> },
  ];

  return (
    <div className="relative my-16 overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-white/[0.035] p-6 shadow-2xl shadow-cyan-950/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_90%_15%,rgba(168,85,247,0.16),transparent_35%)]" />
      <div className="relative">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
            Governed Workflow
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
            Agents coordinate the path from alert to verified outcome.
          </h3>
        </div>

        <div className="grid gap-3 lg:grid-cols-7">
          {steps.map((step, index) => (
            <div className="relative" key={step.label}>
              <div className="flex min-h-32 flex-col justify-between rounded-3xl border border-white/10 bg-slate-950/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-slate-900">
                <div className="flex items-center justify-between">
                  <span className="rounded-xl bg-cyan-300/10 p-2 text-cyan-200 ring-1 ring-cyan-300/20">
                    {step.icon}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="text-sm font-semibold leading-5 text-white">
                  {step.label}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute -right-2 top-1/2 hidden h-px w-4 bg-cyan-300/40 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
