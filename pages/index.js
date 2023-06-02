import Head from "next/head";
import styles from "../styles/Index.module.scss";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitTextToChars from "../components/SplitTextToChars.js";

export default function Home() {
  const upTextRefs = useRef([null, null, null, null]);
  const IntroVideoRef = useRef(null);
  const videoRef = useRef(null);

  const animateText = (ref, duration, delay, stagger) => {
    if (!ref.current) return;
    const chars = SplitTextToChars(ref.current);
    gsap.set(ref.current, { perspective: 200 });
    gsap.from(
      chars,
      {
        duration,
        delay,
        y: +90,
        stagger,
      },
      "+=0"
    );
  };

  useEffect(() => {
    animateText(upTextRefs.current[0], 0.8, 0.0, 0.09);
    animateText(upTextRefs.current[1], 0.8, -1.355, 0.09);
    animateText(upTextRefs.current[2], 0.4, 0.0, 0.03);
    animateText(upTextRefs.current[3], 0.4, 0.0, 0.03);

    gsap.registerPlugin(ScrollTrigger);

    videoRef.current.currentTime = 0;

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
  }, [upTextRefs, IntroVideoRef, videoRef]);

  return (
    <div>
      <Head>
        <title>Florian Schneider Portfolio</title>
        <meta name="description" content="florian schneider portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.char}>
          <p
            className={styles["down-up-text"]}
            ref={(el) => (upTextRefs.current[0] = el)}
          >
            creative
          </p>
          <p
            className={styles["down-up-text"]}
            ref={(el) => (upTextRefs.current[1] = el)}
          >
            developer
          </p>
        </div>

        <div ref={IntroVideoRef} className={styles.intro}>
          <video
            className={styles.video}
            autoPlay={true}
            id="video"
            ref={videoRef}
            src={"/videoBG.mp4"}
          ></video>
        </div>

        <section className={styles.section}>
          <p>
            PASSIONATE {"\n"}ABOUT WEB TECHNOLOGIES. I LOVE WORKING AT THE
            INTERSECTION OF CREATIVITY AND USER FRIENDLY INTERFACES. I CREATE
            MEMORABLE WEB EXPERIENCES. WHEN I&quot;M NOT BUILDING OR EXPLORING
            NEW WEB EXPERIENCES, I&quot;M PROBABLY FISHING AT A LAKE
          </p>
        </section>
        <div className={styles.char}>
          <p
            className={styles["down-up-text"]}
            ref={(el) => (upTextRefs.current[2] = el)}
          >
            {/* florian */}
          </p>
          <p
            className={styles["down-up-text"]}
            ref={(el) => (upTextRefs.current[3] = el)}
          >
            {/* schneider */}
          </p>
        </div>
      </main>
    </div>
  );
}
