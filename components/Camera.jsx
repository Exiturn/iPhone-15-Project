import { iguanaImg } from "@/utils";

const Camera = () => {
  return (
    <section className="overflow-hidden w-full h-full py-10 md:py-24 sm:px-10">
      <div className="flex flex-col justify-start items-start md:w-[1120px] w-screen mx-auto">
        <h1 className="text-white lg:text-7xl md:text-5xl text-[2.5rem] md:mb-0 mb-5 font-semibold tracking-tighter leading-none">
          A camera that captures your <br /> wildest imagination.
        </h1>

        <h4 className="text-gray text-lg md:text-2xl font-semibold mt-14">
          From dramatic framing flexibility to next-generation portraits, see
          what you can do with our most powerful iPhone camera system.
        </h4>

        <div>
          <div id="image-wrapper" className="scale-[1]">
            <img
              src={iguanaImg.src}
              alt="an iguana taken with iPhone 15's 48MP camera"
            />
          </div>
          <p className="text-gray font-semibold">
            A green iguana, captured by the 48MP Main camera
          </p>
        </div>
      </div>
    </section>
  );
};

export default Camera;
