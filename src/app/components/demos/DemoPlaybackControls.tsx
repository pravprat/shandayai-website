"use client";

import { Pause, Play, RotateCcw } from "lucide-react";

type Props = {
  playing: boolean;
  progress: number;
  label: string;
  onPlay: () => void;
  onPause: () => void;
  onReset: () => void;
};

export function DemoPlaybackControls({
  playing,
  progress,
  label,
  onPlay,
  onPause,
  onReset,
}: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-medium text-slate-300">{label}</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 px-3 py-2 text-xs text-slate-300 hover:bg-white/5"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Replay
          </button>
          {playing ? (
            <button
              type="button"
              onClick={onPause}
              className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-300/20 px-3 py-2 text-xs font-semibold text-cyan-100 ring-1 ring-cyan-300/30"
            >
              <Pause className="h-3.5 w-3.5" />
              Pause
            </button>
          ) : (
            <button
              type="button"
              onClick={onPlay}
              className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-300 px-3 py-2 text-xs font-semibold text-slate-950 hover:bg-cyan-200"
            >
              <Play className="h-3.5 w-3.5" />
              Play
            </button>
          )}
        </div>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
