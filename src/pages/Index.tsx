import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";
import EventDetails from "@/components/EventDetails";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Timeline />
        <Gallery />
        <EventDetails />
        <RSVP />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
