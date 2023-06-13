import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import SplitTextToChars from "../components/SplitTextToChars";

const useAnimatedText = (settings1, settings2) => {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  useLayoutEffect(() => {
    const animateText = (ref, settings) => {
      if (!ref.current) return;
      const chars = SplitTextToChars(ref.current);
      gsap.set(ref.current, { perspective: 200 });
      gsap.from(chars, settings, "+=0");
    };

    animateText(textRef1, settings1);
    animateText(textRef2, settings2);
  }, []);

  return [textRef1, textRef2];
};

export default useAnimatedText;
