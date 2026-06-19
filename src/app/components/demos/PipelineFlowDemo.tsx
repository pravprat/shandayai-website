"use client";

import type { DemoRunResponse } from "@/lib/demo-types";
import { groupLabel, groupStyles } from "@/lib/demo-api";
import { DemoShell } from "./DemoShell";
import { DemoPlaybackControls } from "./DemoPlaybackControls";
import { LogToReportStage } from "./LogToReportStage";
import { useDemoPlayback } from "./useDemoPlayback";

function PipelineFlowDemoView({ data }: { data: DemoRunResponse }) {
  const flow = data.pipeline_flow;
  const { active, playing, progress, play, pause, reset, goTo } = useDemoPlayback(
    flow?.steps.length ?? 1,
    2600,
  );
  if (!flow) return null;

  const reportMd = flow.report_preview?.summary_markdown ?? "";

  return (
    <div className="space-y-6">
      <DemoPlaybackControls
        playing={playing}
        progress={progress}
        label="Watch raw Kubernetes audit logs become an evidence-backed RCA report"
        onPlay={play}
        onPause={pause}
        onReset={reset}
      />

      <LogToReportStage active={active} steps={flow.steps} reportMd={reportMd} />

      <div className="flex gap-1 overflow-x-auto pb-1">
        {flow.steps.map((s, idx) => (
          <button
            key={s.agent}
            type="button"
            onClick={() => goTo(idx)}
            className={`shrink-0 rounded-full border px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide transition-all duration-300 ${
              idx === active
                ? `${groupStyles(s.group)} scale-105`
                : idx < active
                  ? "border-white/15 bg-white/[0.06] text-slate-400"
                  : "border-white/5 text-slate-600"
            }`}
          >
            {groupLabel(s.group)} · {s.title.split(" ")[0]}
          </button>
        ))}
      </div>
    </div>
  );
}

export { PipelineFlowDemoView };

export function PipelineFlowDemo() {
  return (
    <DemoShell
      title="From raw logs to RCA report"
      subtitle="Auto-play the semantic RCA pipeline: raw audit logs become normalized events, ranked root cause, and a human-ready incident report."
    >
      {(data) => <PipelineFlowDemoView data={data} />}
    </DemoShell>
  );
}
