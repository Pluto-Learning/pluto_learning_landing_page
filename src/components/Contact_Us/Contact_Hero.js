import React from "react";
import Navbar from "../common/Navbar";
import Image from "next/image";

export default function Contact_Hero() {
  return (
    <div className="bg-cover bg-center bg-[#000017] lg:rounded-bl-[150px] xl:rounded-bl-[200px] overflow-hidden">
      <Navbar />

      <div className="relative flex items-center justify-between py-20  mx-auto">
        <div className="px-5 md:px-20 2xl:px-0 2xl:w-[32%] 2xl:ml-auto">
          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            className="overflow-hidden text-5xl md:text-4xl xl:text-6xl/relaxed font-bold gradient-text"
          >
            Contact Us
          </p>
          <p
            data-aos="fade-right"
            data-aos-duration="1500"
            className="overflow-hidden text-sm xl:text-base text-white/85 pt-5 lg:pt-7"
          >
            {"Have any questions or need more information?"}
          </p>

          <p
            data-aos="fade-right"
            data-aos-duration="1700"
            className="overflow-hidden text-sm xl:text-base text-white/85 pt-1"
          >
            {"Reach out to us, and we'll get back to you as soon as possible"}
          </p>

          <p
            data-aos="fade-right"
            data-aos-duration="2000"
            className="text-sm xl:text-lg font-bold text-white/85 pt-10 cursor-pointer"
          >
            CONTACT@PLUTOLEARNING.COM
          </p>
        </div>

        <div className="hidden md:block">
          <Image
            src={"/assets/png/map.png"}
            alt=""
            width={1364}
            height={1364}
            className="w-[964px]"
          />
        </div>
      </div>
      
    </div>
  );
}
