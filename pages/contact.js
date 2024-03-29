import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import styles from "../styles/Contact.module.scss";
import blobs from "blobs";
import Link from "next/link";
import SplitTextToChars from "../components/SplitTextToChars.js";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import Head from "next/head";

const options = {
  complexity: 0.6,
  contrast: 0.2,
  size: 900,
  color: "black",
  stroke: 600,
};

const Background = ({ svg }) => (
  <div>
    <svg viewBox="0 100 900 900" className={styles.wheel}>
      <defs>
        <radialGradient id="radial-gradient" cx="80%" fx="100%" fr="0%" r="80%">
          <stop offset="0.0677083" stopColor="black" />
          <stop offset="0.239583" stopColor="green" />
          <stop offset="0.447917" stopColor="#FFE178" stopOpacity="0.74" />
          <stop offset="0.625" stopColor="#D2EB71" stopOpacity="0.82" />
          <stop offset="0.802083" stopColor="#78DCE2" stopOpacity="0.78" />
          <stop offset="1" stopColor="#B08FF6" />
        </radialGradient>
      </defs>
      <g transform="translate(0,0)">
        <animated.path className={styles.blobgradient} d={svg} />
      </g>
    </svg>
  </div>
);

export default function Contact() {
  const [blob, change] = useState(blobs.editable(options));

  const props3 = useSpring({
    config: { duration: 1500 },
    from: {
      svg: blob.children[0].children[0].attributes.d,
    },
    to: async (next) => {
      while (1) {
        await next({
          svg: blobs.editable(options).children[0].children[0].attributes.d,
        });
      }
    },
  });

  const upTextRef = useRef(null);
  useEffect(() => {
    if (!upTextRef.current) return;
    const chars = SplitTextToChars(upTextRef.current);
    gsap.set(upTextRef.current, { perspective: 200 });
    gsap.from(
      chars,
      {
        duration: 0.4,
        delay: 0.5,
        y: +80,
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
        duration: 0.3,
        delay: -0.5,
        y: +80,
        stagger: 0.03,
      },
      "+=0"
    );
  }, []);

  return (
    <div>
      <Head>
        <title>Florian Schneider | Contact</title>
        <meta
          name="description"
          content="contact florian schneider portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={styles.main}
        onClick={() => change(blobs.editable(options))}
      >
        <Background svg={props3.svg} fill={props3.fill} />
        <h1 className={styles.text} ref={upTextRef}>
          send me a message
        </h1>
        <Link href="mailto:hi@bouysbouysbouys.com" legacyBehavior>
          <h3 className={styles.text} ref={upTextRef2}>
            hi@bouysbouysbouys.com
          </h3>
        </Link>
      </div>
    </div>
  );
}
