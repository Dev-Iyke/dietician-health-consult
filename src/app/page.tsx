import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="top" className="min-h-screen bg-cream">
        <Hero />
      </main>
    </>
  );
}
