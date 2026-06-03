import { Nav } from "@/components/salon/Nav.jsx";
import { Hero } from "@/components/salon/Hero.jsx";
import { Trust } from "@/components/salon/Trust.jsx";
import { Services } from "@/components/salon/Services.jsx";
import { Gallery } from "@/components/salon/Gallery.jsx";
import { Academy } from "@/components/salon/Academy.jsx";
import { Marquee } from "@/components/salon/Marquee.jsx";
import { About } from "@/components/salon/About.jsx";
import { Testimonials } from "@/components/salon/Testimonials.jsx";
import { Booking } from "@/components/salon/Booking.jsx";
import { Contact } from "@/components/salon/Contact.jsx";
import { Footer } from "@/components/salon/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Marquee />
        <Gallery />
        <Academy />
        <About />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
