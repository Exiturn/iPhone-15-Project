"use client"
import gsap from "gsap";
import { useEffect, useState } from "react";

const NavItem = ({ menuItem }) => {

  const label = menuItem ? menuItem.label : null;
  const children = menuItem.children ? menuItem.children : null;

  const [hoveredItem, setHoveredItem] = useState()

  useEffect(() => {
    console.log(children);
  }, []);

  const navMouseEnter = () => {
    const timeline = gsap.timeline();

    // timeline.fromTo(
    //   ".navDropdown",
    //   {
    //     height: "600px",
    //     opacity: "0",
    //     paddingTop: "0px",
    //     paddingBottom: "0px",
    //   },
    //   {
    //     height: "50vh",
    //     opacity: "1",
    //     paddingTop: "3rem",
    //     paddingBottom: "3rem",
    //     ease: "easeInOut",
    //     duration: 0.4,
    //   }
    // );

    // timeline.fromTo(
    //   ".navContent",
    //   {
    //     height: "0px",
    //   },
    //   {
    //     height: "100%",
    //   }
    // );
  };

  const navMouseLeave = () => {
    const timeline = gsap.timeline();

    // timeline.fromTo(
    //   ".navDropdown",
    //   {
    //     height: "50vh",
    //     opacity: "1",
    //     paddingTop: "3rem",
    //     paddingBottom: "3rem",
    //   },
    //   {
    //     height: "600px",
    //     opacity: "0",
    //     paddingTop: "0px",
    //     paddingBottom: "0px",
    //     ease: "easeInOut",
    //     duration: 0.2,
    //   }
    // );

    // timeline.fromTo(
    //   ".navContent",
    //   {
    //     height: "100%",
    //   },
    //   {
    //     height: "0px",
    //   }
    // );
  };

  return (
    <span
      className="text-gray-200 navItem static hidden md:flex justify-center items-center text-nowrap py-0 px-[8px] h-[44px] cursor-pointer hover:text-white transition-all duration-600 ease-in-out"
      onMouseEnter={navMouseEnter}
      onMouseLeave={navMouseLeave}
    >
      <span>{label}</span>
      <div className="w-screen invisible h-[44px] absolute right-0 left-0">
        <div className="w-auto mt-[44px]">
          <div className="navDropdown overflow-hidden visible cursor-default w-full px-6 justify-start items-start opacity-100 hover:delay-300 absolute left-0 bg-[#1d1d1f] backdrop-blur-md">
            <div className="navContent flex items-center overflow-hidden my-auto mx-auto px-10 md:max-w-[1180px] h-[50vh]">
              {children.map((child) => (
                <div key={child.heading} className="navContent overflow-hidden my-auto py-10 px-10 w-auto md:max-w-[1180px] h-full">
                  <h3>{child.heading}HELLO</h3>
                </div>
              ))}
              {/* <ul>List 1</ul>
              <ul>List 2</ul>
              <ul>List 3</ul> */}
            </div>
          </div>
        </div>
      </div>
    </span>
  );
};

export default NavItem;
