"use client";

import { motion } from "motion/react";
import { SectionTitle, SectionWrapper, Card } from "@/components/ui";
import { Terminal, Globe, Shield, Wifi, Code } from "lucide-react";

const toolsData = [
  {
    category: "Reconnaissance",
    icon: Globe,
    tools: ["Amass", "Subfinder", "Nmap", "Masscan", "httpx"]
  },
  {
    category: "Web Testing",
    icon: Terminal,
    tools: ["Burp Suite Pro", "Caido", "FFuF", "Nuclei", "SQLmap"]
  },
  {
    category: "Vulnerability Validation",
    icon: Shield,
    tools: ["Metasploit", "Netcat", "Curl", "Python"]
  },
  {
    category: "Network Analysis",
    icon: Wifi,
    tools: ["Wireshark", "Tcpdump", "Responder"]
  },
  {
    category: "Automation",
    icon: Code,
    tools: ["Bash", "Python", "Go", "Docker"]
  }
];

export default function SecurityArsenal({ className }: { className?: string }) {
  return (
    <SectionWrapper className={className}>
      <SectionTitle title="My Security Arsenal" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {toolsData.map((group, index) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full border border-white/5 hover:border-cyan-500/20 bg-white/5">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-semibold">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.tools.map(tool => (
                    <span key={tool} className="text-xs font-mono text-slate-300 bg-black/40 px-2 py-1 rounded border border-white/10">
                      {tool}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-slate-400 text-sm mt-12 italic border-t border-white/10 pt-8"
      >
        "Tools accelerate my methodology. They are not the methodology."
      </motion.p>
    </SectionWrapper>
  );
}
