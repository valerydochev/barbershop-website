import Hero from "./components/Hero";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* spacer for fixed navbar */}
      <div className="h-16" />

      <Hero />
    </div>
  );
}