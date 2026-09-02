"use client";

import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onToggle,
  className,
}: AccordionItemProps) => {
  return (
    <div className={cn("border border-white/10 bg-white/5 rounded-2xl overflow-hidden backdrop-blur-xl", className)}>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-inset"
      >
        <span className="text-lg font-medium text-slate-100">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-cyan-400 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }}
          >
            <div className="px-6 pb-6 text-slate-400">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
