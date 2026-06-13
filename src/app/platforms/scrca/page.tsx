import type { Metadata } from "next";
import ScrcaPageContent from "./ScrcaPageContent";

export const metadata: Metadata = {
  title: "SCRCA: Semantic RCA Pilot | ShandayAI",
  description:
    "Pilot service for evidence-backed root cause analysis across observability, logs, incidents, and operational intelligence.",
};

export default function ScrcaPage() {
  return <ScrcaPageContent />;
}
