import { cn } from "@/lib/utils";

export default function GridBackground({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 -z-10", className)}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute inset-0 bg-[#0A0A0F] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    </div>
  );
}
