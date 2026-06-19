"use client";

import { Sparkles, Wrench, Brain, ShieldCheck } from "lucide-react";
import type { DemoRunResponse } from "@/lib/demo-types";
import { actionClassStyles } from "@/lib/demo-api";
import { DemoShell } from "./DemoShell";

function RcaAssistDemoView({ data }: { data: DemoRunResponse }) {
  const assist = data.assist_summary;
  if (!assist) return null;

  const chain = assist.reasoning.reasoning_chain;
  const topHyp = assist.reasoning.hypotheses[0];

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
      <div className="space-y-6">
        <div className="rounded-[1.5rem] border border-amber-400/20 bg-amber-400/5 p-5 sm:p-6">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-amber-300" />
            <h2 className="text-lg font-semibold text-white">Reasoning chain</h2>
          </div>
          <p className="mt-2 text-sm text-slate-400">
            How RCA Assist explains the finding: engine root cause, hypotheses, evidence, and
            recommended actions.
          </p>
          <ol className="relative mt-6 space-y-0 border-l border-white/10 pl-6">
            {chain.map((item, idx) => (
              <li key={item.step_id} className="relative pb-8 last:pb-0">
                <span className="absolute -left-[1.65rem] top-1 flex h-3 w-3 rounded-full bg-amber-300 ring-4 ring-[#030712]" />
                <p className="text-xs font-semibold uppercase tracking-wide text-amber-200/90">
                  {item.label}
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-300">{item.summary}</p>
                {item.confidence != null && (
                  <p className="mt-1 text-xs text-emerald-300">
                    Confidence {(item.confidence * 100).toFixed(0)}%
                  </p>
                )}
                {item.related_pattern_ids && item.related_pattern_ids.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {item.related_pattern_ids.slice(0, 8).map((p) => (
                      <span
                        key={p}
                        className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] text-slate-400"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                )}
                {idx === chain.length - 1 && item.actions && (
                  <ul className="mt-3 space-y-2">
                    {item.actions.map((a) => (
                      <li
                        key={a.action_id}
                        className="rounded-lg border border-white/10 bg-slate-950/60 p-3 text-sm"
                      >
                        <span className="font-medium text-white">{a.title}</span>
                        <p className="mt-1 text-xs text-slate-400">{a.description}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="space-y-6">
        {topHyp && (
          <div className="rounded-[1.5rem] border border-emerald-400/25 bg-emerald-400/5 p-5">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-300" />
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-300/80">
                Primary hypothesis
              </span>
            </div>
            <h3 className="mt-2 text-lg font-semibold text-white">{topHyp.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{topHyp.description}</p>
            <p className="mt-3 text-xs text-emerald-200">
              {topHyp.hypothesis_id} · {topHyp.status} · {(topHyp.confidence * 100).toFixed(0)}%
              confidence
            </p>
          </div>
        )}

        <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5">
          <div className="flex items-center gap-2">
            <Wrench className="h-4 w-4 text-cyan-300" />
            <h3 className="text-sm font-semibold text-white">Recommended actions</h3>
          </div>
          <ul className="mt-4 space-y-3">
            {assist.remediation.actions.map((action) => (
              <li
                key={action.action_id}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium text-white">{action.title}</span>
                  <span
                    className={`rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase ${actionClassStyles(action.action_class)}`}
                  >
                    {action.action_class.replace("_", " ")}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-400">{action.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {assist.report && (
          <div className="rounded-[1.5rem] border border-cyan-300/20 bg-slate-950/80 p-5">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              <h3 className="text-sm font-semibold text-white">{assist.report.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-300">{assist.report.summary}</p>
            <div className="mt-4 space-y-3">
              {assist.report.sections.map((sec) => (
                <div key={sec.heading}>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {sec.heading}
                  </p>
                  <p className="mt-1 whitespace-pre-wrap text-xs leading-5 text-slate-400">
                    {sec.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function RcaAssistDemo() {
  return (
    <DemoShell
      title="RCA Assist in action"
      subtitle="See how RCA Assist builds on RCA Core: ranked hypotheses, linked evidence, reasoning steps, and draft remediation actions your team can review before execution."
    >
      {(data) => <RcaAssistDemoView data={data} />}
    </DemoShell>
  );
}
