import { Skill } from "@/types";

export const skills: Skill[] = [
  { name: "OWASP Top 10", category: "Web Security" },
  { name: "Business Logic Flaws", category: "Web Security" },
  { name: "Authentication Bypass", category: "Web Security" },
  { name: "XSS & SQLi", category: "Web Security" },
  { name: "SSRF & CSRF", category: "Web Security" },

  { name: "REST API Security", category: "API Security" },
  { name: "GraphQL Security", category: "API Security" },
  { name: "BOLA / IDOR", category: "API Security" },
  { name: "Mass Assignment", category: "API Security" },
  { name: "Rate Limiting Bypass", category: "API Security" },

  { name: "Next.js & React", category: "Development" },
  { name: "Node.js", category: "Development" },
  { name: "TypeScript", category: "Development" },
  { name: "Database Design", category: "Development" },
  { name: "Secure Coding", category: "Development" },

  { name: "Python Scripting", category: "Security Automation" },
  { name: "Bash Scripting", category: "Security Automation" },
  { name: "Custom Tooling", category: "Security Automation" },
  { name: "CI/CD Security", category: "Security Automation" }
];
