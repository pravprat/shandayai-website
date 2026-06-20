import { VerifiedRcaPacketFlow } from "./VerifiedRcaPacketFlow";

export function VerifiedRcaPacketSection() {
  return (
    <section className="border-b border-white/10 bg-gradient-to-b from-violet-950/15 to-transparent">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-cyan-300/90">
            Verified demo
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            From Raw Logs to an Evidence-Backed RCA Packet
          </h2>
          <p className="mt-4 text-slate-400">
            See how a local OSIP control-plane run turns Kubernetes audit logs into a
            review-ready RCA packet with event-level evidence grounding — using sanitized
            output from a real Phase 1.6 run, not invented metrics.
          </p>
        </div>
        <div className="mt-10">
          <VerifiedRcaPacketFlow compact />
        </div>
      </div>
    </section>
  );
}
