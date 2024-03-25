"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import { appleImg, searchImg, bagImg, appleGreyImg } from "@/utils";
import { navItems } from "@/constants/constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MegaMenu = () => {
  const Equals = dynamic(() => import("@/components/svgComponents/EqualsSvg"));
  const Logo = dynamic(() => import("@/components/svgComponents/Logo"));
  const dynamicGap = { gap: "calc(6px + 2.25vw)" };

  const bgColor = {
    backgroundColor: "#1d1d1f",
  }

  const navMouseEnter = () => {
    const timeline = gsap.timeline();

    timeline.fromTo(
      ".navDropdown",
      {
        height: "0px",
        opacity: "0",
        paddingTop: "0px",
        paddingBottom: "0px",
      },
      {
        height: "50vh",
        opacity: "1",
        paddingTop: "3rem",
        paddingBottom: "3rem",
        ease: "easeInOut",
        duration: 0.4,
      }
    );

    timeline.fromTo(
      ".navContent",
      {
        height: "0px",
      },
      {
        height: "100%",
      }
    );
  };

  const navMouseLeave = () => {
    const timeline = gsap.timeline();

    timeline.fromTo(
      ".navDropdown",
      {
        height: "50vh",
        opacity: "1",
        paddingTop: "3rem",
        paddingBottom: "3rem",
      },
      {
        height: "0px",
        opacity: "0",
        paddingTop: "0px",
        paddingBottom: "0px",
        ease: "easeInOut",
        duration: 0.4,
      }
    );

    timeline.fromTo(
      ".navContent",
      {
        height: "100%",
      },
      {
        height: "0px",
      }
    );
  };

  return (
    <header style={{ backgroundColor: `${bgColor}`}} className="navContainer max-h-[44px] h-[44px] w-full  text-[11px]">
      <nav
        style={{ ...dynamicGap }}
        className="flex justify-between items-center h-full md:max-w-[1180px] md:px-6 m-auto"
      >
        <div className=" flex justify-center items-center px-[14px] h-[44px]">
          <Logo />
        </div>

        {navItems.map((navItem) => (
          <span
            className="navItem static hidden md:flex justify-center items-center text-nowrap py-0 px-[8px] h-[44px] cursor-pointer text-gray-200 hover:text-white transition-all duration-600 ease-in-out"
            key={navItem}
            onMouseEnter={navMouseEnter}
            onMouseLeave={navMouseLeave}
          >
            <span className="">{navItem}</span>
            <div className="w-screen invisible h-[44px] absolute right-0 left-0">
              <div className="w-auto mt-[44px]">
                <div className="navDropdown overflow-hidden visible cursor-default w-full px-6 justify-start items-start opacity-100 hover:delay-300 absolute left-0 bg-[#1d1d1f] backdrop-blur-md">
                  <div className="navContent overflow-hidden my-auto mx-auto px-10 md:max-w-[1180px] h-0">
                    <ul>List 1</ul>
                    <ul>List 2</ul>
                    <ul>List 3</ul>
                  </div>
                </div>
              </div>
            </div>
          </span>
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
