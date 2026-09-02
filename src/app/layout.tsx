import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Sayed Khashana | Web Application Penetration Tester & API Security Specialist",
  description:
    "Web Application Penetration Tester and API Security Specialist focused on vulnerability discovery, security assessment and actionable remediation.",
  keywords: [
    "Web Penetration Tester",
    "API Security Testing",
    "Web Application Security",
    "API Penetration Testing",
    "Cybersecurity Consultant",
    "Penetration Testing Freelancer",
    "Web Security Specialist",
    "API Security Specialist",
    "OWASP Security Testing",
    "Vulnerability Assessment",
    "Cybersecurity Freelancer",
    "Sayed Khashana",
  ],
  authors: [{ name: "Sayed Khashana" }],
  creator: "Sayed Khashana",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Sayed Khashana | Web Application Penetration Tester & API Security Specialist",
    description:
      "Web Application Penetration Tester and API Security Specialist focused on vulnerability discovery, security assessment and actionable remediation.",
    siteName: "Sayed Khashana — Security Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayed Khashana | Web Application Penetration Tester & API Security Specialist",
    description:
      "Web Application Penetration Tester and API Security Specialist focused on vulnerability discovery, security assessment and actionable remediation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full bg-[#0A0A0F] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
