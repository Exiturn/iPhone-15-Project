"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useEffect } from "react";
// import hero from '@/public/assets/videos/hero.mp4';
// import smallHero from '@/public/assets/videos/smallHero.mp4';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 426
      ? "/assets/videos/smallHero.mp4"
      : "/assets/videos/hero.mp4"
  );

  const handleVideoSrc = () => {
    if (window.innerWidth < 426) {
      setVideoSrc("/assets/videos/smallHero.mp4");
    } else {
      setVideoSrc("/assets/videos/hero.mp4");
    }
  };

  useGSAP(() => {
    window.addEventListener('resize', handleVideoSrc)
    gsap.to(".hero-title", { opacity: 1, delay: 0.75 });

    return () => {
      window.removeEventListener('resize', handleVideoSrc)
    }
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p className="hero-title">iPhone 15 Pro</p>
        <div className="md:w-10/12 w-9/12">
            <video autoPlay muted playsInline={true} key={videoSrc}>
              <source src={videoSrc} type="video/mp4" />
            </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
