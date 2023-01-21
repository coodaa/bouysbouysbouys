import React, { useEffect } from "react";
import styles from "../styles/Index2.module.scss";

const AnimatedDiv = () => {
  const aDivRef = React.useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.pageYOffset;
      aDivRef.current.style.width =
        Math.min(Math.max(scroll / 2.85, 5), 100) + "%";
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.animatedDiv} ref={aDivRef} />
    </div>
  );
};

export default AnimatedDiv;
