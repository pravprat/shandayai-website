import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { articles } from "./articles";

export const metadata = {
  title: "Shandayai Blog",
  description:
    "Technical writing on operational intelligence, deterministic AI, semantic infrastructure, and agentic operations.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
            <BookOpen className="h-4 w-4" />
            Technical Notes
          </div>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
            Thinking in public about intelligent operations.
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-400">
            Architecture notes on operational intelligence, deterministic RCA,
            semantic infrastructure context, and agentic AI systems.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]"
            >
              <div className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-200">
                {article.tag}
              </div>

              <h2 className="text-2xl font-semibold">{article.title}</h2>
              <p className="mt-4 leading-7 text-slate-400">
                {article.subtitle}
              </p>

              <div className="mt-8 flex items-center gap-2 text-cyan-300">
                Read article
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}