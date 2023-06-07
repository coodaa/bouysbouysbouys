import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "../styles/VideoComponent.module.css";

const VideoComponents = () => {
  const IntroVideoRef = useRef(null);
  const videoRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    videoRef.current.currentTime = 0;

    const textAnimations = [
      { ref: textRef1, start: "top 30%", end: "top 20%" },
      { ref: textRef2, start: "top 50%", end: "top 40%" },
      { ref: textRef3, start: "top 70%", end: "top 60%" },
    ];

    textAnimations.forEach(({ ref, start, end }) => {
      gsap.from(ref.current, {
        opacity: 0,
        scale: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: IntroVideoRef.current,
          start,
          end,
          scrub: true,
        },
      });
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
  }, [IntroVideoRef, videoRef, textRef1, textRef2, textRef3]);

  return (
    <div ref={IntroVideoRef} className={styles.intro}>
      <p ref={textRef1} className={styles.text}>
        HIRE ME
      </p>
      {/* <p ref={textRef2} className={styles.text}>
        Developer
      </p> */}
      <p ref={textRef3} className={styles.text}>
        Or me!
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
