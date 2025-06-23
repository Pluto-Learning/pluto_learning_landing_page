import React from "react";
import Navbar from "../common/Navbar";

export default function About_Hero_Section() {
  return (
  
  
    <div
    className="bg-center 2xl:bg-no-repeat bg-cover 2xl:bg-contain -mt-7 2xl:-mt-20 h-[80vh] overflow-hidden w-full flex flex-col items-center justify-center"

      style={{ backgroundImage: "url('/assets/jpg/about-hero-section.jpg')" }}
    >
      <Navbar />

      <div className="2xl:w-[60%] mx-auto flex items-center flex-col justify-center h-[75%]">
        <p
          data-aos="fade-right"
          data-aos-duration="1500"
          className="overflow-hidden gradient-text text-5xl md:text-6xl lg:text-[96px] font-bold"
        >
          Our Team
        </p>

        <p
          data-aos="fade-left"
          data-aos-duration="1500"
          className="overflow-hidden w-[90%] md:w-[60%] pt-2  2xl:w-[30%] mx-auto text-center md:text-lg/relaxed text-white font-medium"
        >
          {
            "Ask us how we can hit your college’s academic goals, year-on-year with Pluto!"
          }
        </p>
      </div>
    </div>
  );
}
