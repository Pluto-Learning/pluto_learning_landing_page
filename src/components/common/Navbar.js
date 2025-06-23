import Image from "next/image";
import React from "react";
import Drawer from "./Drawer";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full z-10 bg-transparent py-3">
      <div className="grid grid-cols-2 lg:grid-cols-12 w-[90%] 2xl:w-[60%] mx-auto items-center justify-between">
        <div className="lg:col-span-2">
          <Link href={"/"}>
            <Image
              src={"/assets/png/logo.png"}
              alt="Pluto Logo"
              width={93}
              height={46}
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:col-span-8 justify-center gap-10">
          <Link href={"/"}>
            <p className="text-sm font-medium text-white/60 cursor-pointer">
              Home
            </p>
          </Link>

          <Link href={"/about"}>
            <p className="text-sm font-medium text-white/60 cursor-pointer">
              Team
            </p>
          </Link>
          <Link href={"/coming-soon"}>
            <p className="text-sm font-medium text-white/60 cursor-pointer">
              Features
            </p>
          </Link>

          <Link href={"/contact-us"}>
            <p className="text-sm font-medium text-white/60 cursor-pointer">
              Contact Us
            </p>
          </Link>
          <Link href={"/article"}>
            <p className="text-sm font-medium text-white/60 cursor-pointer">
              News
            </p>
          </Link>
        </div>

        <div className="hidden lg:flex lg:col-span-2 justify-end items-center gap-5">
          <a href='https://pluto-learning-demo.vercel.app/signin' target="_blank">
            {/* <button className="text-sm text-white/60 font-medium">Sign in</button> */}
            <button className="text-sm text-white font-medium bg-[#6C47FF] px-5 py-2.5 rounded-lg">Sign in</button>
          </a>
          <Link href={"/contact-us"}>
            <button className="text-sm text-white/60 font-medium bg-white/5 px-5 py-2.5 rounded-lg">
              Get a Demo
            </button>
          </Link>
        </div>

        <div className="ml-auto lg:hidden">
          <Drawer />
        </div>
      </div>
    </div>
  );
}
