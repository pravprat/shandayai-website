const useCases = [
  {
    title: "Enterprise AI Strategy & Operating Model",
    desc: "Define what to build, buy, or partner for — with governance, adoption, and measurable outcomes.",
    vertical: "Advisory",
  },
  {
    title: "AI & Data Platform Architecture",
    desc: "Design production-ready foundations for RAG, agents, model gateways, and hybrid deployment.",
    vertical: "Advisory",
  },
  {
    title: "Incident & Observability Intelligence",
    desc: "Evidence-backed RCA for logs, alerts, and operational signals with SCRCA.",
    vertical: "Platforms",
  },
  {
    title: "Enterprise Knowledge & Decision Support",
    desc: "Semantic retrieval and evidence-backed reasoning over documents and domain context with SIP.",
    vertical: "Platforms",
  },
  {
    title: "Runtime RCA for Spark / JVM / Kubernetes",
    desc: "Customer-hosted support escalation intelligence — logs stay in your boundary.",
    vertical: "Platforms",
  },
  {
    title: "GenAI Enablement & Vendor Evaluation",
    desc: "Evaluate cloud, SaaS, observability, storage, and AI infrastructure with executive clarity.",
    vertical: "Advisory",
  },
];

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Use Cases</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Where ShandayAI delivers value.
        </h2>
        <p className="mt-6 text-lg leading-8 text-slate-400">
          From executive AI strategy to semantic intelligence pilots — advisory and platform work
          connected by governance, evidence, and measurable execution.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {useCases.map((useCase) => (
          <div
            key={useCase.title}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
          >
            <div
              className={`mb-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest ${
                useCase.vertical === "Advisory"
                  ? "border border-purple-300/20 bg-purple-300/10 text-purple-200"
                  : "border border-cyan-300/20 bg-cyan-300/10 text-cyan-200"
              }`}
            >
              {useCase.vertical}
            </div>
            <h3 className="text-lg font-semibold text-white">{useCase.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">{useCase.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
