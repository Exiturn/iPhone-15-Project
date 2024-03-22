"use client"
import React, { useState } from "react";

const SvgComponent = (props) => {
  const [isCross, setIsCross] = useState(false);

  const handleClick = () => {
    setIsCross(!isCross);
  };
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1em"
      {...props}
      className="lg:hidden fill-gray-200 transition duration-300 ease-in-out hover:fill-white cursor-pointer"
      viewBox="0 0 16 10"
      onClick={handleClick}
    >
      <g clipPath="url(#a)">
        <path d="M1.706 2.7h11.856c.156 0 .3-.042.43-.123a.986.986 0 0 0 .317-.317.812.812 0 0 0 .122-.44.82.82 0 0 0-.122-.434.926.926 0 0 0-.317-.318.82.82 0 0 0-.43-.117H1.706a.82.82 0 0 0-.43.117.926.926 0 0 0-.317.318.82.82 0 0 0-.122.434c0 .163.041.31.122.44.082.13.188.236.318.317.13.082.273.122.43.122Zm0 6.171h11.856c.156 0 .3-.039.43-.117a.926.926 0 0 0 .317-.318.82.82 0 0 0 .122-.434c0-.163-.04-.31-.122-.44a.986.986 0 0 0-.317-.317.795.795 0 0 0-.43-.122H1.706c-.156 0-.3.04-.43.122a.985.985 0 0 0-.317.317.812.812 0 0 0-.122.44c0 .156.041.301.122.434.082.134.188.24.318.318a.82.82 0 0 0 .43.117Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path d="M.837.932h13.594V8.87H.837z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SvgComponent;
