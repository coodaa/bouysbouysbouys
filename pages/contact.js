import styles from "../styles/Contact.module.scss";
import { Blob } from "react-interactive-blob";
import Link from "next/link";

export default function Contact() {
  return (
    <div className={styles.main}>
      <div className={styles.blob}>
        <Blob
          height={500}
          radius={150}
          color="white"
          sensitivity={0.5}
          friction={0.0095}
          // elasticity={0.001}
          // acceleration={-1 + Math.random() * 0.1}
        />
      </div>
      <div className={styles.text}>
        <h3>SEND ME A MESSAGE</h3>
        <h4>hello@bouysbouysbouys.com</h4>
      </div>
      <div>
        {/* <h3>or connect with me on socials</h3>
        <ul className={styles.commalist}>
          <li>
            <Link
              href="https://www.linkedin.com/in/florianschneiderberlin/"
              legacyBehavior
            >
              <a target="_blank" className={styles.link}>
                LinkedIn
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/coodaa" legacyBehavior>
              <a target="_blank" className={styles.link}>
                Github
              </a>
            </Link>
          </li>
        </ul> */}
      </div>
    </div>
  );
}
