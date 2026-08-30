"use client";

import * as React from "react";

import { cn } from "../../lib/utils";

/**
 * Avatar — DESIGN.md §Avatars
 * - rounded-full, opaque background base with bg-muted fallback
 * - Framed: ring-2 ring-border/50
 * - Group: per-item -me-2 last:me-0 with ring-2 ring-background
 */
const avatarSizes = {
  sm: "h-5 w-5 text-xs",
  md: "h-6 w-6 text-xs",
  lg: "h-8 w-8 text-xs",
  xl: "h-10 w-10 text-sm",
  "2xl": "h-16 w-16 text-lg",
} as const;

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: keyof typeof avatarSizes;
  src?: string;
  alt?: string;
  fallback?: string;
}

function Avatar({ className, size = "md", src, alt, fallback, ...props }: AvatarProps) {
  const [hasError, setHasError] = React.useState(false);
  const showFallback = !src || hasError;

  return (
    <div
      className={cn(
        "relative inline-flex shrink-0 overflow-hidden rounded-full bg-[var(--color-muted)]",
        avatarSizes[size],
        className
      )}
      {...props}
    >
      {showFallback ? (
        <div className="flex h-full w-full items-center justify-center font-medium" style={{ color: "var(--color-muted-foreground)" }}>
          {fallback || "?"}
        </div>
      ) : (
        <img
          src={src}
          alt={alt || ""}
          className="h-full w-full object-cover"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}

function AvatarGroup({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center -space-x-2", className)} {...props}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<AvatarProps>, {
              className: cn(
                "ring-2 ring-[var(--color-background)]",
                (child as React.ReactElement<AvatarProps>).props.className
              ),
            })
          : child
      )}
    </div>
  );
}

export { Avatar, AvatarGroup, avatarSizes };
