import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function FinalCTA({ className }: { className?: string }) {
  return (
    <SectionWrapper className={cn("min-h-[70vh] flex flex-col justify-center items-center text-center", className)}>
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Think Your Application Is Secure?
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-300">
            Let's Test That Assumption.
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-cyan-400 font-mono">
          Web Application Security &bull; API Security &bull; Penetration Testing
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          {/* Note: In a real implementation, Button would likely accept an href prop if it renders an anchor, or use a Next.js Link wrapper. 
              Here we just render Buttons assuming standard component API. */}
          <Button className="w-full sm:w-auto px-8 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium">
            Start a Security Assessment
          </Button>
          <Button className="w-full sm:w-auto px-8 py-3 rounded-lg border border-cyan-500/30 text-cyan-400 hover:bg-cyan-950/30 font-medium">
            View My Security Work
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
