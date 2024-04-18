"use client";
import { animateWithGsapTrigger } from "@/utils/animations";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";
import { explore1Img, explore2Img } from "@/utils";

const Features = () => {
  const exploreVideo = "/assets/videos/explore.mp4";
  const videoRef = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const runAnimation = () => {
      animateWithGsapTrigger("#features-title", { y: 0, opacity: 1 });
      animateWithGsapTrigger(
        ".g_grow",
        {
          scale: 1,
          opacity: 1,
          ease: "power1",
        },
        { scrub: 5.5 }
      );
      animateWithGsapTrigger(".g_text", { y: 0, opacity: 1 });
    };

    const delay = setTimeout(() => {
      runAnimation();
    }, 3000);

    return () => {
      clearTimeout(delay);
    };
  }, []);

  return (
    <section className="bg-zinc w-screen h-full py-24 sm:px-10 px-5 overflow-hidden">
      <div className="relative ms-auto me-auto">
        <div className="mb-12">
          <h1 id="features-title" className="section-heading tracking-tighter">
            Explore the full story
          </h1>
        </div>

        <div className="flex flex-col justify-center items-start overflow-hidden lg:w-[960px] ms-auto me-auto">
          <div className="mt-16 mb-16 flex justify-start sm:px-10">
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter w-full">
              iPhone. <br /> Forged in titanium.
            </h2>
          </div>

          <div className="flex-center flex-col sm:px-10 w-full">
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

            <div className="flex flex-col w-full relative mt-4">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore1Img.src}
                    alt="titanium"
                    className="feature-video g_grow"
                  />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore2Img.src}
                    alt="titanium"
                    className="feature-video g_grow"
                  />
                </div>
              </div>

              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    iPhone 15 Pro is{" "}
                    <span className="text-white">
                      the first iPhone to feature an aerospace‑grade titanium
                      design
                    </span>
                    , using the same alloy that spacecraft use for missions to
                    Mars.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Titanium has one of the best strength‑to‑weight ratios of
                    any metal, making these our{" "}
                    <span className="text-white">lightest Pro models ever</span>
                    . You’ll notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
