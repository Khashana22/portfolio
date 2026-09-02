"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <div className="bg-[#111118]/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl flex flex-col sm:flex-row items-center gap-4">
            <div className="text-center sm:text-left">
              <p className="text-white font-medium text-sm">Need a Security Assessment?</p>
              <p className="text-gray-400 text-xs">Let's secure your application.</p>
            </div>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold rounded-lg transition-colors text-sm"
            >
              <MessageSquare size={16} />
              Let's Talk
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
