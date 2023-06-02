import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuClass = isOpen ? styles.commalistOpen : styles.commalist;

  return (
    <nav className={styles.nav}>
      <ul className={styles.commalist}>
        <li>
          <Link href="/" legacyBehavior>
            <a className={styles.link}>Florian Schneider</a>
          </Link>
        </li>
      </ul>
      <ul className={menuClass}>
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
      <div className={styles.menu} onClick={() => setIsOpen(!isOpen)}>
        Menu
      </div>
    </nav>
  );
}
