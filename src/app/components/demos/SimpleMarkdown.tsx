export function SimpleMarkdown({ text }: { text: string }) {
  return (
    <div className="space-y-1">
      {text.split("\n").map((line, i) => {
        if (line.startsWith("# ")) {
          return (
            <h3 key={i} className="text-lg font-semibold text-white">
              {line.slice(2)}
            </h3>
          );
        }
        if (line.startsWith("## ")) {
          return (
            <h4
              key={i}
              className="mt-4 text-sm font-semibold uppercase tracking-wide text-cyan-200/90"
            >
              {line.slice(3)}
            </h4>
          );
        }
        if (line.startsWith("- ")) {
          return (
            <li key={i} className="ml-4 list-disc text-sm text-slate-300">
              {line.slice(2)}
            </li>
          );
        }
        if (!line.trim()) return <div key={i} className="h-2" />;
        return (
          <p key={i} className="text-sm leading-6 text-slate-300">
            {line}
          </p>
        );
      })}
    </div>
  );
}
