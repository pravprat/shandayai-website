import { BarChart3, Bot, CheckCircle2, ShieldCheck } from "lucide-react";

const columns = [
  {
    title: "Your observability stack",
    icon: <BarChart3 className="h-5 w-5" />,
    summary:
      "Collects logs, metrics, traces, and alerts from the platforms your teams already run.",
    accent: "border-white/10 bg-white/[0.03]",
    iconStyle: "bg-slate-500/10 text-slate-400 ring-slate-500/20",
    muted: true,
  },
  {
    title: "Generic AI chatbot",
    icon: <Bot className="h-5 w-5" />,
    summary: "Answers questions quickly, but may lack evidence links, timelines, and reviewable RCA structure.",
    accent: "border-white/10 bg-white/[0.03]",
    iconStyle: "bg-slate-500/10 text-slate-400 ring-slate-500/20",
    muted: true,
  },
  {
    title: "ShandayAI",
    icon: <ShieldCheck className="h-5 w-5" />,
    summary:
      "Analyzes incident logs, ranks root causes with evidence, and produces structured reports for team review.",
    accent: "border-cyan-300/30 bg-cyan-300/5",
    iconStyle: "bg-cyan-300/10 text-cyan-300 ring-cyan-300/20",
    muted: false,
    highlights: [
      "Evidence-linked RCA findings",
      "Incident timelines",
      "Support-ready reports",
      "Remediation guidance",
    ],
  },
];

export function DifferentiationVisual() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Complements your observability stack
      </h3>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
        ShandayAI does not replace log platforms, metrics, or alerting. It adds an evidence-backed
        RCA layer on top of the incident data you already collect.
      </p>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {columns.map((col) => (
          <div
            key={col.title}
            className={`rounded-2xl border p-5 sm:p-6 ${col.accent} ${col.muted ? "opacity-90" : ""}`}
          >
            <div className={`inline-flex rounded-xl p-2.5 ring-1 ${col.iconStyle}`}>
              {col.icon}
            </div>
            <h4 className="mt-4 text-sm font-semibold text-white sm:text-base">{col.title}</h4>
            <p className="mt-2 text-sm leading-6 text-slate-400">{col.summary}</p>
            {col.highlights && (
              <ul className="mt-4 space-y-2">
                {col.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-cyan-100 sm:text-sm">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-cyan-300" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
