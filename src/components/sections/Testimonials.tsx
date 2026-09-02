import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { Award, Briefcase, FileSearch, GitBranch, FileCode, CheckCircle2 } from "lucide-react";

const proofs = [
  { icon: Award, title: "Certifications", description: "Industry-recognized security certifications validating expertise." },
  { icon: Briefcase, title: "Projects", description: "Extensive portfolio of secured web applications and APIs." },
  { icon: FileSearch, title: "Research", description: "Published security research and vulnerability write-ups." },
  { icon: CheckCircle2, title: "Achievements", description: "Acknowledged in multiple bug bounty programs." },
  { icon: GitBranch, title: "Open Source", description: "Contributions to security tools and open-source projects." },
  { icon: FileCode, title: "Reports", description: "High-quality, actionable vulnerability reports." },
];

export default function Testimonials({ className }: { className?: string }) {
  return (
    <SectionWrapper className={className} id="proof-of-work">
      <SectionTitle title="Proof of Work" subtitle="A track record built on continuous learning, ethical disclosure, and technical excellence." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {proofs.map((proof, idx) => (
          <Card key={idx} className="p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-cyan-950/50 flex items-center justify-center mb-4 border border-cyan-500/20">
              <proof.icon className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{proof.title}</h3>
            <p className="text-sm text-slate-400">{proof.description}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
