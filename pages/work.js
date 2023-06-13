import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../styles/Work.module.css";
import useAnimatedText from "../hooks/useAnimatedText";

const Work = () => {
  const imageRef1 = useRef();
  const imageRef2 = useRef();
  const imageRef3 = useRef();
  const imageRef4 = useRef();
  const imageRef5 = useRef();
  const imageRef6 = useRef();

  const settings1 = {
    duration: 0.8,
    delay: -1,
    y: 200,
    stagger: 0.09,
  };
  const settings2 = {
    duration: 0.8,
    delay: -1.355,
    y: +90,
    stagger: 0.09,
  };
  //arrow animation
  const settings3 = {
    duration: 0.8,
    delay: -1.355,
    y: +90,
    stagger: 0.09,
  };

  const [titleRef1, titleRef2] = useAnimatedText(settings1, settings1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SimpleParallax = require("simple-parallax-js");

      const activateParallax = () => {
        new SimpleParallax(imageRef1.current, {
          delay: 0.6,
          transition: "cubic-bezier(0,0,0,1)",
        });
        new SimpleParallax(imageRef2.current, {
          delay: 0.6,
          transition: "cubic-bezier(0,0,0,1)",
        });
        new SimpleParallax(imageRef3.current, {
          delay: 0.6,
          transition: "cubic-bezier(0,0,0,1)",
        });
        new SimpleParallax(imageRef4.current, {
          delay: 0.6,
          transition: "cubic-bezier(0,0,0,1)",
        });
        new SimpleParallax(imageRef5.current, {
          delay: 0.6,
          transition: "cubic-bezier(0,0,0,1)",
        });
        new SimpleParallax(imageRef6.current, {
          delay: 0.6,
          transition: "cubic-bezier(0,0,0,1)",
        });
      };

      // Activate the parallax effect after a slight delay
      setTimeout(activateParallax, 200);
    }
  }, []);

  return (
    <div className={styles.workPage}>
      <main className={styles.headingContainer}>
        <div className={styles.char}>
          <h1 className={styles.textUp} ref={titleRef1}>
            projects
          </h1>
        </div>
      </main>
      <div className={styles.arrow}>&#8595;</div>

      <div className={styles.projectSection}>
        <div className={styles.textSection}>
          <div className={styles.sticky} ref={titleRef2}>
            Gropiusbau
          </div>
        </div>
        <div className={styles.imageSection}>
          <div ref={imageRef1}>
            <Image
              src="/img/gas.webp"
              alt="Beschreibung des Bildes"
              width={500}
              height={300}
            />
          </div>
          <div ref={imageRef2}>
            <Image
              src="/img/gas2.webp"
              alt="Beschreibung des Bildes"
              width={500}
              height={300}
            />
          </div>
          <div ref={imageRef3}>
            <Image
              src="/img/gas3.webp"
              alt="Beschreibung des Bildes"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className={styles.projectNewSection}>
        <div className={styles.textSection}>
          <div className={styles.sticky}>Berliner Festspiele </div>
        </div>
        <div className={styles.imageSection}>
          <div ref={imageRef4}>
            <Image
              src="/img/gas.webp"
              alt="Beschreibung des Bildes"
              width={500}
              height={300}
            />
          </div>
          <div ref={imageRef5}>
            <Image
              src="/img/gas2.webp"
              alt="Beschreibung des Bildes"
              width={500}
              height={300}
            />
          </div>
          <div ref={imageRef6}>
            <Image
              src="/img/gas3.webp"
              alt="Beschreibung des Bildes"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
