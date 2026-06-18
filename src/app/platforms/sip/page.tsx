import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "ShandayAI Reliability Intelligence Platform",
  description:
    "Find root cause faster from logs and incident data, with evidence-backed RCA, AI-assisted reports, and enterprise deployment options.",
};

export default function SipRedirectPage() {
  redirect("/platforms/");
}
