import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CTA } from "@/components/sections/CTA";
import { CinematicBreak } from "@/components/sections/CinematicBreak";
import { Features } from "@/components/sections/Features";
import { Fleet } from "@/components/sections/Fleet";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { Prerequisites } from "@/components/sections/Prerequisites";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Features />
        <Fleet />
        <CinematicBreak />
        <Prerequisites />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
