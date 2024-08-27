import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-[1000] md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto md:px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/hack-logo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Hack Vortex
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 text-[0.65rem] md:text-xs lg:text-sm">
            <a href="#why-us" className="cursor-pointer">
              Why Us
            </a>
            <a href="#judges" className="cursor-pointer">
              Judges
            </a>
            <a href="#sponsors" className="cursor-pointer">
              Sponsors
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <Image
            src="/geekroomjimslogo.png"
            width={50}
            height={50}
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
