import { Building2, Cloud, Container } from "lucide-react";

const options = [
  {
    icon: <Container className="h-6 w-6" />,
    title: "Local Container Deployment",
    bestFor: "Trials, SMBs, and local technical evaluations",
    accent: "border-cyan-300/25 bg-cyan-300/5",
    iconBg: "bg-cyan-300/10 text-cyan-300 ring-cyan-300/20",
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Private Enterprise Deployment",
    bestFor: "VPC, Kubernetes, data locality, and security-controlled environments",
    accent: "border-teal-300/25 bg-teal-300/5",
    iconBg: "bg-teal-300/10 text-teal-300 ring-teal-300/20",
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Marketplace Deployment",
    bestFor: "Procurement, private offers, metering, and standardized deployment",
    accent: "border-violet-300/25 bg-violet-300/5",
    iconBg: "bg-violet-300/10 text-violet-300 ring-violet-300/20",
  },
];

export function DeploymentOptionsVisual() {
  return (
    <div>
      <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
        Choose the deployment model that fits your environment
      </h3>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {options.map((option) => (
          <div
            key={option.title}
            className={`rounded-2xl border p-6 ${option.accent}`}
          >
            <div className={`inline-flex rounded-xl p-3 ring-1 ${option.iconBg}`}>
              {option.icon}
            </div>
            <h4 className="mt-4 text-base font-semibold leading-snug text-white sm:text-lg">
              {option.title}
            </h4>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Best for
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-300">{option.bestFor}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
