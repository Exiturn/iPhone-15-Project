"use client";
import { chipImg, frameImg } from "@/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Gaming = () => {
  const frameVideo = "/assets/videos/frame.mp4";

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const runAnimation = () => {
      gsap.from("#chip", {
        opacity: 0,
        scale: 2,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#chip",
          start: "top 50%",
        },
      });
    };

    const delay = setTimeout(() => {
      runAnimation();
    }, 3000);

    return () => {
      clearTimeout(delay);
    };
  }, []);

  return (
    <section className="flex flex-col justify-center items-center overflow-hidden lg:w-[1120px] w-screen h-full py-10 md:py-24 sm:px-10 mx-auto">
      <div
        id="chip"
        className="my-5 md:my-20 opacity-1 w-full flex-center scale-50 md:scale-100"
      >
        <img src={chipImg.src} alt="graphics chip" width={180} height={180} />
      </div>

      <h1 className="text-center text-white lg:text-7xl md:text-5xl text-[2.5rem] md:mb-0 mb-5 px-5 font-semibold tracking-tighter leading-none">
        A17 Pro chip. <br /> A monster win for gaming.
      </h1>

      <p className="text-center text-gray w-[80%] md:w-full text-[20px] md:text-[24px] font-semibold tracking-tighter leading-tight mt-8">
        It’s here. The biggest redesign in the history of Apple GPUs.
      </p>

      <div id="frame-container" className="my-8 md:my-20">
        <div id="sub-frame-container" className="relative flex-center">
          <div>
            <img
              className="bg-transparent relative z-10"
              src={frameImg.src}
              alt="iPhone 15 frame"
            />
          </div>
          <div className="absolute h-[90%] w-[95%] overflow-hidden rounded-md md:rounded-[56px]">
            <video autoPlay className="pointer-events-none">
              <source src={frameVideo} type="video/mp4" />
            </video>
          </div>
        </div>
        <p className="text-center w-full text-gray font-semibold">
          Honkai: Star Rail
        </p>
      </div>

      <div className="w-[692px] flex justify-between items-start mx-auto">
        <div className="flex-center flex-col text-gray font-semibold w-1/2">
          <p>
            A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
            <span className="text-white">
              best graphics performance by far.
            </span>
          </p>
          <br />
          <p>
            Mobile{" "}
            <span className="text-white">
              games will look and feel so immersive
            </span>
            , with incredibly detailed environments and more realistic
            characters. And with industry-leading speed and efficiency, A17 Pro
            takes fast and runs with it.
          </p>
        </div>

        <div className="flex justify-start items-start flex-col font-semibold w-auto">
          <h2 className="text-gray">New</h2>
          <h1 className="text-white">Pro-class GPU</h1>
          <h2 className="text-gray">with 6 cores</h2>
        </div>
      </div>
    </section>
  );
};

export default Gaming;
