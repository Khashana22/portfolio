"use client";

import { motion } from "motion/react";
import { SectionTitle, SectionWrapper, Card, Tag } from "@/components/ui";
import { cn } from "@/lib/utils";
import { FileText } from "lucide-react";

const researchData = [
  {
    id: 1,
    title: "Authentication Bypass via Broken Access Control",
    category: "Web Security",
    severity: "high",
    description: "Discovered an IDOR vulnerability allowing unauthenticated users to modify other users' profiles.",
    date: "2023-10",
  },
  {
    id: 2,
    title: "Mass Assignment in User Registration API",
    category: "API Security",
    severity: "critical",
    description: "Found a mass assignment issue in a REST API allowing standard users to elevate their privileges to admin.",
    date: "2023-11",
  },
  {
    id: 3,
    title: "Stored XSS in Markdown Editor",
    category: "Vulnerability Research",
    severity: "medium",
    description: "Bypassed input sanitization in a markdown editor, leading to stored cross-site scripting.",
    date: "2024-01",
  }
];

const severityColors = {
  critical: "border-red-500/50 bg-red-500/10 text-red-500",
  high: "border-red-400/50 bg-red-400/10 text-red-400",
  medium: "border-orange-500/50 bg-orange-500/10 text-orange-500",
  low: "border-yellow-500/50 bg-yellow-500/10 text-yellow-500",
};

export default function SecurityResearch({ className }: { className?: string }) {
  return (
    <SectionWrapper id="research" className={className}>
      <SectionTitle title="Security Research" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {researchData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col p-6 hover:border-cyan-400/30 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <Tag>{item.category}</Tag>
                <div className={cn("px-2 py-1 text-xs font-mono uppercase rounded-md border", severityColors[item.severity as keyof typeof severityColors])}>
                  {item.severity}
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm mb-4 flex-grow">{item.description}</p>
              <div className="flex items-center text-xs text-slate-500 font-mono">
                <FileText className="w-4 h-4 mr-1" />
                {item.date}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
