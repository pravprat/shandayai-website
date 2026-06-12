const models = [
  {
    title: "Advisory Sprint",
    duration: "2–4 weeks",
    desc: "AI strategy, architecture review, vendor assessment, roadmap, and executive decision support.",
    accent: "purple",
  },
  {
    title: "Fractional AI Operating Partner",
    duration: "Ongoing advisory / execution partnership",
    desc: "Roadmap ownership, architecture guidance, platform decisions, team guidance, vendor evaluation, and operating cadence.",
    accent: "cyan",
  },
  {
    title: "Semantic Intelligence Pilot",
    duration: "4–8 weeks",
    desc: "SCRCA or SIP pilot against logs, documents, enterprise knowledge, operational data, or observability signals.",
    accent: "blue",
  },
];

export default function EngagementModels() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Engagement Models
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Flexible ways to work together.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {models.map((model) => (
            <div
              key={model.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"
            >
              <div
                className={`mb-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest ${
                  model.accent === "purple"
                    ? "border border-purple-300/20 bg-purple-300/10 text-purple-200"
                    : model.accent === "cyan"
                      ? "border border-cyan-300/20 bg-cyan-300/10 text-cyan-200"
                      : "border border-blue-300/20 bg-blue-300/10 text-blue-200"
                }`}
              >
                {model.duration}
              </div>
              <h3 className="text-xl font-semibold text-white">{model.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{model.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
