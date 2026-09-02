"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: ReactNode;
  className?: string;
}

const Button = ({
  variant = "primary",
  size = "md",
  href,
  icon,
  className,
  children,
  ...rest
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-cyan-500 hover:bg-cyan-400 text-black font-semibold shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]",
    secondary: "bg-white/10 hover:bg-white/20 text-white border border-white/10",
    outline: "border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10",
    ghost: "text-slate-400 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        className={combinedClassName}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...rest}>
      {icon}
      {children}
    </button>
  );
};

export default Button;
