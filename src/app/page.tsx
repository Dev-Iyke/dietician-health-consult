import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="top" className="min-h-screen bg-cream">
        <Hero />
        <Services />
        <About />
      </main>
    </>
  );
}
