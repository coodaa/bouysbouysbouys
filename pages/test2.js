import React, { useEffect, useRef } from "react";
import styles from "../styles/test2.module.css";
import gsap from "gsap";
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

  const upTextRefi = useRef(null);

  useEffect(() => {
    if (!upTextRefi.current) return;
    const chars = SplitTextToChars(upTextRefi.current);
    gsap.set(upTextRefi.current, { perspective: 200 });
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

  return (
    <main className={styles.main}>
      <div className={styles.char}>
        <p className={styles["down-up-text"]} ref={upTextRef}>
          creative
        </p>
        <p className={styles["down-up-text"]} ref={upTextRefi}>
          developer
        </p>
      </div>
    </main>
  );
}
