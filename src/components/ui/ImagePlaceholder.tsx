import { ImageIcon, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ImagePlaceholderProps {
  label?: string;
  width?: number;
  height?: number;
  className?: string;
  icon?: LucideIcon;
}

const ImagePlaceholder = ({
  label = "Image Placeholder",
  width,
  height,
  className,
  icon: Icon = ImageIcon,
}: ImagePlaceholderProps) => {
  return (
    <div
      style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : '100%' }}
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-white/20 bg-white/5 p-8 transition-colors duration-300 hover:border-cyan-500/30",
        className
      )}
    >
      <Icon className="h-8 w-8 text-slate-500" />
      <span className="text-sm font-medium text-slate-500">{label}</span>
      {(width || height) && (
        <span className="text-xs text-slate-600">
          {width || 'auto'} × {height || 'auto'}
        </span>
      )}
    </div>
  );
};

export default ImagePlaceholder;
