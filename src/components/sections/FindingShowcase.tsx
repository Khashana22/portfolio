"use client";

import { motion } from "motion/react";
import { SectionWrapper, SectionTitle, Card, Badge, Button } from "@/components/ui";
import { AlertTriangle, Bug, Code, FileText, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function FindingShowcase({ className }: { className?: string }) {
  return (
    <SectionWrapper id="showcase" className={className}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <SectionTitle title="What a Security Finding Looks Like" className="mb-0" />
        <Button className="shrink-0 group">
          Request an Assessment
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card className="overflow-hidden">
          <div className="bg-[#111118] p-6 border-b border-white/10 flex flex-col md:flex-row justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-slate-400 text-sm">SK-WEB-001</span>
                <Badge className="border-red-500/50 text-red-400 bg-red-500/10">
                  <AlertTriangle className="w-3 h-3 mr-1" /> High Severity
                </Badge>
              </div>
              <h3 className="text-xl font-bold text-white">Insecure Direct Object Reference (IDOR) / Broken Access Control</h3>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <div className="flex flex-col items-end">
                <span className="font-mono">CVSS: 8.5 (High)</span>
                <span className="font-mono text-xs mt-1">CWE-284</span>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-white font-semibold flex items-center gap-2">
                  <Bug className="w-4 h-4 text-cyan-400" />
                  Vulnerability Description
                </h4>
                <p className="text-slate-400 leading-relaxed text-sm">
                  The application fails to properly validate user authorization when accessing specific resources via the API. By manipulating the <code className="text-cyan-400 bg-cyan-400/10 px-1 rounded">userId</code> parameter in the request payload, an attacker can access and modify sensitive data belonging to other users.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-white font-semibold flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  Business Impact
                </h4>
                <p className="text-slate-400 leading-relaxed text-sm">
                  This vulnerability allows unauthorized access to personally identifiable information (PII) and potentially sensitive financial records, violating data privacy regulations and causing reputational damage.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-semibold flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400" />
                Proof of Concept Evidence
              </h4>
              <div className="rounded-lg border border-white/10 overflow-hidden bg-black/50 p-2">
                <div className="relative w-full h-[400px] rounded overflow-hidden opacity-90 hover:opacity-100 transition-opacity">
                  <Image src="/images/projects/burp-suite-finding.jpeg" alt="HTTP Request/Response Interception Evidence" fill className="object-cover" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-semibold flex items-center gap-2">
                <Code className="w-4 h-4 text-cyan-400" />
                Proof of Concept (PoC)
              </h4>
              <div className="bg-[#0A0A0F] rounded-lg p-4 font-mono text-sm border border-white/5 overflow-x-auto">
                <div className="text-slate-500 mb-2"># Request as User A (ID: 1001) attempting to fetch User B (ID: 1002) data</div>
                <div className="text-green-400">GET <span className="text-white">/api/v1/users/1002/billing-info</span> HTTP/1.1</div>
                <div className="text-slate-300">Host: api.target.com</div>
                <div className="text-slate-300">Authorization: Bearer eyJhbG... [User A Token]</div>
                
                <div className="my-4 border-t border-white/10 border-dashed" />
                
                <div className="text-slate-500 mb-2"># Response (Server fails to validate if User A owns ID 1002)</div>
                <div className="text-red-400">HTTP/1.1 <span className="text-white">200 OK</span></div>
                <pre className="text-slate-300 mt-2 bg-transparent p-0 overflow-hidden">
                  {JSON.stringify({ userId: 1002, billingEmail: "ceo@target.com", creditCard: "****-****-****-4321", balance: ",200.00" }, null, 2)}
                </pre>
              </div>
            </div>

            <div className="bg-cyan-950/20 border border-cyan-900/50 rounded-lg p-6">
              <h4 className="text-cyan-400 font-semibold mb-3">Recommended Remediation</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Implement robust server-side access controls. Instead of relying on client-provided IDs, infer the target user context from the authenticated session token. If direct object references are necessary, ensure that a strict authorization check verifies the current user has permission to access the requested resource before processing the request.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </SectionWrapper>
  );
}
