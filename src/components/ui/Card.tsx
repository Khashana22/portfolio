"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

const Card = ({ children, className, hover = true, glow = false }: CardProps) => {
  return (
    <motion.div
      whileHover={hover ? { translateY: -2 } : undefined}
      className={cn(
        "relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 transition-colors duration-300",
        hover && "hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5",
        glow && "shadow-[0_0_20px_rgba(34,211,238,0.15)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default Card;
