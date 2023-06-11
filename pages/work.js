import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import styles from "../styles/Work.module.css";

const Work = () => {
  const imageRef1 = useRef();
  const imageRef2 = useRef();
  const imageRef3 = useRef();
  const imageRef4 = useRef();
  const imageRef5 = useRef();
  const imageRef6 = useRef();
  const titleRef = useRef([]);

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
      setTimeout(activateParallax, 100);
    }

    titleRef.current = titleRef.current.slice(0, "Projects".length);

    gsap.fromTo(
      titleRef.current,
      {
        y: -100,
        opacity: 0,
      },
      {
        duration: 1.8,
        delay: 0.9,
        y: 0,
        opacity: 1,
        stagger: 0.09,
        ease: "power3.out",
      }
    );
  }, []);

  const addToRefs = (el) => {
    if (el && !titleRef.current.includes(el)) {
      titleRef.current.push(el);
    }
  };

  return (
    <div className={styles.workPage}>
      <div className={styles.headingContainer}>
        <h1>
          {"PROJEKTS".split("").map((char, i) => (
            <span
              key={i}
              className={styles.char}
              ref={addToRefs}
              style={{ opacity: 0 }}
            >
              {char}
            </span>
          ))}
        </h1>
        {/* <p>
          A selected set of projects I've built with individuals and teams. This
          is a mix of personal, collaborative and client owned projects.
        </p> */}
      </div>
      <div className={styles.projectSection}>
        <div className={styles.textSection}>
          <div className={styles.sticky}>Gropiusbau </div>
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
