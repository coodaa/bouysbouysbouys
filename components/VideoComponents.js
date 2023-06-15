import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "../styles/VideoComponent.module.css";

const VideoComponents = () => {
  const IntroVideoRef = useRef(null);
  const videoRef = useRef(null);
  const textRefs = useRef([]);

  const textList = ["BOUYS", "BOUYS", "BOUYS"]; // Add "BLOOB4" and "BLOOB5"

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    videoRef.current.currentTime = 0;

    textList.forEach((_, index) => {
      let factor = index * 1000;

      // Increase the factor between "BLOOB2" and "BLOOB3"
      if (index === 2) {
        factor += 1000; // Add additional 1000 units for "BLOOB3"
      }

      // Increase the factor between "BLOOB4" and "BLOOB5"
      if (index === 4) {
        factor += 1000; // Add additional 1000 units for "BLOOB5"
      }

      gsap
        .timeline({
          scrollTrigger: {
            trigger: textRefs.current[index],
            start: () => `+=${factor}`, // start dynamically based on the factor
            end: () => `+=${factor + 1000}`, // end dynamically based on the factor
            scrub: true,
          },
        })
        .fromTo(
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
          }
        )
        .to(textRefs.current[index], {
          opacity: 0,
          scale: 0,
          duration: 1,
          ease: "back.in(1.7)",
        });
    });

    ScrollTrigger.create({
      trigger: IntroVideoRef.current,
      scrub: true,
      pin: IntroVideoRef.current,
      delay: 5.0,
      start: "center center",
      end: "+=11000", // Update the end point as per the added texts
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
