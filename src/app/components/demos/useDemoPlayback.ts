"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const DEFAULT_STEP_MS = 2800;

export function useDemoPlayback(stepCount: number, stepMs = DEFAULT_STEP_MS) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const play = useCallback(() => setPlaying(true), []);
  const pause = useCallback(() => setPlaying(false), []);

  const reset = useCallback(() => {
    clear();
    setActive(0);
    setPlaying(true);
  }, [clear]);

  const goTo = useCallback(
    (index: number) => {
      setActive(Math.max(0, Math.min(stepCount - 1, index)));
    },
    [stepCount],
  );

  useEffect(() => {
    if (!playing || stepCount <= 1) {
      clear();
      return;
    }
    clear();
    timerRef.current = setInterval(() => {
      setActive((prev) => {
        if (prev >= stepCount - 1) {
          setPlaying(false);
          clear();
          return prev;
        }
        return prev + 1;
      });
    }, stepMs);
    return clear;
  }, [playing, stepCount, stepMs, clear]);

  const progress = stepCount > 1 ? (active / (stepCount - 1)) * 100 : 100;

  return { active, playing, progress, play, pause, reset, goTo, setPlaying };
}
