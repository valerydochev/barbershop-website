import Hero from "./components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./components/Services";
import GalerySection from "./components/GalerySection";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <GalerySection />
        <MapSection />
        <Footer />
      </main>
    </div>
  );
}