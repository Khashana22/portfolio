"use client";

import { motion } from "motion/react";
import { Project } from "@/types";
import { Button, Tag, Badge } from "@/components/ui";
import { X, ExternalLink, GitBranch, ShieldAlert, Target, Search, CheckCircle, Activity, Wrench, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface CaseStudyProps {
  project: Project;
  onClose: () => void;
  className?: string;
}

export default function CaseStudy({ project, onClose, className }: CaseStudyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "bg-[#111118] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]",
        className
      )}
    >
      <div className="sticky top-0 bg-[#111118]/80 backdrop-blur-xl border-b border-white/10 p-6 flex justify-between items-center z-10">
        <div>
          <Badge className="border-cyan-400/30 text-cyan-400 mb-2">
            {project.category}
          </Badge>
          <h2 className="text-2xl font-bold text-white">{project.title}</h2>
        </div>
        <Button variant="ghost" onClick={onClose} aria-label="Close case study" className="p-2 w-10 h-10 flex items-center justify-center">
          <X className="w-6 h-6" />
        </Button>
      </div>

      <div className="p-6 md:p-8 overflow-y-auto space-y-12">
        {/* Header section */}
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Target className="w-5 h-5 text-cyan-400" />
              Objective
            </h3>
            <p className="text-slate-400">{project.objective || "Assess and secure the application infrastructure."}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-cyan-400" />
              Attack Surface
            </h3>
            <p className="text-slate-400">{project.attackSurface || "Web Application, API Endpoints, Authentication mechanisms."}</p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-8 border-t border-white/10 pt-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Search className="w-5 h-5 text-cyan-400" />
              Methodology & Findings
            </h3>
            <p className="text-slate-400">{project.methodology || "Conducted a thorough grey-box assessment focusing on business logic and authorization bypasses."}</p>
            {project.findings && (
              <div className="text-slate-400 ml-4 mt-2 whitespace-pre-wrap">
                {project.findings}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-red-400" />
                Impact
              </h3>
              <p className="text-slate-400">{project.impact || "Critical business impact due to unauthorized data access."}</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Wrench className="w-5 h-5 text-green-400" />
                Remediation
              </h3>
              <p className="text-slate-400">{project.remediation || "Implemented robust RBAC and strict input validation."}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </div>
      </div>

      {(project.githubUrl || project.writeupUrl) && (
        <div className="bg-[#111118] border-t border-white/10 p-6 flex gap-4 mt-auto">
          {project.githubUrl && (
            <Button variant="outline" href={project.githubUrl}>
              <span className="flex items-center gap-2">
                <GitBranch className="w-4 h-4" />
                View Repository
              </span>
            </Button>
          )}
          {project.writeupUrl && (
            <Button href={project.writeupUrl}>
              <span className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Live Demo / Writeup
              </span>
            </Button>
          )}
        </div>
      )}
    </motion.div>
  );
}
