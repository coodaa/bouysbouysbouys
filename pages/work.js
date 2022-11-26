import Head from "next/head";
import styles from "../styles/Work.module.css";
import { gsap } from "gsap/dist/gsap";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const title = document.querySelector("#my-text");
    gsap.to(
      "div",
      {
        y: 0,
        stagger: 0.05,
        delay: 0.5,
        duration: 0.9,
      },
      [title]
    );
  });

  return (
    <div>
      <Head>
        <title>bouysbouysbouys</title>
        <meta name="description" content="bouys portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.work}>
        <h1 id="my-text" className={styles["my-text"]}>
          <div className={styles.char}>C</div>
          <div className={styles.char}>r</div>
          <div className={styles.char}>e</div>
          <div className={styles.char}>a</div>
          <div className={styles.char}>t</div>
          <div className={styles.char}>i</div>
          <div className={styles.char}>v</div>
          <div className={styles.char}>e</div>
          <div className={styles.char}>&nbsp;</div>
          <div className={styles.char}>D</div>
          <div className={styles.char}>e</div>
          <div className={styles.char}>v</div>
          <div className={styles.char}>e</div>
          <div className={styles.char}>l</div>
          <div className={styles.char}>o</div>
          <div className={styles.char}>p</div>
          <div className={styles.char}>e</div>
          <div className={styles.char}>r</div>
        </h1>
      </main>
    </div>
  );
}
