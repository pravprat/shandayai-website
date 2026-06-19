"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, Loader2, Play, Radio } from "lucide-react";
import type { DemoRunResponse } from "@/lib/demo-types";
import { loadDemoData } from "@/lib/demo-api";

type DemoShellProps = {
  title: string;
  subtitle: string;
  children: (data: DemoRunResponse) => React.ReactNode;
};

export function DemoShell({ title, subtitle, children }: DemoShellProps) {
  const [data, setData] = useState<DemoRunResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [live, setLive] = useState(false);

  async function run(loadLive: boolean) {
    setLoading(true);
    setError(null);
    setLive(loadLive);
    try {
      if (loadLive && process.env.NEXT_PUBLIC_DEMO_API_URL) {
        const apiBase = process.env.NEXT_PUBLIC_DEMO_API_URL.replace(/\/$/, "");
        const res = await fetch(`${apiBase}/v1/demo/run`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            product_tier: "rca_assist",
            include: ["pipeline_flow", "assist_summary"],
          }),
        });
        if (!res.ok) throw new Error(`API ${res.status}`);
        setData((await res.json()) as DemoRunResponse);
      } else {
        setData(await loadDemoData());
        setLive(false);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load demo");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void run(false);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <div className="border-b border-white/10 bg-[#030712]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 lg:px-8">
          <div>
            <Link
              href="/platforms/demo/"
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyan-300"
            >
              <ArrowLeft className="h-4 w-4" />
              All demos
            </Link>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h1>
            <p className="mt-1 max-w-2xl text-sm text-slate-400">{subtitle}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs ${
                live
                  ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                  : "border-white/10 bg-white/5 text-slate-400"
              }`}
            >
              <Radio className="h-3 w-3" />
              {live ? "Live API" : "Bundled snapshot"}
            </span>
            <button
              type="button"
              onClick={() => void run(false)}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-white/10"
            >
              Reset snapshot
            </button>
            {process.env.NEXT_PUBLIC_DEMO_API_URL && (
              <button
                type="button"
                onClick={() => void run(true)}
                className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-300 px-3 py-2 text-xs font-semibold text-slate-950 hover:bg-cyan-200"
              >
                <Play className="h-3.5 w-3.5" />
                Run live pipeline
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        {loading && (
          <div className="flex items-center gap-2 text-slate-400">
            <Loader2 className="h-5 w-5 animate-spin text-cyan-300" />
            Loading demo data...
          </div>
        )}
        {error && (
          <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm text-red-200">
            {error}
          </div>
        )}
        {data && !loading && children(data)}
      </div>
    </div>
  );
}
