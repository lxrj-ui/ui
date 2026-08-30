import { cn } from "../../lib/utils";
import { AlertTriangle, SearchX, FolderOpen } from "lucide-react";

/**
 * FullPageStates — DESIGN.md §Full-page states (error / 404 / empty)
 * - Centered in min-h-dvh, max-w-md, vertically stacked with lg gaps
 * - Medallion icon → title → explanation → action
 * - 404/error: neutral framing, not red error screen
 * - Keep global nav/footer; only content region swaps
 */

interface FullPageStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

function FullPageState({ icon, title, description, action, className }: FullPageStateProps) {
  return (
    <div className={cn("flex min-h-dvh items-center justify-center px-6", className)}>
      <div className="max-w-md text-center space-y-4">
        {icon && (
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-muted)]">
            {icon}
          </div>
        )}
        <h2 className="text-xl font-semibold" style={{ color: "var(--color-foreground)" }}>
          {title}
        </h2>
        {description && (
          <p className="text-sm" style={{ color: "var(--color-muted-foreground)" }}>
            {description}
          </p>
        )}
        {action && <div className="pt-2">{action}</div>}
      </div>
    </div>
  );
}

function NotFoundPage({ className, ...props }: Omit<FullPageStateProps, "icon" | "title">) {
  return (
    <FullPageState
      icon={<SearchX size={28} style={{ color: "var(--color-muted-foreground)" }} />}
      title="404 — Page not found"
      description="The page you're looking for doesn't exist or has been moved."
      className={className}
      {...props}
    />
  );
}

function ErrorPage({ className, ...props }: Omit<FullPageStateProps, "icon" | "title">) {
  return (
    <FullPageState
      icon={<AlertTriangle size={28} style={{ color: "var(--color-warning-text)" }} />}
      title="Something went wrong"
      description="An unexpected error occurred. Please try again."
      className={className}
      {...props}
    />
  );
}

function EmptyPage({ className, ...props }: Omit<FullPageStateProps, "icon" | "title">) {
  return (
    <FullPageState
      icon={<FolderOpen size={28} style={{ color: "var(--color-muted-foreground)" }} />}
      title="Nothing here yet"
      description="No items to display. Create something to get started."
      className={className}
      {...props}
    />
  );
}

export { FullPageState, NotFoundPage, ErrorPage, EmptyPage };
