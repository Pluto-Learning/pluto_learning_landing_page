/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import Slider from "react-slick";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

export default function Home_Slider() {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "22px",
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "18px",
          adaptiveHeight: true,
        },
      },
    ],
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };
  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const listCardData = [
    {
      title: "Curated Tables for Your Needs",
      banner: "/assets/jpg/Card1.jpg",
      description:
        "Select from designed tables for courses, organizations, or events to keep your data organized and easy to manage",
    },
    {
      title: "Collaborate in Real-Time on the Whiteboard",
      banner: "/assets/jpg/Card2.jpg",
      description:
        "Work with your team in one shared space, brainstorm ideas together, and let Pluto AI offer quick suggestions to keep the creativity flowing",
    },
    {
      title: "Real-Time AI Chat for Group Ideation",
      banner: "/assets/jpg/Card.jpg",
      description:
        "Bring everyone's ideas together in one shared chat, with Pluto AI providing instant insights to spark fresh perspectives",
    },
    {
      title: "Curated Tables for Your Needs",
      banner: "/assets/jpg/Card.jpg",
      description:
        "Select from designed tables for courses, organizations, or events to keep your data organized and easy to manage",
    },
    {
      title: "Curated Tables for Your Needs",
      banner: "/assets/jpg/Card.jpg",
      description:
        "Select from designed tables for courses, organizations, or events to keep your data organized and easy to manage",
    },
  ];

  return (
    <div id="reviews" className="bg-[#eeece8] pb-10 lg:pb-24 pt-10">
      <div className="2xl:w-[60%] mx-auto">
        <div className="flex justify-end gap-5 items-center mb-5 px-5">
          <button
            className="text-[#A0A4AD] hover:text-[#3874CB]"
            onClick={prevSlide}
          >
            <IoIosArrowRoundBack className="text-3xl" />
          </button>
          <button
            className="text-[#A0A4AD] hover:text-[#3874CB]"
            onClick={nextSlide}
          >
            <IoIosArrowRoundForward className="text-3xl" />
          </button>
        </div>
        <Slider className="w-full" ref={sliderRef} {...settings}>
          {listCardData.map((x, index) => (
            <div
              key={index}
              className="!w-[95%] border bg-white rounded-2xl overflow-hidden p-3 lg:p-5 pb-20"
            >
              <div className="flex justify-center items-center bg-gradient-to-r from-[#aa74f3] via-[#CF14EC] to-[#f67ac1] w-full h-[220px] p-4">
                <img
                  src={x.banner}
                  alt=""
                  className="object-contain max-w-full max-h-full"
                  style={{
                    aspectRatio: x.banner.includes("Card2") ? "3 / 2" : "4 / 3",
                  }}
                />
              </div>

              <div className="pt-5">
                <h1 className="text-sm lg:text-base xl:text-lg font-medium text-[#2F2B24]">
                  {x.title}
                </h1>
                <p className="text-xs xl:text-base/relaxed text-[#2F2B24] pt-2">
                  {x.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
