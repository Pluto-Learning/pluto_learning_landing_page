import React, { useEffect, useState } from "react";
import Navbar from "../common/Navbar";

export default function Soon_Mian_Section() {
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 450) {
        setBgImage("/assets/png/mbl-soon.png");
      } else {
        setBgImage("/assets/png/soon-bg.png");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className=" overflow-hidden">
      <Navbar />

      <div
        className="relative bg-center bg-contain bg-no-repeat w-full h-[450px] md:h-[800px] lg:h-[1000px]"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="w-full 2xl:w-[60%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-5 md:px-0">
          <p
            data-aos="fade-right"
            data-aos-duration="800"
            className="overflow-hidden text-4xl md:text-5xl lg:text-[65px] font-bold gradient-text text-center"
          >
            Excited Updates
          </p>
          <p
            data-aos="fade-left"
            data-aos-duration="800"
            className="overflow-hidden text-4xl/relaxed md:text-5xl/relaxed lg:text-[65px] font-bold gradient-text text-center"
          >
            Coming Soon!
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="overflow-hidden md:w-[70%] lg:w-[50%] xl:w-[35%] mx-auto text-sm md:text-lg text-center text-white/85 pt-6"
          >
            {
              "Hang tight, we're putting the finishing touches on this page. More information will be available soon!"
            }
          </p>
        </div>
      </div>
    </div>
  );
}
