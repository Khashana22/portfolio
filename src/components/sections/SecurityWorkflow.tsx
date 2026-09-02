"use client";

import { motion } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

const stages = [
  "Attack Surface",
  "Hypothesis",
  "Validation",
  "Exploitation",
  "Impact",
  "Root Cause",
  "Remediation"
];

export default function SecurityWorkflow() {
  return (
    <SectionWrapper className="bg-black/50">
      <SectionTitle title="My Security Workflow" />
      
      <div className="mt-16 flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-2">
        {stages.map((stage, i) => (
          <div key={i} className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="px-6 py-4 border-cyan-500/20 bg-cyan-500/5 hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-all font-mono text-sm text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                {stage}
              </Card>
            </motion.div>
            
            {i < stages.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.1 }}
                className="my-4 md:my-0 md:mx-2 text-cyan-500/50"
              >
                <ArrowDown className="w-5 h-5 md:hidden" />
                <ArrowRight className="w-5 h-5 hidden md:block" />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
