import { AlertTriangle, Clock, FileText, Link2, ShieldCheck } from "lucide-react";

export function SampleInvestigationReport() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-400/10 via-transparent to-violet-400/10 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-cyan-300/20 bg-slate-950/90 shadow-2xl shadow-cyan-950/30 ring-1 ring-white/10">
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-cyan-300" />
            <span className="text-sm font-semibold text-white">Sample investigation report</span>
          </div>
          <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-200">
            Illustrative
          </span>
        </div>

        <div className="space-y-4 p-4 sm:p-5">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
              Incident
            </p>
            <p className="mt-1 text-sm font-medium text-slate-200">
              Elevated error rate · payment-api · 2026-06-12 14:08 UTC
            </p>
          </div>

          <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-3">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-emerald-300/80">
              Primary root-cause finding
            </p>
            <p className="mt-1.5 text-sm leading-6 text-slate-200">
              Connection pool exhaustion after downstream latency spike in auth-service.
            </p>
            <div className="mt-2 flex items-center gap-2 text-xs text-emerald-200">
              <ShieldCheck className="h-3.5 w-3.5" />
              Confidence: High · 3 supporting evidence clusters
            </div>
          </div>

          <div>
            <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
              <Clock className="h-3 w-3" />
              Incident timeline
            </p>
            <ul className="mt-2 space-y-1.5 text-xs text-slate-400">
              <li>14:08 · Error rate crosses threshold</li>
              <li>14:09 · Retry storm in payment-api logs</li>
              <li>14:11 · auth-service latency spike detected</li>
            </ul>
          </div>

          <div>
            <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
              <Link2 className="h-3 w-3" />
              Evidence bundle
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {["Log cluster A", "Trace correlation", "Alert context"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[11px] text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
              <AlertTriangle className="h-3 w-3" />
              Recommended next steps
            </p>
            <p className="mt-1.5 text-xs leading-5 text-slate-400">
              Review auth-service latency, validate pool limits, and confirm rollback criteria with
              on-call before restart.
            </p>
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-slate-500 lg:text-left">
        Redacted example. Actual output varies by incident data and product tier.
      </p>
    </div>
  );
}
