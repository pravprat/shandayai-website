"use client";

import type { DemoRunResponse } from "@/lib/demo-types";
import { AgentOrchestrationStage } from "./AgentOrchestrationStage";
import { DemoShell } from "./DemoShell";

function RcaAssistDemoView({ data }: { data: DemoRunResponse }) {
  const assist = data.assist_summary;
  if (!assist) return null;
  return <AgentOrchestrationStage assist={assist} />;
}

export { RcaAssistDemoView };

export function RcaAssistDemo() {
  return (
    <DemoShell
      title="RCA Assist in action"
      subtitle="Watch agentic orchestration: hypotheses, evidence linking, and draft remediation actions built on RCA Core output."
    >
      {(data) => <RcaAssistDemoView data={data} />}
    </DemoShell>
  );
}
