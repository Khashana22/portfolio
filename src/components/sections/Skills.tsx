"use client";

import { motion } from "motion/react";
import { SectionWrapper, Card, Tag } from "@/components/ui";

const skillsData = [
  {
    category: "Web Security",
    skills: ["OWASP Top 10", "XSS", "SQLi", "CSRF", "SSRF", "Authentication Bypasses", "Business Logic Errors"]
  },
  {
    category: "API Security",
    skills: ["REST API Testing", "GraphQL Testing", "IDOR", "Mass Assignment", "Rate Limiting", "JWT Attacks"]
  },
  {
    category: "Development",
    skills: ["JavaScript/TypeScript", "Python", "Bash", "React", "Node.js", "SQL", "Git"]
  },
  {
    category: "Security Automation",
    skills: ["Custom Scripting", "CI/CD Pipeline Integration", "Nuclei Templates", "Tool Chaining"]
  }
];

export default function Skills({ className }: { className?: string }) {
  return (
    <SectionWrapper className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 h-full">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <Tag key={skill} className="text-sm">
                    {skill}
                  </Tag>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
