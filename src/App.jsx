import Hero from "./components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./components/Services";
import GalerySection from "./components/GalerySection";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <GalerySection />
      </main>
    </div>
  );
}