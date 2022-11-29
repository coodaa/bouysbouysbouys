import Head from "next/head";
import styles from "../styles/Index.module.css";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitTextToChars from "../components/SplitTextToChars.js";


export default function Home() {

  //split chars
  const upTextRef = useRef(null);
  useEffect(() => {
    if (!upTextRef.current) return;
    const chars = SplitTextToChars(upTextRef.current);
    gsap.set(upTextRef.current, { perspective: 200 });
    gsap.from(
      chars,
      {
        duration: 0.4,
        delay: 0.0,
        y: +90,
        stagger: 0.03,
      },
      "+=0"
    );
  }, []);

  const upTextRef2 = useRef(null);
  useEffect(() => {
    if (!upTextRef2.current) return;
    const chars = SplitTextToChars(upTextRef2.current);
    gsap.set(upTextRef2.current, { perspective: 200 });
    gsap.from(
      chars,
      {
        duration: 0.4,
        delay: 0.00,
        y: +90,
        stagger: 0.03,
      },
      "+=0"
    );
  }, []);

  const upTextRef3 = useRef(null);
  useEffect(() => {
    if (!upTextRef3.current) return;
    const chars = SplitTextToChars(upTextRef3.current);
    gsap.set(upTextRef3.current, { perspective: 200 });
    gsap.from(
      chars,
      {
        duration: 0.4,
        delay: 0.00,
        y: +90,
        stagger: 0.03,
      },
      "+=0"
    );
  }, []);

  const upTextRef4 = useRef(null);
  useEffect(() => {
    if (!upTextRef4.current) return;
    const chars = SplitTextToChars(upTextRef4.current);
    gsap.set(upTextRef4.current, { perspective: 200 });
    gsap.from(
      chars,
      {
        duration: 0.4,
        delay: 0.00,
        y: +90,
        stagger: 0.03,
      },
      "+=0"
    );
  }, []);

  //end split chars

  //video on scroll
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
      // markers: true,
      onUpdate: function(self) {
        if(videoRef.current) {
          const scrollPos = self.progress;
          const videoDuration = videoRef.current.duration;
          const videoCurrentTime = videoDuration * scrollPos;

          if(videoCurrentTime) {
            videoRef.current.currentTime = videoCurrentTime;
          }

          // console.log(videoDuration, scrollPos, videoCurrentTime)
        }
      },
    })
  }, [IntroVideoRef, videoRef]);

  return (
    <div>
      <Head>
        <title>bouysbouysbouys</title>
        <meta name="description" content="bouys portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
      <div className={styles.char}>
        <p className={styles["down-up-text"]} ref={upTextRef}>
          creative
        </p>
        <p className={styles["down-up-text"]} ref={upTextRef2}>
          developer
        </p>
      </div>


      <div ref={IntroVideoRef} className={styles.intro}>
        <video className={styles.video} autoPlay={true} id="video" ref={videoRef} src={"/videoBG.mp4"}></video>
      </div>
      {/* <section className={styles.section} >
        <h1 >SECTION</h1>
      </section> */}





        {/* <p className={styles.float}>florian schneider</p>
        <p className={styles.float}>ist ein toller typ</p>
        <p className={styles.float}>book me</p> */}

      <div className={styles.layout}>
        <div className={styles.char}>
          <p className={styles["down-up-text"]} ref={upTextRef3}>
            florian
          </p>
          <p className={styles["down-up-text"]} ref={upTextRef4}>
            schneider
          </p>
        </div>
      </div>



        {/* <div>
          <p className={styles.shortAboutMe}>
            PASSIONATE {"\n"}ABOUT WEB TECHNOLOGIES. I LOVE WORKING AT THE
            INTERSECTION OF CREATIVITY AND USER FRIENDLY INTERFACES. I CREATE
            MEMORABLE WEB EXPERIENCES. WHEN I&quot;M NOT BUILDING OR EXPLORING
            NEW WEB EXPERIENCES, I&quot;M PROBABLY FISHING AT A LAKE
          </p>
        </div> */}
      </main>
    </div>
  );
}
