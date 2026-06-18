import { ArrowDown } from "lucide-react";

const layers = [
  {
    product: "ShandayAI RCA Core",
    adds: "Deterministic RCA pipeline",
    flow: ["Logs and Incident Data", "RCA Findings", "Evidence"],
    accent: "border-cyan-300/30 bg-cyan-300/[0.07]",
    bar: "bg-cyan-300",
  },
  {
    product: "ShandayAI RCA Assist",
    adds: "AI-assisted investigation layer",
    flow: ["Summaries", "Hypotheses", "Reports", "Remediation Guidance"],
    accent: "border-teal-300/30 bg-teal-300/[0.07]",
    bar: "bg-teal-300",
  },
  {
    product: "ShandayAI Reliability Intelligence Platform",
    adds: "Enterprise workflow and governance layer",
    flow: ["Workflow orchestration", "Governance", "Auditability", "Integrations"],
    accent: "border-violet-300/30 bg-violet-300/[0.07]",
    bar: "bg-violet-400",
  },
];

export function CapabilityStackVisual() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Capability stack by product tier
      </h3>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
        Each tier builds on the same RCA foundation. Higher tiers add workflow, reporting, and
        enterprise controls without replacing what teams already use.
      </p>

      <div className="mx-auto mt-8 max-w-3xl">
        {layers.map((layer, index) => (
          <div key={layer.product}>
            <div className={`overflow-hidden rounded-2xl border ${layer.accent}`}>
              <div className={`h-1 ${layer.bar}`} />
              <div className="p-5 sm:p-6">
                <p className="text-sm font-semibold text-white">{layer.product}</p>
                <p className="mt-1 text-xs text-slate-400">{layer.adds}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {layer.flow.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {index < layers.length - 1 && (
              <div className="flex justify-center py-2">
                <ArrowDown className="h-4 w-4 text-slate-500" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
