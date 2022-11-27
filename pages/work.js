import Head from "next/head";
import styles from "../styles/Work.module.css";
import React, { useEffect } from "react";
import SplitType from "split-type";
import { gsap } from "gsap/dist/gsap";

export default function Home() {
  useEffect(() => {
    const title = document.querySelector("#my-text");
    const text = new SplitType(title);

    gsap.to(
      "span",
      {
        y: 0,
        stagger: 0.05,
        delay: 0.5,
        duration: 0.9,
      },
      [text]
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
          <span id="my-text" className={styles.char}>
            Creative
          </span>
        </h1>
      </main>
    </div>
  );
}
