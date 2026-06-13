import { Mail } from "lucide-react";
import { EMAIL_PLATFORMS } from "./contact";

type PlatformPilotContactProps = {
  product?: "SCRCA" | "SIP" | "platforms";
  headline?: string;
  body?: string;
  ctaLabel?: string;
};

const defaults: Record<
  NonNullable<PlatformPilotContactProps["product"]>,
  { headline: string; body: string; ctaLabel: string }
> = {
  SCRCA: {
    headline: "Ready to test semantic RCA on real operational data?",
    body: "Start with a scoped pilot using a limited set of logs, events, incidents, tickets, or observability data.",
    ctaLabel: "Discuss an SCRCA Pilot",
  },
  SIP: {
    headline: "Need to make enterprise knowledge AI-ready?",
    body: "Start with a SIP pilot to assess your knowledge sources, metadata, retrieval quality, access boundaries, and agent-ready context.",
    ctaLabel: "Discuss a SIP Pilot",
  },
  platforms: {
    headline: "Explore a semantic intelligence pilot.",
    body: "Start with a scoped pilot to test whether semantic enrichment, evidence-backed reasoning, and governed AI workflows can improve your operational or enterprise knowledge use case.",
    ctaLabel: "Discuss a Platform Pilot",
  },
};

export default function PlatformPilotContact({
  product = "platforms",
  headline,
  body,
  ctaLabel,
}: PlatformPilotContactProps) {
  const config = defaults[product];

  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {headline ?? config.headline}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400">
          {body ?? config.body}
        </p>
        <a
          href={`mailto:${EMAIL_PLATFORMS}?subject=${encodeURIComponent(
            product === "platforms" ? "Semantic platform pilot inquiry" : `${product} pilot inquiry`,
          )}`}
          className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-cyan-300 px-7 py-3.5 font-semibold text-slate-950 hover:bg-cyan-200"
        >
          <Mail className="h-5 w-5" />
          {ctaLabel ?? config.ctaLabel}
        </a>
        <p className="mt-5 text-sm text-slate-500">
          <a
            href={`mailto:${EMAIL_PLATFORMS}`}
            className="text-slate-400 transition hover:text-cyan-300"
          >
            {EMAIL_PLATFORMS}
          </a>
        </p>
      </div>
    </section>
  );
}
