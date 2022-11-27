import React, { useEffect, useRef } from "react";
import styles from "../styles/Appletest.module.scss";
import videoBG from '../assets/videoBG.mp4';

export default function Home() {

  return (
    <div className={styles.intro}>
      <h1>The New Dev Ed Pro</h1>
      <div>
        <video src={videoBG} />
      </div>
      <h1>Revolution</h1>
    </div>
  );
}
