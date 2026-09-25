import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          variant === "default" && "bg-foreground text-background shadow hover:bg-foreground/90",
          variant === "ghost" && "hover:bg-muted hover:text-foreground",
          variant === "outline" && "border border-border bg-background hover:bg-muted hover:text-foreground",
          variant === "secondary" && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          size === "default" && "h-9 px-4 py-2 rounded-md",
          size === "sm" && "h-8 px-3 text-xs rounded-md",
          size === "lg" && "h-10 px-8 rounded-md",
          size === "icon" && "h-9 w-9 rounded-md",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
