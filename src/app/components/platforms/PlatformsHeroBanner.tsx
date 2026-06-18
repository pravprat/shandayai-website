import Image from "next/image";

export function PlatformsHeroBanner() {
  return (
    <div className="mx-auto mt-10 max-w-5xl">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-2xl shadow-cyan-950/20 ring-1 ring-cyan-300/10">
        <Image
          src="/Shandayai_banner.png"
          alt="ShandayAI Reliability Intelligence Platform"
          width={1600}
          height={640}
          className="h-auto w-full object-cover"
          priority
        />
      </div>
    </div>
  );
}
