import Image from "next/image";
import dynamic from "next/dynamic";
import { appleImg, searchImg, bagImg, appleGreyImg } from "@/utils";
import { navItems } from "@/constants/constants";

const Navbar = () => {
  const Equals = dynamic(() => import("@/components/svgComponents/EqualsSvg"));
  const Logo = dynamic(() => import("@/components/svgComponents/Logo"));
  const dynamicGap = { gap: "calc(6px + 2.25vw)" };

  return (
    <header className="nav z-20 w-full px-6 text-[11px] md:hover:bg-[#1d1d1f] transition-all duration-300 ease-in-out relative">
      <nav
        style={{ ...dynamicGap }}
        className="flex justify-between items-center"
      >
        <div className="z-20">
          <Logo />
        </div>

        <div
          style={{ ...dynamicGap }}
          className="hidden md:flex justify-evenly items-center"
        >
          {navItems.map((navItem) => (
            <span
              className="navItem py-4 text-nowrap cursor-pointer text-gray-200 hover:text-white transition-all duration-600 ease-in-out z-[20]"
              key={navItem}
            >
              {navItem}
            </span>
          ))}
        </div>

        <div
          style={{ ...dynamicGap }}
          className="flex items-center justify-center z-20"
        >
          <Image
            className="cursor-pointer"
            src={searchImg.src}
            width={14}
            height={18}
            alt="search"
          />
          <Image
            className="cursor-pointer"
            src={bagImg.src}
            width={14}
            height={18}
            alt="bag"
          />
          <div>
            <Equals />
          </div>
        </div>
      </nav>
      <div className="navDropdown px-6 py-10 flex justify-start items-start opacity-0 transition-all duration-[400ms] ease-in-out translate-y-[-120%] absolute left-0 w-[100vw] h-[50vh] bg-[#1d1d1f] z-[0] backdrop-blur-md">
        <ul>List 1</ul>
        <ul>List 2</ul>
        <ul>List 3</ul>
      </div>
    </header>
  );
};

export default Navbar;
