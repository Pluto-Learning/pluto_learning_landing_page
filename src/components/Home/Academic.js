import Image from "next/image";
import React from "react";
import { MdArrowForward } from "react-icons/md";
import ImageSlider from "./slider";

export default function Academic() {
  return (
    <div className="bg-[#D7C2FF] overflow-hidden">
      <div className="w-[90%] 2xl:w-[60%] mx-auto py-14 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-5">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="w-full overflow-hidden"
          >
            <p className="text-sm xl:text-lg font-bold text-[#111827]">
              WHY CHOOSE PLUTO FOR YOUR COLLEGE?
            </p>
            <p className="w-[90%] text-2xl md:text-3xl lg:text-[25px] xl:text-[40px] xl:leading-[48px] font-semibold text-[#5E17EB] mt-2">
              {" Scale AI Driven Academic Support to"}{" "}
              <span className="font-extrabold">{"1000’s"}</span> of students
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="w-full overflow-hidden"
          >
            <p className="xl:w-[80%] text-sm/relaxed md:text-base/relaxed lg:text-sm/relaxed xl:text-base/relaxed  text-[#1F2534]">
              {
                "We're driving an exponential leap in academic support, revolutionizing how students access AI. Imagine AI-driven tutors at your fingertips, personalized course guides, and 24/7 collaboration rooms — all seamlessly integrated into your college's curriculum."
              }
            </p>

            <button className="flex items-center gap-3 md:gap-5 text-xs md:text-base font-medium text-white bg-[#0E1320] rounded-xl md:rounded-2xl py-3.5 px-5 mt-10 hover:bg-white hover:border-white hover:text-[#0E1320] border border-[#0E1320] transition-all duration-500">
              Explore Pluto AI Suite <MdArrowForward className="text-lg" />
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <Image
            src={"/assets/png/shine.png"}
            alt=""
            width={192}
            height={241}
            className="w-[30px] md:w-[48px] mt-10 lg:mt-16 pb-2"
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="overflow-hidden bg-[#BD8FF0] rounded-xl lg:rounded-[40px] pt-5 lg:pt-14 "
        >

          <ImageSlider/>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-5 xl:gap-28 mt-14">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="border-t border-[#6B7589] pt-8 xl:w-[85%] overflow-hidden"
          >
            <p className="text-xl xl:text-2xl font-semibold text-[#111827]">
              24/7 AI Teaching Assistant
            </p>

            <p className="text-sm/relaxed xl:text-base/relaxed text-[#1F2534] mt-3 lg:mt-5">
              Time conflicts with office hours, language barriers out the door -
              students get help anytime from AI Tutors for every course
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="border-t border-[#6B7589] pt-8 xl:w-[85%] overflow-hidden"
          >
            <p className="text-xl xl:text-2xl font-semibold text-[#111827]">
              Personalized to Your Students
            </p>

            <p className="text-sm/relaxed xl:text-base/relaxed text-[#1F2534] mt-3 lg:mt-5">
              {
                "Our AI knows your course curriculum, students’ needs, and professors’ academic goals - built to support all"
              }
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1100"
            className="border-t border-[#6B7589] pt-8 xl:w-[85%] overflow-hidden"
          >
            <p className="text-xl xl:text-2xl font-semibold text-[#111827]">
              Guardrails Built-in
            </p>

            <p className="text-sm/relaxed xl:text-base/relaxed text-[#1F2534] mt-3 lg:mt-5">
              Get AI that is fully under your control, FERPA compliant, and
              guides students without giving answers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
