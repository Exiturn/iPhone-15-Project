import { cameraCarouselSlides } from "@/constants/constants";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Fragment, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CameraCarousel = () => {
  const currentSlideRef = useRef([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  let slideText = cameraCarouselSlides[currentSlide].imageText;
  let slideMagnifier = cameraCarouselSlides[currentSlide].magnifier;

  const handleSlideChange = (direction) => {
    switch (direction) {
      case "next":
        setCurrentSlide(currentSlide + 1);
        gsap.to("#gallery-item", {
          transform: `translateX(calc(${-100 * (currentSlide + 1)}% - 15px)`,
          duration: 1,
          ease: "power2.inOut",
        });
        break;
      case "prev":
        setCurrentSlide(currentSlide - 1);
        gsap.to("#gallery-item", {
          transform: `translateX(${-100 * (currentSlide - 1)}% + 15px)`,
          duration: 1,
          ease: "power2.inOut",
        });
        break;
    }
  };

  return (
    <Fragment>
      <div
        id="scroll-container"
        className="snap-x snap-mandatory w-full h-full scrollbar overflow-hidden"
      >
        <ul
          id="item-container"
          className="m-0 relative grid int:gap-[10px] grid-flow-col w-fit md:pl-[calc(50%-692px/2)] list-none"
        >
          {cameraCarouselSlides.map((slide, index) => (
            <li
              ref={(el) => (currentSlideRef.current[index] = el)}
              id="gallery-item"
              key={index}
              className="relative w-screen int:w-[653px] sm:w-[692px] min-h-[370px] md:min-h-[490px] scroll-snap list-none"
            >
              <div
                id="card-item"
                className={`h-full w-full transition-all duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-[0.3]"
                }`}
              >
                <div
                  id="card-img-wrapper"
                  className="relative w-full h-full overflow-hidden flex justify-center items-center"
                >
                  {/* <picture id={slide.id} role="img" className="block h-[490px] md:w-[692px]">
                  <source srcSet={slide.imgSrc.src} />
                </picture> */}
                  <img
                    src={slide.imgSrc.src}
                    alt={slide.imageText}
                    className="w-full h-full object-contain hidden int:block"
                  />
                  <img
                    src={slide.imgSrcSmall.src}
                    alt={slide.imageText}
                    className="w-full h-full object-contain block int:hidden"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full md:w-[692px] lg:w-[980px] mx-auto int:pr-[40px] md:pr-0 text-center mt-[35px]">
        <p className="font-semibold text-gray text-lg">
          <span className="text-white">{slideMagnifier}</span> {slideText}
        </p>
      </div>

      <div
        id="paddle-nav"
        className="mt-10 place-self-end int:absolute int:right-[calc(50%-692px/2)] lg:right-[calc(50%-980px/2)] int:bottom-0"
      >
        <ul className="flex justify-center items-center">
          <li
            onClick={() => handleSlideChange("prev")}
            className={`bg-[#333336] color-white flex justify-center items-center w-[36px] h-[36px] p-1 rounded-full overflow-hidden ${currentSlide === 0 ? 'opacity-50 pointer-events-none' : 'cursor-pointer'} mr-4`}
          >
            <IoIosArrowBack color="white" size={23} />
          </li>
          <li
            onClick={() => handleSlideChange("next")}
            className={`bg-[#333336] color-white flex justify-center items-center w-[36px] h-[36px] p-1 rounded-full overflow-hidden cursor-pointer ${currentSlide + 1 === cameraCarouselSlides.length ? 'opacity-50 pointer-events-none' : 'cursor-pointer'}`}
          >
            <IoIosArrowForward color="white" size={23} />
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default CameraCarousel;
