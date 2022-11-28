import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/vid.module.scss";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// const { useEffect, useRef, useState } = React;

export default function Home() {

  const IntroVideoRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    videoRef.current.currentTime = 0;

    ScrollTrigger.create({
      trigger: IntroVideoRef.current,
      scrub: true,
      pin: IntroVideoRef.current,
      start: 'center center',
      end: '+=20000',
      markers: true,
      onUpdate: function(self) {
        if(videoRef.current) {
          const scrollPos = self.progress;
          const videoDuration = videoRef.current.duration;
          const videoCurrentTime = videoDuration * scrollPos;

          if(videoCurrentTime) {
            videoRef.current.currentTime = videoCurrentTime;
          }

          console.log(videoDuration, scrollPos, videoCurrentTime)
        }
      },
    })
  }, [IntroVideoRef, videoRef]);
  return (
    <>
      <div ref={IntroVideoRef} className={styles.intro}>
        <video className={styles.video} id="video" ref={videoRef} src={"/videoBG.mp4"}></video>
      </div>
      {/* <section className={styles.section} >
        <h1 className={styles.section} >SECTION</h1>
      </section> */}

    </>
  )
}
