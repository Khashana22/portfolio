"use client";

import { motion } from "motion/react";
import { Search, Shield, Crosshair, Wrench } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

const values = [
  {
    title: "Evidence-Based Testing",
    description: "Every finding is supported by reproducible evidence. No theoretical vulnerabilities, only proven risks.",
    icon: Search
  },
  {
    title: "Manual Validation",
    description: "Automation accelerates discovery, but manual validation ensures accuracy and eliminates false positives.",
    icon: Shield
  },
  {
    title: "Attacker Mindset",
    description: "I think beyond automated scanners to uncover complex, chained vulnerabilities and realistic attack paths.",
    icon: Crosshair
  },
  {
    title: "Remediation-Focused",
    description: "My objective is helping you fix the problem, not just handing over a scary PDF. I provide actionable guidance.",
    icon: Wrench
  }
];

export default function WhyHireMe() {
  return (
    <SectionWrapper id="why-hire-me" className="bg-black/30">
      <div className="text-center mb-16">
        <div className="w-12 h-1 bg-cyan-400 rounded-full mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          I Don&apos;t Just Find Vulnerabilities.<br className="hidden md:block" /> I Prove Their Impact.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {values.map((value, i) => {
          const Icon = value.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-8 h-full hover:bg-white/[0.03] transition-colors group">
                <div className="bg-cyan-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.description}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
