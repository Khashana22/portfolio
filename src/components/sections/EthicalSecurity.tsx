import SectionWrapper from "@/components/ui/SectionWrapper";
import { ShieldCheck } from "lucide-react";

export default function EthicalSecurity({ className }: { className?: string }) {
  return (
    <SectionWrapper className={className}>
      <div className="relative overflow-hidden rounded-2xl bg-cyan-950/20 border border-cyan-500/20 p-8 md:p-12 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none" />
        <ShieldCheck className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Security With Authorization</h2>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg">
          I operate strictly within authorized scopes. Every assessment begins with a clearly defined set of boundaries and rules of engagement. No unauthorized testing, no surprises—just professional, ethical security research to keep your applications safe.
        </p>
      </div>
    </SectionWrapper>
  );
}
