import { Building2, Cloud, Container } from "lucide-react";

const options = [
  {
    icon: <Container className="h-6 w-6" />,
    title: "Local Container Deployment",
    bestFor: "Technical evaluations, early pilots, and customer-managed environments",
    status: "Available today" as const,
    accent: "border-cyan-300/25 bg-cyan-300/5",
    iconBg: "bg-cyan-300/10 text-cyan-300 ring-cyan-300/20",
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Private Enterprise Deployment",
    bestFor: "VPC, Kubernetes, data locality, and security-controlled environments",
    status: "Design partner pilot" as const,
    accent: "border-teal-300/25 bg-teal-300/5",
    iconBg: "bg-teal-300/10 text-teal-300 ring-teal-300/20",
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Marketplace Deployment",
    bestFor: "Procurement, private offers, metering, and standardized deployment",
    status: "Roadmap" as const,
    accent: "border-violet-300/25 bg-violet-300/5",
    iconBg: "bg-violet-300/10 text-violet-300 ring-violet-300/20",
  },
];

function StatusBadge({ status }: { status: (typeof options)[number]["status"] }) {
  const styles =
    status === "Available today"
      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
      : status === "Design partner pilot"
        ? "border-amber-400/30 bg-amber-400/10 text-amber-200"
        : "border-slate-400/30 bg-slate-400/10 text-slate-300";

  return (
    <span className={`inline-flex rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${styles}`}>
      {status}
    </span>
  );
}

export function DeploymentOptionsVisual() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {options.map((option) => (
        <div key={option.title} className={`rounded-2xl border p-6 ${option.accent}`}>
          <div className="flex items-start justify-between gap-3">
            <div className={`inline-flex rounded-xl p-3 ring-1 ${option.iconBg}`}>{option.icon}</div>
            <StatusBadge status={option.status} />
          </div>
          <h4 className="mt-4 text-base font-semibold leading-snug text-white">{option.title}</h4>
          <p className="mt-3 text-sm leading-6 text-slate-400">{option.bestFor}</p>
        </div>
      ))}
    </div>
  );
}
