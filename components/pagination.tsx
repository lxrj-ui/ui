import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function Pagination({
  prev,
  next,
}: {
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
}) {
  return (
    <nav
      className="flex items-stretch justify-between gap-4 mt-16 pt-6 border-t"
      style={{ borderColor: "var(--color-border)" }}
    >
      {prev ? (
        <Link
          href={prev.href}
          className="flex items-center gap-2 text-[13px] transition-colors hover:text-[var(--color-foreground)]"
          style={{ color: "var(--color-muted-foreground)" }}
        >
          <ArrowLeft size={16} />
          <div>
            <div className="text-[10px] uppercase tracking-wider" style={{ color: "var(--color-text-faint)" }}>
              Previous
            </div>
            <div className="font-medium" style={{ color: "var(--color-foreground)" }}>
              {prev.label}
            </div>
          </div>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={next.href}
          className="flex items-center gap-2 text-[13px] text-right ml-auto transition-colors hover:text-[var(--color-foreground)]"
          style={{ color: "var(--color-muted-foreground)" }}
        >
          <div>
            <div className="text-[10px] uppercase tracking-wider" style={{ color: "var(--color-text-faint)" }}>
              Next
            </div>
            <div className="font-medium" style={{ color: "var(--color-foreground)" }}>
              {next.label}
            </div>
          </div>
          <ArrowRight size={16} />
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
