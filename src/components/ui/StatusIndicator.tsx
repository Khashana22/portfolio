import { cn } from "@/lib/utils";

export interface StatusIndicatorProps {
  status: "pass" | "warning" | "fail" | "demo";
  label: string;
  className?: string;
}

const StatusIndicator = ({ status, label, className }: StatusIndicatorProps) => {
  const styles = {
    pass: "bg-green-500",
    warning: "bg-amber-500",
    fail: "bg-red-500",
    demo: "bg-cyan-500",
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative flex h-2.5 w-2.5">
        <span
          className={cn(
            "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
            styles[status]
          )}
        />
        <span
          className={cn(
            "relative inline-flex rounded-full h-2.5 w-2.5",
            styles[status]
          )}
        />
      </div>
      <span className="text-sm font-medium text-slate-300">{label}</span>
    </div>
  );
};

export default StatusIndicator;
