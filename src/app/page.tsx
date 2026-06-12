import Link from "next/link";
import { ArrowRight, BrainCircuit, Compass, Sparkles } from "lucide-react";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import ContactSection from "./components/ContactSection";
import WhyShandayAI from "./components/WhyShandayAI";
import { articles } from "./blog/articles";

const offerings = [
  {
    title: "AI Advisory & Strategy",
    desc: "Executive guidance on AI strategy, platform architecture, vendor evaluation, GenAI/RAG roadmaps, governance, and enterprise adoption.",
    href: "/advisory",
    icon: <Compass className="h-7 w-7" />,
    accent: "purple",
    items: [
      "Enterprise AI strategy",
      "Platform architecture",
      "Vendor evaluation",
      "Fractional AI operating partner",
    ],
  },
  {
    title: "Semantic Intelligence Platforms",
    desc: "AI systems that reason over operational signals, enterprise knowledge, and domain context with evidence-backed outputs.",
    href: "/platforms",
    icon: <BrainCircuit className="h-7 w-7" />,
    accent: "cyan",
    items: ["SCRCA — observability RCA", "SIP — enterprise knowledge", "Evidence-backed reasoning"],
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.24),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.22),transparent_30%),linear-gradient(to_bottom,transparent,rgba(3,7,18,1))]" />
          <div className="absolute left-1/2 top-24 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full border border-cyan-300/10" />
          <div className="absolute left-1/2 top-40 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full border border-purple-300/10" />

          <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36">
            <div className="mx-auto max-w-5xl text-center">
              <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 shadow-2xl shadow-cyan-950/30">
                <Sparkles className="h-4 w-4 text-cyan-300" />
                Enterprise AI. Semantic Intelligence. Measurable Impact.
              </div>

              <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                From AI experimentation to
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  governed, production-ready systems.
                </span>
              </h1>

              <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
                ShandayAI helps enterprises define AI strategy, build enterprise data and AI
                foundations, and deploy semantic intelligence systems that improve productivity,
                decision-making, observability, and operational outcomes.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/advisory"
                  className="rounded-2xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-200"
                >
                  Explore Advisory
                </Link>
                <Link
                  href="/platforms"
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3 font-semibold text-white hover:bg-white/[0.06]"
                >
                  Explore Platforms
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Two Connected Offerings
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Strategy and platforms, connected by semantic intelligence.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {offerings.map((offering) => (
              <Link
                key={offering.title}
                href={offering.href}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:border-cyan-300/30"
              >
                <div
                  className={`mb-6 inline-flex rounded-2xl p-3 ring-1 ${
                    offering.accent === "purple"
                      ? "bg-purple-300/10 text-purple-300 ring-purple-300/20"
                      : "bg-cyan-300/10 text-cyan-300 ring-cyan-300/20"
                  }`}
                >
                  {offering.icon}
                </div>
                <h3 className="text-2xl font-semibold">{offering.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{offering.desc}</p>
                <ul className="mt-6 space-y-2">
                  {offering.items.map((item) => (
                    <li key={item} className="text-sm text-slate-300">
                      · {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center gap-2 text-cyan-300">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                  Who We Work With
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Technology leaders, platform teams, and executives.
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-400">
                  We work with technology leaders, product teams, platform organizations, and
                  business executives to connect AI strategy to execution — from roadmap and
                  architecture to semantic intelligence systems that deliver measurable outcomes.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Strategy", "AI roadmaps, vendor evaluation, operating models"],
                  ["Architecture", "Data platforms, RAG, agents, governance"],
                  ["Platforms", "SCRCA, SIP, evidence-backed reasoning"],
                  ["Outcomes", "Adoption, risk, productivity, and operational impact"],
                ].map(([title, desc]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                  >
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-sm text-slate-400">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <WhyShandayAI />

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                From the Blog
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Thinking on semantic intelligence and operational AI.
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden items-center gap-2 text-cyan-300 hover:text-cyan-200 sm:flex"
            >
              All articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {articles.slice(0, 2).map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition hover:border-cyan-300/30"
              >
                <div className="mb-4 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-200">
                  {article.tag}
                </div>
                <h3 className="text-xl font-semibold">{article.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{article.subtitle}</p>
              </Link>
            ))}
          </div>
        </section>

        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
