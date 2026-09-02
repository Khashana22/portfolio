"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/projects/ProjectCard";
import CaseStudy from "@/components/projects/CaseStudy";

export default function FeaturedWork({ className }: { className?: string }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <SectionWrapper id="work" className={className}>
      <SectionTitle title="Selected Security Work" />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id || index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
              onClick={() => setSelectedProject(null)}
            >
              <div 
                className="w-full max-w-4xl"
                onClick={(e) => e.stopPropagation()}
              >
                <CaseStudy
                  project={selectedProject}
                  onClose={() => setSelectedProject(null)}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
