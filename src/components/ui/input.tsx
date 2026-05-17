import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-2xl border border-[var(--border)] bg-white px-4 text-[15px] text-[var(--foreground)] shadow-sm transition-colors placeholder:text-[var(--muted-foreground)] focus:border-[var(--green)] focus:outline-none focus:ring-2 focus:ring-[color:rgba(47,107,69,0.16)]",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
