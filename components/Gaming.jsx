import { chipImg, frameImg } from "@/utils";
import React from "react";

const Gaming = () => {
  const frameVideo = "/assets/videos/frame.mp4";
  return (
    <section className="flex flex-col justify-center items-center overflow-hidden lg:w-[1120px] w-screen h-full py-24 sm:px-10 px-5 mx-auto">
      <div>
        <img src={chipImg.src} alt="graphics chip" width={180} height={180}/>
      </div>

      <h1>
        A17 Pro chip. <br /> A monster win for gaming.
      </h1>

      <p>It’s here. The biggest redesign in the history of Apple GPUs.</p>

      <div id="frame-container">
        <div id="sub-frame-container">
          <div>
            <img src={frameImg.src} alt="iPhone 15 frame" />
          </div>
          <div>
            <video>
              <source src={frameVideo} type="video/mp4"/>
            </video>
          </div>
        </div>
        <p>Honkai: Star Rail</p>
      </div>
    </section>
  );
};

export default Gaming;
