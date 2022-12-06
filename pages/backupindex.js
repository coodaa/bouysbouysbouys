// import Head from "next/head";
// import styles from "../styles/backupindex.module.css";
// import { gsap } from "gsap/dist/gsap";
// import { useEffect, useState } from "react";

// export default function Home() {
//   useEffect(() => {
//     const title = document.querySelector("#my-text");
//     gsap.to(
//       "span",
//       {
//         y: 0,
//         stagger: 0.05,
//         delay: 0.46,
//         duration: 0.9,
//       },
//       [title]
//     );
//   });

//   const [scrolled, setScrolled] = useState(0);
//   useEffect(() => {
//     window.addEventListener("scroll", scrollProgress);
//     return () => window.removeEventListener("scroll", scrollProgress);
//   }, []);
//   const scrollProgress = () => {
//     const scrollpx = document.documentElement.scrollTop;
//     const winHeightPx =
//       document.documentElement.scrollHeight -
//       document.documentElement.clientHeight;
//     const scrollLen = Math.ceil(((scrollpx / winHeightPx) * 100) / 0.69);
//     setScrolled(scrollLen);
//   };

//   return (
//     <div>
//       <Head>
//         <title>bouysbouysbouys</title>
//         <meta name="description" content="bouys portfolio" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main className={styles.main}>
//         <div className={styles["big-text"]}>
//           <h1 id="my-text" className={styles["my-text"]}>
//             <span className={styles.char}>C</span>
//             <span className={styles.char}>r</span>
//             <span className={styles.char}>e</span>
//             <span className={styles.char}>a</span>
//             <span className={styles.char}>t</span>
//             <span className={styles.char}>i</span>
//             <span className={styles.char}>v</span>
//             <span className={styles.char}>e</span>
//             <span className={styles.char}>&nbsp;</span>
//             <span className={styles.char}>D</span>
//             <span className={styles.char}>e</span>
//             <span className={styles.char}>v</span>
//             <span className={styles.char}>e</span>
//             <span className={styles.char}>l</span>
//             <span className={styles.char}>o</span>
//             <span className={styles.char}>p</span>
//             <span className={styles.char}>e</span>
//             <span className={styles.char}>r</span>
//           </h1>
//         </div>
//         <header className={styles.AppHeader}>
//           <img
//             src={`https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${scrolled
//               .toString()
//               .padStart(4, "0")}.jpg`}
//           />
//           <p className={styles.float}>florian schneider</p>
//           <p className={styles.float}>ist ein toller typ</p>
//           <p className={styles.float}>book me</p>
//         </header>
//         <div className={styles["big-text-right"]}>
//           <h1 id="my-text" className={styles["my-text"]}>
//             <span className={styles.char}>f</span>
//             <span className={styles.char}>l</span>
//             <span className={styles.char}>o</span>
//             <span className={styles.char}>r</span>
//             <span className={styles.char}>i</span>
//             <span className={styles.char}>a</span>
//             <span className={styles.char}>n</span>
//             <span className={styles.char}>
//               &nbsp; <br></br>
//             </span>
//             <span className={styles.char}>s</span>
//             <span className={styles.char}>c</span>
//             <span className={styles.char}>h</span>
//             <span className={styles.char}>n</span>
//             <span className={styles.char}>e</span>
//             <span className={styles.char}>i</span>
//             <span className={styles.char}>d</span>
//             <span className={styles.char}>e</span>
//             <span className={styles.char}>r</span>
//           </h1>
//         </div>
//         <div>
//           <p className={styles.shortAboutMe}>
//             PASSIONATE {"\n"}ABOUT WEB TECHNOLOGIES. I LOVE WORKING AT THE
//             INTERSECTION OF CREATIVITY AND USER FRIENDLY INTERFACES. I CREATE
//             MEMORABLE WEB EXPERIENCES. WHEN I&quot;M NOT BUILDING OR EXPLORING
//             NEW WEB EXPERIENCES, I&quot;M PROBABLY FISHING AT A LAKE
//           </p>
//         </div>
//       </main>
//     </div>
//   );
// }
