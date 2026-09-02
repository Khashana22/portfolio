"use client";

import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";

export default function Services() {
  return (
    <SectionWrapper id="services">
      <SectionTitle title="Security Services" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="p-8 h-full flex flex-col hover:border-cyan-500/30 transition-colors">
              <div className="text-cyan-400 font-mono text-sm mb-4">0{i + 1}.</div>
              <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 mb-8 flex-grow">{service.description}</p>
              
              <ul className="space-y-3 mb-8">
                {service.includes.map((item: string, j: number) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full group mt-auto">
                {service.cta || "Request Assessment"}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
