import type { Metadata } from "next";
import { Mail } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import PlatformPilotContact from "../components/PlatformPilotContact";
import { DeploymentOptionsVisual } from "../components/platforms/DeploymentOptionsVisual";
import { DifferentiationVisual } from "../components/platforms/DifferentiationVisual";
import { HowItWorksFlow } from "../components/platforms/HowItWorksFlow";
import { InvestigationDeliverables } from "../components/platforms/InvestigationDeliverables";
import { ProductTierSection } from "../components/platforms/ProductTierSection";
import { EMAIL_PLATFORMS } from "../components/contact";

export const metadata: Metadata = {
  title: "ShandayAI Reliability Intelligence Platform",
  description:
    "Incident RCA software that turns logs and incident data into evidence-backed root-cause findings and reports. RCA Core available today.",
};

const availabilityItems = [
  { label: "RCA Core", status: "Available today" },
  { label: "RCA Assist", status: "Design partner pilot" },
  { label: "Enterprise platform", status: "Design partner pilot" },
  { label: "Marketplace", status: "Roadmap" },
];

export default function PlatformsPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <SiteHeader />

      <main>
        {/* Hero — 10-second clarity */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.10),transparent_28%)]" />
          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
                Incident RCA software
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-tight">
                Evidence-backed root cause analysis from incident logs
              </h1>
              <p className="mx-auto mt-6 text-lg leading-8 text-slate-300">
                ShandayAI ingests logs and incident data, ranks likely root causes with supporting
                evidence, and produces reports your operations and SRE teams can review and act on.
              </p>
              <p className="mx-auto mt-4 text-base leading-7 text-slate-400">
                Runs in a local container today. Expands to AI-assisted investigation and private
                enterprise deployment through design partner pilots.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-2">
                {availabilityItems.map((item) => (
                  <span
                    key={item.label}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300"
                  >
                    <span className="font-medium text-white">{item.label}</span>
                    <span className="mx-1.5 text-slate-600">·</span>
                    {item.status}
                  </span>
                ))}
              </div>

              <a
                href={`mailto:${EMAIL_PLATFORMS}?subject=${encodeURIComponent("Reliability Intelligence inquiry")}`}
                className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-cyan-300 px-7 py-3.5 font-semibold text-slate-950 hover:bg-cyan-200"
              >
                <Mail className="h-5 w-5" />
                Discuss Your Use Case
              </a>
              <p className="mt-4 text-sm text-slate-500">
                <a href={`mailto:${EMAIL_PLATFORMS}`} className="text-slate-400 hover:text-cyan-300">
                  {EMAIL_PLATFORMS}
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Product tiers — single source of truth */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <ProductTierSection />
          </div>
        </section>

        {/* How it works — one flow */}
        <section className="border-b border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How it works</h2>
              <p className="mt-4 text-slate-400">
                Logs and incident data in. Evidence-backed findings and reports out. Optional
                AI-assisted investigation on the Assist and Platform tiers.
              </p>
            </div>
            <div className="mt-10">
              <HowItWorksFlow />
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <InvestigationDeliverables />
          </div>
        </section>

        {/* Deployment */}
        <section className="border-b border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Deployment</h2>
              <p className="mt-4 text-slate-400">
                Start with a local container. Move to private enterprise infrastructure when security,
                data locality, and governance requirements require it.
              </p>
            </div>
            <div className="mt-10">
              <DeploymentOptionsVisual />
            </div>
          </div>
        </section>

        {/* Differentiation */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <DifferentiationVisual />
          </div>
        </section>

        <PlatformPilotContact
          headline="Start with RCA Core or join a design partner pilot."
          body="RCA Core is available for local evaluation today. RCA Assist and the enterprise platform are available through scoped design partner engagements."
          ctaLabel="Discuss Your Use Case"
        />
      </main>

      <SiteFooter />
    </div>
  );
}
