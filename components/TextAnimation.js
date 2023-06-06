// components/TextAnimation.js
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function TextAnimation({ text }) {
  const titleRef = useRef(null);

  useEffect(() => {
    const chars = Array.from(titleRef.current.children);

    gsap.set(chars, { y: "100%", opacity: 0 });

    gsap.to(chars, {
      duration: 0.8,
      delay: 0.5,
      y: 0,
      opacity: 1,
      stagger: {
        each: 0.05,
        from: "end",
      },
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="text-animation" ref={titleRef}>
      {text.split("").map((char, index) => (
        <span key={index} className="char">
          {char}
        </span>
      ))}
    </div>
  );
}
