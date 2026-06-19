"use client";

import { Brain, FileText, Link2, Wrench } from "lucide-react";
import type { AssistSummary } from "@/lib/demo-types";
import { actionClassStyles } from "@/lib/demo-api";
import { ASSIST_AGENT_STEPS } from "./demo-content";
import { DemoPlaybackControls } from "./DemoPlaybackControls";
import { useDemoPlayback } from "./useDemoPlayback";

const ICONS = {
  hypothesis: Brain,
  evidence: Link2,
  remediation: Wrench,
  report: FileText,
} as const;

type Props = {
  assist: AssistSummary;
};

export function AgentOrchestrationStage({ assist }: Props) {
  const chain = assist.reasoning.reasoning_chain;
  const { active, playing, progress, play, pause, reset, goTo } = useDemoPlayback(
    chain.length,
    3200,
  );

  const agentActive = (agentId: string) => {
    const item = chain[active];
    if (!item) return false;
    if (agentId === "hypothesis") return item.agent === "rca-engine" || item.agent === "hypothesis";
    if (agentId === "evidence") return item.agent === "evidence" || active >= 2;
    if (agentId === "remediation") return item.agent === "remediation" || active >= 3;
    if (agentId === "report") return active >= chain.length - 1;
    return false;
  };

  return (
    <div className="space-y-6">
      <DemoPlaybackControls
        playing={playing}
        progress={progress}
        label="RCA Assist orchestration: agents build on RCA Core output"
        onPlay={play}
        onPause={pause}
        onReset={reset}
      />

      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {ASSIST_AGENT_STEPS.map((agent, idx) => {
          const Icon = ICONS[agent.id];
          const lit = agentActive(agent.id);
          return (
            <div key={agent.id} className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => goTo(Math.min(idx, chain.length - 1))}
                className={`flex flex-col items-center gap-2 rounded-2xl border px-4 py-3 transition-all duration-500 ${
                  lit
                    ? "demo-pulse-active border-amber-400/50 bg-amber-400/10 text-amber-100"
                    : "border-white/10 bg-white/[0.02] text-slate-500"
                }`}
              >
                <Icon className={`h-5 w-5 ${lit ? "text-amber-300" : ""}`} />
                <span className="text-[10px] font-semibold uppercase tracking-wide">
                  {agent.label}
                </span>
              </button>
              {idx < ASSIST_AGENT_STEPS.length - 1 && (
                <div
                  className={`hidden h-0.5 w-6 rounded-full sm:block ${lit ? "bg-amber-400/60" : "bg-white/10"}`}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-3">
          {chain.map((item, idx) => (
            <div
              key={item.step_id}
              className={`rounded-xl border p-4 transition-all duration-500 ${
                idx <= active
                  ? "demo-fade-up border-white/15 bg-white/[0.04] opacity-100"
                  : "border-white/5 opacity-30"
              } ${idx === active ? "ring-1 ring-amber-400/40" : ""}`}
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-200/90">
                {item.label}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.summary}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {assist.report && active >= 1 && (
            <div className="demo-fade-up rounded-2xl border border-emerald-400/25 bg-emerald-400/5 p-5">
              <p className="text-xs uppercase tracking-widest text-emerald-300/80">
                Primary hypothesis
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">{assist.report.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{assist.report.summary}</p>
            </div>
          )}
          {active >= chain.length - 1 && (
            <div className="demo-fade-up space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Recommended actions
              </p>
              {assist.remediation.actions.map((action) => (
                <div
                  key={action.action_id}
                  className="rounded-xl border border-white/10 bg-slate-950/60 p-4"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-medium text-white">{action.title}</span>
                    <span
                      className={`rounded-full border px-2 py-0.5 text-[10px] uppercase ${actionClassStyles(action.action_class)}`}
                    >
                      {action.action_class.replace("_", " ")}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-400">{action.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
