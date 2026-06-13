import { Mail } from "lucide-react";
import { EMAIL_SALES } from "./contact";

type PlatformPilotContactProps = {
  product?: "SCRCA" | "SIP" | "platforms";
};

export default function PlatformPilotContact({ product = "platforms" }: PlatformPilotContactProps) {
  const message =
    product === "SCRCA"
      ? "Interested in an SCRCA or Runtime RCA pilot? Tell us about your observability stack and deployment constraints."
      : product === "SIP"
        ? "Interested in a SIP design partner engagement? Tell us about your knowledge and workflow use case."
        : "Questions about semantic intelligence pilots? Reach out to discuss SCRCA, SIP, or a scoped engagement.";

  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">Discuss a pilot</h2>
        <p className="mt-4 text-base leading-7 text-slate-400">{message}</p>
        <a
          href={`mailto:${EMAIL_SALES}?subject=${encodeURIComponent(
            product === "platforms" ? "Semantic platform pilot inquiry" : `${product} pilot inquiry`,
          )}`}
          className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-200"
        >
          <Mail className="h-5 w-5" />
          {EMAIL_SALES}
        </a>
      </div>
    </section>
  );
}
