import React, { useEffect, useRef } from "react";
import styles from "../styles/Video.module.scss";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {
  // const intro = document.querySelector('.intro');
  // const video = intro.querySelector('video');
  // const text = intro.querySelector('h1');
  // //End Section
  // const section = document.querySelector('section');
  // const end = section.querySelector('h1');

  // //scroll magic
  // const controller = new ScrollMagic.Controller();

  // const scene =

  // useEffect(() => {

  //   gsap.from(

  //   );
  // }, []);

  return (
    <div className={styles.intro}>
      <h1>The New Dev Ed Pro</h1>
      <div>
        <video
          controls
          src={"/videoBG.mp4"}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <h1 className={styles.section}>Revolution</h1>
    </div>
  );
}
