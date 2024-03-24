import Image from "next/image";
import dynamic from "next/dynamic";
import { appleImg, searchImg, bagImg, appleGreyImg } from "@/utils";
import { navItems } from "@/constants/constants";

const MegaMenu = () => {
  const Equals = dynamic(() => import("@/components/svgComponents/EqualsSvg"));
  const Logo = dynamic(() => import("@/components/svgComponents/Logo"));
  const dynamicGap = { gap: "calc(6px + 2.25vw)" };

  return (
    <header className="nav md:max-w-[1180px] max-h-[44px] m-auto h-[44px] z-20 w-full md:px-6 text-[11px] transition-all">
      <nav
        style={{ ...dynamicGap }}
        className="flex justify-between items-center h-full"
      >
        <div className="z-20 flex justify-center items-center px-[14px] h-[44px]">
          <Logo />
        </div>

        {navItems.map((navItem) => (
          <span
            className="navItem hidden md:flex justify-center items-center text-nowrap py-0 px-[8px] h-[44px] cursor-pointer text-gray-200 hover:text-white transition-all duration-600 ease-in-out z-[20]"
            key={navItem}
          >
            <span className="z-20">{navItem}</span>
            <div className="w-screen hidden h-[44px] absolute left-0 z-10 mt-auto">
              <div className="hidden w-full px-6 py-12 justify-start items-start opacity-100 transition-all translate-y-[-120%] duration-[400ms] ease-in-out absolute top-0 left-0 h-[50vh] bg-[#1d1d1f] z-[0] backdrop-blur-md">
                <div className="my-auto pt-[40px] md:max-w-[1180px]">
                  <ul>List 1</ul>
                  <ul>List 2</ul>
                  <ul>List 3</ul>
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

      <div className="navDropdown px-6 py-10 flex justify-start items-start opacity-0 transition-all duration-[400ms] ease-in-out translate-y-[-120%] absolute top-0 left-0 w-full h-[50vh] bg-[#1d1d1f] z-[0] backdrop-blur-md">
        <div className="my-auto w-full">
          <ul>List 1</ul>
          <ul>List 2</ul>
          <ul>List 3</ul>
        </div>
      </div>
    </header>
  );
};

export default MegaMenu;
