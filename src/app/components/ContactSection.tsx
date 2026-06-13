import Link from "next/link";
import { GitBranch, Mail } from "lucide-react";
import { EMAIL_ADVISORY, EMAIL_SALES } from "./contact";

type ContactSectionProps = {
  variant?: "default" | "advisory" | "platforms";
};

type EmailKey = "advisory" | "sales";

const emailCards: Record<EmailKey, { email: string; label: string; desc: string }> = {
  advisory: {
    email: EMAIL_ADVISORY,
    label: "AI Advisory & Strategy",
    desc: "Enterprise AI strategy, architecture, governance, and fractional operating partner engagements.",
  },
  sales: {
    email: EMAIL_SALES,
    label: "Semantic Intelligence Platforms",
    desc: "SCRCA, SIP, semantic intelligence pilots, and platform conversations.",
  },
};

export default function ContactSection({ variant = "default" }: ContactSectionProps) {
  const primary: EmailKey = variant === "platforms" ? "sales" : "advisory";
  const secondary: EmailKey = primary === "advisory" ? "sales" : "advisory";
  const showBoth = variant === "default";

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
      <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-10 shadow-2xl shadow-cyan-950/30">
        <GitBranch className="mx-auto h-10 w-10 text-cyan-300" />
        <h2 className="mt-6 text-4xl font-semibold tracking-tight">
          Start the conversation.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          {variant === "advisory" &&
            "Reach out for executive AI advisory, strategy, architecture, and operating model guidance."}
          {variant === "platforms" &&
            "Reach out for SCRCA, SIP, semantic intelligence pilots, and platform evaluations."}
          {variant === "default" &&
            "ShandayAI advises on enterprise AI strategy and develops semantic intelligence platforms. Choose the contact that best matches your need."}
        </p>

        <div
          className={`mx-auto mt-10 grid max-w-3xl gap-4 ${showBoth ? "sm:grid-cols-2" : "max-w-md"}`}
        >
          {(showBoth ? (["advisory", "sales"] as const) : [primary]).map((key) => {
            const card = emailCards[key];
            return (
              <a
                key={key}
                href={`mailto:${card.email}`}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-left transition hover:border-cyan-300/30 hover:bg-white/[0.06]"
              >
                <div className="mb-3 inline-flex rounded-xl bg-cyan-300/10 p-2 text-cyan-300">
                  <Mail className="h-5 w-5" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  {card.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-white">{card.email}</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{card.desc}</p>
              </a>
            );
          })}
        </div>

        {!showBoth && (
          <p className="mx-auto mt-6 max-w-md text-sm text-slate-500">
            For {emailCards[secondary].label.toLowerCase()}, email{" "}
            <a
              href={`mailto:${emailCards[secondary].email}`}
              className="text-cyan-300 hover:text-cyan-200"
            >
              {emailCards[secondary].email}
            </a>
          </p>
        )}

        {showBoth && (
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/#advisory"
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3 font-semibold text-white hover:bg-white/[0.06]"
            >
              Explore AI Advisory
            </Link>
            <Link
              href="/#platforms"
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3 font-semibold text-white hover:bg-white/[0.06]"
            >
              Explore Semantic Platforms
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
