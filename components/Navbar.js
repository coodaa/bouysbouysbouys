import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Hamburger from "../components/Hamburger";
import { useState } from "react";

export default function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <nav className={styles.nav}>
      <ul
        className={`${styles.commalist} ${
          hamburgerOpen ? styles.inline : styles.none
        }`}
      >
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
      <div className={styles.hamburger} onClick={toggleHamburger}>
        <Hamburger />
      </div>
    </nav>
  );
}
