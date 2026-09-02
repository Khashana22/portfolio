"use client";

import { motion } from "motion/react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

const steps = [
  { title: "Scope", desc: "Defining the rules of engagement and assets to be tested." },
  { title: "Reconnaissance", desc: "Gathering information and understanding the attack surface." },
  { title: "Discovery", desc: "Identifying potential vulnerabilities and weak points." },
  { title: "Validation", desc: "Manually confirming flaws and eliminating false positives." },
  { title: "Exploitation", desc: "Demonstrating the real-world impact of confirmed vulnerabilities." },
  { title: "Reporting", desc: "Delivering a comprehensive report with actionable remediation advice." }
];

export default function Methodology() {
  return (
    <SectionWrapper>
      <SectionTitle title="How I Approach a Security Assessment" />
      
      <div className="mt-16 max-w-3xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />
        
        <div className="space-y-12">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={cn(
                "relative flex items-start md:items-center gap-6",
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] -translate-x-[5px] md:-translate-x-1.5 mt-1.5 md:mt-0 z-10" />
              
              {/* Content */}
              <div className={cn(
                "pl-12 md:pl-0 md:w-1/2",
                i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
              )}>
                <div className="text-cyan-400 font-mono text-sm mb-2">Step 0{i + 1}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
