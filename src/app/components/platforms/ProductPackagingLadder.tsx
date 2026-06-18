import { ArrowDown, ArrowRight } from "lucide-react";

const tiers = [
  {
    tier: 1,
    name: "ShandayAI RCA Core",
    tagline: "Run deterministic RCA locally.",
    accent: "border-cyan-300/30 bg-cyan-300/5",
    labelColor: "text-cyan-300",
    includes: [
      { label: "Inputs", items: ["Logs and Incident Data"] },
      { label: "Outputs", items: ["RCA Findings", "Confidence", "Evidence"] },
    ],
  },
  {
    tier: 2,
    name: "ShandayAI RCA Assist",
    tagline: "Add AI-assisted investigation and reporting.",
    accent: "border-teal-300/30 bg-teal-300/5",
    labelColor: "text-teal-300",
    includes: [
      {
        label: "Includes",
        items: [
          "Summaries",
          "Hypotheses",
          "Evidence packaging",
          "Remediation suggestions",
          "Support-ready reports",
        ],
      },
    ],
  },
  {
    tier: 3,
    name: "ShandayAI Reliability Intelligence Platform",
    tagline: "Scale incident intelligence across the enterprise.",
    accent: "border-violet-300/30 bg-violet-300/5",
    labelColor: "text-violet-300",
    includes: [
      {
        label: "Includes",
        items: [
          "Workflow orchestration",
          "Governance",
          "Auditability",
          "Integrations",
          "Private or Marketplace Deployment",
        ],
      },
    ],
  },
];

export function ProductPackagingLadder() {
  return (
    <div className="mt-12 text-left">
      <h2 className="text-center text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Start small. Add assistance. Scale when ready.
      </h2>

      <div className="mt-8 flex flex-col items-stretch gap-4 lg:flex-row lg:items-stretch lg:gap-3">
        {tiers.map((tier, index) => (
          <div key={tier.name} className="flex flex-1 flex-col items-stretch lg:flex-row lg:items-stretch">
            <div
              className={`flex flex-1 flex-col rounded-2xl border p-5 sm:p-6 ${tier.accent}`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ring-1 ${tier.labelColor} bg-white/5 ring-current/30`}
                >
                  {tier.tier}
                </span>
                <p className={`text-xs font-semibold uppercase tracking-widest ${tier.labelColor}`}>
                  Tier {tier.tier}
                </p>
              </div>
              <h3 className="mt-4 text-base font-semibold leading-snug text-white sm:text-lg">
                {tier.name}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{tier.tagline}</p>
              {tier.includes.map((group) => (
                <div key={group.label} className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {group.label}
                  </p>
                  <ul className="mt-2 space-y-1">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300 sm:text-sm"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {index < tiers.length - 1 && (
              <>
                <div className="flex items-center justify-center py-1 lg:hidden">
                  <ArrowDown className="h-5 w-5 text-slate-500" />
                </div>
                <div className="hidden shrink-0 items-center px-1 lg:flex">
                  <ArrowRight className="h-5 w-5 text-slate-500" />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
