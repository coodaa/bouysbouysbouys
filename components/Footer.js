import styles from "../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <ul className={styles.commalist}>
          <li className={styles.myself}>
            <a>Florian Schneider</a>
            <a>Creative Development</a>
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
        <ul className={styles.commalistfirstchild}>
          <div className={styles.myself}>
            <li>
              <Link href="/legal" legacyBehavior>
                <a className={styles.link}>Legal Notice</a>
              </Link>
            </li>
            <li>
              <a>2023</a>
            </li>
          </div>
        </ul>
      </div>
    </footer>
  );
}
