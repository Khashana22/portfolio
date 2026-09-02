import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface TagProps {
  children: ReactNode;
  className?: string;
}

const Tag = ({ children, className }: TagProps) => {
  return (
    <span
      className={cn(
        "bg-white/5 text-slate-300 text-xs px-2.5 py-1 rounded-md border border-white/5 transition-colors hover:border-cyan-500/30 hover:text-cyan-400",
        className
      )}
    >
      {children}
    </span>
  );
};

export default Tag;
