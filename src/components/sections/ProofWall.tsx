"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Filter, X } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import { proofWallItems } from "@/data/recognition";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Awards", "Speaking", "Events", "Certifications", "Training", "Cybersecurity", "Projects", "Community"];

export default function ProofWall() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? proofWallItems
    : proofWallItems.filter(item => item.category === activeCategory);

  return (
    <SectionWrapper id="proof-wall" dark>
      <SectionTitle
        title="Proof Behind the Journey"
        subtitle="Real moments from security work, speaking, training, and community contributions."
        align="center"
      />

      <div className="mt-10 flex flex-wrap gap-2 justify-center">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200",
              activeCategory === cat
                ? "bg-cyan-500 text-black"
                : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-10 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
      >
        <AnimatePresence>
          {filtered.map((item, index) => {
            const heights = ["h-40", "h-52", "h-36", "h-48", "h-44", "h-56", "h-40", "h-48"];
            const height = heights[index % heights.length];

            return (
              <motion.div
                key={item.imagePath}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group break-inside-avoid rounded-xl overflow-hidden cursor-pointer"
              >
                <div className={cn("relative w-full", height)}>
                  <Image 
                    src={item.imagePath} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex flex-col justify-end p-4">
                  <span className="text-cyan-400 text-xs font-mono uppercase tracking-wider">{item.category}</span>
                  <p className="text-white text-sm font-medium mt-0.5 line-clamp-2">{item.title}</p>
                  <span className="text-slate-400 text-xs mt-0.5">{item.year}</span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-slate-500">No items in this category yet.</div>
      )}
    </SectionWrapper>
  );
}
