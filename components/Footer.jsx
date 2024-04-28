import React from "react";
import { footerData } from "@/constants/constants";

const Footer = () => {
  return (
    <section className="w-screen bg-zinc py-[5rem]">
      <div className="me-auto ms-auto px-5 int:px-10 md:px-20 md:w-[1024px] lg:w-[1440px]">
        <h2 className="mb-10 text-4xl font-semibold text-gray tracking-tighter">
          iPhone
        </h2>
        <div className="flex gap-10 int:gap-x-20 flex-wrap">
          {footerData.map((data, index) => (
            <ul className={`flex flex-col gap-y-2 ${index === 0 && 'mb-10'}`} key={index}>
              <h4 className="text-gray text-[12px]">{data.header}</h4>
              {data.subMenu.map((subItem, index) => (
                <li
                  key={index}
                  className={`${
                    index < 6 && data.header === "Explore iPhone"
                      ? "text-2xl font-semibold tracking-tight"
                      : "text-[12px] font-medium"
                  } cursor-pointer`}
                >
                  {subItem}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
