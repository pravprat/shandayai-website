import {
  CheckCircle2,
  Clock,
  Cloud,
  Container,
  FileSearch,
  GitBranch,
  Mail,
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
import { BlogRelatedSection } from "../../components/BlogRelatedSection";
import { EMAIL_PLATFORMS } from "../../components/contact";

const scrcaFlow = [
  {
    step: 1,
    title: "Ingest operational signals",
    desc: "Logs, events, traces, metrics, tickets, alerts, runtime errors, and incident artifacts.",
  },
  {
    step: 2,
    title: "Normalize and eventize",
    desc: "Convert noisy records into structured events with timestamps, source, severity, service, environment, and signal type.",
  },
  {
    step: 3,
    title: "Cluster related behavior",
    desc: "Group related patterns across services, systems, time windows, and event types.",
  },
  {
    step: 4,
    title: "Detect incident windows",
    desc: "Identify meaningful incident periods and separate recurring background noise from candidate incident signals.",
  },
  {
    step: 5,
    title: "Build causal graph",
    desc: "Map relationships across components, clusters, services, dependencies, and event timing.",
  },
  {
    step: 6,
    title: "Rank root cause candidates",
    desc: "Score likely causes using trigger behavior, temporal precedence, graph relationships, severity, and supporting evidence.",
  },
  {
    step: 7,
    title: "Produce evidence bundle",
    desc: "Capture the sources, events, timelines, clusters, confidence signals, and alternative hypotheses.",
  },
  {
    step: 8,
    title: "Generate RCA summary",
    desc: "Create engineer-readable RCA reports and escalation packets with human-review context.",
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
    desc: "Starts with a limited set of services, incidents, logs, or operational data.",
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
                Semantic RCA Pilot
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
                <a
                  href={`mailto:${EMAIL_PLATFORMS}`}
                  className="text-slate-400 hover:text-cyan-300"
                >
                  {EMAIL_PLATFORMS}
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* What SCRCA does */}
        <section id="flow" className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                What SCRCA does
              </h2>
              <p className="mt-4 text-slate-400">
                SCRCA processes logs, events, traces, metrics, tickets, runtime errors, alerts,
                and operational signals through a structured pipeline from ingestion to
                evidence-backed RCA.
              </p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {scrcaFlow.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-300/10 text-sm font-semibold text-cyan-300 ring-1 ring-cyan-300/20">
                    {item.step}
                  </div>
                  <h3 className="mt-4 text-sm font-semibold leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pilot deliverables */}
        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              What an SCRCA pilot produces
            </h2>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {pilotDeliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                  <span className="text-sm leading-6 text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why teams use SCRCA */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Why teams use SCRCA
            </h2>
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

        {/* Deployment models */}
        <section id="deployment" className="border-t border-white/10 bg-white/[0.02]">
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
              SCRCA is designed with future cloud and marketplace deployment patterns in mind,
              but the initial focus is targeted pilots and customer-controlled deployment
              patterns.
            </p>
          </div>
        </section>

        <BlogRelatedSection variant="scrca" />
        <PlatformPilotContact product="SCRCA" />
      </main>

      <SiteFooter />
    </div>
  );
}
