"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/animations";

export interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: ReactNode;
  dark?: boolean;
}

const SectionWrapper = ({ id, className, children, dark }: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={cn(
        "py-20 lg:py-32 w-full",
        dark ? "bg-[#0A0A0F]" : "bg-[#111118]",
        className
      )}
    >
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
