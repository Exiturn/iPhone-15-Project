"use client";
import { useRef, useState, useEffect } from "react";
import { hightlightsSlides } from "@/constants/constants";
import { playImg, pauseImg, replayImg } from "@/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const spanArray = [{}, {}, {}, {}];

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;
  const [loadedData, setLoadedData] = useState([]);
  const loadedDataRef = useRef(loadedData);

  // useEffect(() => {
  //   loadedDataRef.current = loadedData;
  // }, [loadedData]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((pre) => ({ ...pre, startPlay: true, isPlaying: true }));
      },
    });
  }, [isEnd, videoId]);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying]);

  useEffect(() => {
    const currentProgress = 0;

      // if (span[videoId]) {
      //   let anim = gsap.to(span[videoId], {
      //     onUpdate: () => {},
      //     onComplete: () => {},
      //   });
      // }
  }, [videoId, startPlay]);

  const handleLoadedMetadata = (i, e) => setLoadedData(pre => [...pre, e]);

  const handleProcess = (type, i) => {
    switch (type) {
      case "video-end":
        console.log("video-end")
        setVideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }));
        break;
      case "video-last":
        console.log("video-last")
        setVideo((pre) => ({ ...pre, isLastVideo: true }));
        break;
      case "video-reset":
        console.log("video-reset")
        setVideo((pre) => ({ ...pre, isLastVideo: false, videoId: 0 }));
        break;
      case "play":
        console.log("play")
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
      default:
        return video;
    }
  };

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
                  onLoadedMetadata={(e) => handleLoadedMetadata(index, e)}
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
          {spanArray.map((_, i) => (
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

        <button className="control-btn">
          <img
            src={
              isLastVideo
                ? replayImg.src
                : !isPlaying
                ? playImg.src
                : pauseImg.src
            }
            alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
            onClick={
              isLastVideo
                ? () => handleProcess("video-reset")
                : !isPlaying
                ? () => handleProcess("play")
                : () => handleProcess("pause")
            }
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;
