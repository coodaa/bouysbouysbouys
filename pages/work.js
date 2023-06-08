import { useEffect, useRef } from "react";
import styles from "../styles/Work.module.css";

const Work = () => {
  const textRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY + window.innerHeight >=
        imageRef.current.scrollHeight
      ) {
        textRef.current.style.position = "static";
      } else {
        textRef.current.style.position = "sticky";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav>{/* Hier Ihre Navbar */}</nav>
      <div className={styles.container}>
        <div ref={textRef} className={`${styles.textSection} sticky-text`}>
          Gropiusbau
        </div>
        <div ref={imageRef} className={styles.imageSection}>
          <img src="/img/gas.webp" alt="Bildbeschreibung" />
          <img src="/img/gas2.webp" alt="Bildbeschreibung" />
          <img src="/img/sch.webp" alt="Last Image" />
        </div>
      </div>
    </>
  );
};

export default Work;
