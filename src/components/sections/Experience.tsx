"use client";

import { motion } from "motion/react";
import { experience } from "@/data/experience";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export default function Experience({ className }: { className?: string }) {
  return (
    <SectionWrapper id="experience" className={className}>
      <SectionTitle title="Professional Experience" />

      <div className="relative mt-12 pl-4 md:pl-0">
        {/* Timeline Line */}
        <div className="absolute left-[19px] md:left-8 top-0 bottom-0 w-px bg-white/10" />

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative md:pl-24 pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[15px] md:left-[27px] top-6 w-[9px] h-[9px] rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />

              <Card className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <ImagePlaceholder width={64} height={64} className="rounded-full" />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 mt-1 text-sm text-slate-400 font-mono">
                        <span>{exp.company}</span>
                        <span>•</span>
                        <span>{exp.type}</span>
                        <span>•</span>
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>

                    {exp.focus && exp.focus.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.focus.map((area: string) => (
                          <Tag key={area}>{area}</Tag>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
