import Link from "next/link";
import React, { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <div className="block lg:hidden">
      <button onClick={toggleDrawer} className="flex flex-col items-center">
        <IoMdMenu className={`text-2xl text-white`} />
      </button>

      <div
        className={`fixed right-0 top-0 h-full z-10 bg-black shadow-lg transform transition-transform duration-500 p-5 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-[75%] md:w-[40%]`}
      >
        <IoMdClose className={`text-2xl text-white`} onClick={toggleDrawer} />
        <div className="mt-10">
          <ul className="flex flex-col gap-7">
          <Link href={"/"}>
              <li className="text-sm font-medium text-white/60">Home</li>
            </Link>
            <Link href={"/about"}>
              <li className="text-sm font-medium text-white/60">Team</li>
            </Link>
            <Link href={"/coming-soon"}>
              <li className="text-sm font-medium text-white/60">Features</li>
            </Link>
            <Link href={"/contact-us"}>
              <li className="text-sm font-medium text-white/60">Contact Us</li>
            </Link>
            <Link href={"/article"}>
              <li className="text-sm font-medium text-white/60">News</li>
            </Link>
          </ul>

          <div className="flex flex-col gap-5 mt-10">
            <button className="text-sm text-white/60 font-medium border border-white/60 py-2.5 px-5 rounded-lg">
              Sign in
            </button>
            <Link href={"/contact-us"}>
              <button className="text-sm text-white/60 font-medium bg-white/5 px-5 py-2.5 rounded-lg">
                Get a Demo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
