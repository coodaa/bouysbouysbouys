// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/About.module.scss";
// import typewriterImg from "../public/typewriter.webp";
// import portfolioimgImg from "../public/portfolioimg.jpg";

// export default function Home() {
//   function handleClick() {
//     var x = document.getElementById("more");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

//   function handleClickTM() {
//     var x = document.getElementById("moreTM");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }

//   return (
//     <div>
//       <Head>
//         <title>Florian Schneider | About</title>
//         <meta name="description" content="about florian schneider portfolio" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main>
//         <div className={styles.mainAbout}>
//           <Image
//             className={styles.imgTypewriter}
//             src={typewriterImg}
//             alt="Typewriter"
//           />
//           <h4 className={styles.textImgTop}>creative developer</h4>
//           <h4 className={styles.textImgBottom}>based in berlin</h4>
//         </div>
//         <div className={styles.textAbout}>
//           <p>A journey of curiosity and explorations</p>
//           <p>
//             I&quot;m a creative developer with years of experience in building
//             products and appealing web experiences. I&quot;ve collaborated with
//             individuals and teams to build experiences for SMEs and large
//             enterprises including Wise, Google, Interswitch and Intelia. Each
//             project is an opportuinity to learn new concepts across multiple
//             domains including arts, maths and physics.
//             <Image
//               className={styles.imgPortfolio}
//               src={portfolioimgImg}
//               alt="Portfolio Image"
//             />
//           </p>
//         </div>
//         <div className={styles.service}>
//           <h4 className={styles.service}>services</h4>
//           <div className={styles.showMore}>
//             <p>Frontend development</p>
//             <button className={styles.buttonMore} onClick={handleClick}>
//               +
//             </button>
//           </div>
//           <p id="more">
//             I plan, design, build, test and maintain responsive front end web
//             applications.
//           </p>
//           <div className={styles.showMore}>
//             <p>Technical Management</p>
//             <button className={styles.buttonMore} onClick={handleClickTM}>
//               +
//             </button>
//           </div>
//           <p id="moreTM">
//             I plan, manage and controll your art piece, exhibition, theatre
//             performance.
//           </p>
//         </div>
//       </main>
//     </div>
//   );
// }

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

// import styles from "../styles/Work.module.css";
// import Head from "next/head";
// import TextAnimation from "../components/TextAnimation.js";

// export default function Florian() {
//   return (
//     <div>
//       <Head>
//         <title>Florian</title>
//       </Head>
//       <div className={styles.container}>
//         <main className={styles.main}>
//           <div className={styles.title}>
//             <TextAnimation text="creative" />
//             <TextAnimation text="developer" />
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
