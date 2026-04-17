import type { Architecture } from '@/content/projects';

export function ArchitectureDiagram({ architecture }: { architecture: Architecture }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)]/60 p-4">
      <div className="mb-3 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--fg-muted)]">
          {architecture.title}
        </span>
      </div>
      <ol className="flex flex-col gap-2">
        {architecture.layers.map((layer, layerIdx) => (
          <li key={layer.label} className="flex flex-col gap-2">
            <div className="grid grid-cols-[80px_1fr] items-center gap-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--fg-muted)]">
                {layer.label}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {layer.nodes.map((node) => (
                  <span
                    key={node.id}
                    className={
                      node.accent
                        ? 'rounded-md border border-[var(--primary)]/40 bg-[var(--primary)]/10 px-2 py-1 text-[11px] font-mono text-[var(--primary)]'
                        : 'rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] px-2 py-1 text-[11px] font-mono text-[var(--fg)]/80'
                    }
                  >
                    {node.label}
                  </span>
                ))}
              </div>
            </div>
            {layerIdx < architecture.layers.length - 1 ? (
              <div className="grid grid-cols-[80px_1fr] gap-3">
                <span />
                <div className="flex h-3 items-center">
                  <div className="ml-2 h-full w-px bg-[var(--border)]" />
                  <div className="h-px flex-1 bg-gradient-to-r from-[var(--border)] to-transparent" />
                </div>
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
