import { FlaskConical, Layers3, ShieldCheck, Users } from "lucide-react";

const proofPoints = [
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "RCA Core available for local evaluation",
    detail: "Run the deterministic RCA pipeline in a container with your own incident logs.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Design partner pilot program",
    detail: "RCA Assist and enterprise platform capabilities delivered through scoped engagements.",
  },
  {
    icon: <Layers3 className="h-5 w-5" />,
    title: "Works with existing observability data",
    detail: "Ingest logs and incident artifacts from the tools your teams already use.",
  },
  {
    icon: <FlaskConical className="h-5 w-5" />,
    title: "Evidence-linked findings",
    detail: "Root-cause candidates tied to timelines, clusters, and supporting log evidence.",
  },
];

export function PlatformProofStrip() {
  return (
    <section className="border-b border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-500">
          Why teams evaluate ShandayAI
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
            >
              <div className="inline-flex rounded-lg bg-cyan-300/10 p-2 text-cyan-300 ring-1 ring-cyan-300/20">
                {point.icon}
              </div>
              <h3 className="mt-3 text-sm font-semibold leading-snug text-white">{point.title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-400">{point.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
