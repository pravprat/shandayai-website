import {
  AlertCircle,
  Clock,
  FileText,
  Link2,
  ShieldCheck,
  Stethoscope,
  Wrench,
} from "lucide-react";

const outputs = [
  { label: "Root-cause finding", icon: <Stethoscope className="h-4 w-4" /> },
  { label: "Confidence score", icon: <ShieldCheck className="h-4 w-4" /> },
  { label: "Incident timeline", icon: <Clock className="h-4 w-4" /> },
  { label: "Evidence bundle", icon: <Link2 className="h-4 w-4" /> },
  { label: "Related symptoms", icon: <AlertCircle className="h-4 w-4" /> },
  { label: "Remediation guidance", icon: <Wrench className="h-4 w-4" /> },
  { label: "Support-ready report", icon: <FileText className="h-4 w-4" /> },
];

export function RCAOutputPacketVisual() {
  return (
    <div>
      <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
        What every RCA job produces
      </h3>

      <div className="mt-6 max-w-lg rounded-2xl border border-cyan-300/25 bg-gradient-to-b from-cyan-300/8 to-transparent p-6 shadow-lg shadow-cyan-950/20">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300 ring-1 ring-cyan-300/20">
            <FileText className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
              Output
            </p>
            <p className="text-base font-semibold text-white">RCA Output Packet</p>
          </div>
        </div>

        <ul className="mt-5 space-y-2.5">
          {outputs.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2.5"
            >
              <span className="text-cyan-300">{item.icon}</span>
              <span className="text-sm text-slate-200">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
