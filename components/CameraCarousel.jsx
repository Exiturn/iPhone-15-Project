import { cameraCarouselSlides } from "@/constants/constants";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Fragment } from "react";

const CameraCarousel = () => {
  return (
    <Fragment>
      <div
        id="scroll-container"
        className="snap-x snap-mandatory w-full h-full scrollbar overflow-hidden"
      >
        <ul
          id="item-container"
          className="m-0 relative grid gap-[10px] grid-flow-col w-fit pl-[calc(50%-274px/2)] md:pl-[calc(50%-692px/2)] list-none"
        >
          {cameraCarouselSlides.map((slide, index) => (
            <li
              id="gallery-item"
              key={index}
              className="relative w-[274px] md:w-[692px] min-h-[370px] md:min-h-[490px] scroll-snap list-none"
            >
              <div id="card-item" className="h-full w-full">
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
                    className="w-full h-full object-contain hidden md:block"
                  />
                  <img
                    src={slide.imgSrcSmall.src}
                    alt={slide.imageText}
                    className="w-full h-full object-contain block md:hidden"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full md:w-[692px] lg:w-[980px] mx-auto text-center mt-[35px]">
        Helo man
      </div>
      
      <div
        id="paddle-nav"
        className="mt-10 place-self-end md:absolute md:right-[calc(50%-692px/2)] lg:right-[calc(50%-980px/2)] md:bottom-0"
      >
        <ul className="flex justify-center items-center">
          <li className="bg-[#333336] color-white flex justify-center items-center w-[36px] h-[36px] p-1 rounded-full overflow-hidden cursor-pointer mr-4">
            <IoIosArrowBack color="white" size={23} />
          </li>
          <li className="bg-[#333336] color-white flex justify-center items-center w-[36px] h-[36px] p-1 rounded-full overflow-hidden cursor-pointer">
            <IoIosArrowForward color="white" size={23} />
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default CameraCarousel;
