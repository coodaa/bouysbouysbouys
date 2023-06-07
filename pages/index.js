import Head from "next/head";
import styles from "../styles/Index.module.css";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitTextToChars from "../components/SplitTextToChars.js";
import VideoComponents from "../components/VideoComponents.js";

export default function Home() {
  //split chars
  const upTextRef = useRef(null);
  const upTextRef2 = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animateText = (ref, settings) => {
      if (!ref.current) return;
      const chars = SplitTextToChars(ref.current);
      gsap.set(ref.current, { perspective: 200 });
      gsap.from(chars, settings, "+=0");
    };

    animateText(upTextRef, {
      duration: 0.8,
      delay: 0.0,
      y: +90,
      stagger: 0.09,
    });
    animateText(upTextRef2, {
      duration: 0.8,
      delay: -1.355,
      y: +90,
      stagger: 0.09,
    });

    // Adjust size of the video container and arrow on scroll
    gsap.to(styles.intro, {
      scrollTrigger: {
        trigger: styles.intro,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      width: "100%",
    });

    gsap.to(styles.arrow, {
      scrollTrigger: {
        trigger: styles.intro,
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
      opacity: 0,
    });
  }, []);

  //end split chars

  return (
    <div>
      <Head>
        <title>Florian Schneider Portfolio</title>
        <meta name="description" content="florian schneider portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.char}>
          <p className={styles.textUp} ref={upTextRef}>
            creative
          </p>
          <p className={styles.textUp} ref={upTextRef2}>
            developer
          </p>
        </div>

        <div className={styles.flexContainer}>
          <VideoComponents />

          <div className={styles.arrow}>
            <span>↓</span>
          </div>
        </div>

        <section className={styles.section}>
          <p>
            PASSIONATE ABOUT WEB TECHNOLOGIES. I LOVE WORKING AT THE
            INTERSECTION OF CREATIVITY AND USER FRIENDLY INTERFACES. I CREATE
            MEMORABLE WEB EXPERIENCES. WHEN I'M NOT BUILDING OR EXPLORING NEW
            WEB EXPERIENCES, I'M PROBABLY FISHING AT A LAKE
          </p>
        </section>
      </main>
    </div>
  );
}
