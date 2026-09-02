"use client";

import { motion } from "motion/react";
import { SectionTitle, SectionWrapper, Card, Tag } from "@/components/ui";
import { Target, CheckCircle2, Lightbulb, Link as LinkIcon } from "lucide-react";

const practiceData = [
  {
    id: 1,
    title: "Advanced API Testing Lab",
    category: "API Security",
    objective: "Identify and exploit complex business logic flaws in a modern microservices architecture.",
    approach: "Mapped the entire API surface, identified undocumented endpoints using ffuf, and analyzed response differences.",
    result: "Discovered a critical BOLA vulnerability combined with mass assignment, leading to account takeover.",
    learning: "The importance of testing state-changing requests concurrently to identify race conditions in APIs.",
    evidence: "Lab Completion Certificate"
  },
  {
    id: 2,
    title: "Hardened Web Environment CTF",
    category: "CTF",
    objective: "Bypass a heavily configured WAF and strict CSP to execute XSS and exfiltrate data.",
    approach: "Fuzzed WAF rules to understand its filtering logic and crafted a polyglot payload.",
    result: "Successfully bypassed the WAF using unicode normalization and exploited the XSS.",
    learning: "Deepened understanding of browser parsing quirks and WAF evasion techniques.",
    evidence: "Writeup Published"
  }
];

export default function ProofOfPractice({ className }: { className?: string }) {
  return (
    <SectionWrapper className={className}>
      <SectionTitle title="Proof of Practice" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {practiceData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <Tag >{item.category}</Tag>
              </div>
              
              <div className="space-y-4 flex-grow text-sm">
                <div>
                  <h4 className="text-cyan-400 font-semibold flex items-center mb-1">
                    <Target className="w-4 h-4 mr-2" /> Objective
                  </h4>
                  <p className="text-slate-400">{item.objective}</p>
                </div>
                <div>
                  <h4 className="text-slate-300 font-semibold flex items-center mb-1">
                    <CheckCircle2 className="w-4 h-4 mr-2" /> Approach & Result
                  </h4>
                  <p className="text-slate-400">{item.approach} <span className="text-white">{item.result}</span></p>
                </div>
                <div>
                  <h4 className="text-yellow-400/80 font-semibold flex items-center mb-1">
                    <Lightbulb className="w-4 h-4 mr-2" /> Key Learning
                  </h4>
                  <p className="text-slate-400">{item.learning}</p>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center text-xs text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer">
                <LinkIcon className="w-4 h-4 mr-2" />
                Evidence: {item.evidence}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
