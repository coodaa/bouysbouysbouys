import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "../styles/Index1.module.scss";

export default function Full(props) {
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
    }).from(
      ".line-2",
      {
        scaleX: 0,
        ease: "none",
        transformOrigin: "left top",
      },
      0
    );

    return () => {};
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
          height: 30vh;
        }
        .line {
          width: 100%;
          height: 8px;
          margin: 0 0 10px 0;
          position: relative;
          display: inline-block;
          background-color: rgba(255, 255, 255, 1);
          border: 2px solid red;
        }

        .orange {
          background: red;
          border: 2px solid green;
          height: 20vh;
        }
        .gray {
          background: gray;
          height: 30vh;
        }
      `}</style>
    </div>
  );
}
