import Link from "next/link";
import { GitBranch, Link2, Mail, Shield } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0F] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold font-mono text-white mb-1">
              {siteConfig.name}
            </h3>
            <p className="text-cyan-400 text-sm font-medium mb-3">
              Web Application Penetration Tester | API Security Specialist
            </p>
            <p className="text-slate-500 text-sm mb-4">
              Find it. Prove it. Fix it.
            </p>
            <div className="flex items-center gap-2 text-xs text-cyan-400 bg-cyan-400/10 w-fit px-3 py-1.5 rounded-full border border-cyan-500/20">
              <Shield size={12} />
              <span>This portfolio is security-first.</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors text-sm">
                  <GitBranch size={15} /> GitHub
                </a>
              </li>
              <li>
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors text-sm">
                  <Link2 size={15} /> LinkedIn
                </a>
              </li>
              <li>
                <a href={siteConfig.upwork} target="_blank" rel="noopener noreferrer" aria-label="Upwork" className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors text-sm">
                  Upwork
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} aria-label="Email" className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors text-sm">
                  <Mail size={15} /> Email
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href={siteConfig.resumeUrl} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  Download Resume
                </a>
              </li>
              <li>
                <a href="#work" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  Security Work
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  Request Assessment
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="font-mono text-xs">Finding weaknesses. Proving impact. Improving security.</p>
        </div>
      </div>
    </footer>
  );
}
