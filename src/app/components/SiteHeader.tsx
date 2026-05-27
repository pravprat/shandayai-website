import Link from "next/link";
import { ShandayaiLogo } from "./ShandayaiLogo";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030712]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <ShandayaiLogo />

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <Link href="/#vision" className="hover:text-white">
            Vision
          </Link>

          <Link href="/#platform" className="hover:text-white">
            Platform
          </Link>

          <Link href="/#architecture" className="hover:text-white">
            Architecture
          </Link>

          <Link href="/#workflow" className="hover:text-white">
            Workflow
          </Link>

          <Link href="/#trust" className="hover:text-white">
            Trust
          </Link>

          <Link href="/blog" className="hover:text-white">
            Blog
          </Link>
        </nav>

        <Link
          href="/#contact"
          className="rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200 hover:bg-cyan-300/20"
        >
          Request Preview
        </Link>
      </div>
    </header>
  );
}
