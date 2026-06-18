import { ArrowRight, FileText, Layers3, Search, Sparkles } from "lucide-react";

const steps = [
  {
    label: "Logs and Incident Data",
    icon: <Layers3 className="h-5 w-5" />,
    subLabels: [] as string[],
  },
  {
    label: "RCA Pipeline",
    icon: <Search className="h-5 w-5" />,
    subLabels: ["Incident window", "Clustering", "Root-cause ranking"],
  },
  {
    label: "AI-Assisted Investigation",
    icon: <Sparkles className="h-5 w-5" />,
    subLabels: ["Summary", "Hypotheses", "Remediation draft"],
  },
  {
    label: "Evidence-Backed Report and Next Steps",
    icon: <FileText className="h-5 w-5" />,
    subLabels: ["Timeline", "Evidence", "Recommendations"],
  },
];

export function HowItWorksFlow() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.10),transparent_40%)]" />
      <div className="relative">
        <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
          From raw incident data to clear root-cause findings
        </h3>

        <div className="mt-8 overflow-x-auto pb-2">
          <div className="relative flex min-w-max items-start gap-2 sm:gap-3">
            <div className="pointer-events-none absolute left-8 right-8 top-10 hidden h-0.5 bg-gradient-to-r from-cyan-300/10 via-cyan-300/40 to-cyan-300/10 lg:block" />
            {steps.map((step, index) => (
              <div key={step.label} className="relative flex items-start gap-2 sm:gap-3">
                <div className="relative z-10 w-44 shrink-0 sm:w-52">
                  <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-slate-950/80 p-4 shadow-lg shadow-cyan-950/20 backdrop-blur">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300 ring-1 ring-cyan-300/20">
                      {step.icon}
                    </div>
                    <p className="mt-3 text-sm font-semibold leading-snug text-white">
                      {step.label}
                    </p>
                    {step.subLabels.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {step.subLabels.map((sub) => (
                          <span
                            key={sub}
                            className="rounded-full border border-cyan-300/15 bg-cyan-300/5 px-2 py-0.5 text-[10px] text-cyan-100/80 sm:text-xs"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="relative z-10 flex h-full shrink-0 items-center pt-10">
                    <ArrowRight className="h-4 w-4 text-cyan-300 sm:h-5 sm:w-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
