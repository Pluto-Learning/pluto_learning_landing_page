import React, { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowRoundDown } from "react-icons/io";
import Link from "next/link";
import Navbar from "../common/Navbar"; // Import your Navbar component here

export default function Hero_Section() {
  const scrollToSection = () => {
    const targetSection = document.getElementById("target-section-id");
    targetSection?.scrollIntoView({ behavior: "smooth" });
  };

  const [bgImage, setBgImage] = useState("");
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 450) {
        setBgImage("/assets/png/mbl-hero.png");
      } else {
        setBgImage("/assets/jpg/hero-section.jpg");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative bg-cover bg-no-repeat bg-center h-[600px] md:h-[800px] lg:h-[900px] w-full overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Navbar /> {/* Place Navbar here, so it’s over the hero section */}
      
      <div className="w-full xl:w-auto absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center md:mt-10">
        <button
          className="mt-14 overflow-hidden flex items-center text-xs text-[#D9ADFF] font-medium border border-white/5 bg-gradient-to-b from-[#9C20FB24] to-[#FF01E61B] px-5 py-2.5 rounded-full mb-8"
        >
          Featured on UTA MavPitch
          <IoIosArrowForward className="inline ml-2" />
        </button>
        <h1
          className="overflow-hidden text-center text-4xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/70 via-white to-white"
        >
          This is Pluto,
        </h1>
        <h1
          className="overflow-hidden text-center text-4xl md:text-5xl lg:text-7xl/tight font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5E17EB] via-[#CF14EC] to-[#F72585]"
        >
          AI for Colleges.
        </h1>

        <p
          className={`overflow-hidden md:w-[60%] xl:w-[75%] mx-auto text-xs md:text-base lg:text-lg font-medium text-white/60 mt-6 text-center px-3 transition-opacity duration-1000 ${
            showText ? "opacity-100" : "opacity-0"
          }`}
        >
          We're driving an exponential leap in academic support, revolutionizing how students access knowledge.
        </p>

        <Link href="/contact-us">
          <button className="text-xs md:text-sm text-black font-medium bg-white/90 border border-black/5 px-5 md:px-10 py-2.5 rounded-lg mt-8 hover:bg-transparent transition-all duration-500 hover:text-white hover:border-white">
            Get a Demo
          </button>
        </Link>

        <button
          onClick={scrollToSection}
          className="flex flex-col items-center gap-3 text-xs md:text-sm font-medium text-white/40 mt-8 hover:text-white transition-all duration-500"
        >
          Learn more
          <IoIosArrowRoundDown className="text-xl md:text-2xl" />
        </button>
      </div>
    </div>
  );
}
