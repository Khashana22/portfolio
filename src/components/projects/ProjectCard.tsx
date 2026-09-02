"use client";

import { motion } from "motion/react";
import { Project } from "@/types";
import { Card, Tag, Badge } from "@/components/ui";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  className?: string;
}

export default function ProjectCard({ project, onClick, className }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }} className={cn("h-full", className)} onClick={onClick}
    >
      <Card className="h-full p-6 flex flex-col cursor-pointer group hover:border-cyan-400/50 transition-colors"
      >
        <div className="flex justify-between items-start mb-4">
          <Badge className="border-cyan-400/30 text-cyan-400">
            {project.category}
          </Badge>
          <ArrowUpRight className="text-slate-500 group-hover:text-cyan-400 transition-colors w-5 h-5" />
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        
        {project.label && (
          <div className="text-sm text-cyan-400/80 font-mono mb-4">
            {project.label}
          </div>
        )}

        <p className="text-slate-400 line-clamp-3 mb-6 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.slice(0, 3).map((tech) => (
            <Tag key={tech} >{tech}</Tag>
          ))}
          {project.technologies.length > 3 && (
            <Tag >+{project.technologies.length - 3}</Tag>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
