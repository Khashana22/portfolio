"use client";

import { motion } from "motion/react";
import { SectionTitle, SectionWrapper, Card } from "@/components/ui";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

export default function Education({ className }: { className?: string }) {
  return (
    <SectionWrapper className={className}>
      <SectionTitle title="Education" />
      
      <div className="mt-8 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="p-6 md:p-8 relative overflow-hidden group">
            {/* Background accent */}
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <GraduationCap className="w-32 h-32 text-cyan-400" />
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Software Engineering</h3>
                  <p className="text-cyan-400 text-lg">Delta Technological University</p>
                </div>
                <div className="flex items-center text-slate-400 font-mono bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
                  <Calendar className="w-4 h-4 mr-2" />
                  2023 — 2027
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center mb-2">
                  <BookOpen className="w-4 h-4 mr-2 text-slate-400" />
                  Core Focus Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Software Engineering", "Programming", "Web Technologies", "Backend Development", "Cybersecurity"].map((topic) => (
                    <span 
                      key={topic} 
                      className="px-3 py-1 bg-black/40 border border-white/10 rounded-full text-sm text-slate-300"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
