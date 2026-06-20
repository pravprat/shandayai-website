import Link from "next/link";
import { ArrowRight, BadgeCheck, FileText, PlayCircle, Sparkles } from "lucide-react";

export function PlatformDemosSection() {
  return (
    <section className="border-b border-white/10 bg-gradient-to-b from-cyan-950/20 to-transparent">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-cyan-300/90">
              Interactive demos
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              See the pipeline on a reference incident
            </h2>
            <p className="mt-4 text-slate-400">
              Walk through raw Kubernetes audit logs becoming an evidence-backed RCA report, then
              explore how RCA Assist adds reasoning and recommended actions. No login required.
            </p>
          </div>
          <Link
            href="/platforms/demo/play/"
            className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-cyan-300 px-6 py-3.5 font-semibold text-slate-950 hover:bg-cyan-200"
          >
            <PlayCircle className="h-5 w-5" />
            Play demo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/platforms/demo/verified-rca-packet/"
            className="rounded-2xl border border-cyan-400/30 bg-cyan-400/5 p-5 transition hover:border-cyan-300/50"
          >
            <div className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-cyan-300" />
              <p className="text-sm font-semibold text-white">Verified RCA packet</p>
            </div>
            <p className="mt-1 text-xs text-slate-400">
              OSIP ↔ SCRCA run · event-level grounding
            </p>
          </Link>
          <Link
            href="/platforms/demo/pipeline/"
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/30"
          >
            <p className="text-sm font-semibold text-white">Pipeline only</p>
            <p className="mt-1 text-xs text-slate-400">Raw logs to RCA report</p>
          </Link>
          <Link
            href="/platforms/demo/rca-assist/"
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-amber-400/30"
          >
            <p className="text-sm font-semibold text-white">RCA Assist only</p>
            <p className="mt-1 text-xs text-slate-400">Reasoning and recommended actions</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
