import Link from "next/link";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen transition-colors" style={{ background: "var(--color-background)" }}>
      <header
        className="sticky top-0 z-30 border-b backdrop-blur px-6 h-14 flex items-center justify-between"
        style={{
          backgroundColor: "color-mix(in oklab, var(--color-background) 80%, transparent)",
          borderColor: "var(--color-border)",
        }}
      >
        <Link href="/" className="flex items-center gap-2 hover:opacity-80">
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z" fill="var(--color-grape)" />
            <path d="M12 7L17 10V14L12 17L7 14V10L12 7Z" fill="var(--color-cloud)" />
          </svg>
          <span className="font-semibold text-sm" style={{ color: "var(--color-foreground)" }}>LXRJ-UI</span>
        </Link>
        <div className="flex items-center gap-4 text-[13px]">
          <Link href="/DESIGN.md" className="hover:opacity-80" style={{ color: "var(--color-muted-foreground)" }}>
            DESIGN.md
          </Link>
          <Link href="/README.md" className="hover:opacity-80" style={{ color: "var(--color-muted-foreground)" }}>
            README.md
          </Link>
          <Link href="https://github.com/lxrj-ui/ui" className="hover:opacity-80" style={{ color: "var(--color-muted-foreground)" }}>
            GitHub
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-[860px] px-6 py-10">{children}</div>
    </div>
  );
}
