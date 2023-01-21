import styles from "../styles/Home.module.scss";
import Link from "next/link";

const Footer = () => {
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
            <Link href="/legal" legacyBehavior>
              <a className={styles.link}>Legal Notice</a>
            </Link>
            <a>2022</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
