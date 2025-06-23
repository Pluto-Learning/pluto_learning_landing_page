import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaXTwitter, FaLinkedin, FaSlack } from "react-icons/fa6";
import { SlSocialYoutube } from "react-icons/sl";

export default function Footer() {

  const router = useRouter();
  const backgroundImageStyle = router.pathname !== "/coming-soon"
    ? { backgroundImage: "url('/assets/jpg/Footer.jpg')" }
    : {};

  return (
    <div
      className="overflow-hidden bg-cover bg-center h-[650px] md:h-[700px] lg:h-[800px] xl:h-[850px] flex flex-col justify-between px-5 md:px-0"
      style={backgroundImageStyle}

    >
      <div className="flex flex-col items-center pt-10 lg:pt-16 xl:pt-28">
        <p
          data-aos="fade-right"
          data-aos-duration="1500"
          className="overflow-hidden text-3xl/snug md:text-5xl lg:text-7xl/relaxed font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white/50 via-white to-white/50 text-center"
        >
          Empower your Students
        </p>

        <p
          data-aos="fade-left"
          data-aos-duration="1500"
          className="text-3xl/relaxed md:text-5xl/relaxed lg:text-7xl/tight font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#5E17EB] via-[#CF14EC] to-[#F72585] text-center"
        >
          with Pluto Learning
        </p>

        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="overflow-hidden bg-gradient-to-r from-[#5E17EB] via-[#CF14EC] to-[#F72585] rounded-full p-0.5 mt-16"
        >
          <button className="btn overflow-hidden text-white inline-block text-sm md:text-base rounded-full bg-[#020219] relative px-10 md:px-14 py-3 md:py-4">
            <span className="relative z-10"> Get started</span>
          </button>
        </div>
      </div>

      <div className="md:w-[85%] 2xl:w-[60%] mx-auto pb-10">
        <hr className="border-t border-[#343447] py-5 lg:py-10" />
        <div className="flex flex-col md:flex-row justify-between gap-y-5">
          <Link href={"/"}>
            <Image
            src={"/assets/png/logo.png"}
              alt="Pluto Logo"
              width={93}
              height={46}
              className="self-center"
              data-aos="fade-right"
              data-aos-duration="1000"
            />
          </Link>
          <ul
            data-aos="fade-left"
            data-aos-duration="1000"
            className="overflow-hidden md:self-center flex justify-between md:justify-start md:gap-10"
          >
            <Link href={"/"}>
              <li className="text-xs md:text-sm font-medium text-white/80 cursor-pointer">
                Home
              </li>
            </Link>
            <Link href={"/about"}>
              <li className="text-xs md:text-sm font-medium text-white/80 cursor-pointer">
                Team
              </li>
            </Link>
            <Link href={"/coming-soon"}>
              <li className="text-xs md:text-sm font-medium text-white/80 cursor-pointer">
                Features 
              </li>
            </Link>
            <Link href={"/contact-us"}>
              <li className="text-xs md:text-sm font-medium text-white/80 cursor-pointer">
                Contact Us
              </li>
            </Link>
            <Link href={"/article "}>
              <li className="text-xs md:text-sm font-medium text-white/80 cursor-pointer">
                News
              </li>
            </Link>

          </ul>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between mt-8 lg:mt-16 gap-5 lg:gap-0">
          <p className="text-xs md:text-sm text-white/80">
            Copyright © 2024 Pluto Learning, Inc. All rights reserved.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex gap-8">
              <p className="text-xs md:text-sm text-white/80 cursor-pointer">
                Terms & Conditions
              </p>
              <p className="text-xs md:text-sm text-white/80 cursor-pointer">
                Privacy Policy
              </p>
            </div>
            <div className="flex gap-5">
              <FaXTwitter className="text-xl text-white/80 cursor-pointer" />
              <FaLinkedin className="text-xl text-white/80 cursor-pointer" />
              <SlSocialYoutube className="text-xl text-white/80 cursor-pointer" />
              <FaSlack className="text-xl text-white/80 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
