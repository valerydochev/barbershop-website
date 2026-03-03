import Hero from "./components/Hero";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
      </main>
    </div>
  );
}