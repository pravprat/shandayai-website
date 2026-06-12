import Link from "next/link";
import { GitBranch } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
      <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-10 shadow-2xl shadow-cyan-950/30">
        <GitBranch className="mx-auto h-10 w-10 text-cyan-300" />
        <h2 className="mt-6 text-4xl font-semibold tracking-tight">
          Connect strategy to execution.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          Whether you need executive AI advisory or are exploring semantic intelligence platforms,
          we can help you move from experimentation to governed, production-ready systems.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/advisory"
            className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-slate-200"
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
    </section>
  );
}
