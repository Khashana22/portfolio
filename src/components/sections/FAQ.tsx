"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import AccordionItem from "@/components/ui/AccordionItem";
import { faqs } from "@/data/faq";

export default function FAQ({ className }: { className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper className={className} id="faq">
      <SectionTitle
        title="Frequently Asked Questions"
        subtitle="Common questions about my security testing services and process."
        align="center"
      />
      <div className="max-w-3xl mx-auto mt-12 space-y-4">
        {faqs.map((faq, idx) => (
          <AccordionItem
            key={idx}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === idx}
            onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
