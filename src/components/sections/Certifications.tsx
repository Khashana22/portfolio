"use client";

import { motion } from "motion/react";
import { BadgeCheck, ExternalLink } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import { certifications } from "@/data/certifications";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <SectionTitle
        title="Certifications & Training"
        subtitle="Verified security certifications demonstrating practical offensive security expertise."
        align="center"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="glass glass-hover rounded-2xl p-6 flex flex-col gap-4 group"
          >
            {/* Certificate image placeholder */}
            {cert.imagePath && <div className="relative w-full h-40 rounded-xl overflow-hidden"><Image src={cert.imagePath} alt={cert.name} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" /></div>}

            {/* Content */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <BadgeCheck className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg">{cert.name}</h3>
                <p className="text-slate-400 text-sm">{cert.issuer}</p>
                <p className="text-slate-500 text-xs font-mono mt-0.5">{cert.year}</p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">{cert.description}</p>

            {/* Verification button â€” only shown when real URL exists */}
            {cert.verificationUrl && (
              <a
                href={cert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Verify Certificate
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}


