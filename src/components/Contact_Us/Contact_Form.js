import Image from "next/image";
import React from "react";

export default function Contact_Form() {
  return (
    <div className="py-14 lg:py-28 overflow-hidden">
      <div className="w-[90%] xl:w-[75%] 2xl:w-[60%] mx-auto flex flex-col md:flex-row items-center gap-10 xl:gap-14 bg-gradient-to-r from-[#5E17EB] via-[#CF14EC] to-[#F72585] rounded-xl p-5">
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="w-full overflow-hidden xl:pl-10"
        >
          <p className="text-2xl text-white font-semibold">Book a Demo</p>
          <p className="text-base text-white pt-2">
            {"We’ll work with you on your needs, no strings attached"}
          </p>

          <form className="mt-10">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="First Name"
                  className="text-sm text-white/60 placeholder:text-white/60 bg-white/5 border border-white/20 px-5 py-3.5 rounded-lg w-full focus:outline-none"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="text-sm text-white/60 placeholder:text-white/60 bg-white/5 border border-white/20 px-5 py-3.5 rounded-lg w-full focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-3">
              <input
                type="email"
                placeholder="Email"
                className="text-sm text-white/60 placeholder:text-white/60 bg-white/5 border border-white/20 px-5 py-3.5 rounded-lg w-full focus:outline-none"
              />
            </div>

            <div className="mt-3">
              <input
                type="text"
                placeholder="College"
                className="text-sm text-white/60 placeholder:text-white/60 bg-white/5 border border-white/20 px-5 py-3.5 rounded-lg w-full focus:outline-none"
              />
            </div>

            <div className="mt-3">
              <textarea
                placeholder="Message"
                className="text-sm text-white/60 placeholder:text-white/60 bg-white/5 border border-white/20 px-5 py-3.5 rounded-lg w-full h-[120px] focus:outline-none resize-none"
              />
            </div>

            <button className="w-full text-sm font-medium text-white bg-gradient-to-r from-[#4361EE] to-[#5E17EB] mt-3 py-3.5 rounded-lg">
              Send it to Pluto
            </button>
          </form>
        </div>
        <div className="w-full hidden lg:block overflow-hidden">
          <Image
            src={"/assets/jpg/form.jpg"}
            alt="form"
            width={500}
            height={500}
            className="w-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
