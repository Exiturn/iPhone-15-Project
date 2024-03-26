"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import { searchImg, bagImg } from "@/utils";
import { navItems } from "@/constants/constants";
import { useState } from 'react';

const MegaMenu = () => {
  const Equals = dynamic(() => import("@/components/svgComponents/EqualsSvg"));
  const Logo = dynamic(() => import("@/components/svgComponents/Logo"));
  const NavItem = dynamic(() => import("@/components/navItem"));
  const dynamicGap = { gap: "calc(6px + 2.25vw)" };

  const bgColor = {
    backgroundColor: "#1d1d1f",
  };

  return (
    <header
      style={{ ...bgColor }}
      className="navContainer max-h-[44px] h-[44px] w-full  text-[11px]"
    >
      <nav
        style={{ ...dynamicGap }}
        className="flex justify-between items-center h-full md:max-w-[1180px] md:px-6 m-auto"
      >
        <div className=" flex justify-center items-center px-[14px] h-[44px]">
          <Logo />
        </div>

        {navItems.map((navItem) => (
          <NavItem navItem={navItem} />
        ))}

        <Image
          className="cursor-pointer z-20 hidden md:block"
          src={searchImg.src}
          width={14}
          height={18}
          alt="search"
        />
        <Image
          className="cursor-pointer z-20 hidden md:block"
          src={bagImg.src}
          width={14}
          height={18}
          alt="bag"
        />
        <div className="flex justify-start items-center md:hidden">
          <div className="py-0 px-[14px] h-[44px] flex items-center">
            <Image
              className="cursor-pointer z-20"
              src={searchImg.src}
              width={14}
              height={18}
              alt="search"
            />
          </div>
          <div className="py-0 px-[14px] h-[44px] flex items-center">
            <Image
              className="cursor-pointer z-20"
              src={bagImg.src}
              width={14}
              height={18}
              alt="bag"
            />
          </div>
          <div className="px-[10px] z-20">
            <Equals />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MegaMenu;
