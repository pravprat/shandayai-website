const paragraphs = [
  "Most enterprise AI efforts fail because they start with tools instead of architecture. ShandayAI starts with the operating model: data readiness, semantic context, governance, evaluation, adoption, platform patterns, and measurable outcomes.",
  "We help enterprises connect strategy to execution and move from AI pilots to production systems that can be trusted, measured, and scaled.",
];

export default function WhyShandayAI() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Why ShandayAI
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            From AI Demos to Governed Operating Systems
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-6">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-8 text-slate-300">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
