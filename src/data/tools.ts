import { Tool } from "@/types";

export const tools: Tool[] = [
  { name: "Nmap", category: "Reconnaissance", description: "Network discovery and security auditing." },
  { name: "Nuclei", category: "Reconnaissance", description: "Fast and customizable vulnerability scanner." },
  { name: "ffuf", category: "Reconnaissance", description: "Fast web fuzzer written in Go." },
  
  { name: "Burp Suite", category: "Web Testing", description: "Leading platform for web security testing." },
  { name: "OWASP ZAP", category: "Web Testing", description: "Free, open-source penetration testing tool." },
  
  { name: "SQLMap", category: "Vulnerability Validation", description: "Automatic SQL injection and database takeover tool." },
  { name: "XSStrike", category: "Vulnerability Validation", description: "Advanced XSS detection suite." },
  { name: "Dalfox", category: "Vulnerability Validation", description: "Fast, parameter analysis and XSS scanner." },
  { name: "WPScan", category: "Vulnerability Validation", description: "Black box WordPress vulnerability scanner." },
  
  { name: "Wireshark", category: "Network Analysis", description: "Network protocol analyzer." },
  
  { name: "Python", category: "Automation", description: "Scripting for custom exploit development and automation." },
  { name: "n8n", category: "Automation", description: "Workflow automation tool." },
  { name: "AI-assisted Tools", category: "Automation", description: "Leveraging LLMs for payload generation and recon." }
];
