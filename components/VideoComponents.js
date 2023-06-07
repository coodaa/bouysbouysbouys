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

    // Für jedes Textelement erstellen wir eine separate Animation und einen ScrollTrigger
    const textElements = [textRef1, textRef2, textRef3];

    textElements.forEach((textRef, index) => {
      gsap.from(textRef.current, {
        opacity: 0,
        scale: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: textRef.current,
          start: `${index * 33.33}% center`, // Positioniert Startpunkte gleichmäßig
          end: `${(index + 1) * 33.33}% center`, // Positioniert Endpunkte gleichmäßig
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
        BLOOB{" "}
      </p>
      <p ref={textRef2} className={styles.text}>
        BLOOB{" "}
      </p>
      <p ref={textRef3} className={styles.text}>
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
