"use client";

import { useState } from "react";
import { CheckCircle2, ChevronRight, FileText, Layers3 } from "lucide-react";
import type { DemoRunResponse, PipelineStep } from "@/lib/demo-types";
import { groupLabel, groupStyles } from "@/lib/demo-api";
import { DemoShell } from "./DemoShell";
import { SimpleMarkdown } from "./SimpleMarkdown";

function StepHighlights({ step }: { step: PipelineStep }) {
  const h = step.highlights;
  if (step.agent === "rca-engine" && h.engine_context) {
    const ctx = h.engine_context as Record<string, string | number>;
    return (
      <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
        {ctx.root_cause_title && (
          <>
            <dt className="text-slate-500">Root cause</dt>
            <dd className="text-slate-200">{String(ctx.root_cause_title)}</dd>
          </>
        )}
        {ctx.primary_response_code != null && (
          <>
            <dt className="text-slate-500">HTTP code</dt>
            <dd className="text-slate-200">{ctx.primary_response_code}</dd>
          </>
        )}
        {ctx.primary_component && (
          <>
            <dt className="text-slate-500">Component</dt>
            <dd className="text-slate-200">{ctx.primary_component}</dd>
          </>
        )}
      </dl>
    );
  }
  if (h.log_format_id) {
    return (
      <p className="mt-3 text-sm text-slate-300">
        Detected <span className="font-medium text-white">{String(h.display_name)}</span> (
        {Math.round(Number(h.detection_confidence) * 100)}% confidence)
      </p>
    );
  }
  if (h.event_count != null) {
    return (
      <p className="mt-3 text-sm text-slate-300">
        Normalized <span className="font-medium text-white">{String(h.event_count)}</span> events
        from raw audit log lines.
      </p>
    );
  }
  if (h.title) {
    const summary = "summary" in h ? h.summary : undefined;
    return (
      <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4">
        <p className="text-sm font-semibold text-emerald-200">{String(h.title)}</p>
        {summary != null && summary !== "" && (
          <p className="mt-2 text-sm leading-6 text-slate-300">{String(summary)}</p>
        )}
      </div>
    );
  }
  return (
    <p className="mt-3 text-xs text-slate-500">
      {String(h.artifacts_written ?? 0)} artifact(s) written
    </p>
  );
}

function PipelineFlowDemoView({ data }: { data: DemoRunResponse }) {
  const flow = data.pipeline_flow;
  const [active, setActive] = useState(0);
  if (!flow) return null;

  const step = flow.steps[active];
  const reportMd = flow.report_preview?.summary_markdown ?? "";

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
      <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4 sm:p-6">
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <Layers3 className="h-4 w-4 text-cyan-300" />
          Kubernetes audit log · incident {flow.incident_id}
        </div>
        <ol className="mt-6 space-y-2">
          {flow.steps.map((s, idx) => (
            <li key={s.agent}>
              <button
                type="button"
                onClick={() => setActive(idx)}
                className={`flex w-full items-start gap-3 rounded-xl border px-3 py-3 text-left transition ${
                  idx === active
                    ? "border-cyan-400/40 bg-cyan-400/10"
                    : "border-white/10 bg-slate-950/40 hover:border-white/20"
                }`}
              >
                <span
                  className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                    s.status === "completed"
                      ? "bg-emerald-400/15 text-emerald-300"
                      : "bg-white/10 text-slate-400"
                  }`}
                >
                  {s.status === "completed" ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    s.order
                  )}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-medium text-white">{s.title}</span>
                    <span
                      className={`rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${groupStyles(s.group)}`}
                    >
                      {groupLabel(s.group)}
                    </span>
                  </span>
                  <span className="mt-0.5 block text-xs text-slate-500">{s.subtitle}</span>
                </span>
                <ChevronRight
                  className={`h-4 w-4 shrink-0 text-slate-500 ${idx === active ? "text-cyan-300" : ""}`}
                />
              </button>
            </li>
          ))}
        </ol>
      </div>

      <div className="space-y-6">
        <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            Step {step.order} · {step.agent}
          </p>
          <h2 className="mt-2 text-xl font-semibold text-white">{step.title}</h2>
          <p className="mt-1 text-sm text-slate-400">{step.subtitle}</p>
          <StepHighlights step={step} />
        </div>

        {active === flow.steps.length - 1 && reportMd && (
          <div className="rounded-[1.5rem] border border-cyan-300/20 bg-slate-950/80 p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-cyan-300" />
              <h3 className="text-sm font-semibold text-white">Incident report preview</h3>
            </div>
            <div className="mt-4 max-h-[420px] overflow-y-auto pr-1">
              <SimpleMarkdown text={reportMd} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function PipelineFlowDemo() {
  return (
    <DemoShell
      title="From raw logs to RCA report"
      subtitle="Walk through the semantic RCA pipeline: ingest, normalize, run RCA Core, and publish an evidence-backed incident report. Reference case: Kubernetes authorization audit logs."
    >
      {(data) => <PipelineFlowDemoView data={data} />}
    </DemoShell>
  );
}
