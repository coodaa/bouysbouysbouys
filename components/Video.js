import React, { useState, useEffect } from "react";
import styles from "../styles/Index2.module.scss";

const Video = () => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState("left");

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.pageYOffset;
      const threshold = window.innerHeight / 2;
      if (scroll > threshold) {
        setScale(1);
        setPosition("center");
      } else {
        setScale(Math.min(Math.max(scroll / threshold + 1, 1), 2));
        setPosition("left");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.intro}>
        <video
          src={"/videoBG.mp4"}
          style={{
            transform: `scale(${scale})`,
            position: "fixed",
            top: 0,
            [position]: 0,
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default Video;
