import Link from "next/link";

export function ShandayaiLogo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 ring-1 ring-cyan-300/30 shadow-lg shadow-cyan-950/40">
        <svg
          viewBox="0 0 64 64"
          className="h-8 w-8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="shandayaiGradient" x1="8" y1="8" x2="56" y2="56">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>

          <path
            d="M14 18L28 8H50L36 18H14Z"
            fill="url(#shandayaiGradient)"
          />
          <path
            d="M14 18L28 28H50L36 18H14Z"
            fill="url(#shandayaiGradient)"
            opacity="0.9"
          />
          <path
            d="M14 46L28 36H50L36 46H14Z"
            fill="url(#shandayaiGradient)"
            opacity="0.95"
          />
          <path
            d="M14 46L28 56H50L36 46H14Z"
            fill="url(#shandayaiGradient)"
            opacity="0.75"
          />
          <path
            d="M18 32L31 23H47L34 32H18Z"
            fill="white"
            opacity="0.16"
          />
          <path
            d="M18 32L31 41H47L34 32H18Z"
            fill="white"
            opacity="0.10"
          />
        </svg>

        <div className="absolute inset-0 rounded-2xl bg-cyan-300/10 blur-xl" />
      </div>

      <div className="text-lg font-semibold tracking-tight text-white">
        Shandayai
      </div>
    </Link>
  );
}
