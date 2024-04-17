"use client";
import { animateWithGsapTrigger } from "@/utils/animations";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const Features = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const runAnimation = () => {
        animateWithGsapTrigger('#features-title', {y: 0, opacity: 1});
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
      </div>
    </section>
  );
};

export default Features;
