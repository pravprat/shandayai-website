import Link from "next/link";
import { ShandayaiLogo } from "./ShandayaiLogo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#advisory", label: "AI Advisory" },
  { href: "/#platforms", label: "Semantic Platforms" },
  { href: "/#use-cases", label: "Use Cases" },
  { href: "/#about", label: "About" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030712]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <ShandayaiLogo />

        <nav className="hidden items-center gap-6 text-sm text-slate-300 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200 hover:bg-cyan-300/20"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
