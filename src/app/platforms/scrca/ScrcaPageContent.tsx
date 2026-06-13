import {
  Activity,
  Brain,
  CheckCircle2,
  Clock,
  Cloud,
  Container,
  FileChartColumn,
  FileSearch,
  GitBranch,
  Mail,
  Network,
  Plug,
  Rocket,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import PlatformPilotContact from "../../components/PlatformPilotContact";
import { PlatformFlowVisual } from "../../components/PlatformFlowVisual";
import { BlogRelatedSection } from "../../components/BlogRelatedSection";
import { EMAIL_PLATFORMS } from "../../components/contact";

const differentiationCards = [
  "Works on incident structure, not only raw log text",
  "Uses temporal windows and trigger behavior",
  "Builds graph-based context across services and events",
  "Produces root cause candidates with supporting evidence",
  "Creates RCA packets that engineers can review, challenge, and reuse",
];

const scrcaPipeline = [
  {
    label: "Operational signals",
    desc: "Logs, events, traces, metrics, tickets, runtime errors, alerts, and incident artifacts.",
    icon: <Activity className="h-6 w-6" />,
    tone: "from-violet-400 to-purple-500",
  },
  {
    label: "Normalize and eventize",
    desc: "Convert noisy records into structured events with timestamps, source, severity, service, environment, and signal type.",
    icon: <Brain className="h-6 w-6" />,
    tone: "from-purple-400 to-fuchsia-500",
  },
  {
    label: "Cluster related behavior",
    desc: "Group related patterns across services, systems, time windows, and event types.",
    icon: <Network className="h-6 w-6" />,
    tone: "from-blue-400 to-cyan-500",
  },
  {
    label: "Detect incident windows",
    desc: "Identify meaningful incident periods and separate recurring background noise from incident signals.",
    icon: <Clock className="h-6 w-6" />,
    tone: "from-cyan-400 to-teal-500",
  },
  {
    label: "Build causal graph",
    desc: "Map relationships across components, clusters, services, dependencies, and event timing.",
    icon: <GitBranch className="h-6 w-6" />,
    tone: "from-teal-400 to-emerald-500",
  },
  {
    label: "Rank root cause candidates",
    desc: "Score likely causes using trigger behavior, temporal precedence, graph relationships, severity, and supporting evidence.",
    icon: <FileSearch className="h-6 w-6" />,
    tone: "from-emerald-400 to-green-500",
  },
  {
    label: "Produce evidence bundle",
    desc: "Capture sources, timelines, clusters, confidence signals, and alternative hypotheses.",
    icon: <Shield className="h-6 w-6" />,
    tone: "from-sky-400 to-blue-500",
  },
  {
    label: "Generate RCA packet",
    desc: "Create engineer-readable RCA reports and escalation packets with human-review context.",
    icon: <FileChartColumn className="h-6 w-6" />,
    tone: "from-indigo-400 to-violet-500",
  },
];

const pilotDeliverables = [
  "Operational signal inventory",
  "Ingestion and parsing approach",
  "Event clusters and trigger analysis",
  "Incident window detection",
  "Root cause candidate ranking",
  "Evidence-backed RCA report",
  "Incident timeline",
  "Support escalation packet",
  "Human-reviewed remediation context",
  "Pilot findings and production-readiness roadmap",
];

const whyTeamsUse = [
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Reduce incident investigation time",
    desc: "Help engineers move faster from alert noise to likely causes and supporting evidence.",
  },
  {
    icon: <FileSearch className="h-5 w-5" />,
    title: "Improve escalation quality",
    desc: "Generate clearer support packets with timelines, evidence, suspected causes, and system context.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Separate signal from noise",
    desc: "Group recurring events and isolate incident-relevant behavior.",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Preserve data locality",
    desc: "Support customer-hosted or customer-managed patterns where raw operational data should remain in place.",
  },
  {
    icon: <GitBranch className="h-5 w-5" />,
    title: "Capture repeatable RCA workflows",
    desc: "Move RCA from tribal knowledge to structured, evidence-backed reasoning.",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Improve operational learning",
    desc: "Turn incidents into reusable patterns, known failure modes, and future detection signals.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Prepare for governed remediation",
    desc: "Create a foundation for future agentic remediation workflows with human approval.",
  },
];

