import {
  Activity,
  ArrowRight,
  Brain,
  CheckCircle2,
  Cloud,
  Container,
  FileChartColumn,
  Network,
  Plug,
  Rocket,
  Shield,
  TrendingUp,
  Users,
  CircuitBoard,
} from "lucide-react";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import PlatformPilotContact from "../../components/PlatformPilotContact";
import { BlogRelatedSection } from "../../components/BlogRelatedSection";

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
    icon: <Shield className="h-5 w-5" />,
  },
  {
    title: "Improve Reliability",
    desc: "Prevent recurrence and risk",
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    title: "Increase Efficiency",
    desc: "Automate insights to actions",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "Scale with Confidence",
    desc: "Enterprise-grade and extensible",
    icon: <CircuitBoard className="h-5 w-5" />,
  },
];

const deploymentOptions = [
  {
    icon: <Container className="h-6 w-6" />,
    title: "Customer-hosted service",
    desc: "Runtime RCA runs inside your environment — Docker deployment, logs read in place, raw data stays in your boundary.",
    bullets: [
      "Spark, JVM, and Kubernetes runtime logs",
      "Evidence-backed RCA reports and escalation packets",
      "No log export required for diagnosis",
    ],
    badge: "Available now",
  },
  {
    icon: <Plug className="h-6 w-6" />,
    title: "API integration",
    desc: "Embed SCRCA diagnostics into your existing observability stack, incident tools, or internal platforms via API.",
    bullets: [
      "Incident window detection and RCA summaries",
      "Evidence bundles for ticketing and chatops",
      "Fits into current on-call and SRE workflows",
    ],
    badge: "Pilot",
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Scoped pilot engagement",
    desc: "Work with ShandayAI on a time-boxed pilot — observability RCA, log intelligence, or operational diagnostics for a specific use case.",
    bullets: [
      "Defined scope, success criteria, and timeline",
      "Co-designed with your platform or SRE team",
      "Path to production deployment if validated",
    ],
    badge: "Pilot",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Design partner program",
    desc: "Early access for teams building governed AI operations — influence product direction while solving real incident and RCA problems.",
    bullets: [
      "Priority access to new capabilities",
      "Joint architecture and integration planning",
      "Enterprise governance and trust model alignment",
    ],
    badge: "Limited slots",
  },
];

function OperationalIntelligenceFlow() {
  return (
    <section id="flow" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-cyan-950/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(124,58,237,0.20),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.18),transparent_30%)]" />
        <div className="relative">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-5 inline-flex rounded-full border border-purple-300/30 bg-purple-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-purple-200">
              Operational Intelligence
            </div>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Operational Intelligence. Causal Clarity. Confident Actions.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
              SCRCA transforms operational signals into evidence-backed insights so teams can
              prevent issues, resolve faster, and operate with confidence.
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
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.desc}</p>
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

function DeploymentOptionsSection() {
  return (
    <section id="deployment" className="border-t border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            How you can utilize it
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Deployment options for your environment.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-400">
            Whether you need a customer-hosted service, API integration, or a scoped pilot —
            SCRCA is designed to meet enterprise security, governance, and operational
            requirements from day one.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {deploymentOptions.map((option) => (
            <div
              key={option.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 hover:border-cyan-300/30"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex rounded-2xl bg-cyan-300/10 p-3 text-cyan-300 ring-1 ring-cyan-300/20">
                  {option.icon}
                </div>
                <span className="shrink-0 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-200">
                  {option.badge}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{option.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{option.desc}</p>
              <ul className="mt-5 space-y-2">
                {option.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ScrcaPageContent() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.28),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.24),transparent_30%),linear-gradient(to_bottom,transparent,rgba(3,7,18,1))]" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
                Semantic RCA Pilot
              </div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                SCRCA
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Semantic Root Cause Analysis
                </span>
              </h1>
              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
                Evidence-backed root cause analysis for observability and operations teams.
                SCRCA connects logs, events, traces, and incident data into deterministic,
                explainable diagnostics — so teams move from alerts to confident action.
              </p>
            </div>
          </div>
        </section>

        <OperationalIntelligenceFlow />
        <DeploymentOptionsSection />
        <BlogRelatedSection variant="scrca" />
        <PlatformPilotContact product="SCRCA" />
      </main>

      <SiteFooter />
    </div>
  );
}
