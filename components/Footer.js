import styles from "../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <ul className={styles.commalist}>
          <li className={styles.myself}>
            <a>Florian Schneider</a>
            <a>Creative Developer</a>
          </li>
        </ul>
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
        </ul>
        <ul className={styles.commalist}>
          <li className={styles.myself}>
            <Link className={styles.link} href="/legal">
              Legal Notice{" "}
            </Link>
            <a>2022</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
