import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "../styles/VideoComponent.module.css";

const VideoComponents = () => {
  const IntroVideoRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);

  const textList = ["BLOOB1", "BLOOB2", "BLOOB3"]; // Textinhalte

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    videoRef.current.currentTime = 0;

    gsap.from(textRef.current, {
      opacity: 0,
      scale: 0,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: IntroVideoRef.current,
        start: "top center",
        end: () => "+=" + window.innerHeight * textList.length, // Verlängern Sie den ScrollTrigger
        scrub: true,
        onUpdate: (self) => {
          // Ändern Sie den Textinhalt basierend auf dem Scroll-Fortschritt
          const index = Math.floor(self.progress * textList.length);
          textRef.current.textContent = textList[index] || "";
        },
      },
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
  }, [IntroVideoRef, videoRef, textRef, textList]);

  return (
    <div ref={IntroVideoRef} className={styles.intro}>
      <p ref={textRef} className={styles.text}>
        BLOOB{" "}
      </p>
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
