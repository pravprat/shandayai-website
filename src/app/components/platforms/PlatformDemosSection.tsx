import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

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
            href="/platforms/demo/"
            className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-cyan-300 px-6 py-3.5 font-semibold text-slate-950 hover:bg-cyan-200"
          >
            <PlayCircle className="h-5 w-5" />
            Open demos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Link
            href="/platforms/demo/pipeline/"
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/30"
          >
            <p className="text-sm font-semibold text-white">Raw logs to RCA report</p>
            <p className="mt-1 text-xs text-slate-400">9-step pipeline on k8s authz reference case</p>
          </Link>
          <Link
            href="/platforms/demo/rca-assist/"
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-amber-400/30"
          >
            <p className="text-sm font-semibold text-white">RCA Assist reasoning and fixes</p>
            <p className="mt-1 text-xs text-slate-400">Hypotheses, evidence, and draft actions</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
