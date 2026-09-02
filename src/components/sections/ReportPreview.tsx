"use client";

import { motion } from "motion/react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionTitle from "@/components/ui/SectionTitle";
import { Shield, FileCheck, Search, Activity, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ReportPreview({ className }: { className?: string }) {
  return (
    <SectionWrapper id="report-preview" className={className}>
      <div className="text-center mb-12">
        <SectionTitle
          title="Security Assessment Report"
          subtitle="Delivering actionable intelligence. My reports are designed to be understood by executives while providing deep technical details for engineering teams."
          align="center"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto"
      >
        {/* Decorative elements */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-lg z-0" />
        
        {/* Document Container */}
        <div className="relative z-10 bg-[#FAFAFA] rounded-xl shadow-2xl overflow-hidden text-slate-800 flex flex-col md:flex-row min-h-[600px]">
          
          {/* Sidebar Navigation (Mock) */}
          <div className="w-full md:w-64 bg-slate-100 border-r border-slate-200 p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-slate-900 font-bold mb-6">
              <Shield className="w-6 h-6 text-cyan-600" />
              <span>Assessment Report</span>
            </div>
            
            <div className="space-y-1">
              <ReportNavItem icon={<FileText />} label="Executive Summary" active />
              <ReportNavItem icon={<Activity />} label="Risk Overview" />
              <ReportNavItem icon={<Search />} label="Methodology" />
              <div className="pt-4 pb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Detailed Findings
              </div>
              <ReportNavItem label="SK-WEB-001" variant="high" subitem />
              <ReportNavItem label="SK-API-001" variant="medium" subitem />
              <ReportNavItem label="SK-AUTH-001" variant="low" subitem />
              <div className="pt-4 pb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Appendices
              </div>
              <ReportNavItem icon={<FileCheck />} label="Retest Plan" />
            </div>
          </div>

          {/* Document Content */}
          <div className="flex-1 p-8 md:p-12 bg-white overflow-y-auto relative">
            {/* Header */}
            <div className="border-b border-slate-200 pb-8 mb-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl font-serif font-bold text-slate-900">Executive Summary</h1>
                  <p className="text-slate-500 mt-2">Target: Core API Infrastructure</p>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-slate-900">Sayed Khashana</div>
                  <div className="text-sm text-slate-500">Web & API Security Specialist</div>
                </div>
              </div>
              
              <div className="flex gap-8 mt-8">
                <StatCard label="Total Findings" value="3" />
                <StatCard label="Critical/High" value="1" color="text-red-600" />
                <StatCard label="Medium" value="1" color="text-orange-500" />
                <StatCard label="Low/Info" value="1" color="text-yellow-600" />
              </div>
            </div>

            {/* Body */}
            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Assessment Overview</h2>
                <p className="text-slate-600 leading-relaxed">
                  Between October 1st and October 5th, a comprehensive grey-box security assessment was conducted on the core application infrastructure. The objective was to identify vulnerabilities that could lead to unauthorized data access, system compromise, or service disruption.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">Key Strategic Findings</h2>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-md">
                  <h3 className="font-semibold text-red-900 mb-1">Critical Authorization Flaws</h3>
                  <p className="text-sm text-red-800">
                    The most significant risk identified stems from a lack of robust object-level authorization across multiple API endpoints, allowing vertical and horizontal privilege escalation.
                  </p>
                </div>
              </section>

              {/* Blurred content to suggest more pages */}
              <div className="mt-12 pt-8 border-t border-slate-200 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10" />
                <div className="opacity-40 blur-[2px]">
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">Methodology</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    The assessment followed standard industry methodologies including OWASP Top 10 and WASC Threat Classification. Automated scanning was heavily supplemented with manual verification and business logic testing.
                  </p>
                  <div className="h-32 bg-slate-100 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

// Subcomponents for the mock report
function ReportNavItem({ 
  icon, 
  label, 
  active, 
  subitem,
  variant
}: { 
  icon?: React.ReactNode; 
  label: string; 
  active?: boolean;
  subitem?: boolean;
  variant?: 'high' | 'medium' | 'low';
}) {
  return (
    <div className={cn(
      "flex items-center gap-3 px-3 py-2 rounded-md text-sm cursor-default transition-colors",
      active ? "bg-cyan-50 text-cyan-700 font-medium" : "text-slate-600 hover:bg-slate-200/50",
      subitem && "ml-4"
    )}>
      {icon && <span className="w-4 h-4">{icon}</span>}
      {!icon && variant && (
        <span className={cn(
          "w-2 h-2 rounded-full",
          variant === 'high' && "bg-red-500",
          variant === 'medium' && "bg-orange-500",
          variant === 'low' && "bg-yellow-500"
        )} />
      )}
      <span>{label}</span>
    </div>
  );
}

function StatCard({ label, value, color = "text-slate-900" }: { label: string; value: string; color?: string }) {
  return (
    <div>
      <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">{label}</div>
      <div className={cn("text-3xl font-bold font-mono", color)}>{value}</div>
    </div>
  );
}
