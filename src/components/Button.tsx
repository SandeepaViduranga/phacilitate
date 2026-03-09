"use client";

import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
};

export function Button({
  children,
  variant = "primary",
  href,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ascone-primary focus:ring-offset-2";
  const primary =
    "bg-ascone-primary text-white hover:bg-ascone-primary/90 hover:scale-[1.02] active:scale-[0.98]";
  const secondary =
    "bg-transparent text-ascone-navy hover:text-ascone-primary hover:opacity-90";

  const combined = `${base} ${variant === "primary" ? primary : secondary} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={combined}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      className={combined}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
