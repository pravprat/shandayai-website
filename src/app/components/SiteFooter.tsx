import { EMAIL_ADVISORY, EMAIL_PLATFORMS } from "./contact";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-slate-500">
      <p>© 2026 ShandayAI. Enterprise AI strategy and semantic intelligence.</p>
      <p className="mt-3">
        <a href={`mailto:${EMAIL_ADVISORY}`} className="text-slate-400 hover:text-cyan-300">
          {EMAIL_ADVISORY}
        </a>
        <span className="mx-2">·</span>
        <a href={`mailto:${EMAIL_PLATFORMS}`} className="text-slate-400 hover:text-cyan-300">
          {EMAIL_PLATFORMS}
        </a>
      </p>
    </footer>
  );
}
