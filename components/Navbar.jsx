import Image from "next/image";
import dynamic from "next/dynamic";
import { appleImg, searchImg, bagImg, appleGreyImg } from "@/utils";
import { navItems } from "@/constants/constants";

const Navbar = () => {
  const Equals = dynamic(() => import("@/components/svgComponents/EqualsSvg"));
  const Logo = dynamic(() => import("@/components/svgComponents/Logo"));
  const dynamicGap = { gap: "calc(6px + 2.25vw)" };
  
  return (
    <header className="w-full px-6 py-4 text-[11px]">
      <nav style={{...dynamicGap}} className="flex justify-between lg:justify-center items-center">
        <Logo />

        <div style={{...dynamicGap}} className="hidden md:flex justify-evenly items-center">
          {navItems.map((navItem) => (
            <div
              className="text-nowrap cursor-pointer text-gray-200 hover:text-white transition-all duration-600 ease-in-out"
              key={navItem}
            >
              {navItem}
            </div>
          ))}
        </div>

        <div style={{...dynamicGap}} className="flex items-center justify-evenly">
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
    </header>
  );
};

export default Navbar;
