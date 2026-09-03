"use client";

import { motion } from "motion/react";
import { AlertTriangle, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const problems = [
  "Can users access other users' resources?",
  "Can authentication be bypassed?",
  "Can API authorization be abused?",
  "Can sensitive data be exposed?",
  "Can business logic be manipulated?",
  "Can security controls be bypassed?",
];

export default function ClientProblems() {
  return (
    <SectionWrapper className="bg-black/50">
      <div className="flex flex-col items-center justify-center space-y-12 text-center">
        <div className="max-w-3xl space-y-4">
          <SectionTitle title="Your Application May Be Working — Without Being Secure." />
          <p className="text-slate-400 text-lg">
            Functional software doesn't mean secure software. Scanners miss the context, but attackers don't.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl text-left">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="flex items-start gap-4 p-6 border-red-500/20 hover:border-red-500/40 transition-colors h-full">
                <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                <p className="text-slate-200">{problem}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Button href="#contact" variant="primary" size="lg" className="group">
            Let's Test That Assumption
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
