import React from "react";
import Feature_Slider from "./Feature_Slider";

export default function Features() {
  return (
    <div>
      <div className="md:w-[90%] 2xl:w-[60%] mx-auto bg-white py-10 lg:py-16 px-5 md:px-0 overflow-hidden">
        <p
          data-aos="fade-right"
          data-aos-duration="1500"
          className="overflow-hidden text-3xl md:text-4xl lg:text-5xl/relaxed xl:text-6xl/relaxed font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#5E17EB] via-[#CF14EC] to-[#F72585]"
        >
          Features Built Ground-up for Colleges
        </p>

        <p
          data-aos="fade-left"
          data-aos-duration="1500"
          className="overflow-hidden md:w-[90%] lg:w-[70%] xl:w-1/2 mx-auto text-sm lg:text-lg text-[#1F2534] text-center mt-4 md:mt-6"
        >
          Discover the full range of our products to supercharge your academic
          support fully built around your students, faculty, student success
          admin
        </p>
      </div>
      <div className="lg:w-[70%] 2xl:w-[60%] mx-auto px-2 lg:px-0">
        <Feature_Slider />
      </div>
    </div>
  );
}
