import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "flex min-h-32 w-full resize-none rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-[15px] text-[var(--foreground)] shadow-sm transition-colors placeholder:text-[var(--muted-foreground)] focus:border-[var(--green)] focus:outline-none focus:ring-2 focus:ring-[color:rgba(47,107,69,0.16)]",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
