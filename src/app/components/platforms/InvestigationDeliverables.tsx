import {
  AlertCircle,
  Clock,
  FileText,
  Link2,
  ShieldCheck,
  Target,
  Wrench,
} from "lucide-react";

const outputs = [
  { label: "Root-cause finding", icon: <Target className="h-4 w-4" /> },
  { label: "Confidence score", icon: <ShieldCheck className="h-4 w-4" /> },
  { label: "Incident timeline", icon: <Clock className="h-4 w-4" /> },
  { label: "Evidence bundle", icon: <Link2 className="h-4 w-4" /> },
  { label: "Related symptoms", icon: <AlertCircle className="h-4 w-4" /> },
  { label: "Remediation guidance", icon: <Wrench className="h-4 w-4" /> },
  { label: "Support-ready report", icon: <FileText className="h-4 w-4" /> },
];

export function InvestigationDeliverables() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Standard investigation deliverables
      </h3>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
        Every analysis produces structured outputs teams can review, share with support or SRE, and
        use for post-incident follow-up.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {outputs.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3"
          >
            <span className="text-cyan-300">{item.icon}</span>
            <span className="text-sm text-slate-200">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
