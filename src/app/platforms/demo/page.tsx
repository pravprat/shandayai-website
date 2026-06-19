import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Sparkles } from "lucide-react";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "Interactive demos | ShandayAI Reliability Intelligence",
  description:
    "Explore how ShandayAI turns raw incident logs into evidence-backed RCA reports and AI-assisted remediation guidance.",
};

const demos = [
  {
    href: "/platforms/demo/pipeline/",
    title: "Raw logs to RCA report",
    description:
      "Step through ingest, normalization, RCA Core, and final incident report on Kubernetes audit logs.",
    icon: FileText,
    badge: "RCA Core + pipeline",
  },
  {
    href: "/platforms/demo/rca-assist/",
    title: "RCA Assist reasoning and fixes",
    description:
      "Follow the reasoning chain from root-cause ranking to hypotheses, evidence, and recommended actions.",
    icon: Sparkles,
    badge: "RCA Assist",
  },
];

export default function DemoIndexPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-cyan-300/90">
            Interactive demos
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            See the platform work on a real reference incident
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            These demos use a certified Kubernetes authorization audit scenario. Data loads from a
            bundled snapshot on the static site; connect a local API for live pipeline runs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {demos.map((demo) => (
            <Link
              key={demo.href}
              href={demo.href}
              className="group rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/30 hover:bg-cyan-400/5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300 ring-1 ring-cyan-300/20">
                  <demo.icon className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-slate-400">
                  {demo.badge}
                </span>
              </div>
              <h2 className="mt-5 text-xl font-semibold text-white group-hover:text-cyan-100">
                {demo.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">{demo.description}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-300">
                Open demo
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-sm text-slate-500">
          <Link href="/platforms/" className="text-slate-400 hover:text-cyan-300">
            Back to Platforms overview
          </Link>
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
