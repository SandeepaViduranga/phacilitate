import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ascone – Change the way you use your money",
  description:
    "Simple, fast, reliable financial applications. One app for all your money things.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans text-ascone-navy bg-white">
        {children}
      </body>
    </html>
  );
}
