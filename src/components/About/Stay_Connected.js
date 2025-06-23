import Image from "next/image";
import React from "react";

export default function Stay_Connected() {
  return (
    <div className="bg-[#D7C2FF] py-14">
      <div
        className="w-[90%] xl:w-[80%] 2xl:w-[60%] mx-auto bg-cover bg-center  md:h-[70vh] xl:h-[60vh] flex flex-col justify-center py-10 md:py-0 px-5 md:px-10 lg:px-14 rounded-[40px] md:rounded-[60px] xl:rounded-[60px] overflow-hidden"
        style={{ backgroundImage: "url('/assets/png/stay.png')" }}
      >
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="overflow-hidden"
        >
          <p className="md:w-[55%] xl:w-[45%] text-3xl lg:text-[43px] leading-tight font-semibold text-white">
            Stay Connected with us on Social Media
          </p>
          <p
            data-aos="fade-right"
            data-aos-duration="1500"
            className="overflow-hidden md:w-[60%] lg:w-[55%] text-sm lg:text-lg/loose
           text-white mt-5"
          >
            Join us on social media to stay informed about our newest features,
            updates, and more!
          </p>

          <div className="flex flex-col md:flex-row gap-5 mt-5">
            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/company/pluto-learning/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium bg-white border border-white text-[#111827] rounded-lg px-14 py-4 text-center"
            >
              LinkedIn
            </a>
            {/* Instagram Button */}
            <a
              href="https://www.instagram.com/pluto.learning/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium bg-transparent border border-white text-white rounded-lg px-14 py-4 text-center hover:bg-white hover:text-[#111827] transition-all duration-500"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
