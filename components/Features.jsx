"use client";
import { animateWithGsapTrigger } from "@/utils/animations";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";

const Features = () => {
  const exploreVideo = "/assets/videos/explore.mp4";
  const videoRef = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const runAnimation = () => {
      animateWithGsapTrigger("#features-title", { y: 0, opacity: 1 });
    };

    const delay = setTimeout(() => {
      runAnimation();
    }, 3000);

    return () => {
      clearTimeout(delay);
    };
  }, []);

  return (
    <section className="bg-zinc w-screen h-full py-20 sm:px-10 px-5 overflow-hidden">
      <div className="">
        <div className="mb-12">
          <h1 id="features-title" className="section-heading tracking-tighter">
            Explore the full story
          </h1>
        </div>

        <div className="flex flex-col justify-center items-start overflow-hidden w-[960px] ms-auto me-auto">
          <div className="mt-32 mb-24 flex justify-start sm:px-10">
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter w-full">
              iPhone. <br /> Forged in titanium.
            </h2>
          </div>

          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video
                playsInline
                id="exploreVideo"
                className="w-full h-full object-cover object-center"
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
