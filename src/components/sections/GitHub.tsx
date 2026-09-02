"use client";

import { motion } from "motion/react";
import { GitBranch, Star, GitFork, ExternalLink } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { siteConfig } from "@/data/siteConfig";

const repositories = [
  {
    name: "Khashana Pentest Playbook",
    description: "Structured penetration testing playbook for recon, IDOR, XSS, SSRF, and API testing workflows.",
    label: "Personal Security Project",
    url: "https://github.com/Khashana22/Pentest-Playbook",
  },
  {
    name: "Security Automation",
    description: "Custom scripts and workflows for reconnaissance and vulnerability scanning.",
    label: "Security Automation",
    url: undefined,
  },
  {
    name: "API Security Lab",
    description: "Controlled API security assessment environment for exploring realistic vulnerabilities.",
    label: "Security Lab",
    url: undefined,
  },
  {
    name: "Security Writeups",
    description: "Documented security research, findings, and CTF writeups.",
    label: "Research",
    url: undefined,
  },
];

export default function GitHub({ className }: { className?: string }) {
  return (
    <SectionWrapper id="github" className={className}>
      <SectionTitle
        title="Open Security Work"
        subtitle="Security projects, tools, labs, and research available on GitHub."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        {/* Profile card */}
        <div className="lg:col-span-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <GitBranch className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{siteConfig.name}</h3>
                  <p className="text-sm text-slate-400">GitHub Profile</p>
                </div>
              </div>
              <ImagePlaceholder label="GitHub Contribution Graph" width={320} height={128} className="w-full h-32 rounded-lg mb-6" />
              <Button href={siteConfig.github} className="w-full justify-center" aria-label="Explore Security Work on GitHub">
                Explore My Security Work
              </Button>
            </Card>
          </motion.div>
        </div>

        {/* Repository cards */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {repositories.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Card className="p-5 h-full flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-cyan-400 font-semibold font-mono flex items-center gap-2 text-sm">
                    <GitBranch className="w-4 h-4 flex-shrink-0" />
                    {repo.name}
                  </h4>
                  {repo.url && (
                    <a href={repo.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${repo.name} on GitHub`} className="text-slate-500 hover:text-cyan-400 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="text-sm text-slate-400 flex-grow mb-3 leading-relaxed">{repo.description}</p>
                <span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-0.5 rounded w-fit">
                  {repo.label}
                </span>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
