import type { Metadata } from "next";
import { Mail } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import PlatformPilotContact from "../components/PlatformPilotContact";
import { DeploymentOptionsVisual } from "../components/platforms/DeploymentOptionsVisual";
import { PlatformsHeroBanner } from "../components/platforms/PlatformsHeroBanner";
import { DifferentiationVisual } from "../components/platforms/DifferentiationVisual";
import { HowItWorksFlow } from "../components/platforms/HowItWorksFlow";
import { OperationalWorkflowVisual } from "../components/platforms/OperationalWorkflowVisual";
import { ProductPackagingLadder } from "../components/platforms/ProductPackagingLadder";
import { RCAOutputPacketVisual } from "../components/platforms/RCAOutputPacketVisual";
import { EMAIL_PLATFORMS } from "../components/contact";

export const metadata: Metadata = {
  title: "ShandayAI Reliability Intelligence Platform",
  description:
    "Find root cause faster from logs and incident data, with evidence-backed RCA, AI-assisted reports, and enterprise deployment options.",
};

const offerings = [
  {
    tier: "Entry",
    headline: "ShandayAI RCA Core",
    subHeadline: "Run deterministic RCA locally.",
    body: "For teams that want a lightweight container to analyze logs and generate evidence-backed root-cause findings. RCA Core ingests logs, detects incident windows, clusters related failures, ranks root-cause candidates, and produces RCA reports with supporting evidence.",
    bestFor:
      "SMBs, technical teams, local trials, simple pilots, and teams that want the core RCA pipeline without the full agentic workflow.",
    deployment: "Local Container Deployment or customer-managed environment.",
    accent: "border-cyan-300/25 bg-gradient-to-b from-cyan-300/5 to-transparent",
    labelColor: "text-cyan-300",
  },
  {
    tier: "Mid",
    headline: "ShandayAI RCA Assist",
    subHeadline: "Add AI-assisted investigation and reporting.",
    body: "For teams that want RCA plus AI-assisted summaries, hypotheses, evidence packaging, remediation suggestions, and support-ready incident reports. RCA Assist builds on RCA Core and adds selected agentic workflow capabilities without requiring the full enterprise platform.",
    bestFor:
      "Operations, SRE, support, and platform teams that want faster incident investigation and clearer handoff reports.",
    deployment:
      "Local Container Deployment, Private Enterprise Deployment, or scoped customer-hosted pilot.",
    accent: "border-teal-300/25 bg-gradient-to-b from-teal-300/5 to-transparent",
    labelColor: "text-teal-300",
  },
  {
    tier: "Enterprise",
    headline: "ShandayAI Reliability Intelligence Platform",
    subHeadline: "Scale incident intelligence across the enterprise.",
    body: "For enterprise teams that need complete incident intelligence workflow across root-cause analysis, evidence bundles, causal timelines, remediation guidance, governance, auditability, integrations, and private or marketplace deployment options.",
    bestFor:
      "Enterprise platform, infrastructure, reliability, and operations teams that need governed incident workflows and integration with existing operational systems.",
    deployment: "Private Enterprise Deployment or Marketplace Deployment.",
    accent: "border-violet-300/25 bg-gradient-to-b from-violet-300/5 to-transparent",
    labelColor: "text-violet-300",
  },
];

export default function PlatformsPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.14),transparent_28%),linear-gradient(to_bottom,transparent,rgba(3,7,18,1))]" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                ShandayAI Reliability Intelligence Platform
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Find root cause faster from logs and incident data, with evidence-backed RCA,
                AI-assisted reports, and enterprise deployment options.
              </p>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-400">
                ShandayAI helps operations, SRE, platform, and infrastructure teams move from raw
                logs and alerts to clear root-cause findings, evidence-backed reports, and guided
                next steps. Teams can start small with a lightweight local RCA container, add
                AI-assisted investigation and reporting, and scale into a full enterprise
                reliability intelligence platform as their needs mature.
              </p>
            </div>

            <PlatformsHeroBanner />

            <ProductPackagingLadder />

            <div className="mx-auto mt-12 max-w-4xl text-center">
              <a
                href={`mailto:${EMAIL_PLATFORMS}?subject=${encodeURIComponent("Reliability Intelligence inquiry")}`}
                className="inline-flex items-center gap-2 rounded-2xl bg-cyan-300 px-7 py-3.5 font-semibold text-slate-950 hover:bg-cyan-200"
              >
                <Mail className="h-5 w-5" />
                Discuss Your Use Case
              </a>
              <p className="mt-5 text-sm text-slate-500">
                <a href={`mailto:${EMAIL_PLATFORMS}`} className="text-slate-400 hover:text-cyan-300">
                  {EMAIL_PLATFORMS}
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Three offerings */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Three ways to start and scale
            </h2>
            <p className="mt-4 max-w-3xl text-slate-400">
              Choose the level that matches your team today. Each offering builds on the same
              evidence-backed RCA foundation.
            </p>

            <div className="mt-12 flex flex-col-reverse gap-10 lg:flex-row lg:items-start lg:gap-12">
              <div className="flex-1">
                <div className="grid gap-8 lg:grid-cols-3">
                  {offerings.map((item) => (
                    <div key={item.headline} className={`rounded-2xl border p-8 ${item.accent}`}>
                      <p className={`text-xs font-semibold uppercase tracking-widest ${item.labelColor}`}>
                        {item.tier}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold leading-snug">{item.headline}</h3>
                      <p className="mt-2 text-sm font-medium text-slate-300">{item.subHeadline}</p>
                      <p className="mt-5 text-sm leading-7 text-slate-400">{item.body}</p>
                      <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Best for
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-300">{item.bestFor}</p>
                      <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Deployment
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-400">{item.deployment}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="shrink-0 lg:w-80 lg:sticky lg:top-24">
                <RCAOutputPacketVisual />
              </div>
            </div>
          </div>
        </section>

        {/* Deployment Options */}
        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Deployment Options</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-400">
              ShandayAI products are designed to meet customers where they are, from local container
              trials to private enterprise deployments and future marketplace-based procurement.
            </p>
            <div className="mt-10">
              <DeploymentOptionsVisual />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How It Works</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-400">
              Start with operational logs and incident data. Run evidence-backed RCA, add optional
              AI-assisted investigation, and deliver reports with clear next steps.
            </p>
            <div className="mt-10">
              <HowItWorksFlow />
            </div>
            <div className="mt-10">
              <OperationalWorkflowVisual />
            </div>
          </div>
        </section>

        {/* What This Is Not */}
        <section className="border-t border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What This Is Not</h2>
            <div className="mt-8">
              <DifferentiationVisual />
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-400">
              ShandayAI Reliability Intelligence is not another dashboarding tool and not a generic
              chatbot. It is designed to complement existing observability and incident systems by
              turning the signals teams already collect into root-cause findings, evidence-backed
              reports, and guided next steps.
            </p>
          </div>
        </section>

        <PlatformPilotContact
          headline="Start with the right reliability intelligence level."
          body="Whether you need a local RCA trial, AI-assisted investigation, or a scoped enterprise pilot, ShandayAI can help you choose the right starting point."
          ctaLabel="Discuss Your Use Case"
        />
      </main>

      <SiteFooter />
    </div>
  );
}
