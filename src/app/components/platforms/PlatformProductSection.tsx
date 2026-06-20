import { ArrowRight, CheckCircle2, Clock } from "lucide-react";
import type { PlatformTier } from "@/lib/platform-sections";

function AvailabilityBadge({ label }: { label: PlatformTier["badge"] }) {
  const styles =
    label === "Available today"
      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
      : label === "Design partner pilot"
        ? "border-amber-400/30 bg-amber-400/10 text-amber-200"
        : "border-slate-400/30 bg-slate-400/10 text-slate-300";

  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${styles}`}>
      {label}
    </span>
  );
}

type Props = {
  tier: PlatformTier;
};

export function PlatformProductSection({ tier }: Props) {
  return (
    <section id={tier.id} className="scroll-mt-28 border-b border-white/10 py-12 lg:py-16">
      <div className={`rounded-[1.5rem] border p-6 sm:p-8 ${tier.accent}`}>
          <AvailabilityBadge label={tier.badge} />
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {tier.name}
          </h2>
          <p className="mt-2 text-sm font-medium text-slate-300">{tier.tagline}</p>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-400">{tier.bestFor}</p>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <p
                className={`flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider ${tier.labelColor}`}
              >
                <CheckCircle2 className="h-3.5 w-3.5" />
                {tier.todayLabel ?? "Available today"}
              </p>
              <ul className="mt-3 space-y-2">
                {tier.availableToday.map((item) => (
                  <li key={item} className="text-sm leading-6 text-slate-300">
                    {item}
                  </li>
                ))}
              </ul>
              {tier.note ? (
                <p className="mt-4 rounded-lg border border-amber-400/20 bg-amber-400/5 px-3 py-2 text-xs leading-5 text-amber-100/90">
                  {tier.note}
                </p>
              ) : null}
            </div>
            <div>
              <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <Clock className="h-3.5 w-3.5" />
                {tier.futureLabel ?? "Future releases"}
              </p>
              <ul className="mt-3 space-y-2">
                {tier.comingSoon.map((item) => (
                  <li key={item} className="text-sm leading-6 text-slate-400">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-white/10 pt-4 text-xs text-slate-500">
                <span className="font-semibold uppercase tracking-wider">Deployment: </span>
                {tier.deployment}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
            <a
              href={`#demos-${tier.id}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200"
            >
              View {tier.shortName} demos
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
    </section>
  );
}
