import Image from "next/image";
import React from "react";

export default function Discover() {
  return (
    <div
      id="target-section-id"
      className="w-[90%] 2xl:w-[60%] mx-auto bg-white py-14 md:py-16 overflow-hidden"
    >
      <div
        className="bg-center bg-cover rounded-[30px] lg:rounded-[60px] overflow-hidden"
        style={{ backgroundImage: "url('/assets/jpg/Mask-group.jpg')" }}
      >
        <div className="px-5 md:px-0 py-10 md:py-14">
          <p
            data-aos="fade-down"
            data-aos-duration="2000"
            className="overflow-hidden text-center text-2xl/snug md:text-[40px] md:leading-[48px] font-semibold text-white"
          >
            Discover what people are <br className="hidden md:block" /> saying
            about Pluto Learning!
          </p>

          <p
            data-aos="fade-down"
            data-aos-duration="2000"
            className="overflow-hidden md:w-[80%] lg:w-[60%] xl:w-1/2 mx-auto text-sm md:text-lg text-white/85 text-center mt-7"
          >
            {
              "We're constantly pushing boundaries to bring you the latest insights, discussions, and breakthroughs in the Ed-Tech space"
            }
          </p>

          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="overflow-hidden flex flex-col md:flex-row justify-center gap-5 mt-8"
          >
            <button className="flex items-center justify-center gap-2 text-sm md:text-base text-[#111827] bg-white rounded-lg py-3.5 px-5 border border-white">
              <Image
                src={"/assets/svg/discover-icon.svg"}
                alt=""
                width={25}
                height={25}
              />
              <p>Funding News</p>
            </button>

            <button className="flex justify-center items-center gap-2 text-sm md:text-base bg-transparent rounded-lg border border-white text-white py-3.5 px-5 hover:bg-white hover:text-[#111827] transition-all duration-500">
              Featured in Media
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
