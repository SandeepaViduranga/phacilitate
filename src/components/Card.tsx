type CardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  variant?: "default" | "cream";
  className?: string;
  children?: React.ReactNode;
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
    <div
      className={`rounded-xl border border-ascone-light-grey/50 p-6 shadow-sm ${bg} ${className}`}
    >
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-lg font-semibold text-ascone-navy">{title}</h3>
      <p className="mt-2 text-sm text-ascone-navy/70">{description}</p>
      {children}
    </div>
  );
}
