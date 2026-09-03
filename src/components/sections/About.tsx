"use client";

import { motion } from "motion/react";
import { SectionTitle, SectionWrapper, Card } from "@/components/ui";
import Image from "next/image";

export default function About({ className }: { className?: string }) {
  return (
    <SectionWrapper id="about" className={className}>
      <SectionTitle title="Behind the Security Researcher" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-1"
        >
          <div className="relative aspect-square max-w-sm mx-auto">
            <div className="absolute inset-0 bg-cyan-500/20 rounded-2xl blur-2xl -z-10" />
            <div className="relative w-full h-full rounded-2xl border border-white/10 overflow-hidden">
              <Image 
                src="/images/profile/sayed-khashana-profile.png"
                alt="Sayed Khashana"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 space-y-6"
        >
          <Card className="p-6 md:p-8 bg-white/5 border-white/10">
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              I'm <span className="text-white font-bold">Sayed Khashana</span>, a Web Application Penetration Tester and API Security Specialist focused on vulnerability research and offensive security. 
            </p>
            <p className="text-slate-300 leading-relaxed text-lg mb-8">
              My focus is understanding how modern applications fail from an attacker's perspective — then turning those weaknesses into clear, actionable security improvements.
            </p>
            
            <div className="bg-black/40 p-4 rounded-lg border border-cyan-500/20">
              <h4 className="text-cyan-400 font-mono text-sm uppercase tracking-wider mb-2">My Philosophy</h4>
              <p className="text-white font-semibold">
                Offensive Security + Engineering Thinking + Automation + Continuous Research
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
