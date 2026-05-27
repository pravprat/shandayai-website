import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Layers3 } from "lucide-react";
import { articles } from "../articles";
import SiteHeader from "../../components/SiteHeader";

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

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <SiteHeader />

      <article className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
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

        <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
          {article.title}
        </h1>

        <p className="mt-6 text-xl leading-9 text-slate-400">
          {article.subtitle}
        </p>

        <div className="my-14 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
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

        <div className="space-y-12">
          {article.sections.map(([heading, body]) => (
            <section key={heading}>
              <h2 className="text-3xl font-semibold tracking-tight">
                {heading}
              </h2>
              <p className="mt-4 text-lg leading-9 text-slate-400">{body}</p>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-8">
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