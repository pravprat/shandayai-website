"use client";

import { useState } from "react";
import type { DemoRunResponse } from "@/lib/demo-types";
import { PipelineFlowDemoView } from "./PipelineFlowDemo";
import { RcaAssistDemoView } from "./RcaAssistDemo";
import { DemoShell } from "./DemoShell";

type Tab = "pipeline" | "assist";

function UnifiedDemoContent({ data }: { data: DemoRunResponse }) {
  const [tab, setTab] = useState<Tab>("pipeline");

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setTab("pipeline")}
          className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
            tab === "pipeline"
              ? "bg-cyan-300 text-slate-950"
              : "border border-white/10 text-slate-400 hover:text-white"
          }`}
        >
          Raw logs → RCA report
        </button>
        <button
          type="button"
          onClick={() => setTab("assist")}
          className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
            tab === "assist"
              ? "bg-amber-300 text-slate-950"
              : "border border-white/10 text-slate-400 hover:text-white"
          }`}
        >
          RCA Assist orchestration
        </button>
      </div>
      {tab === "pipeline" ? (
        <PipelineFlowDemoView data={data} />
      ) : (
        <RcaAssistDemoView data={data} />
      )}
    </div>
  );
}

export function UnifiedProductDemo() {
  return (
    <DemoShell
      title="See customer value in motion"
      subtitle="One reference incident: Kubernetes authorization audit logs. Play the pipeline, then switch to RCA Assist to see agentic reasoning and recommended actions."
    >
      {(data) => <UnifiedDemoContent data={data} />}
    </DemoShell>
  );
}
