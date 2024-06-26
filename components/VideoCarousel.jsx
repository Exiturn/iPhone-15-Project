"use client";
import { useRef, useState, useEffect, Fragment } from "react";
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

  useGSAP(() => {
    gsap.config({ nullTargetWarn: false, trialWarn: false });
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut",
    });

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

  /* Handles auto-play on video metadata load */
  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying]);

  /* Carousel span animation */
  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;
    let div = videoDivRef.current;

    if (span[videoId]) {
      let anim = gsap.to(span[videoId], {
        /* 
        
          progress = progress of animation * 100 // Percentage of animation complete

          The animUpdate function updates the progress of the GSAP animation based on the current time of the video relative to its total duration.
          It adjusts the animation's progress according to the video's progress.

          animUpdate is then added to the gsap ticker based on whether the current video is playing

        */
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);

          if (progress != currentProgress) {
            gsap.to(div[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw"
                  : window.innerWidth < 1200
                  ? "10vw"
                  : "4vw",
            });

            gsap.to(span[videoId], {
              width: `${progress}%`,
              backgroundColor: "white",
            });
          }
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.to(div[videoId], {
              width: "8px",
            });
            gsap.to(span[videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });

      if (videoId === 0) {
        anim.restart();
      }

      const animUpdate = () => {
        anim.progress(
          videoRef.current[videoId].currentTime /
            hightlightsSlides[videoId].videoDuration
        );
      };

      if (isPlaying) {
        gsap.ticker.add(animUpdate);
      } else {
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId, startPlay]);

  const handleLoadedMetadata = (i, e) => setLoadedData((pre) => [...pre, e]);

  const handleProcess = (type, i) => {
    switch (type) {
      case "video-end":
        console.log("video-end");
        setVideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }));
        break;
      case "video-last":
        console.log("video-last");
        setVideo((pre) => ({ ...pre, isLastVideo: true }));
        break;
      case "video-reset":
        console.log("video-reset");
        setVideo((pre) => ({ ...pre, isLastVideo: false, videoId: 0 }));
        break;
      case "play":
        console.log("play");
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;
      case "pause":
        console.log("pause");
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;
      default:
        return video;
    }
  };

  return (
    <Fragment>
      <div className="flex items-center sm:px-10">
        {hightlightsSlides.map((list, index) => (
          <div key={list.id} id="slider" className="sm:pr-20">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center sm:rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  muted
                  preload="auto"
                  playsInline={true}
                  ref={(el) => (videoRef.current[index] = el)}
                  onEnded={() =>
                    index !== 3
                      ? handleProcess("video-end", index)
                      : handleProcess("video-last")
                  }
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

      <div className="flex-center mt-10 pb-20 sticky">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {spanArray.map((_, i) => (
            <span
              key={i}
              ref={(el) => (videoDivRef.current[i] = el)}
              className="mx-2 w-2 h-2 bg-gray-200 rounded-full relative cursor-pointer"
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
    </Fragment>
  );
};

export default VideoCarousel;
