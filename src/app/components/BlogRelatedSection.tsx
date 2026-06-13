import Link from "next/link";
import { articles } from "../blog/articles";

const scrcaSlugs = [
  "from-observability-to-operational-intelligence",
  "why-deterministic-ai-matters",
  "semantic-infrastructure-intelligence",
  "agentic-ai-for-infrastructure-operations",
] as const;

const sipSlugs = [
  "semantic-infrastructure-intelligence",
  "why-deterministic-ai-matters",
  "from-observability-to-operational-intelligence",
] as const;

type BlogRelatedSectionProps = {
  variant: "scrca" | "sip";
};

export function BlogRelatedSection({ variant }: BlogRelatedSectionProps) {
  const slugs = variant === "scrca" ? scrcaSlugs : sipSlugs;
  const related = slugs
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter((a): a is NonNullable<typeof a> => a != null);

  const title =
    variant === "scrca"
      ? "Why SCRCA matters for enterprises"
      : "Why semantic infrastructure intelligence matters";

  const intro =
    variant === "scrca"
      ? "These articles explain the shift from observability to operational intelligence, and why deterministic, governed AI is required at enterprise scale."
      : "These articles explain how semantic intelligence turns enterprise data into governed, actionable insight, and why that foundation matters for enterprise AI.";

  return (
    <section className="border-t border-white/10 bg-[#030712] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          From our blog
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-slate-400">{intro}</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {related.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-500/30 hover:bg-white/[0.05]"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-cyan-300/80">
                {article.tag}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white group-hover:text-cyan-300">
                {article.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {article.subtitle}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-cyan-400 group-hover:text-cyan-300">
                Read article →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/blog"
            className="text-sm font-medium text-slate-400 transition hover:text-cyan-400"
          >
            View all articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
