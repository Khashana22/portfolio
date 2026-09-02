import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GridBackground from "@/components/hero/GridBackground";
import SecurityScan from "@/components/hero/SecurityScan";
import { siteConfig } from "@/data/siteConfig";

export default function Hero() {
  return (
    <SectionWrapper id="home" className="relative min-h-screen flex items-center pt-20">
      <GridBackground />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-8">
          <div>
            <Badge variant="cyan" pulse={true} className="mb-6 inline-flex">
              Available for Freelance Security Projects
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              I Break Web Applications <br />
              <span className="text-cyan-400">Before Attackers Do.</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              Web Application Penetration Tester and API Security Specialist focused on identifying exploitable vulnerabilities, validating real-world impact, and delivering clear remediation guidance.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 font-mono text-xs text-gray-400">
            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">eCPPT v3</span>
            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">eJPT v2</span>
            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">eWPT v2</span>
            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">CEH</span>
            <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">INE Elite Student</span>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href={`mailto:${siteConfig.email}`}>
              <Button >
                Request a Security Assessment
              </Button>
            </a>
            <a href="#projects">
              <Button >
                View My Security Work
              </Button>
            </a>
            <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer">
              <Button >
                Download Resume
              </Button>
            </a>
          </div>
        </div>

        <div className="lg:pl-8">
          <SecurityScan />
        </div>
      </div>
    </SectionWrapper>
  );
}
