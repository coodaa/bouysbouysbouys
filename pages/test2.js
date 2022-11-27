import React, { useEffect, useRef } from "react";
import styles from "../styles/test2.module.css";
import styled from "@emotion/styled";
import gsap from "gsap";
import SplitTextToChars from "../components/SplitTextToChars.js";

const TextStyled = styled.p`
  transform: translateY(130px);
  transition-property: transform;
  transition-duration: 0.3;
  display: inline-block;
`;

export default function Home() {
  const wavyTextRef = useRef(null);

  useEffect(() => {
    if (!wavyTextRef.current) return;
    const chars = SplitTextToChars(wavyTextRef.current);

    gsap.set(wavyTextRef.current, { perspective: 400 });

    gsap.from(
      chars,
      {
        duration: 0.8,
        delay: 0.1,
        y: +100,
        stagger: 0.05,
      },
      "+=0"
    );
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles["split"]}>
        <TextStyled ref={wavyTextRef}>
          creative <br />
          developer
        </TextStyled>
      </div>
    </main>
  );
}
