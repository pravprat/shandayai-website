import Image from "next/image";
import Link from "next/link";

export function ShandayaiLogo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/20 bg-slate-950 shadow-lg shadow-cyan-950/40 overflow-hidden">
        <Image
          src="/shandayai-logo.png"
          alt="Shandayai logo"
          width={40}
          height={40}
          className="h-10 w-10 object-cover"
          priority
        />
      </div>

      <div className="text-lg font-semibold tracking-tight text-white">
        Shandayai
      </div>
    </Link>
  );
}
