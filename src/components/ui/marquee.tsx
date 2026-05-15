"use client";

import { type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type MarqueeProps = HTMLAttributes<HTMLDivElement> & {
  pauseOnHover?: boolean;
};

export function Marquee({ children, className, pauseOnHover = false, ...props }: MarqueeProps) {
  return (
    <div className={cn("marquee-root", pauseOnHover && "marquee-pause", className)} {...props}>
      <div className="marquee-track">
        {children}
      </div>
      <div aria-hidden="true" className="marquee-track">
        {children}
      </div>
    </div>
  );
}
