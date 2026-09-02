import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps {
  variant?: "default" | "success" | "warning" | "danger" | "info" | "cyan";
  pulse?: boolean;
  children: ReactNode;
  className?: string;
}

const Badge = ({ variant = "default", pulse = false, children, className }: BadgeProps) => {
  const variants = {
    default: "bg-white/10 text-white",
    success: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
    warning: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
    danger: "bg-red-500/20 text-red-400 border border-red-500/30",
    info: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
    cyan: "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      )}
      {children}
    </span>
  );
};

export default Badge;
