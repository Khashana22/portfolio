import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "web-pentest",
    number: "01",
    title: "Web Application Penetration Testing",
    description: "Deep-dive manual testing combined with automated scans to discover complex vulnerabilities in web applications.",
    includes: ["OWASP Top 10 Coverage", "Business Logic Flaws", "Authentication Bypass", "Actionable Reporting"],
    cta: "Request Pentest",
    icon: "Shield"
  },
  {
    id: "api-security",
    number: "02",
    title: "API Security Testing",
    description: "Rigorous assessment of REST, GraphQL, and SOAP APIs to ensure data integrity and prevent unauthorized access.",
    includes: ["OWASP API Top 10", "Broken Object Level Authorization", "Rate Limiting Checks", "Data Exposure"],
    cta: "Test My APIs",
    icon: "Code"
  },
  {
    id: "vuln-assessment",
    number: "03",
    title: "Vulnerability Assessment",
    description: "Broad continuous scanning to identify known vulnerabilities across your external infrastructure and applications.",
    includes: ["Automated Scanning", "False Positive Removal", "Risk Prioritization", "Remediation Guidance"],
    cta: "Scan My Assets",
    icon: "Search"
  },
  {
    id: "retesting",
    number: "04",
    title: "Security Retesting",
    description: "Validation of applied fixes post-remediation to ensure vulnerabilities have been effectively patched without introducing new issues.",
    includes: ["Patch Verification", "Bypass Attempts", "Updated Reporting", "Final Clearance"],
    cta: "Schedule Retest",
    icon: "RefreshCw"
  },
  {
    id: "targeted-review",
    number: "05",
    title: "Targeted Security Review",
    description: "Focused assessments on specific features, recent major updates, or compliance requirements.",
    includes: ["Feature-specific Testing", "Pre-release Checks", "Compliance Mapping", "Fast Turnaround"],
    cta: "Get Started",
    icon: "Target"
  }
];
