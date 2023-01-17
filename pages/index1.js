import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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

      <section className="panel red">
        <h2>more</h2>
      </section>

      <div className="panel orangeWrapper">
        <section className="panel orange">
          <h2>
            <span className="line line-2"></span>This panel grows in size
          </h2>
        </section>
      </div>

      <section className="panel purple"></section>

      <section className="panel gray">DONE!</section>

      <style jsx>{`
        .line {
          width: 100%;
          max-width: 800px;
          height: 8px;
          margin: 0 0 10px 0;
          position: relative;
          display: inline-block;
          background-color: green);
        }
        .orangeWrapper {
          padding: 0;
        }
      `}</style>
    </div>
  );
}
