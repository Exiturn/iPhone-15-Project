"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { iguanaImg } from "@/utils";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Camera = () => {
  const scaleRef = useRef();
  const [scrollY, setScrollY] = useState(0);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const element = scaleRef.current;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    const runAnimation = () => {
      gsap.to(element, {
        scale: gsap.utils.clamp(1, 2, 1 - window.innerHeight / 2000), // Clamp scale between 1x and 2x
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom bottom",
          scrub: true,
        },
        // onUpdate: (self) => {
        //   const scale = element.scale;
        //   const translateY = (1 - scale) * 100; // Calculate vertical translation based on scale
        //   console.log(element.scale)
        //   gsap.to(element, { y: `-${translateY}%` }); // Apply vertical translation
        // },
      });
    };

    const delay = setTimeout(() => {
      runAnimation();
    }, 3000);

    return () => {
      clearTimeout(delay);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="w-screen h-full py-10 md:py-24 px-5 sm:px-10 flex flex-col justify-start items-start">
      <div className="lg:w-[1120px] mx-auto">
        <div className="w-[960px] ms-auto me-auto">
          <h1 className="text-white w-[75%] lg:w-full mx-auto lg:mx-0 lg:text-7xl md:text-5xl text-[2.5rem] md:mb-0 mb-5 font-semibold tracking-tighter leading-none relative z-[1]">
            A camera that captures your <br /> wildest imagination.
          </h1>

          <h4 className="text-gray w-[75%] lg:w-full text-xl md:text-2xl font-semibold mt-14 relative z-[1] mx-auto lg:mx-0">
            From dramatic framing flexibility to next-generation portraits, see
            what you can do with our most powerful iPhone camera system.
          </h4>

          <div>
            <div className="md:feature-video-container hidden">
              <div
                ref={scaleRef}
                className="relative overflow-hidden feature-iguana g_iguana"
              >
                <img
                  className="flex justify-center mt-[17px] ml-[66px]"
                  src={iguanaImg.src}
                  alt="An iguana captured on the iPhone 15's 48MP camera"
                />
              </div>
            </div>
            <div className="mt-[20vh] relative scale-[2.5] md:hidden">
              <img
                className="flex justify-center mt-[17px] ml-[66px]"
                src={iguanaImg.src}
                alt="An iguana captured on the iPhone 15's 48MP camera"
              />
            </div>
            <p className="text-gray font-semibold relative w-[75%] lg:w-full mx-auto z-[1] mt-[15vh] md:mt-0">
              A green iguana, captured by the 48MP Main camera
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 w-full">
        <div className="w-[960px] mx-auto">
          <p className="text-gray font-semibold relative w-[40%] z-[1] ml-[16.7%] text-xl">
            With iPhone 15 Pro, you have multiple focal lengths to work with.
            It’s like having{" "}
            <span className="text-white">seven pro lenses in your pocket</span>,
            everywhere you go.
          </p>
        </div>

        <div id="camera-gallery" className="w-full flex flex-col h-[30vh] relative pt-[60px]">
          <div id="scroll-container" className="snap-x snap-mandatory w-full h-full">

          </div>
          <div className="w-[960px] mx-auto text-center">
            Helo man
          </div>
        </div>
      </div>
    </section>
  );
};

export default Camera;
