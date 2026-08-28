import { cn } from "@/lib/utils";

type Variant = "default" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  default: "bg-[#7624f4] text-[#fcfcfe] hover:bg-[#6a20db] border-transparent",
  outline: "bg-white text-[#03080a] border hover:bg-[#fcfcfe]",
  ghost: "bg-transparent text-[rgba(3,8,10,0.69)] hover:bg-[#fcfcfe] border-transparent",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-9 px-4 text-sm",
  lg: "h-11 px-8 text-sm",
};

export function Button({
  variant = "default",
  size = "md",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-[6px] border font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#7624f4]",
        "disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      style={{ fontFamily: "Plus Jakarta Sans, system-ui, sans-serif", borderColor: variant === "outline" ? "rgba(3,8,10,0.08)" : undefined }}
      {...props}
    />
  );
}
