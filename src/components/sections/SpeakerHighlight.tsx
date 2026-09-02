"use client";

import { motion } from "motion/react";
import { Mic2 } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Button from "@/components/ui/Button";
import { fadeInLeft, fadeInRight } from "@/lib/animations";

export default function SpeakerHighlight() {
  return (
    <SectionWrapper id="speaker-highlight" dark>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="order-2 lg:order-1"
        >
          {/* Label */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
              <Mic2 className="w-4 h-4 text-cyan-400" />
            </div>
            <span className="text-cyan-400 text-sm font-medium font-mono uppercase tracking-widest">Speaker</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Cybersecurity<br />
            <span className="gradient-text">Speaker</span>
          </h2>

          <div className="mb-3">
            <p className="text-lg font-semibold text-white">Sayed Khashana</p>
            <p className="text-slate-400 text-sm">Cybersecurity Practitioner & Speaker</p>
          </div>

          <p className="text-slate-400 leading-relaxed mb-8 max-w-lg">
            Sharing practical cybersecurity knowledge, security methodologies and offensive security concepts
            with the technology community. From web application vulnerabilities to API security and
            automation — making complex security topics accessible to developers and security practitioners.
          </p>

          <Button href="#speaking" variant="outline">
            View Speaking & Events
          </Button>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="order-1 lg:order-2"
        >
          <ImagePlaceholder
            label="Professional Speaking Photo"
            width={560}
            height={440}
            className="w-full h-[440px] rounded-2xl"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
