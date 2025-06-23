import Image from "next/image";
import React, { useState } from "react";

export default function How_Work() {
  // State to track the current image
  const [currentImage, setCurrentImage] = useState(0);

  // Array of images to cycle through on button click
  const images = [
    "/assets/png/how_work-2.png",
    "/assets/png/final.webp",
    "/assets/png/final2.webp",
  ];

  // Function to handle Collaborate button click and change the image
  const handleImageChange = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="pt-14 lg:pt-16 pb-20 overflow-hidden">
      <div
        data-aos="fade-down"
        data-aos-duration="1800"
        className="overflow-hidden flex justify-center"
      >
        <p className="uppercase text-xs md:text-base text-transparent bg-clip-text bg-gradient-to-r from-[#5E17EB] to-[#CF14EC] border border-[#E9DFFF] rounded-full px-6 md:px-8 py-2">
          how it works
        </p>
      </div>

      <div className="mt-8 px-4 md:px-0 2xl:w-[45%] mx-auto">
        <p
          data-aos="fade-right"
          data-aos-duration="1500"
          className="overflow-hidden text-2xl md:text-4xl lg:text-6xl/tight font-bold text-[#010231] text-center"
        >
          Personalized Team Learning
        </p>

        <p
          data-aos="fade-left"
          data-aos-duration="1500"
          className="overflow-hidden text-2xl md:text-4xl lg:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#5E17EB] to-[#F72585] md:pt-2"
        >
          with seamless Virtual Tables™
        </p>

        <p
          data-aos="fade-up"
          data-aos-duration="1500"
          className="overflow-hidden text-xs lg:text-base text-center text-[#010231] md:w-[90%] lg:w-[70%] xl:w-[55%] mx-auto mt-5 lg:mt-8"
        >
          Unlock dynamic tables that help you track student progress in
          real-time and make informed decisions Students can create custom
          tables for their courses, organizations, and activities
        </p>
      </div>

      <div className="flex justify-center gap-5 mt-10 lg:mt-16">
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="flex items-center w-28 md:w-40 py-[1px] px-[1px] justify-center overflow-hidden bg-gradient-to-r from-[#5E17EB] via-[#CF14EC] to-[#F72585] rounded-full"
        >
          <button className="btn h-full w-full overflow-hidden text-[#0D0D12] inline-block text-sm md:text-base rounded-full bg-white relative hover:text-white">
            <span className="relative z-10">Discover</span>
          </button>
        </div>
        <button
          data-aos="fade-left"
          data-aos-duration="1500"
          className="overflow-hidden text-sm md:text-base text-[#0D0D12] border rounded-full w-28 md:w-40 py-2.5 bg-[#FCFCFD] hover:shadow transition-all duration-500"
          onClick={handleImageChange} // Add onClick event
        >
          Collaborate
        </button>
      </div>

      <div
        className="relative bg-cover bg-center h-[450px] md:h-screen w-full flex items-center justify-center md:my-36 xl:my-10"
        style={{ backgroundImage: "url('/assets/png/how-work.png')" }}
      >
        <div>
          <Image
            src={"/assets/png/shadow.png"}
            alt=""
            width={800}
            height={800}
            className="hidden lg:block  w-[500px] md:w-auto 2xl:w-[1000px]  absolute -left-40 -top-0"
          />

          <Image
            src={"/assets/png/shadow.png"}
            alt=""
            width={800}
            height={800}
            className="hidden lg:block w-[500px] md:w-auto 2xl:w-[1000px] absolute -right-40 -bottom-20"
          />
        </div>
        <div className="relative w-full md:w-[83%] xl:w-[57%] md:h-[700px] 2xl:h-auto px-5 z-50 2xl:w-[45%] mx-auto overflow-hidden rounded-[10px]">
          <Image
            src={images[currentImage]}
            alt="how_work"
            width={500}
            height={500}
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white opacity-80"></div>
        </div>
      </div>
    </div>
  );
}