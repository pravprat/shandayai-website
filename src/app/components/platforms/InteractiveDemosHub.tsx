import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  demoAccentClasses,
  platformTiers,
  type PlatformTier,
} from "@/lib/platform-sections";
import { VerifiedRcaPacketFlow } from "./VerifiedRcaPacketFlow";

function DemoCardGroup({ tier }: { tier: PlatformTier }) {
  return (
    <div id={`demos-${tier.id}`} className="scroll-mt-28">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className={`text-sm font-semibold ${tier.labelColor}`}>{tier.shortName}</p>
          <h3 className="mt-1 text-lg font-semibold text-white">{tier.name} demos</h3>
        </div>
        <a
          href={`#${tier.id}`}
          className="hidden text-xs text-slate-500 hover:text-cyan-300 sm:inline"
        >
          Back to product overview
        </a>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {tier.demos.map((demo) => {
          const accent = demoAccentClasses[demo.accent];
          const Icon = demo.icon;
          return (
            <Link
              key={demo.href}
              href={demo.href}
              className={`group rounded-2xl border p-5 transition ${accent.border} ${
                demo.featured ? accent.bg : "border-white/10 bg-white/[0.03] hover:bg-white/[0.04]"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className={`rounded-lg bg-white/[0.04] p-2 ${accent.icon}`}>
                  <Icon className="h-4 w-4" />
                </div>
                {demo.badge ? (
                  <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-400">
                    {demo.badge}
                  </span>
                ) : null}
              </div>
              <p className="mt-4 text-sm font-semibold text-white group-hover:text-cyan-100">
                {demo.title}
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-400">{demo.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-cyan-300">
                Open demo
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function InteractiveDemosHub() {
  return (
    <section
      id="interactive-demos"
      className="scroll-mt-28 border-b border-white/10 bg-gradient-to-b from-cyan-950/15 to-transparent py-12 lg:py-16"
    >
      <div>
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-cyan-300/90">
            Interactive demos
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Try the product on a reference incident
          </h2>
          <p className="mt-4 text-slate-400">
            All demos use a certified Kubernetes authorization audit scenario. Demos are grouped
            by product tier so you can explore RCA Core, RCA Assist, and the full platform path
            without jumping between scattered sections.
          </p>
        </div>

        <div className="mt-12 space-y-14">
          {platformTiers.map((tier) => (
            <div key={tier.id}>
              <DemoCardGroup tier={tier} />
              {tier.id === "rca-core" ? (
                <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-6 sm:p-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-cyan-300/90">
                    Featured · verified run
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    From raw logs to an evidence-backed RCA packet
                  </h3>
                  <p className="mt-2 max-w-3xl text-sm text-slate-400">
                    Preview the verified local workflow: source signal, evidence grounding with
                    event-level citations, human-readable packet, and replay validation. Sanitized
                    from a real evaluation run.
                  </p>
                  <div className="mt-6">
                    <VerifiedRcaPacketFlow compact />
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
