import { cn } from "@/lib/utils";

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionTitle = ({ title, subtitle, align = "left", className }: SectionTitleProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 mb-12",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <div className="w-12 h-1 bg-cyan-400 rounded-full" />
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-400 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
