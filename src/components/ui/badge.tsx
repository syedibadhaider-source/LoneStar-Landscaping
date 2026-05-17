import * as React from "react";

import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted-foreground)]",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
