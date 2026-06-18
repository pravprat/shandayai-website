import { ArrowRight, Bell, FileOutput, Share2, Upload, Workflow } from "lucide-react";

const stages = [
  {
    label: "Incident detected",
    detail: "Alert, ticket, or operational signal",
    icon: <Bell className="h-5 w-5" />,
  },
  {
    label: "Logs and incident data ingested",
    detail: "Operational logs and failure artifacts",
    icon: <Upload className="h-5 w-5" />,
  },
  {
    label: "RCA analysis runs",
    detail: "Window detection, clustering, root-cause ranking",
    icon: <Workflow className="h-5 w-5" />,
  },
  {
    label: "Evidence report generated",
    detail: "Findings, timeline, confidence, evidence bundle",
    icon: <FileOutput className="h-5 w-5" />,
  },
  {
    label: "Team handoff and next steps",
    detail: "Support, SRE, or platform review and action",
    icon: <Share2 className="h-5 w-5" />,
  },
];

export function OperationalWorkflowVisual() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_85%_100%,rgba(139,92,246,0.10),transparent_35%)]" />
      <div className="relative">
        <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
          Operational workflow from incident to handoff
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
          Designed to fit how SRE, platform, and support teams already work with observability and
          incident systems.
        </p>

        <div className="mt-8 hidden lg:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
            <div className="relative grid grid-cols-5 gap-3">
              {stages.map((stage, index) => (
                <div key={stage.label} className="relative">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4 backdrop-blur">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300 ring-1 ring-cyan-300/30">
                      {stage.icon}
                    </div>
                    <p className="mt-3 text-center text-xs font-semibold leading-snug text-white sm:text-sm">
                      {stage.label}
                    </p>
                    <p className="mt-2 text-center text-[11px] leading-5 text-slate-400">
                      {stage.detail}
                    </p>
                  </div>
                  {index < stages.length - 1 && (
                    <ArrowRight className="absolute -right-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-cyan-300/60" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-3 lg:hidden">
          {stages.map((stage, index) => (
            <div key={stage.label}>
              <div className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300 ring-1 ring-cyan-300/20">
                  {stage.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{stage.label}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">{stage.detail}</p>
                </div>
              </div>
              {index < stages.length - 1 && (
                <div className="flex justify-center py-1">
                  <div className="h-4 w-px bg-cyan-300/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
