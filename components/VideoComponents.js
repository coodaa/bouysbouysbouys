import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "../styles/VideoComponent.module.css";

const VideoComponents = () => {
  const IntroVideoRef = useRef(null);
  const videoRef = useRef(null);
  const textRefs = useRef([]);

  const textList = ["BLOOB1", "BLOOB2", "BLOOB3"]; // Textinhalte

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    videoRef.current.currentTime = 0;

    textList.forEach((_, index) => {
      gsap.fromTo(
        textRefs.current[index],
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: textRefs.current[index],
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    });

    ScrollTrigger.create({
      trigger: IntroVideoRef.current,
      scrub: true,
      pin: IntroVideoRef.current,
      delay: 5.0,
      start: "center center",
      end: "9000",
      onUpdate: function (self) {
        if (videoRef.current) {
          const scrollPos = self.progress;
          const videoDuration = videoRef.current.duration;
          const videoCurrentTime = videoDuration * scrollPos;

          if (videoCurrentTime) {
            videoRef.current.currentTime = videoCurrentTime;
          }
        }
      },
    });
  }, [IntroVideoRef, videoRef, textRefs, textList]);

  return (
    <div ref={IntroVideoRef} className={styles.intro}>
      {textList.map((text, index) => (
        <p
          ref={(el) => (textRefs.current[index] = el)}
          key={index}
          className={styles.text}
        >
          {text}
        </p>
      ))}
      <video
        className={styles.video}
        autoPlay={true}
        id="video"
        ref={videoRef}
        src={"/videoBG.mp4"}
      ></video>
    </div>
  );
};

export default VideoComponents;
