import * as React from "react"
import { cn } from "@/lib/utils"

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("inline-flex items-center rounded-md border border-border/50 px-2.5 py-0.5 text-xs font-semibold transition-all duration-200 hover:scale-105", className)} {...props} />
}
