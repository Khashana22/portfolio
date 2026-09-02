"use client";

import { motion } from "motion/react";
import { ShieldCheck, AlertTriangle, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SecurityScan({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={cn(
        "relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-6 overflow-hidden",
        className
      )}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
      
      <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
        <Terminal className="text-cyan-400" size={20} />
        <h3 className="font-mono text-sm font-semibold tracking-wider text-gray-300">
          APPLICATION SECURITY STATUS
        </h3>
      </div>

      <div className="space-y-4 font-mono text-sm">
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Authentication</span>
          <span className="flex items-center gap-1 text-green-400">
            <ShieldCheck size={16} /> Passed
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Authorization</span>
          <span className="flex items-center gap-1 text-amber-400">
            <AlertTriangle size={16} /> 2 Issues
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400">API Endpoints</span>
          <span className="text-white">142 Analyzed</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400">Attack Surface</span>
          <span className="text-white">Medium</span>
        </div>

        <div className="pt-4 mt-4 border-t border-white/10">
          <p className="text-xs text-gray-500 mb-2">Findings Breakdown</p>
          <div className="grid grid-cols-4 gap-2 text-center text-xs">
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 rounded py-1">
              0 CRIT
            </div>
            <div className="bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded py-1">
              2 HIGH
            </div>
            <div className="bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded py-1">
              5 MED
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded py-1">
              8 LOW
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <span className="text-[10px] uppercase tracking-widest text-gray-600">
          Illustrative Example
        </span>
      </div>
    </motion.div>
  );
}
