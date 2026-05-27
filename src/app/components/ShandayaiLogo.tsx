import Link from "next/link";
import { useId } from "react";

function ShandayaiMark({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  const topGrad = `shandayaiTop-${id}`;
  const bottomGrad = `shandayaiBottom-${id}`;

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={topGrad} x1="8" y1="8" x2="52" y2="36">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id={bottomGrad} x1="12" y1="28" x2="56" y2="58">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="55%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#c026d3" />
        </linearGradient>
      </defs>

      {/* Top hook — front face */}
      <path
        d="M10 18 L32 8 L54 18 L46 28 L32 24 L18 28 Z"
        fill={`url(#${topGrad})`}
      />
      {/* Top hook — right depth */}
      <path
        d="M46 28 L54 18 L54 32 L42 38 L36 32 L46 28 Z"
        fill="#1e3a8a"
      />
      {/* Bottom hook — front face */}
      <path
        d="M18 36 L32 40 L46 36 L54 46 L32 56 L10 46 L18 36 Z"
        fill={`url(#${bottomGrad})`}
      />
      {/* Bottom hook — left depth */}
      <path
        d="M10 18 L18 28 L18 36 L10 46 Z"
        fill="#4c1d95"
      />
      {/* Center highlight on upper ribbon */}
      <path
        d="M16 22 L32 16 L46 22 L40 25 L24 25 Z"
        fill="white"
        opacity="0.14"
      />
    </svg>
  );
}

export function ShandayaiLogo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <ShandayaiMark className="h-10 w-10 shrink-0" />
      <div className="text-lg font-semibold tracking-tight text-white">
        Shandayai
      </div>
    </Link>
  );
}

export { ShandayaiMark };
