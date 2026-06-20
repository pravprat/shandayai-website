"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { platformNav } from "@/lib/platform-sections";

export function PlatformsTreeNav() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const ids = platformNav.flatMap((item) => [
      item.id,
      ...(item.children?.map((child) => child.id) ?? []),
    ]);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.4] },
    );

    for (const id of ids) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Platforms page sections"
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 lg:sticky lg:top-24"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
        On this page
      </p>
      <ul className="mt-3 space-y-1">
        {platformNav.map((item) => {
          const itemActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={item.href}
                className={`flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm transition ${
                  itemActive
                    ? "bg-cyan-400/10 font-medium text-cyan-100"
                    : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                {item.children ? (
                  <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-60" />
                ) : null}
                {item.label}
              </a>
              {item.children ? (
                <ul className="ml-4 mt-1 space-y-0.5 border-l border-white/10 pl-3">
                  {item.children.map((child) => (
                    <li key={child.id}>
                      <a
                        href={child.href}
                        className={`block rounded-lg px-2 py-1.5 text-xs transition ${
                          active === child.id
                            ? "font-medium text-cyan-200"
                            : "text-slate-500 hover:text-slate-300"
                        }`}
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function PlatformsHeroTree() {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">
      {platformNav
        .find((item) => item.id === "products")
        ?.children?.map((product) => (
          <a
            key={product.id}
            href={product.href}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs text-slate-300 transition hover:border-cyan-400/30 hover:text-white"
          >
            {product.label}
          </a>
        ))}
      <a
        href="#interactive-demos"
        className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1.5 text-xs font-medium text-cyan-100 transition hover:bg-cyan-400/15"
      >
        Interactive demos
      </a>
    </div>
  );
}
