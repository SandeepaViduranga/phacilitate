"use client";

import { motion } from "framer-motion";

type CardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  variant?: "default" | "cream";
  className?: string;
  children?: React.ReactNode;
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

export function Card({
  title,
  description,
  icon,
  variant = "default",
  className = "",
  children,
}: CardProps) {
  const bg = variant === "cream" ? "bg-ascone-cream/60" : "bg-white";

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      custom={0}
      className={`rounded-xl border border-ascone-light-grey/50 p-6 shadow-sm ${bg} ${className}`}
    >
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-lg font-semibold text-ascone-navy">{title}</h3>
      <p className="mt-2 text-sm text-ascone-navy/70">{description}</p>
      {children}
    </motion.div>
  );
}
