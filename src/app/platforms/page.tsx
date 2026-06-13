import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import PlatformPilotContact from "../components/PlatformPilotContact";
import { EMAIL_PLATFORMS } from "../components/contact";

export const metadata: Metadata = {
  title: "Semantic Intelligence Platforms & Pilots | ShandayAI",
  description:
    "ShandayAI semantic intelligence platform services: SCRCA for operational RCA and SIP for enterprise knowledge. Targeted pilots with evidence-backed, explainable AI workflows.",
};

const pilotPaths = [
  {
    name: "SCRCA",
    title: "SCRCA: Semantic RCA for Operations",
    forTeams: "Observability, SRE, platform, support, and infrastructure teams.",
    useWhen:
      "Teams need to convert logs, events, traces, metrics, tickets, alerts, and incident data into root cause candidates, timelines, evidence bundles, and escalation context.",
    outcome:
      "Faster incident understanding, stronger escalation packets, better RCA discipline, and a foundation for future human-reviewed remediation workflows.",
    href: "/platforms/scrca",
    accent: "cyan",
  },
  {
    name: "SIP",
    title: "SIP: Semantic Intelligence for Enterprise Knowledge",
    forTeams:
      "Enterprise knowledge, data, product, support, compliance, operations, and business workflow teams.",
    useWhen:
      "Teams need governed retrieval, semantic context, source authority, evidence-backed answers, knowledge maps, and agent-ready enterprise context across documents, metadata, policies, cases, and data assets.",
    outcome:
      "More trusted enterprise AI answers, stronger retrieval quality, clearer access boundaries, and better context for assistants and agents.",
    href: "/platforms/sip",
    accent: "purple",
  },
];

const principles = [
  {
    title: "Evidence before narrative",
    desc: "AI outputs should be backed by source data, timelines, metadata, relationships, and confidence signals.",
  },
  {
    title: "Semantic context before generation",
    desc: "Raw data and documents need business meaning, source authority, relationships, and retrieval boundaries before LLMs are asked to reason.",
  },
  {
    title: "Customer data boundaries",
    desc: "Platform pilots should respect data locality, access controls, and customer-managed deployment patterns where needed.",
  },
  {
    title: "Human review for higher-risk actions",
    desc: "The platform should support human-in-the-loop approval for remediation, escalation, and workflow execution.",
  },
  {
    title: "Explainability and auditability",
    desc: "Every answer, RCA, or recommendation should be traceable to the evidence used.",
  },
  {
    title: "Pilot-first deployment",
    desc: "Start with a scoped pilot, validate value, then decide whether to expand into production patterns.",
  },
];

const pilotOptions = [
  {
    title: "SCRCA Pilot",
    duration: "4 to 8 weeks",
    desc: "Operational log, event, and incident intelligence pilot.",
    output:
      "Signal inventory, event clusters, incident windows, RCA candidates, evidence bundle, and production-readiness roadmap.",
  },
  {
    title: "SIP Pilot",
    duration: "4 to 8 weeks",
    desc: "Enterprise knowledge and semantic context pilot.",
    output:
      "Source inventory, knowledge map, semantic enrichment strategy, retrieval baseline, evidence-backed answer workflow, and governance model.",
  },
  {
    title: "Design Partner",
    duration: "Scoped collaboration",
    desc: "For organizations shaping advanced semantic intelligence use cases across operations, knowledge, support, observability, or enterprise AI workflows.",
    output:
      "Use-case definition, platform architecture, pilot plan, evaluation criteria, and roadmap.",
  },
];

export default function PlatformsPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.12),transparent_28%),linear-gradient(to_bottom,transparent,rgba(3,7,18,1))]" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Semantic Intelligence Platforms & Pilots
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                ShandayAI builds platform services that convert logs, documents, operational data,
                metadata, and enterprise knowledge into evidence-backed AI workflows.
              </p>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-400">
                Semantic intelligence connects raw enterprise data to business meaning, context,
                evidence, and action. The goal is to help organizations move beyond generic chat
                and fragmented automation toward explainable, auditable, and domain-grounded AI
                systems.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/platforms/scrca"
                  className="inline-flex items-center gap-2 rounded-2xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-200"
                >
                  Explore SCRCA
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/platforms/sip"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-3 font-semibold text-white hover:bg-white/[0.08]"
                >
                  Explore SIP
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`mailto:${EMAIL_PLATFORMS}?subject=${encodeURIComponent("Platform pilot inquiry")}`}
                  className="inline-flex items-center gap-2 rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-6 py-3 font-semibold text-cyan-200 hover:bg-cyan-300/20"
                >
                  <Mail className="h-4 w-4" />
                  Discuss a Platform Pilot
                </a>
              </div>
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

        {/* One foundation, two paths */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              One semantic foundation. Two pilot paths.
            </h2>
            <p className="mt-4 max-w-3xl text-slate-400">
              SCRCA and SIP share evidence-backed semantic intelligence principles but serve
              different primary domains. Choose the pilot path that matches your team and use case.
            </p>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {pilotPaths.map((pilot) => (
                <div
                  key={pilot.name}
                  className={`rounded-2xl border bg-white/[0.04] p-8 ${
                    pilot.accent === "cyan"
                      ? "border-cyan-300/20 hover:border-cyan-300/35"
                      : "border-purple-300/20 hover:border-purple-300/35"
                  }`}
                >
                  <p
                    className={`text-xs font-semibold uppercase tracking-widest ${
                      pilot.accent === "cyan" ? "text-cyan-300" : "text-purple-300"
                    }`}
                  >
                    Pilot service · {pilot.name}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">{pilot.title}</h3>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    For
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{pilot.forTeams}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Use it when
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{pilot.useWhen}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Primary outcome
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{pilot.outcome}</p>
                  <Link
                    href={pilot.href}
                    className={`mt-6 inline-flex items-center gap-2 text-sm font-medium ${
                      pilot.accent === "cyan"
                        ? "text-cyan-300 hover:text-cyan-200"
                        : "text-purple-300 hover:text-purple-200"
                    }`}
                  >
                    View {pilot.name} details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shared principles */}
        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Shared platform principles
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {principles.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <span className="text-sm font-semibold text-cyan-300">{index + 1}.</span>
                  <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pilot engagement options */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Pilot engagement options
            </h2>
            <p className="mt-4 max-w-3xl text-slate-400">
              Platform services are available as targeted pilots. SCRCA and SIP are emerging
              capabilities designed with future cloud and marketplace deployment patterns in mind.
            </p>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {pilotOptions.map((option) => (
                <div
                  key={option.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-7"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
                    {option.duration}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{option.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{option.desc}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Output
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{option.output}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PlatformPilotContact product="platforms" />
      </main>

      <SiteFooter />
    </div>
  );
}
