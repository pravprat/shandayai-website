import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Layers3 } from "lucide-react";
import { articles } from "../articles";
import SiteHeader from "../../components/SiteHeader";
import {
  AgenticWorkflowVisual,
  DeterministicAIVisual,
  SemanticInfrastructureVisual,
  SignalFlowVisual,
} from "../../components/TechnicalVisuals";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | Shandayai`,
    description: article.subtitle,
  };
}

function IntroVisual({ slug }: { slug: string }) {
  if (slug === "why-deterministic-ai-matters") {
    return <DeterministicAIVisual />;
  }

  if (slug === "agentic-ai-for-infrastructure-operations") {
    return <AgenticWorkflowVisual />;
  }

  return null;
}

function SectionVisual({ slug, index }: { slug: string; index: number }) {
  if (index !== 0) {
    return null;
  }

  if (slug === "from-observability-to-operational-intelligence") {
    return <SignalFlowVisual />;
  }

  if (slug === "semantic-infrastructure-intelligence") {
    return <SemanticInfrastructureVisual />;
  }

  return null;
}

const calloutsBySlug: Record<string, string[]> = {
  "from-observability-to-operational-intelligence": [
    "Evidence-backed reasoning",
    "Signal-to-context architecture",
    "Operational workflow continuity",
  ],
  "why-deterministic-ai-matters": [
    "Repeatable diagnostics",
    "Validated evidence paths",
    "Trust before autonomy",
  ],
  "semantic-infrastructure-intelligence": [
    "Semantic operational context",
    "Topology-aware investigation",
    "Reusable infrastructure memory",
  ],
  "agentic-ai-for-infrastructure-operations": [
    "Human-governed automation",
    "Tool orchestration boundaries",
    "Verified operational outcomes",
  ],
};

function ArticleCallouts({ slug }: { slug: string }) {
  const callouts = calloutsBySlug[slug] ?? [
    "Evidence-backed reasoning",
    "Governed operational workflow",
    "Human-centered automation",
  ];

  return (
    <div className="my-16 grid gap-4 md:grid-cols-3">
      {callouts.map((callout) => (
        <div
          className="rounded-3xl border border-cyan-300/15 bg-cyan-300/[0.06] p-5 shadow-xl shadow-cyan-950/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-300/[0.09]"
          key={callout}
        >
          <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-300 to-purple-300" />
          <h3 className="text-base font-semibold text-white">{callout}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            A safe architectural principle for moving from operational signals
            to reviewable decisions.
          </p>
        </div>
      ))}
    </div>
  );
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <SiteHeader />

      <article className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <Link
          href="/blog"
          className="mb-10 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>

        <div className="mb-6 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-200">
          {article.tag}
        </div>

        <div className="max-w-4xl">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
            {article.title}
          </h1>

          <p className="mt-6 text-xl leading-9 text-slate-400">
            {article.subtitle}
          </p>
        </div>

        <div className="my-14 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-cyan-950/10 transition duration-300 hover:border-cyan-300/20">
          <div className="mb-5 flex items-center gap-3 text-cyan-300">
            <Layers3 className="h-6 w-6" />
            <span className="font-semibold">Architecture Lens</span>
          </div>
          <p className="leading-8 text-slate-300">
            Shandayai views intelligent operations as a layered system: signals
            are ingested, context is normalized, root causes are reasoned over,
            workflows are orchestrated, and actions remain governed until trust
            is earned.
          </p>
        </div>

        <IntroVisual slug={slug} />

        <div className="space-y-16">
          {article.sections.map(([heading, body], index) => (
            <div key={heading}>
              <section className="border-t border-white/10 pt-10">
                <h2 className="text-3xl font-semibold tracking-tight text-white">
                  {heading}
                </h2>
                <p className="mt-5 max-w-4xl text-lg leading-9 text-slate-400">
                  {body}
                </p>
              </section>
              <SectionVisual index={index} slug={slug} />
            </div>
          ))}
        </div>

        <ArticleCallouts slug={slug} />

        <div className="mt-16 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-8 shadow-2xl shadow-cyan-950/20 transition duration-300 hover:border-cyan-300/35">
          <h2 className="text-2xl font-semibold">
            Interested in a pilot?
          </h2>
          <p className="mt-3 leading-7 text-slate-300">
            Shandayai is exploring pilot use cases with teams operating complex
            distributed systems, infrastructure platforms, and AI-driven
            operations workflows.
          </p>
        </div>
      </article>
    </main>
  );
}