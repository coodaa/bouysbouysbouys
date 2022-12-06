import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import styles from "../styles/Contact2.module.scss";
import blobs from "blobs";

const options = {
  complexity: 0.6,
  contrast: 0.2,
  // guides: true,
  size: 800,
  color: "black",
  stroke: 600,
};

const Background = ({ svg }) => (
  <div className={styles.main}>
    <svg viewBox="0 0 800 800" className={styles.wheel}>
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

  return (
    <div onClick={() => change(blobs.editable(options))}>
      <Background svg={props3.svg} fill={props3.fill} />
      <h1 className={styles.text}>SEND ME A MESSAGE</h1>
      <h3 className={styles.text}>hello@bouysbouysbouys.com</h3>
    </div>
  );
}
