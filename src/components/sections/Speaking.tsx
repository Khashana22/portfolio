"use client";

import { motion } from "motion/react";
import { Mic } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import { speakingEvents } from "@/data/recognition";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function Speaking() {
  return (
    <SectionWrapper id="speaking">
      <SectionTitle
        title="Beyond Security Testing"
        subtitle="Sharing knowledge. Building communities. Helping others grow in technology and cybersecurity."
        align="center"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-16 space-y-16"
      >
        {speakingEvents.map((event, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <Mic className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{event.title}</h3>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-cyan-400 text-sm font-medium">{event.role}</span>
                  {event.year && (
                    <span className="text-slate-500 text-sm">&bull; {event.year}</span>
                  )}
                </div>
              </div>
            </div>

            {event.topic && !event.topic.includes("placeholder") && (
              <p className="text-slate-400 text-sm mb-6">
                <span className="text-slate-500 mr-2">Topic:</span>
                {event.topic}
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {event.photos?.map((photo, i) => (
                <div key={i} className="relative w-full h-48 rounded-xl overflow-hidden">
                  <Image src={photo} alt={"Speaker Photo "} fill className="object-cover transition-transform duration-300 hover:scale-105" sizes="(max-width: 640px) 100vw, 33vw" />
                </div>
              ))}
              {event.posterPath && (
                <div className="relative w-full h-48 rounded-xl overflow-hidden">
                  <Image src={event.posterPath} alt="Event Poster" fill className="object-cover transition-transform duration-300 hover:scale-105" sizes="(max-width: 640px) 100vw, 33vw" />
                </div>
              )}
              {event.certificatePath && (
                <div className="relative w-full h-48 rounded-xl overflow-hidden">
                  <Image src={event.certificatePath} alt="Certificate" fill className="object-cover transition-transform duration-300 hover:scale-105" sizes="(max-width: 640px) 100vw, 33vw" />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
