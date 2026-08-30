import * as React from "react";

import { cn } from "../../lib/utils";

/**
 * Input — DESIGN.md §Inputs
 * - Default: border-input (14 opacity)
 * - Focus: border at foreground/30 + shadow glow 0 0 0 3px foreground/6
 * - Error: border-negative + shadow glow 0 0 0 3px negative/10
 */
  const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 max-h-10 w-full rounded-md border !border-input bg-[var(--color-input-bg)] px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:!border-[var(--focus-border)] focus-visible:!shadow-[var(--focus-shadow)] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

/**
 * Textarea — DESIGN.md §Inputs
 */
  const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border !border-input bg-[var(--color-input-bg)] px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:!border-[var(--focus-border)] focus-visible:!shadow-[var(--focus-shadow)] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

/**
 * Label — design system label
 */
function Label({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("text-sm font-medium leading-none", className)}
      style={{ color: "var(--color-foreground)" }}
      {...props}
    />
  );
}
Label.displayName = "Label";

/**
 * HelperText — for input descriptions / errors
 */
function HelperText({
  className,
  error,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement> & { error?: boolean }) {
  return (
    <p
      className={cn("text-xs mt-1.5", className)}
      style={{ color: error ? "var(--color-negative-text)" : "var(--color-text-faint)" }}
      {...props}
    />
  );
}
HelperText.displayName = "HelperText";

export { Input, Textarea, Label, HelperText };
