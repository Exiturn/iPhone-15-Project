"use client";
import gsap from "gsap";
import { useEffect, useState } from "react";

const NavItem = ({ menuItem }) => {
  const label = menuItem ? menuItem.label : null;
  const children = menuItem.children ? menuItem.children : null;

  const [hoveredItem, setHoveredItem] = useState();

  useEffect(() => {
    console.log(hoveredItem);

    if (hoveredItem !== null) {
      const timeline = gsap.timeline();

      timeline.fromTo(
        `#${hoveredItem}`,
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
    } else {
      const timeline = gsap.timeline();

      timeline.fromTo(
        `#${hoveredItem}`,
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
          duration: 0.2,
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
    }
  }, [hoveredItem]);

  const navMouseEnter = (label, event) => {
    event.stopPropagation();
    setHoveredItem(label.replace());
    // const timeline = gsap.timeline();

    // timeline.fromTo(
    //   "#Store",
    //   {
    //     height: "0px",
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

  const navMouseLeave = (label, event) => {
    event.stopPropagation();
    setHoveredItem(null);
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
        duration: 0.2,
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
    <span
      className="text-gray-200 navItem static hidden md:flex justify-center items-center text-nowrap py-0 px-[8px] h-[44px] cursor-pointer hover:text-white transition-all duration-600 ease-in-out"
      onMouseEnter={(event) => navMouseEnter(label.replace(/&/g, 'and').replace(/\s/g, ''), event)}
      onMouseLeave={(event) => navMouseLeave(label.replace(/&/g, 'and').replace(/\s/g, ''), event)}
    >
      <span>{label}</span>
      <div className="w-screen invisible h-[44px] absolute right-0 left-0">
        <div className="w-auto mt-[44px]">
          <div
            id={label.replace(/&/g, 'and').replace(/\s/g, '')}
            onMouseEnter={(e) => e.stopPropagation()}
            className="navDropdown h-0 overflow-hidden visible cursor-default w-full mx-auto px-6 justify-start items-start opacity-100 hover:delay-300 absolute left-0 bg-[#1d1d1f] backdrop-blur-md"
          >
            <div
              id={`${label.replace(/&/g, 'and').replace(/\s/g, '')}Content`}
              className="navContent flex gap-x-10 items-start overflow-hidden md:max-w-[1180px]"
            >
              {children.map((child) => (
                <div
                  key={child.heading}
                  className="overflow-hidden mx-auto px-10 md:max-w-[1180px]"
                >
                  <h3 className="text-[#86868b] mb-4">{child.heading}</h3>
                  {child.subMenu.map((item, index) => (
                    <div key={index}>
                      <span className="text-[24px] text-white font-semibold">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </span>
  );
};

export default NavItem;
