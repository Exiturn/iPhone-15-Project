import { useRef, useState, useEffect } from "react";
import { hightlightsSlides } from "@/constants/constants";

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    console.log("videoRef: ", videoRef);
    console.log("videoDivRef: ", videoDivRef);
    console.log("videoSpanRef: ", videoSpanRef);
  }, [videoRef]);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  useEffect(() => {
    const currentProgress = 0;

    // if (span[videoId]) {
    //   let anim = gsap.to(span[videoId], {
    //     onUpdate: () => {},
    //     onComplete: () => {},
    //   });
    // }
  }, [videoId, startPlay]);

  return (
    <>
      <div className="flex items-center sm:px-10">
        {hightlightsSlides.map((list, index) => (
          <div key={list.id} id="slider" className="sm:pr-20">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center sm:rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  muted
                  loop
                  preload="auto"
                  playsInline={true}
                  ref={(el) => (videoRef.current[index] = el)}
                  onPlay={() => {
                    setVideo((prevVideo) => ({
                      ...prevVideo,
                      isPlaying: true,
                    }));
                  }}
                >
                  <source src={list.videoSrc} type="video/mp4" />
                </video>
              </div>

              <div className="absolute top-10 left-[10%] sm:left-10 z-10">
                {list.textLists.map((text) => (
                  <p
                    key={text}
                    className="md:text-2xl text-lg font-medium tracking-tight"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative flex-center mt-10 pb-20">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              ref={(el) => (videoDivRef.current[i] = el)}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => (videoSpanRef.current[i] = el)}
              />
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoCarousel;
