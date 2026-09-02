import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import { MessageSquare, Target, ShieldAlert, FileText, Wrench, CheckCircle } from "lucide-react";
import Card from "@/components/ui/Card";

const steps = [
  { icon: MessageSquare, title: "Tell Me What You're Building", description: "Initial discussion to understand your application and concerns." },
  { icon: Target, title: "Define the Scope", description: "Clearly defining what is in and out of scope for the assessment." },
  { icon: ShieldAlert, title: "Security Assessment", description: "Rigorous testing using manual and automated techniques." },
  { icon: FileText, title: "Evidence & Findings", description: "Detailed report with reproducible steps and evidence." },
  { icon: Wrench, title: "Remediation", description: "Guidance on how to fix the discovered vulnerabilities." },
  { icon: CheckCircle, title: "Retest", description: "Verification that the vulnerabilities have been properly fixed." }
];

export default function HowItWorks({ className }: { className?: string }) {
  return (
    <SectionWrapper className={className} id="how-it-works">
      <SectionTitle title="Simple. Clear. Security-Focused." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 relative">
        {steps.map((step, idx) => (
          <Card key={idx} className="p-6 relative z-10 bg-slate-900/80 backdrop-blur-md">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-cyan-950/50 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <span className="text-cyan-400 font-mono text-sm">{idx + 1}</span>
              </div>
              <step.icon className="w-6 h-6 text-slate-300" />
              <h3 className="text-lg font-semibold text-white leading-tight">{step.title}</h3>
            </div>
            <p className="text-slate-400 text-sm ml-14">{step.description}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
