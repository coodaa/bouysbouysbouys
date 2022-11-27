import React, { useEffect, useRef } from "react";
import styles from "../styles/test.module.css";
import styled from "@emotion/styled";
import gsap from "gsap";
import SplitTextToChars from "../components/SplitTextToChars.js";

const TextStyled = styled.p`
  font-size: calc(32px + (64 - 32) * ((100vw - 320px) / (1600 - 320)));
  margin: 0;
  color: white;
  position: absolute;
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
        duration: 0.2,
        opacity: 0,
        scale: 1,
        delay: 0.4,
        y: -40,
        rotationX: -90,
        transformOrigin: "0% 50% -50",
        ease: "inOut",
        stagger: 0.025,
      },
      "+=0"
    );
  }, []);

  return (
    <div className={styles["split"]}>
      <TextStyled ref={wavyTextRef}>creative developer</TextStyled>
    </div>
  );
}
