import { useEffect, useRef, useState } from "react";
import styles from "../styles/Work.module.css";

const Work = () => {
  const textRef = useRef();
  const imageRef = useRef();
  const [lastImageVisible, setLastImageVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLastImageVisible(true);
      } else {
        setLastImageVisible(false);
      }
    });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (lastImageVisible) {
      if (textRef.current) {
        textRef.current.style.overflow = "auto";
      }
    } else {
      if (textRef.current) {
        textRef.current.style.overflow = "hidden";
      }
    }
  }, [lastImageVisible]);

  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <div className={styles.stickyText}>Gropiusbau</div>
      </div>
      <div className={styles.imageSection}>
        <img src="/img/gas.webp" alt="Bildbeschreibung" />
        <img src="/img/gas2.webp" alt="Bildbeschreibung" />
        <img ref={imageRef} src="/img/sch.webp" alt="Last Image" />
      </div>
    </div>
  );
};

export default Work;
