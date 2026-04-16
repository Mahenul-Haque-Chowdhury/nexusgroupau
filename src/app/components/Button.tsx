"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
}

export function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  onClick,
  className = ""
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-xl transition-all duration-300 tracking-[0.08em] uppercase font-medium";
  
  const variants = {
    primary: "bg-primary text-primary-foreground ring-1 ring-primary/32 shadow-[0_14px_35px_rgba(240,180,79,0.25)] hover:-translate-y-0.5 hover:brightness-110",
    secondary: "bg-secondary/78 text-secondary-foreground ring-1 ring-white/8 shadow-[0_10px_28px_rgba(3,7,20,0.35)] hover:bg-secondary",
    outline: "bg-white/[0.02] text-foreground ring-1 ring-white/14 shadow-[0_8px_24px_rgba(3,7,20,0.3)] hover:bg-primary/10"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-sm"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
