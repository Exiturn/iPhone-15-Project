"use client"
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import dynamic from 'next/dynamic';

const Highlights = () => {
  const VideoCarousel = dynamic(() => import('@/components/VideoCarousel'));
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 });
    gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  })

  return (
    <section id='highlights' className='w-screen overflow-hidden h-full sm:py-32 sm:px-10 common-padding bg-zinc'>
      <div className='screen-max-w'>
        <div className="mb-12 w-full items-center md:flex justify-between">
          <h1 id='title' className='section-heading'>Get the highlights.</h1>
          <div className="flex flex-wrap items-end gap-5">
            <span className="link">
              Watch the film
              <img src={'/assets/images/watch.svg'} alt="watch" className="ml-2"/>
            </span>
            <span className="link">
              Watch the event
              <img src={'/assets/images/right.svg'} alt="watch" className="ml-2"/>
            </span>
          </div>
        </div>

       <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights