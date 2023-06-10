import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "../styles/About.module.css";

export default function About() {
  const titleRef = useRef([]);

  useEffect(() => {
    titleRef.current = titleRef.current.slice(0, "creativedeveloper".length);

    gsap.fromTo(
      titleRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        duration: 0.8,
        delay: 0.5,
        y: 0,
        opacity: 1,
        stagger: 0.05,
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
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.title}>
          <div>
            {"Creative".split("").map((char, i) => (
              <span
                key={i}
                className={styles.char}
                ref={addToRefs}
                style={{ opacity: 0 }}
              >
                {char}
              </span>
            ))}
          </div>
          <div>
            {"Developer".split("").map((char, i) => (
              <span
                key={i}
                className={styles.char}
                ref={addToRefs}
                style={{ opacity: 0 }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
