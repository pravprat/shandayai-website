import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Semantic Platforms & Pilots | ShandayAI",
  description:
    "SCRCA and SIP pilot services for observability RCA, enterprise knowledge intelligence, and evidence-backed semantic reasoning.",
};

const pilots = [
  {
    name: "SCRCA",
    title: "Semantic RCA Pilot",
    desc: "A pilot service for observability and operations teams — logs, events, traces, and incident data into evidence-backed root cause analysis and remediation context.",
    bullets: [
      "Log and event ingestion",
      "Incident window detection",
      "Graph-based RCA",
      "Evidence bundles and summaries",
    ],
    href: "/platforms/scrca",
  },
  {
    name: "SIP",
    title: "Semantic Intelligence Pilot",
    desc: "A pilot service for enterprise knowledge and workflow intelligence — semantic context layers across documents, data assets, metadata, and operational knowledge.",
    bullets: [
      "Knowledge ingestion and enrichment",
      "Retrieval and context assembly",
      "Evidence-backed answers",
      "Agent-ready enterprise context",
    ],
    href: "/platforms/sip",
  },
];

export default function PlatformsPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.16),transparent_30%),linear-gradient(to_bottom,transparent,rgba(3,7,18,1))]" />
          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Semantic Platforms & Pilots
              </h1>
              <p className="mx-auto mt-6 text-lg leading-8 text-slate-300">
                Emerging platform capabilities for semantic intelligence — available for targeted
                pilots. Designed with future cloud and marketplace deployment patterns in mind.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {pilots.map((pilot) => (
                <div
                  key={pilot.name}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-8"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
                    Pilot service · {pilot.name}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold">{pilot.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{pilot.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {pilot.bullets.map((b) => (
                      <li key={b} className="text-sm text-slate-300">
                        · {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={pilot.href}
                    className="mt-6 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200"
                  >
                    View details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}
