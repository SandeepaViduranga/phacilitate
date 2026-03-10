import Link from "next/link";

type LogoProps = { className?: string };

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="#" className={`text-2xl font-semibold text-ascone-navy sm:text-3xl ${className}`.trim()}>
      Ascone
    </Link>
  );
}
