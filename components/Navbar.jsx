import Image from "next/image";
import { appleImg, searchImg, bagImg, appleGreyImg } from "@/utils";
import { navItems } from "@/constants/constants";

const Navbar = () => {
  return (
    <header className="w-full px-8 py-4 text-[11.5px]">
      <nav className="flex justify-between items-center">
        <Image src={appleGreyImg.src} width={14} height={18} alt="Apple" />

        {navItems.map((navItem) => (
          <div className="cursor-pointer text-gray-200 hover:text-white transition-all duration-600 ease-in-out" key={navItem}>
            {navItem}
          </div>
        ))}

        <Image className="cursor-pointer" src={searchImg.src} width={14} height={18} alt="search" />
        <Image className="cursor-pointer" src={bagImg.src} width={14} height={18} alt="bag" />
      </nav>
    </header>
  );
};

export default Navbar;
