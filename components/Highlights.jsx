"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import dynamic from "next/dynamic";
// import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  const VideoCarousel = dynamic(() => import("@/components/VideoCarousel"), {ssr: false});
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  });

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full bg-zinc"
    >
      <div className="screen-max-w sm:px-10 pt-20 px-5">
        <div className="mb-12 w-full items-center sm:flex justify-between">
          <h1 id="title" className="section-heading tracking-tighter">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <span className="link">
              Watch the film
              <img
                src={"/assets/images/watch.svg"}
                alt="watch"
                className="ml-2"
              />
            </span>
            <span className="link">
              Watch the event
              <img
                src={"/assets/images/right.svg"}
                alt="watch"
                className="ml-2"
              />
            </span>
          </div>
        </div>
      </div>
      <VideoCarousel />
    </section>
  );
};

export default Highlights;
