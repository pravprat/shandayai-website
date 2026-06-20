import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";
import { VerifiedRcaPacketFlow } from "../../../components/platforms/VerifiedRcaPacketFlow";

export const metadata: Metadata = {
  title: "Verified RCA packet demo | ShandayAI",
  description:
    "From raw Kubernetes audit logs to an evidence-backed RCA packet — sanitized output from a verified local OSIP ↔ SCRCA run.",
};

export default function VerifiedRcaPacketDemoPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-cyan-300/90">
            Verified demo · Phase 1.6
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            From Raw Logs to an Evidence-Backed RCA Packet
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            Walk through a real local run: enterprise log input, OSIP control plane,
            SCRCA as the Reliability engine, evidence grounding, RCA packet outputs,
            and replay validation. Metrics and narrative are sanitized from an actual
            Phase 1.6 CLI run — not a mock UI.
          </p>
        </div>

        <div className="mt-12">
          <VerifiedRcaPacketFlow />
        </div>

        <p className="mt-12 text-sm text-slate-500">
          <Link href="/platforms/demo/" className="text-slate-400 hover:text-cyan-300">
            All interactive demos
          </Link>
          {" · "}
          <Link href="/platforms/" className="text-slate-400 hover:text-cyan-300">
            Platforms overview
          </Link>
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
