import type { Metadata } from "next";
import ScrcaPageContent from "./ScrcaPageContent";

export const metadata: Metadata = {
  title: "SCRCA — Semantic Root Cause Analysis | ShandayAI",
  description:
    "Evidence-backed semantic root cause analysis for observability, logs, incidents, and operational intelligence.",
};

export default function ScrcaPage() {
  return <ScrcaPageContent />;
}
