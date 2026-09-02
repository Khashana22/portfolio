"use client";

import { motion } from "motion/react";
import { SectionTitle, SectionWrapper, Card } from "@/components/ui";
import Image from "next/image";
import { Shield, Award, CheckCircle } from "lucide-react";

export default function BugBounty({ className, show = true }: { className?: string, show?: boolean }) {
  if (!show) return null;

  return (
    <SectionWrapper className={className}>
      <SectionTitle title="Responsible Security Research" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <Card className="p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Award className="w-5 h-5 text-cyan-400 mr-2" />
              Hall of Fame & Acknowledgments
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Committed to responsible disclosure and working with organizations to secure their platforms.
            </p>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center text-sm border border-white/5 rounded-lg p-3 bg-white/5">
                  <Shield className="w-4 h-4 text-cyan-400 mr-3" />
                  <span className="text-slate-300">Private Program Disclosure #{i}</span>
                  <CheckCircle className="w-4 h-4 text-green-400 ml-auto" />
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card className="p-6 h-full flex flex-col">
            <h3 className="text-xl font-bold text-white mb-4">Recent Finding Report</h3>
            <div className="flex-grow flex items-center justify-center">
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image src="/images/projects/burp-suite-finding.jpeg" alt="Finding Screenshot / PoC" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
