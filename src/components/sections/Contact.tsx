"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Send, AlertCircle, CheckCircle2 } from "lucide-react";

export default function Contact({ className }: { className?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <SectionWrapper className={className} id="contact">
      <SectionTitle title="Let's Find the Weak Point Before Someone Else Does." />
      
      <div className="max-w-2xl mx-auto mt-12">
        <Card className="p-6 md:p-8">
          {status === "success" ? (
            <div className="text-center py-12">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent</h3>
              <p className="text-slate-400">Thank you for reaching out. I'll get back to you shortly to discuss your security assessment.</p>
              <Button className="mt-6" onClick={() => setStatus("idle")}>Send Another Message</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Name *</label>
                  <input required type="text" id="name" name="name" className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Email *</label>
                  <input required type="email" id="email" name="email" className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-slate-300">Company / Project</label>
                  <input type="text" id="company" name="company" className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="website" className="text-sm font-medium text-slate-300">Website / API URL</label>
                  <input type="text" id="website" name="website" className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="needs" className="text-sm font-medium text-slate-300">What do you need tested? *</label>
                <textarea required id="needs" name="needs" rows={4} className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50"></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="timeline" className="text-sm font-medium text-slate-300">Preferred Timeline</label>
                  <input type="text" id="timeline" name="timeline" placeholder="e.g. Next 2 weeks, ASAP" className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="budget" className="text-sm font-medium text-slate-300">Budget Range</label>
                  <input type="text" id="budget" name="budget" placeholder="e.g. $1000 - $3000" className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50" />
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <input required type="checkbox" id="authorized" name="authorized" className="mt-1 w-4 h-4 rounded border-white/10 bg-slate-900/50 text-cyan-500 focus:ring-cyan-500/50" />
                <label htmlFor="authorized" className="text-sm text-slate-400">
                  I confirm that I am authorized to request a security assessment for the provided target(s). *
                </label>
              </div>

              {status === "error" && (
                <div className="flex items-center space-x-2 text-red-400 bg-red-950/30 p-3 rounded-lg border border-red-500/20">
                  <AlertCircle className="w-5 h-5" />
                  <span className="text-sm">Something went wrong. Please try again later.</span>
                </div>
              )}

              <Button type="submit" disabled={status === "loading"} className="w-full flex items-center justify-center">
                {status === "loading" ? "Sending..." : (
                  <>
                    <span>Start a Security Conversation</span>
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          )}
        </Card>
      </div>
    </SectionWrapper>
  );
}
