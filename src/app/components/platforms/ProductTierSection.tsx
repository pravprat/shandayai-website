import { ArrowDown, ArrowRight, CheckCircle2 } from "lucide-react";
import { platformTiers } from "@/lib/platform-sections";

export function ProductTierSection() {
  return (
    <div>
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Choose your starting point</h2>
        <p className="mt-4 text-slate-400">
          One RCA foundation. Three products. Start where your team is today and expand when
          requirements grow.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-stretch">
        {platformTiers.map((tier, index) => (
          <div key={tier.id} className="flex flex-1 flex-col lg:flex-row lg:items-stretch">
            <a
              href={`#${tier.id}`}
              className={`flex flex-1 flex-col rounded-2xl border p-6 transition hover:brightness-110 sm:p-7 ${tier.accent}`}
            >
              <h3 className="text-lg font-semibold leading-snug text-white">{tier.name}</h3>
              <p className="mt-2 text-sm font-medium text-slate-300">{tier.tagline}</p>
              <p className="mt-4 flex items-center gap-1.5 text-xs font-medium text-cyan-300">
                <CheckCircle2 className="h-3.5 w-3.5" />
                {tier.badge}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs text-slate-400">
                View details and demos
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>
            {index < platformTiers.length - 1 && (
              <>
                <div className="flex items-center justify-center py-2 lg:hidden">
                  <ArrowDown className="h-5 w-5 text-slate-600" />
                </div>
                <div className="hidden shrink-0 items-center px-2 lg:flex">
                  <ArrowRight className="h-5 w-5 text-slate-600" />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export type { PlatformTier } from "@/lib/platform-sections";
