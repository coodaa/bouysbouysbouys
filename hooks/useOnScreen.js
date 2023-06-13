import { useState, useEffect } from "react";

const useOnScreen = (ref, rootMargin = "0px") => {
  // State und setter für die Speicherung der Sichtbarkeit
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update unseres States, wenn der observer callback ausgeführt wird
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // clean up-Funktion
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Leere Array stellt sicher, dass der Effekt nur bei der ersten Renderung und beim unmounting ausgeführt wird

  return isIntersecting;
};

export default useOnScreen;
