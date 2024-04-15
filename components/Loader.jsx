import React from "react";
import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="w-[10vw] h-[10vw] rounded-full">
          <h1 className="section-heading tracking-tighter">Click and turn to explore iPhone</h1>
        </div>
      </div>
    </Html>
  );
};

export default Loader;
