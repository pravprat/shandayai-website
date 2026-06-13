"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShandayaiLogo } from "./ShandayaiLogo";

type NavLink = {
  href: string;
  label: string;
  isActive: (pathname: string) => boolean;
  activeClass: string;
};

const navLinks: NavLink[] = [
  {
    href: "/",
    label: "Home",
    isActive: (pathname) => pathname === "/",
    activeClass: "bg-white/10 text-white ring-1 ring-white/20",
  },
  {
    href: "/advisory",
    label: "AI Strategy",
    isActive: (pathname) => pathname === "/advisory" || pathname.startsWith("/advisory/"),
    activeClass: "bg-purple-400/15 text-purple-200 ring-1 ring-purple-400/30",
  },
  {
    href: "/platforms",
    label: "Semantic Platforms",
    isActive: (pathname) => pathname === "/platforms" || pathname.startsWith("/platforms/"),
    activeClass: "bg-cyan-400/15 text-cyan-200 ring-1 ring-cyan-400/30",
  },
  {
    href: "/#about",
    label: "About",
    isActive: () => false,
    activeClass: "bg-white/10 text-white ring-1 ring-white/20",
  },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030712]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <ShandayaiLogo />

        <nav className="hidden items-center gap-2 text-sm md:flex lg:gap-3">
          {navLinks.map((link) => {
            const active = link.isActive(pathname);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-1.5 transition ${
                  active
                    ? link.activeClass
                    : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
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
