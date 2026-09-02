"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/siteConfig";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0A0A0F]/80 border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold font-mono text-cyan-400">
          {siteConfig.name}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-cyan-400",
                activeSection === item.href.replace('#', '') ? "text-cyan-400" : "text-gray-300"
              )}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.upwork}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hire Me on Upwork"
            className="px-4 py-2 bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 rounded-lg hover:bg-cyan-400/20 transition-colors text-sm font-medium"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0A0F] border-b border-white/10 p-4">
          <nav className="flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "block text-sm font-medium transition-colors",
                  activeSection === item.href.replace('#', '') ? "text-cyan-400" : "text-gray-300"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.upwork}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hire Me on Upwork"
              className="inline-block px-4 py-2 bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 rounded-lg text-center"
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
