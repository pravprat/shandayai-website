import { ArrowDown, ArrowRight, CheckCircle2, Clock } from "lucide-react";

export type ProductTier = {
  name: string;
  tagline: string;
  bestFor: string;
  availableToday: string[];
  comingSoon: string[];
  deployment: string;
  accent: string;
  labelColor: string;
  badge: "Available today" | "Design partner pilot" | "Pilot and roadmap";
  todayLabel?: string;
  futureLabel?: string;
  note?: string;
};

const tiers: ProductTier[] = [
  {
    name: "ShandayAI RCA Core",
    tagline: "Deterministic RCA in a local or customer-managed container.",
    bestFor:
      "Teams starting with evidence-backed RCA from logs and incident data before adding AI-assisted workflows.",
    availableToday: [
      "Local container deployment",
      "Log and incident data ingest",
      "Incident window detection and failure clustering",
      "Root-cause candidate ranking with evidence links",
      "RCA reports for team review",
    ],
    comingSoon: [
      "Additional export formats for ITSM handoff",
      "Broader pre-built connector patterns",
    ],
    deployment: "Local Container Deployment or customer-managed environment",
    accent: "border-cyan-300/25 bg-gradient-to-b from-cyan-300/5 to-transparent",
    labelColor: "text-cyan-300",
    badge: "Available today",
  },
  {
    name: "ShandayAI RCA Assist",
    tagline: "RCA Core plus AI-assisted investigation and reporting.",
    bestFor:
      "Operations, SRE, support, and platform teams that want faster investigation and clearer handoff reports.",
    availableToday: [
      "Full RCA Core pipeline",
      "Local and private deployment options through pilot engagements",
    ],
    comingSoon: [
      "AI-assisted summaries and hypotheses",
      "Evidence packaging for support-ready reports",
      "Remediation suggestions with human review",
      "Broader self-serve enterprise deployment",
    ],
    deployment: "Local container or private enterprise through design partner pilot",
    accent: "border-teal-300/25 bg-gradient-to-b from-teal-300/5 to-transparent",
    labelColor: "text-teal-300",
    badge: "Design partner pilot",
    todayLabel: "In pilot today",
    futureLabel: "Planned for broader release",
    note: "AI-assisted investigation is delivered through design partner pilots. The RCA Core pipeline is available now.",
  },
  {
    name: "ShandayAI Reliability Intelligence Platform",
    tagline: "Enterprise incident intelligence with governance and integrations.",
    bestFor:
      "Platform, infrastructure, and reliability teams that need governed incident workflows in private environments.",
    availableToday: [
      "Scoped enterprise pilots with RCA Core and Assist capabilities",
      "Private deployment patterns in customer-controlled infrastructure",
    ],
    comingSoon: [
      "Expanded observability and ITSM integrations",
      "Enterprise workflow orchestration and auditability at scale",
      "Cloud marketplace procurement",
    ],
    deployment: "Private enterprise deployment; marketplace on roadmap",
    accent: "border-violet-300/25 bg-gradient-to-b from-violet-300/5 to-transparent",
    labelColor: "text-violet-300",
    badge: "Pilot and roadmap",
    todayLabel: "In pilot today",
    futureLabel: "Planned for broader release",
  },
];

function AvailabilityBadge({ label }: { label: ProductTier["badge"] }) {
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
        {tiers.map((tier, index) => (
          <div key={tier.name} className="flex flex-1 flex-col lg:flex-row lg:items-stretch">
            <div className={`flex flex-1 flex-col rounded-2xl border p-6 sm:p-7 ${tier.accent}`}>
              <AvailabilityBadge label={tier.badge} />
              <h3 className="mt-4 text-lg font-semibold leading-snug text-white">{tier.name}</h3>
              <p className="mt-2 text-sm font-medium text-slate-300">{tier.tagline}</p>
              <p className="mt-4 text-xs leading-6 text-slate-400">{tier.bestFor}</p>

              <div className="mt-6">
                <p
                  className={`flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider ${tier.labelColor}`}
                >
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {tier.todayLabel ?? "Available today"}
                </p>
                <ul className="mt-2 space-y-1.5">
                  {tier.availableToday.map((item) => (
                    <li key={item} className="text-sm leading-6 text-slate-300">
                      {item}
                    </li>
                  ))}
                </ul>
                {tier.note && (
                  <p className="mt-3 rounded-lg border border-amber-400/20 bg-amber-400/5 px-3 py-2 text-xs leading-5 text-amber-100/90">
                    {tier.note}
                  </p>
                )}
              </div>

              <div className="mt-5">
                <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <Clock className="h-3.5 w-3.5" />
                  {tier.futureLabel ?? "Future releases"}
                </p>
                <ul className="mt-2 space-y-1.5">
                  {tier.comingSoon.map((item) => (
                    <li key={item} className="text-sm leading-6 text-slate-400">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-5 border-t border-white/10 pt-4 text-xs text-slate-500">
                <span className="font-semibold uppercase tracking-wider">Deployment: </span>
                {tier.deployment}
              </p>
            </div>

            {index < tiers.length - 1 && (
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
