import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import GalerySection from "./components/GalerySection";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import ServicesPage from "./components/ServicesPage";
import LocationPage from "./components/LocationPage";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <GalerySection />
      <MapSection />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/location" element={<LocationPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;