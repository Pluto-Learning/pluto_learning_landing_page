import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Academic from "@/components/Home/Academic";
import Discover from "@/components/Home/Discover";
import Features from "@/components/Home/Features";
import Hero_Section from "@/components/Home/Hero_Section";
import Home_Slider from "@/components/Home/Home_Slider";
import How_Work from "@/components/Home/How_Work";
import Mockup_for_Tables from "@/components/Home/Mockup_for_Tables";

export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#000017] to-[#000017]">
        <Navbar />
        <Hero_Section />
      </div>
      <Discover />
      <Academic />
      <How_Work />
      <Home_Slider />
      <Mockup_for_Tables />
      <Features />
      <Footer />
    </div>
  );
}
