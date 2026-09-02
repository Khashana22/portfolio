import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const packages = [
  {
    title: "Web Security Assessment",
    description: "Comprehensive vulnerability assessment for web applications.",
    features: ["OWASP Top 10 coverage", "Business logic testing", "Authentication bypass testing", "Detailed remediation report"],
  },
  {
    title: "API Security Assessment",
    description: "In-depth testing for RESTful and GraphQL APIs.",
    features: ["Authentication & Authorization testing", "Rate limiting analysis", "Data exposure testing", "API-specific vulnerabilities"],
    highlight: true,
  },
  {
    title: "Targeted Security Review",
    description: "Focused review on specific features or recent changes.",
    features: ["Scope-limited testing", "Quick turnaround", "Targeted vulnerability discovery", "Verification of fixes"],
  }
];

export default function Packages({ className }: { className?: string }) {
  return (
    <SectionWrapper className={className} id="packages">
      <SectionTitle title="Freelance Packages" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {packages.map((pkg, idx) => (
          <Card key={idx} className={cn("flex flex-col h-full", pkg.highlight && "border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.15)]")}>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">{pkg.title}</h3>
              <p className="text-slate-400 mb-6 flex-1">{pkg.description}</p>
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start text-sm text-slate-300">
                    <Check className="w-5 h-5 text-cyan-400 mr-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
