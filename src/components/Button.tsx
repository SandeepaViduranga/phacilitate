type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline-light" | "header-cta";
  href?: string;
  className?: string;
  onClick?: () => void;
};

export function Button({
  children,
  variant = "primary",
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ascone-primary focus:ring-offset-2 hover:scale-[1.02] active:scale-[0.98]";
  const primary =
    "bg-ascone-primary text-white hover:bg-ascone-primary/90";
  const secondary =
    "bg-transparent text-ascone-navy hover:text-ascone-primary hover:opacity-90";
  const outlineLight =
    "border border-white bg-transparent text-white hover:bg-white/10";
  const headerCta =
    "bg-white text-ascone-primary hover:bg-white/90";

  const variantClass =
    variant === "primary"
      ? primary
      : variant === "secondary"
        ? secondary
        : variant === "outline-light"
          ? outlineLight
          : headerCta;
  const combined = `${base} ${variantClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={combined} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={combined}>
      {children}
    </button>
  );
}
