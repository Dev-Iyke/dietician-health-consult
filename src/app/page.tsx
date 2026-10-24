import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Packages } from "@/components/Packages";
import { OneOffAppointments } from "@/components/OneOffAppointments";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="top" className="min-h-screen bg-cream">
        <Hero />
        <Services />
        <About />
        <Packages />
        <OneOffAppointments />
      </main>
    </>
  );
}
