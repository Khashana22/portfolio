"use client";

import { motion } from "motion/react";
import { Award, Shield, Star } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import { recognition } from "@/data/recognition";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const categoryIcon = (title: string) => {
  if (title.toLowerCase().includes("ine")) return <Star className="w-5 h-5 text-cyan-400" />;
  if (title.toLowerCase().includes("ministry") || title.toLowerCase().includes("official")) return <Shield className="w-5 h-5 text-cyan-400" />;
  return <Award className="w-5 h-5 text-cyan-400" />;
};

export default function Recognition() {
  return (
    <SectionWrapper id="recognition" dark>
      <SectionTitle
        title="Recognition & Achievements"
        subtitle="A journey built through practical security work, continuous learning and contribution to the technology community."
        align="center"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {recognition.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="glass glass-hover rounded-2xl p-6 flex flex-col gap-5"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                {categoryIcon(item.title)}
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg leading-snug">{item.title}</h3>
                <p className="text-slate-400 text-sm mt-0.5">{item.organization} &bull; {item.year}</p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>

            <div className="grid grid-cols-2 gap-3">
              {item.imagePath && (
                <div className="relative w-full h-32 rounded-lg overflow-hidden">
                  <Image src={item.imagePath} alt="Recognition" fill className="object-cover transition-transform duration-300 hover:scale-105" sizes="(max-width: 640px) 50vw, 25vw" />
                </div>
              )}
              {item.certificatePath && (
                <div className="relative w-full h-32 rounded-lg overflow-hidden">
                  <Image src={item.certificatePath} alt="Certificate" fill className="object-cover transition-transform duration-300 hover:scale-105" sizes="(max-width: 640px) 50vw, 25vw" />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
