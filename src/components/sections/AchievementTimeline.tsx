"use client";

import { motion } from "motion/react";
import { Briefcase, GraduationCap, Mic, Users, Award, Star, BadgeCheck } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import { timeline } from "@/data/timeline";
import { Milestone } from "@/types";

const categoryConfig: Record<string, { icon: React.ReactNode; color: string; bg: string }> = {
  Experience:         { icon: <Briefcase className="w-4 h-4" />,    color: "text-cyan-400",    bg: "bg-cyan-500/10 border-cyan-500/30" },
  Internship:         { icon: <Briefcase className="w-4 h-4" />,    color: "text-sky-400",     bg: "bg-sky-500/10 border-sky-500/30" },
  Speaker:            { icon: <Mic className="w-4 h-4" />,          color: "text-purple-400",  bg: "bg-purple-500/10 border-purple-500/30" },
  Community:          { icon: <Users className="w-4 h-4" />,        color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/30" },
  "University Recognition": { icon: <GraduationCap className="w-4 h-4" />, color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/30" },
  Recognition:        { icon: <Star className="w-4 h-4" />,         color: "text-amber-400",   bg: "bg-amber-500/10 border-amber-500/30" },
  Certification:      { icon: <BadgeCheck className="w-4 h-4" />,   color: "text-cyan-400",    bg: "bg-cyan-500/10 border-cyan-500/30" },
};

function MilestoneCard({ milestone, index }: { milestone: Milestone; index: number }) {
  const isLeft = index % 2 === 0;
  const cfg = categoryConfig[milestone.category] ?? { icon: <Award className="w-4 h-4" />, color: "text-slate-400", bg: "bg-slate-500/10 border-slate-500/30" };

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`relative flex ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} items-start gap-4 md:gap-0`}
    >
      {/* Card — desktop half-width */}
      <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
        <div className="glass glass-hover rounded-2xl p-5">
          {/* Category badge */}
          <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium mb-3 ${cfg.bg} ${cfg.color}`}>
            {cfg.icon}
            {milestone.category}
          </div>
          <h3 className="text-white font-semibold text-base leading-snug">{milestone.title}</h3>
          <p className="text-cyan-400 text-sm mt-0.5">{milestone.organization}</p>
          <p className="text-slate-400 text-sm mt-2 leading-relaxed">{milestone.description}</p>
        </div>
      </div>

      {/* Center dot + year */}
      <div className="hidden md:flex flex-col items-center w-16 flex-shrink-0 z-10 relative">
        <div className="w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#0A0A0F] ring-2 ring-cyan-500/30" />
        <span className="text-slate-500 text-xs font-mono mt-2">{milestone.year}</span>
      </div>

      {/* Placeholder for the other side */}
      <div className="hidden md:block w-[calc(50%-2rem)]" />
    </motion.div>
  );
}

export default function AchievementTimeline() {
  return (
    <SectionWrapper id="timeline">
      <SectionTitle
        title="Achievement Timeline"
        subtitle="A continuous journey through security practice, certifications, recognition, and community contribution."
        align="center"
      />

      <div className="mt-16 relative">
        {/* Vertical center line — desktop only */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent -translate-x-1/2" />

        <div className="space-y-8">
          {timeline.map((milestone, index) => (
            <MilestoneCard key={index} milestone={milestone} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
