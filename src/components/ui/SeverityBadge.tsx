import { cn } from "@/lib/utils";

export interface SeverityBadgeProps {
  severity: "critical" | "high" | "medium" | "low" | "info";
  className?: string;
}

const SeverityBadge = ({ severity, className }: SeverityBadgeProps) => {
  const styles = {
    critical: "bg-red-500/20 text-red-400 border-red-500/30",
    high: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    medium: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    low: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    info: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-mono font-medium uppercase",
        styles[severity],
        className
      )}
    >
      {severity}
    </span>
  );
};

export default SeverityBadge;
