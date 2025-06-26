import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VirtualCard from "@/components/VirtualCard";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
      <VirtualCard />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
