import React from "react";
import Link from "next/link";

export default function Mockup_for_Tables() {
  return (
    <div
      className="bg-cover bg-center h-[700px] md:h-[900px] lg:h-[1100px] flex flex-col justify-end py-14 md:py-24 overflow-hidden"
      style={{ backgroundImage: "url('/assets/jpg/Mockup_for_Tables.jpg')" }}
    >
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="overflow-hidden w-[90%] 2xl:w-[60%] mx-auto"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 bg-gradient-to-r from-[#5E17EB] via-[#CF14EC] to-[#F72585] p-5 md:p-10 rounded-2xl md:rounded-3xl">
          <div className="w-full">
            <p className="md:text-xl lg:text-2xl xl:text-3xl text-white">
              Help Students Find Productive Groups{" "}
            </p>
            <p className="text-2xl md:text-3xl xl:text-4xl font-semibold text-white pt-3">
              Across 100s of Courses
            </p>
          </div>
          <div className="lg:w-[80%] xl:w-[50%]">
            <p className="text-sm md:text-base xl:text-lg text-white">
              Tables formed seamlessly based on availability students just
              browse, choose and join in seconds
            </p>

            <div className="flex gap-5 mt-8">
              <button className="w-full md:w-auto text-xs md:text-sm font-medium text-white border border-white rounded-md px-4 md:px-6 py-3.5 hover:bg-white/40 hover:border-white/40 transition-all duration-500">
                See the video
              </button>
              <Link href="/contact-us">
                <button className="w-full md:w-auto text-xs md:text-sm font-medium bg-white/40 text-white rounded-md px-4 md:px-6 py-3.5  transition-all duration-500">
                  Get A Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
