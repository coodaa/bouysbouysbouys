import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Full() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".orangeWrapper",
        scrub: true,
        pin: true,
        start: "50% 50%",
        end: "+=200%",
      },
    });

    tl.from(".orange", {
      scale: 0.5,
      ease: "none",
      transformOrigin: "left top",
    });
  }, []);

  return (
    <div>
      <div className="blue">
        <h2>CREATIVE DEVELOPER</h2>
      </div>

      <div className="orangeWrapper">
        <section className="orange">
          <h2>
            <span></span>VIDEO
          </h2>
        </section>
      </div>

      <section className="gray">ABOUT TEXT!</section>

      <style jsx>{`
        .blue {
          background: blue;
          height: 10vh;
        }

        .orange {
          background: red;
          border: 2px solid green;
          height: 30vh;
        }
        .gray {
          background: gray;
          height: 10vh;
        }
      `}</style>
    </div>
  );
}