const deploymentModels = [
  {
    icon: <Container className="h-6 w-6" />,
    title: "Customer-hosted pilot",
    desc: "Runs inside the customer environment where sensitive operational data can remain within customer boundaries.",
  },
  {
    icon: <Plug className="h-6 w-6" />,
    title: "API integration",
    desc: "Connects through existing observability, logging, incident, or support systems.",
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Scoped RCA pilot",
    desc: "Starts with a limited set of services, incidents, logs, tickets, or operational data.",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Design partner program",
    desc: "For teams that want to shape the next generation of semantic RCA and operational intelligence.",
  },
];

export default function ScrcaPageContent() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.28),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.24),transparent_30%),linear-gradient(to_bottom,transparent,rgba(3,7,18,1))]" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
                Semantic RCA Pilot Service
              </div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                SCRCA: Semantic Root Cause Analysis for Operational Intelligence
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                A pilot service for turning logs, events, traces, metrics, tickets, alerts, and
                incident data into evidence-backed root cause candidates, timelines, narratives,
                and escalation context.
              </p>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-400">
                Infrastructure teams do not need another alert stream. They need systems that can
                organize noisy operational data, identify meaningful event patterns, explain why
                incidents happened, and produce evidence that engineers can trust.
              </p>
              <a
                href={`mailto:${EMAIL_PLATFORMS}?subject=${encodeURIComponent("SCRCA pilot inquiry")}`}
                className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-cyan-300 px-7 py-3.5 font-semibold text-slate-950 hover:bg-cyan-200"
              >
                <Mail className="h-5 w-5" />
                Discuss an SCRCA Pilot
              </a>
              <p className="mt-5 text-sm text-slate-500">
                <a href={`mailto:${EMAIL_PLATFORMS}`} className="text-slate-400 hover:text-cyan-300">
                  {EMAIL_PLATFORMS}
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Why different */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Not another observability dashboard. Not just LLM summaries over logs.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400">
              SCRCA is designed to convert operational signals into incident structure and
              reviewable evidence. Instead of only summarizing log text, SCRCA eventizes
              operational data, detects incident windows, clusters related behavior, builds graph
              context, ranks root cause candidates, and produces evidence-backed RCA packets that
              engineers can inspect and challenge.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {differentiationCards.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-cyan-300/20 bg-cyan-300/5 p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                  <span className="text-sm leading-6 text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual pipeline */}
        <section id="flow" className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <PlatformFlowVisual
              badge="Operational Intelligence Pipeline"
              title="From operational noise to evidence-backed RCA"
              subtitle="Logs, events, traces, metrics, tickets, runtime errors, alerts, and operational signals through structured incident intelligence."
              stages={scrcaPipeline}
              footer="SCRCA focuses on operational intelligence. It uses event structure, time windows, trigger behavior, graph relationships, severity, and supporting evidence to help teams move from alert noise to probable cause and reviewable action."
              accent="cyan"
            />
          </div>
        </section>

        {/* Deliverables */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              What an SCRCA pilot produces
            </h2>
            <div className="mt-10 grid gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:grid-cols-2 lg:grid-cols-3">
              {pilotDeliverables.map((item) => (
                <div key={item} className="flex items-start gap-3 px-2 py-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  <span className="text-sm leading-6 text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why teams use */}
        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Why teams use SCRCA</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whyTeamsUse.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <div className="inline-flex rounded-xl bg-cyan-300/10 p-2.5 text-cyan-300 ring-1 ring-cyan-300/20">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deployment */}
        <section id="deployment" className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Deployment and pilot models
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {deploymentModels.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-7"
                >
                  <div className="inline-flex rounded-xl bg-cyan-300/10 p-3 text-cyan-300 ring-1 ring-cyan-300/20">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 max-w-3xl text-sm leading-7 text-slate-400">
              SCRCA is designed with future cloud and marketplace deployment patterns in mind, but
              the initial focus is targeted pilots and customer-controlled deployment patterns.
            </p>
          </div>
        </section>

        <BlogRelatedSection variant="scrca" />
        <PlatformPilotContact
          product="SCRCA"
          headline="Test semantic RCA on real operational data."
        />
      </main>

      <SiteFooter />
    </div>
  );
}
