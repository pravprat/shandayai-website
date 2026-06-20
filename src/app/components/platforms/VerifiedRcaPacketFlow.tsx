"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  FileJson,
  FileText,
  ShieldCheck,
} from "lucide-react";
import {
  verifiedDemoNote,
  verifiedRcaSnapshot,
  verifiedStages,
  verifiedClaims,
  roadmapClaims,
  type VerifiedRcaStage,
} from "@/lib/verified-rca-packet-demo";

const accentRing: Record<VerifiedRcaStage["accent"], string> = {
  cyan: "ring-cyan-300/30 bg-cyan-300/10 text-cyan-300",
  violet: "ring-violet-300/30 bg-violet-300/10 text-violet-300",
  emerald: "ring-emerald-300/30 bg-emerald-300/10 text-emerald-300",
  amber: "ring-amber-300/30 bg-amber-300/10 text-amber-300",
};

const accentBorder: Record<VerifiedRcaStage["accent"], string> = {
  cyan: "border-cyan-400/40",
  violet: "border-violet-400/40",
  emerald: "border-emerald-400/40",
  amber: "border-amber-400/40",
};

type Props = {
  compact?: boolean;
};

export function VerifiedRcaPacketFlow({ compact = false }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(!compact);

  const activeStage = verifiedStages[activeIndex];
  const progress = ((activeIndex + 1) / verifiedStages.length) * 100;

  const advance = useCallback(() => {
    setActiveIndex((current) => (current + 1) % verifiedStages.length);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(advance, compact ? 4500 : 5500);
    return () => window.clearInterval(timer);
  }, [playing, advance, compact]);

  const metrics = verifiedRcaSnapshot.metrics;

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-950/20 px-4 py-3 text-sm leading-6 text-cyan-100/90">
        <span className="mr-2 inline-flex items-center gap-1.5 font-semibold text-cyan-200">
          <BadgeCheck className="h-4 w-4" />
          Verified demo
        </span>
        {verifiedDemoNote}
      </div>

      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {[
          { label: "Primary finding", value: metrics.primary_finding },
          { label: "Evidence items", value: String(metrics.evidence_count) },
          { label: "ContentUnits", value: String(metrics.content_unit_count) },
          { label: "Citation type", value: metrics.citation_type },
          { label: "Human review", value: metrics.human_review },
          { label: "Replay", value: metrics.replay_status },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
          >
            <p className="text-[10px] uppercase tracking-widest text-slate-500">{item.label}</p>
            <p className="mt-1 text-sm font-semibold text-white">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto pb-2">
        <div className="flex min-w-max items-stretch gap-2">
          {verifiedStages.map((stage, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => {
                  setActiveIndex(index);
                  setPlaying(false);
                }}
                className={`w-44 shrink-0 rounded-2xl border p-4 text-left transition ${
                  isActive
                    ? `${accentBorder[stage.accent]} bg-white/[0.05] demo-pulse-active`
                    : "border-white/10 bg-slate-950/40 hover:border-white/20"
                }`}
              >
                <span
                  className={`inline-flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold ring-1 ${accentRing[stage.accent]}`}
                >
                  {stage.step}
                </span>
                <p className="mt-3 text-xs font-semibold leading-snug text-white">{stage.title}</p>
                <p className="mt-1 text-[10px] leading-4 text-slate-400">{stage.subtitle}</p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div key={activeStage.id} className="demo-fade-up rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm font-medium uppercase tracking-widest text-cyan-300/90">
            Step {activeStage.step}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
            {activeStage.title}
          </h3>
          <p className="mt-2 text-sm text-slate-400">{activeStage.subtitle}</p>
          <ul className="mt-5 space-y-2">
            {activeStage.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2 text-sm text-slate-300">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        <div key={`${activeStage.id}-detail`} className="demo-fade-up rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6 font-mono text-sm">
          <p className="text-xs uppercase tracking-widest text-slate-500">{activeStage.detailTitle}</p>
          <div className="mt-4 space-y-2 text-slate-300">
            {activeStage.detailLines.map((line) => (
              <p key={line} className="leading-6">
                {line}
              </p>
            ))}
          </div>

          {activeStage.id === "rca-packet" && (
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-emerald-400/20 bg-emerald-950/20 p-3">
                <div className="flex items-center gap-2 text-emerald-200">
                  <FileText className="h-4 w-4" />
                  <span className="text-xs font-sans font-semibold">rca_packet.md</span>
                </div>
                <p className="mt-2 font-sans text-xs leading-5 text-slate-400">
                  {verifiedRcaSnapshot.primary_finding.summary}
                </p>
              </div>
              <div className="rounded-xl border border-cyan-400/20 bg-cyan-950/20 p-3">
                <div className="flex items-center gap-2 text-cyan-200">
                  <FileJson className="h-4 w-4" />
                  <span className="text-xs font-sans font-semibold">output_packet.json</span>
                </div>
                <p className="mt-2 font-sans text-xs leading-5 text-slate-400">
                  {verifiedRcaSnapshot.output_packet.title} · review required
                </p>
              </div>
            </div>
          )}

          {activeStage.id === "grounding" && (
            <div className="mt-6 space-y-2 border-t border-white/10 pt-4 font-sans">
              {verifiedRcaSnapshot.evidence_items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-xs text-slate-400"
                >
                  <span className="font-medium text-violet-200">{item.locator_type}</span>
                  {" · "}
                  {item.resource} · HTTP {item.response_code}
                  <span className="mt-1 block text-slate-500">{item.excerpt}</span>
                </div>
              ))}
            </div>
          )}

          {activeStage.id === "audit-replay" && (
            <div className="mt-6 space-y-2 border-t border-white/10 pt-4 font-sans">
              {verifiedRcaSnapshot.audit_timeline.map((event) => (
                <div key={event.event_type} className="text-xs text-slate-400">
                  <span className="font-medium text-emerald-200">{event.event_type}</span>
                  {" · "}
                  {event.summary}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {!compact && (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-slate-400">
              Auto-advancing through the verified OSIP ↔ SCRCA flow
            </p>
            <button
              type="button"
              onClick={() => setPlaying((value) => !value)}
              className="rounded-xl bg-cyan-300 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-cyan-200"
            >
              {playing ? "Pause" : "Play"}
            </button>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {!compact && (
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.5rem] border border-emerald-400/20 bg-emerald-950/10 p-6">
            <div className="flex items-center gap-2 text-emerald-200">
              <ShieldCheck className="h-5 w-5" />
              <h4 className="font-semibold text-white">Verified in this demo</h4>
            </div>
            <ul className="mt-4 space-y-2">
              {verifiedClaims.map((claim) => (
                <li key={claim} className="flex gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                  {claim}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-6">
            <h4 className="font-semibold text-white">Roadmap — not shown here</h4>
            <ul className="mt-4 space-y-2">
              {roadmapClaims.map((claim) => (
                <li key={claim} className="text-sm text-slate-500">
                  · {claim}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {compact && (
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/platforms/demo/verified-rca-packet/"
            className="inline-flex items-center gap-2 rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-200"
          >
            Open verified demo
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="text-sm text-slate-500">
            Sanitized from Phase 1.6 local run · event-level citations only
          </p>
        </div>
      )}
    </div>
  );
}
