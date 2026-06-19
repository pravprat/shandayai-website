import type { DemoRunResponse } from "./demo-types";

const SNAPSHOT_PATH = "/demo/k8s-authz-snapshot.json";

export async function loadDemoData(): Promise<DemoRunResponse> {
  const apiBase = process.env.NEXT_PUBLIC_DEMO_API_URL?.replace(/\/$/, "");

  if (apiBase) {
    try {
      const res = await fetch(`${apiBase}/v1/demo/run`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product_tier: "rca_assist",
          include: ["pipeline_flow", "assist_summary"],
        }),
      });
      if (res.ok) {
        return (await res.json()) as DemoRunResponse;
      }
    } catch {
      // fall through to bundled snapshot
    }
  }

  const snap = await fetch(SNAPSHOT_PATH);
  if (!snap.ok) {
    throw new Error("Demo snapshot unavailable");
  }
  return (await snap.json()) as DemoRunResponse;
}

export function groupLabel(group: string): string {
  const labels: Record<string, string> = {
    ingest: "Ingest",
    engine: "RCA Core",
    investigate: "Investigate",
    assist: "RCA Assist",
    platform: "Platform",
    deliver: "Report",
  };
  return labels[group] ?? group;
}

export function groupStyles(group: string): string {
  const styles: Record<string, string> = {
    ingest: "border-cyan-400/30 bg-cyan-400/10 text-cyan-200",
    engine: "border-violet-400/30 bg-violet-400/10 text-violet-200",
    investigate: "border-blue-400/30 bg-blue-400/10 text-blue-200",
    assist: "border-amber-400/30 bg-amber-400/10 text-amber-200",
    platform: "border-slate-400/30 bg-slate-400/10 text-slate-200",
    deliver: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  };
  return styles[group] ?? "border-white/20 bg-white/5 text-slate-300";
}

export function actionClassStyles(actionClass: string): string {
  if (actionClass === "observe_only") {
    return "border-sky-400/30 bg-sky-400/10 text-sky-200";
  }
  if (actionClass === "draft") {
    return "border-amber-400/30 bg-amber-400/10 text-amber-200";
  }
  return "border-white/20 bg-white/5 text-slate-300";
}
