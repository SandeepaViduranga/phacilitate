import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Features } from "@/components/Features";
import { Metrics } from "@/components/Metrics";
import { FAQ } from "@/components/FAQ";
import { FooterCTA } from "@/components/FooterCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Partners />
      <Features />
      <Metrics />
      <FAQ />
      <FooterCTA />
      <Footer />
    </main>
  );
}
