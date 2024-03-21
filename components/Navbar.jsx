import Image from "next/image";
import { appleImg } from "@/utils";

const Navbar = () => {
  const navItems = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "AirPods",
    "TV & Home",
    "Entertainment",
    "Accessories",
    "Support",
  ];
  return (
    <header className="w-full">
      <nav className="flex">
        <Image src={appleImg.src} width={14} height={18} alt="Apple" />

        <ul className="flex justify-center items-center">
            {navItems.map((navItem) => (
                <li key={navItem}>
                    {navItem}
                </li>
            ))}
        </ul>


      </nav>
    </header>
  );
};

export default Navbar;
