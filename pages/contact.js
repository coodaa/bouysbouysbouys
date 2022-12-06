// import styles from "../styles/Contact.module.scss";
// import { Blob } from "react-interactive-blob";
// import Link from "next/link";

// export default function Contact() {
//   return (
//     <div className={styles.main}>
//       <div className={styles.blob}>
//         <Blob
//           // height={500}
//           // radius={150}
//           color="white"
//           // sensitivity={0.5}
//           // friction={0.0095}
//           // elasticity={0.001}
//           // acceleration={-1 + Math.random() * 0.1}
//         />
//       </div>
//       <div className={styles.text}>
//         <h3>SEND ME A MESSAGE</h3>
//         <h4>hello@bouysbouysbouys.com</h4>
//       </div>
//       <div>
//         {/* <h3>or connect with me on socials</h3>
//         <ul className={styles.commalist}>
//           <li>
//             <Link
//               href="https://www.linkedin.com/in/florianschneiderberlin/"
//               legacyBehavior
//             >
//               <a target="_blank" className={styles.link}>
//                 LinkedIn
//               </a>
//             </Link>
//           </li>
//           <li>
//             <Link href="https://github.com/coodaa" legacyBehavior>
//               <a target="_blank" className={styles.link}>
//                 Github
//               </a>
//             </Link>
//           </li>
//         </ul> */}
//       </div>
//     </div>
//   );
// }

import Head from "next/head";
import styles from "../styles/Work.module.css";
import React, { useEffect } from "react";
import SplitType from "split-type";
import { gsap } from "gsap/dist/gsap";

export default function Home() {
  useEffect(() => {
    const title = document.querySelector("#my-text");
    const text = new SplitType(title);

    gsap.to(
      "span",
      {
        y: 0,
        stagger: 0.05,
        delay: 0.5,
        duration: 0.9,
      },
      [text]
    );
  });

  return (
    <div>
      <Head>
        <title>bouysbouysbouys</title>
        <meta name="description" content="bouys portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.work}>
        <h1 id="my-text" className={styles["my-text"]}>
          <span id="my-text" className={styles.char}>
            Creative
          </span>
        </h1>
      </main>
    </div>
  );
}
