import Head from "next/head";
import styles from "../styles/Index.module.css";
import gsap from "gsap";
import { useEffect, useState, useRef } from "react";
import SplitTextToChars from "../components/SplitTextToChars.js";


export default function Home() {

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

  const [scrolled, setScrolled] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);
    return () => window.removeEventListener("scroll", scrollProgress);
  }, []);
  const scrollProgress = () => {
    const scrollpx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollLen = Math.ceil(((scrollpx / winHeightPx) * 100) / 0.69);
    setScrolled(scrollLen);
  };

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

      <header className={styles.AppHeader}>
        <img className={styles.img} src={`https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${scrolled.toString().padStart(4, '0')}.jpg` } />
        {/* <p className={styles.float}>florian schneider</p>
        <p className={styles.float}>ist ein toller typ</p>
        <p className={styles.float}>book me</p> */}
      </header>

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
