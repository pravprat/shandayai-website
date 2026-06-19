"use client";

import type { PipelineStep } from "@/lib/demo-types";
import { RAW_LOG_LINES } from "./demo-content";
import { SimpleMarkdown } from "./SimpleMarkdown";

type Props = {
  active: number;
  steps: PipelineStep[];
  reportMd: string;
};

export function LogToReportStage({ active, steps, reportMd }: Props) {
  const step = steps[active];
  const showEvents = active >= 3 && active < steps.length - 1;
  const showEngine = active >= 4 && active < steps.length - 1;
  const showReport = active === steps.length - 1 && !!reportMd;
  const normStep = steps.find((s) => s.agent === "signal-normalization");
  const events =
    (normStep?.highlights.sample_events as
      | { event_id: string; timestamp: string; response_code: number; message: string }[]
      | undefined) ?? [];
  const engineStep = steps.find((s) => s.agent === "rca-engine");
  const engineCtx = (engineStep?.highlights.engine_context ?? {}) as Record<string, unknown>;

  return (
    <div
      className={`grid gap-4 transition-all duration-700 lg:gap-6 ${
        showReport ? "lg:grid-cols-1" : "lg:grid-cols-2"
      }`}
    >
      {!showReport && (
        <div className="demo-fade-up overflow-hidden rounded-2xl border border-white/10 bg-black/60 font-mono text-xs shadow-inner shadow-cyan-950/40">
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            <span className="ml-2 text-slate-500">k8s_audit_v1.log</span>
          </div>
          <div className="max-h-64 space-y-1 overflow-y-auto p-4 text-[11px] leading-relaxed sm:max-h-80 sm:text-xs">
            {!showEvents &&
              RAW_LOG_LINES.slice(0, Math.min(RAW_LOG_LINES.length, active + 2)).map((line, i) => (
                <p
                  key={line}
                  className={`text-slate-400 transition-opacity duration-500 ${i === active + 1 ? "text-cyan-200 demo-type-cursor" : ""}`}
                  style={{ opacity: 1 - i * 0.08 }}
                >
                  {line}
                </p>
              ))}
            {showEvents && (
              <div className="demo-fade-up space-y-2 text-slate-300">
                <p className="text-[10px] uppercase tracking-widest text-cyan-400/80">
                  Normalized events
                </p>
                {events.map((ev) => (
                  <div
                    key={ev.event_id}
                    className="rounded-lg border border-white/10 bg-white/[0.03] p-2"
                  >
                    <span className="text-amber-300">{ev.response_code}</span>
                    <span className="text-slate-600"> · </span>
                    <span className="text-slate-400">{ev.timestamp.slice(11, 19)}</span>
                    <p className="mt-1 truncate text-slate-500">{ev.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <div
        className={`rounded-2xl border bg-slate-950/70 p-5 transition-all duration-700 ${
          showReport
            ? "border-cyan-300/30 shadow-lg shadow-cyan-950/30"
            : "border-white/10 demo-pulse-active"
        }`}
      >
        {showReport ? (
          <div className="demo-fade-up">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-300/90">
              Human-ready incident report
            </p>
            <div className="mt-4 max-h-[480px] overflow-y-auto pr-1">
              <SimpleMarkdown text={reportMd} />
            </div>
          </div>
        ) : (
          <>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Step {step.order} · {step.title}
            </p>
            <p className="mt-2 text-sm text-slate-400">{step.subtitle}</p>
            {showEngine && engineCtx.root_cause_title && (
              <div className="demo-fade-up mt-4 rounded-xl border border-violet-400/30 bg-violet-400/10 p-4">
                <p className="text-[10px] uppercase tracking-widest text-violet-200/80">RCA Core</p>
                <p className="mt-1 text-base font-semibold text-white">
                  {String(engineCtx.root_cause_title)}
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  {String(engineCtx.candidate_type ?? "authz")} · confidence{" "}
                  {engineCtx.confidence
                    ? `${Math.round(Number(engineCtx.confidence) * 100)}%`
                    : "high"}
                </p>
              </div>
            )}
            {active >= 5 && active < steps.length - 1 && (
              <div className="demo-fade-up mt-4 flex flex-wrap gap-2">
                {steps.slice(5, -1).map((s, idx) => (
                  <span
                    key={s.agent}
                    className={`rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide transition-all duration-300 ${
                      active >= 5 + idx
                        ? "border-amber-400/40 bg-amber-400/15 text-amber-100"
                        : "border-white/10 text-slate-600"
                    }`}
                  >
                    {s.title}
                  </span>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
