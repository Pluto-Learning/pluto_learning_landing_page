import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import Ui from "../../../public/assets/png/ui.png";

const ImageSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "30px",
  };

  return (
    <div className="relative overflow-hidden">
      {/* Left and Right shadow gradients removed */}

      <Slider {...settings} className="slider">
        <div className="px-1 md:px-2">
          <Image
            src={Ui}
            alt="Academic"
            className="w-full rounded-[20px] lg:rounded-[40px]"
          />
        </div>
        <div className="px-1 md:px-2">
          <Image
            src={Ui}
            alt="Academic"
            className="w-full rounded-[20px] lg:rounded-[40px]"
          />
        </div>
        <div className="px-1 md:px-2">
          <Image
            src={Ui}
            alt="Academic"
            className="w-full rounded-[20px] lg:rounded-[40px]"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
