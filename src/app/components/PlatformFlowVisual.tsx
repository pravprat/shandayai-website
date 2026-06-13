import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export type FlowStage = {
  label: string;
  desc: string;
  icon?: ReactNode;
  tone?: string;
};

type PlatformFlowVisualProps = {
  badge?: string;
  title: string;
  subtitle?: string;
  stages: FlowStage[];
  footer?: string;
  accent?: "cyan" | "purple";
};

const accentStyles = {
  cyan: {
    badge: "border-cyan-300/30 bg-cyan-300/10 text-cyan-200",
    arrow: "text-cyan-300",
    step: "bg-cyan-300/10 text-cyan-300 ring-cyan-300/20",
    iconRing: "bg-cyan-300/10 text-cyan-300 ring-cyan-300/20",
    glow: "shadow-cyan-950/30",
    gradient:
      "bg-[radial-gradient(circle_at_20%_10%,rgba(124,58,237,0.18),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.16),transparent_30%)]",
  },
  purple: {
    badge: "border-purple-300/30 bg-purple-300/10 text-purple-200",
    arrow: "text-purple-300",
    step: "bg-purple-300/10 text-purple-300 ring-purple-300/20",
    iconRing: "bg-purple-300/10 text-purple-300 ring-purple-300/20",
    glow: "shadow-purple-950/30",
    gradient:
      "bg-[radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.20),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.12),transparent_30%)]",
  },
};

const defaultTones = {
  cyan: [
    "from-violet-400 to-purple-500",
    "from-purple-400 to-fuchsia-500",
    "from-blue-400 to-cyan-500",
    "from-cyan-400 to-teal-500",
    "from-emerald-400 to-green-500",
    "from-sky-400 to-blue-500",
    "from-indigo-400 to-violet-500",
    "from-teal-400 to-cyan-500",
  ],
  purple: [
    "from-purple-400 to-fuchsia-500",
    "from-fuchsia-400 to-pink-500",
    "from-violet-400 to-purple-500",
    "from-indigo-400 to-violet-500",
    "from-blue-400 to-indigo-500",
    "from-cyan-400 to-blue-500",
    "from-emerald-400 to-teal-500",
  ],
};

export function PlatformFlowVisual({
  badge,
  title,
  subtitle,
  stages,
  footer,
  accent = "cyan",
}: PlatformFlowVisualProps) {
  const styles = accentStyles[accent];
  const tones = defaultTones[accent];

  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-2xl sm:p-8 ${styles.glow}`}
    >
      <div className={`absolute inset-0 ${styles.gradient}`} />
      <div className="relative">
        {(badge || title || subtitle) && (
          <div className="mb-8 max-w-3xl">
            {badge && (
              <div
                className={`mb-4 inline-flex rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest ${styles.badge}`}
              >
                {badge}
              </div>
            )}
            <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {title}
            </h3>
            {subtitle && (
              <p className="mt-3 text-base leading-7 text-slate-400">{subtitle}</p>
            )}
          </div>
        )}

        <div className="overflow-x-auto pb-2">
          <div className="flex min-w-max gap-3">
            {stages.map((stage, index) => (
              <div key={stage.label} className="relative w-48 shrink-0 sm:w-52">
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-slate-950/75 p-4 backdrop-blur sm:p-5">
                  {stage.icon ? (
                    <div
                      className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${stage.tone ?? tones[index % tones.length]} text-slate-950 shadow-lg`}
                    >
                      {stage.icon}
                    </div>
                  ) : (
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-semibold ring-1 ${styles.step}`}
                    >
                      {index + 1}
                    </div>
                  )}
                  <h4 className="mt-4 text-sm font-semibold leading-snug text-white">
                    {stage.label}
                  </h4>
                  <p className="mt-2 flex-1 text-xs leading-5 text-slate-400">{stage.desc}</p>
                </div>
                {index < stages.length - 1 && (
                  <div
                    className={`absolute right-[-0.85rem] top-1/2 z-10 hidden -translate-y-1/2 lg:block ${styles.arrow}`}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {footer && (
          <p className="mt-8 max-w-3xl text-sm leading-7 text-slate-300">{footer}</p>
        )}
      </div>
    </div>
  );
}

type MiniFlowProps = {
  steps: string[];
  accent?: "cyan" | "purple";
};

export function MiniFlowStrip({ steps, accent = "cyan" }: MiniFlowProps) {
  const arrowColor = accent === "cyan" ? "text-cyan-300" : "text-purple-300";
  const pillColor =
    accent === "cyan"
      ? "border-cyan-300/20 bg-cyan-300/10 text-cyan-100"
      : "border-purple-300/20 bg-purple-300/10 text-purple-100";

  return (
    <div className="overflow-x-auto pb-1">
      <div className="flex min-w-max items-center gap-2">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-2">
            <span
              className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-medium ${pillColor}`}
            >
              {step}
            </span>
            {index < steps.length - 1 && (
              <ArrowRight className={`h-3.5 w-3.5 shrink-0 ${arrowColor}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
