import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import {
  demoAccentClasses,
  platformTiers,
} from "@/lib/platform-sections";

export const metadata: Metadata = {
  title: "Interactive demos | ShandayAI Reliability Intelligence",
  description:
    "Explore ShandayAI RCA Core, RCA Assist, and platform demos on a reference Kubernetes audit incident.",
};

export default function DemoIndexPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-cyan-300/90">
            Interactive demos
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Demos by product tier
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            Each demo uses a certified Kubernetes authorization audit scenario. Start with RCA
            Core, explore RCA Assist pilots, or run the full product walkthrough.
          </p>
          <Link
            href="/platforms/#interactive-demos"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200"
          >
            View on Platforms page
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 space-y-12">
          {platformTiers.map((tier) => (
            <section key={tier.id}>
              <h2 className={`text-xl font-semibold ${tier.labelColor}`}>{tier.name}</h2>
              <p className="mt-1 text-sm text-slate-400">{tier.tagline}</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {tier.demos.map((demo) => {
                  const accent = demoAccentClasses[demo.accent];
                  const Icon = demo.icon;
                  return (
                    <Link
                      key={demo.href}
                      href={demo.href}
                      className={`group rounded-2xl border p-5 transition ${accent.border} ${
                        demo.featured
                          ? accent.bg
                          : "border-white/10 bg-white/[0.03] hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className={`inline-flex rounded-lg bg-white/[0.04] p-2 ${accent.icon}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="mt-4 text-sm font-semibold text-white group-hover:text-cyan-100">
                        {demo.title}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-slate-400">{demo.description}</p>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-12 text-sm text-slate-500">
          <Link href="/platforms/" className="text-slate-400 hover:text-cyan-300">
            Back to Platforms overview
          </Link>
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
