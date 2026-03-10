import Link from "next/link";

type LogoProps = { className?: string };

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="#" className={`text-2xl font-medium text-ascone-primary sm:text-3xl tracking-tight ${className}`.trim()}>
      Ascone
    </Link>
  );
}
