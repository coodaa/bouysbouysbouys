import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={`${styles.commalist} `}>
        <li>
          <Link className={styles.link} href="/">
            Florian Schneider
          </Link>
        </li>
      </ul>
      <ul className={styles.commalist}>
        <li>
          <Link href="/work" legacyBehavior>
            <a className={styles.link}>Work</a>
          </Link>
        </li>
        <li>
          <Link href="/about" legacyBehavior>
            <a className={styles.link}>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact" legacyBehavior>
            <a className={styles.link}>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
