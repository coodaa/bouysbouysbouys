import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../styles/Work.module.css";
import useAnimatedText from "../hooks/useAnimatedText";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Work = () => {
  const imageRef1 = useRef();
  const imageRef2 = useRef();
  const imageRef3 = useRef();
  const imageRef4 = useRef();
  const imageRef5 = useRef();
  const imageRef6 = useRef();
  const imageRef7 = useRef();
  const imageRef8 = useRef();
  const imageRef9 = useRef();
  ////this is a commit
  const settings1 = {
    duration: 0.8,
    delay: -0.3,
    y: 240,
    stagger: 0.09,
  };

  const [titleRef1, titleRef2] = useAnimatedText(settings1, settings1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SimpleParallax = require("simple-parallax-js");

      const activateParallax = () => {
        const imageRefs = [
          imageRef1,
          imageRef2,
          imageRef3,
          imageRef4,
          imageRef5,
          imageRef6,
          imageRef7,
          imageRef8,
          imageRef9,
        ];

        imageRefs.forEach((ref) => {
          new SimpleParallax(ref.current, {
            delay: 0.6,
            transition: "cubic-bezier(0,0,0,1)",
          });
        });
      };

      setTimeout(activateParallax, 200);
    }
  }, []);

  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDescription(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const [showSection, setShowSection] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSection(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const projectSectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const [ref1, inView1] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px",
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px",
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px",
  });

  const [titleRefGropiusbau, titleInViewGropiusbau] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px",
  });

  const [titleRefFestspiele, titleInViewFestspiele] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px",
  });

  const [titleRefVolksbuehne, titleInViewVolksbuehne] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <div className={styles.workPage}>
      <main className={styles.headingContainer}>
        <div className={styles.char}>
          <h1 className={styles.textUp} ref={titleRef1}>
            projects
          </h1>
        </div>
      </main>
      <div className={styles.descriptionContainer}>
        <div
          className={`${styles.description} ${
            showDescription ? styles.show : ""
          }`}
        >
          <p>
            A selected set of experiments I'm building as I navigate through
            ideas and technologies. I learn by testing out and building based on
            concepts and techniques.
          </p>
        </div>
        <div className={styles.arrow}>&#8595;</div>
      </div>

      <motion.div
        ref={ref1}
        className={`${styles.projectSection} ${showSection ? styles.show : ""}`}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={projectSectionVariants}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
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
              width={800}
              height={500}
              layout="responsive"
            />
          </div>
          <div ref={imageRef2}>
            <Image
              src="/img/gas2.webp"
              alt="Beschreibung des Bildes"
              width={800}
              height={500}
              layout="responsive"
            />
          </div>
          <div ref={imageRef3}>
            <Image
              src="/img/gas3.webp"
              alt="Beschreibung des Bildes"
              width={800}
              height={500}
              layout="responsive"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        ref={ref2}
        className={`${styles.projectSection} ${showSection ? styles.show : ""}`}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={projectSectionVariants}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className={styles.textSection}>
          <div className={styles.sticky}>Berliner Festspiele </div>
        </div>
        <div className={styles.imageSection}>
          <div ref={imageRef4}>
            <Image
              src="/img/gas.webp"
              alt="Beschreibung des Bildes"
              width={800}
              height={500}
              layout="responsive"
            />
          </div>
          <div ref={imageRef5}>
            <Image
              src="/img/gas2.webp"
              alt="Beschreibung des Bildes"
              width={800}
              height={500}
              layout="responsive"
            />
          </div>
          <div ref={imageRef6}>
            <Image
              src="/img/gas3.webp"
              alt="Beschreibung des Bildes"
              width={800}
              height={500}
              layout="responsive"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={ref3}
        className={`${styles.projectSection} ${showSection ? styles.show : ""}`}
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
        variants={projectSectionVariants}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className={styles.textSection}>
          <div className={styles.sticky}>Volksbühne</div>
        </div>
        <div className={styles.imageSection}>
          <div ref={imageRef7}>
            <Image
              src="/img/gas.webp"
              alt="Beschreibung des Bildes"
              width={800}
              height={500}
              layout="responsive"
            />
          </div>
          <div ref={imageRef8}>
            <Image
              src="/img/gas2.webp"
              alt="Beschreibung des Bildes"
              width={800}
              height={500}
              layout="responsive"
            />
          </div>
          <div ref={imageRef9}>
            <Image
              src="/img/gas3.webp"
              alt="Beschreibung des Bildes"
              width={800}
              height={500}
              layout="responsive"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Work;
