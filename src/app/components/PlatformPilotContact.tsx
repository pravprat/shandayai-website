import { Mail } from "lucide-react";
import { EMAIL_PLATFORMS } from "./contact";

type PlatformPilotContactProps = {
  headline?: string;
  body?: string;
  ctaLabel?: string;
  emailSubject?: string;
};

export default function PlatformPilotContact({
  headline = "Start with the right reliability intelligence level.",
  body = "Whether you need a local RCA trial, AI-assisted investigation, or a scoped enterprise pilot, ShandayAI can help you choose the right starting point.",
  ctaLabel = "Discuss Your Use Case",
  emailSubject = "Reliability Intelligence inquiry",
}: PlatformPilotContactProps) {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{headline}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400">{body}</p>
        <a
          href={`mailto:${EMAIL_PLATFORMS}?subject=${encodeURIComponent(emailSubject)}`}
          className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-cyan-300 px-7 py-3.5 font-semibold text-slate-950 hover:bg-cyan-200"
        >
          <Mail className="h-5 w-5" />
          {ctaLabel}
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
