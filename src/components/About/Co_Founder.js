import Image from "next/image";
import React from "react";

export default function Co_Founder() {
  return (
    <div
      className="bg-center bg-cover py-10 overflow-hidden"
      style={{ backgroundImage: "url('/assets/png/co-founder-bg.png')" }}
    >
      <div className="w-[90%] xl:w-[65%] 2xl:w-[60%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-36">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="overflow-hidden"
        >
          <Image
            src={"/assets/jpg/co-founder-3.jpg"}
            alt="Co-Founder"
            width={500}
            height={500}
            className="w-full h-auto rounded-2xl"
          />

          <div className="pt-10">
            <p className="text-3xl font-bold text-[#4361EE]">Sami Ali</p>

            <p className="text-xl text-[#1C1C1C] font-medium mt-4">
              Co-founder
            </p>

            <p className="text-xl text-[#8a8a8b] font-medium">
              sami.ali@plutolearning.com
            </p>
            <div className="flex gap-5 mt-8">
              {/* Mail Icon to open email client */}
              <a
                href="mailto:sami.ali@plutolearning.com"
                className="flex items-center justify-center bg-[#4361EE] rounded-xl md:rounded-2xl p-3 md:p-4 cursor-pointer"
              >
                <Image
                  src={"/assets/svg/mail-icon.svg"}
                  alt="mail-icon"
                  width={33}
                  height={32}
                  className="w-[20px] md:w-[33px]"
                />
              </a>
              {/* LinkedIn Icon to open LinkedIn profile */}
              <a
                href="https://www.linkedin.com/in/samialihameed/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#4361EE] rounded-xl md:rounded-2xl p-3 md:p-4 cursor-pointer"
              >
                <Image
                  src={"/assets/svg/linkedin-icon.svg"}
                  alt="linkedin-icon"
                  width={33}
                  height={32}
                  className="w-[20px] md:w-[33px]"
                />
              </a>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="overflow-hidden"
        >
          <Image
            src={"/assets/jpg/co-founder-2.jpg"}
            alt="Co-Founder"
            width={500}
            height={500}
            className="w-full h-auto rounded-2xl"
          />

          <div className="pt-10">
            <p className="text-3xl font-bold text-[#4361EE]">Ethan Debnath</p>

            <p className="text-xl text-[#1C1C1C] font-medium mt-4">
              Co-founder
            </p>

            <p className="text-xl text-[#8a8a8b] font-medium">
              ethan.debnath@plutolearning.com
            </p>

            <div className="flex gap-5 mt-8">
              {/* Mail Icon to open email client */}
              <a
                href="mailto:ethan.debnath@plutolearning.com"
                className="flex items-center justify-center bg-[#4361EE] rounded-xl md:rounded-2xl p-3 md:p-4 cursor-pointer"
              >
                <Image
                  src={"/assets/svg/mail-icon.svg"}
                  alt="mail-icon"
                  width={33}
                  height={32}
                  className="w-[20px] md:w-[33px]"
                />
              </a>
              {/* LinkedIn Icon to open LinkedIn profile */}
              <a
                href="https://www.linkedin.com/in/e-debnath/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#4361EE] rounded-xl md:rounded-2xl p-3 md:p-4 cursor-pointer"
              >
                <Image
                  src={"/assets/svg/linkedin-icon.svg"}
                  alt="linkedin-icon"
                  width={33}
                  height={32}
                  className="w-[20px] md:w-[33px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
