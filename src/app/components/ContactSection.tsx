import { Mail } from "lucide-react";
import { EMAIL_ADVISORY, EMAIL_PLATFORMS } from "./contact";

type ContactSectionProps = {
  variant?: "default" | "advisory" | "platforms";
};

type EmailKey = "advisory" | "platforms";

const emailCards: Record<EmailKey, { email: string; label: string; desc: string }> = {
  advisory: {
    email: EMAIL_ADVISORY,
    label: "AI Strategy & Architecture",
    desc: "Strategy, architecture, governance, and roadmap conversations.",
  },
  platforms: {
    email: EMAIL_PLATFORMS,
    label: "Semantic Platforms & Pilots",
    desc: "SCRCA, SIP, and semantic intelligence pilot inquiries.",
  },
};

export default function ContactSection({ variant = "default" }: ContactSectionProps) {
  const primary: EmailKey = variant === "platforms" ? "platforms" : "advisory";
  const showBoth = variant === "default";

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
      <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-8 sm:p-10">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&apos;s Build Governed AI Systems That Scale
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
          {variant === "advisory" &&
            "Whether you are defining an AI roadmap, evaluating platform choices, or building agentic workflows, we can help translate strategy into architecture and measurable execution."}
          {variant === "platforms" &&
            "Exploring semantic intelligence pilots for observability, enterprise knowledge, or operational data? We can scope a targeted SCRCA or SIP pilot."}
          {variant === "default" &&
            "Whether you are defining an AI roadmap, evaluating platform choices, building agentic workflows, or exploring semantic intelligence pilots, ShandayAI can help translate strategy into architecture and measurable execution."}
        </p>

        <div
          className={`mx-auto mt-8 grid max-w-3xl gap-4 ${showBoth ? "sm:grid-cols-2" : "max-w-md"}`}
        >
          {(showBoth ? (["advisory", "platforms"] as const) : [primary]).map((key) => {
            const card = emailCards[key];
            return (
              <a
                key={key}
                href={`mailto:${card.email}`}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-left transition hover:border-cyan-300/30"
              >
                <div className="mb-2 inline-flex rounded-lg bg-cyan-300/10 p-2 text-cyan-300">
                  <Mail className="h-4 w-4" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  {card.label}
                </p>
                <p className="mt-1 text-base font-semibold text-white">{card.email}</p>
                <p className="mt-2 text-sm text-slate-400">{card.desc}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
