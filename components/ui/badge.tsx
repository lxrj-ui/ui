import { cn } from "@/lib/utils";
export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-medium border bg-green-50 text-green-700 border-green-200", className)} {...props} />;
}
