import * as React from "react";

import { cn } from "@/lib/utils";

function Select({ className, children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "flex h-12 w-full appearance-none rounded-md border border-[var(--border)] bg-white px-4 text-[15px] text-[var(--foreground)] shadow-sm transition-colors focus:border-[var(--green)] focus:outline-none focus:ring-2 focus:ring-[color:rgba(61,113,35,0.16)] disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}

export { Select };
