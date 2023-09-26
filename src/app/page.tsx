import Image from "next/image";
import Topbar from "@/components/Topbar";
import HeroBanner from "./components/HeroBanner";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="text-gray-900 bg-white h-screen">
      <Topbar />
      <HeroBanner />
      <Contact />
      <Footer />
    </main>
  );
}
