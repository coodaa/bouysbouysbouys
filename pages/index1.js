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
    <div className="main">
      <div className="description panel blue">
        <h2>scroll down</h2>
      </div>

      <div className="panel orangeWrapper">
        <section className="panel orange">
          <h2>
            <span className="line line-2"></span>This panel grows in size
          </h2>
        </section>
      </div>

      <section className="panel gray">DONE!</section>

      <style jsx>{`
        .line {
          width: 100%;
          max-width: 800px;
          height: 8px;
          margin: 0 0 10px 0;
          position: relative;
          display: inline-block;
          background-color: rgba(255, 255, 255, 1);
          border: 2px solid red;
        }
        .orangeWrapper {
          padding: 0;
        }
        .orange {
          background: red;
          border: 2px solid green;
        }
      `}</style>
    </div>
  );
}
