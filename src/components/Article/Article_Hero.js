import React from "react";
import Navbar from "../common/Navbar";

export default function Article_Hero() {
  return (
    <div
      className="bg-cover bg-center h-[70vh] lg:rounded-bl-[150px] xl:rounded-bl-[200px] overflow-hidden"
      style={{ backgroundImage: "url('/assets/jpg/article.jpg')" }}
    >
      <Navbar />
      <div className="w-[90%] 2xl:w-[60%] mx-auto flex justify-center items-center lg:justify-start lg:items-end h-full pb-32 md:pb-48">
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="overflow-hidden text-5xl/tight md:text-7xl lg:text-8xl 2xl:text-[100px] font-bold gradient-text -mt-10" // Added -mt-10
        >
          Pluto in the News
        </div>
      </div>
    </div>
  );
}
