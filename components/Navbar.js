import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 500);
  };

  const checkActive = (path) => {
    return router.pathname === path ? styles.active : "";
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.leftSide}>
        <Link href="/" legacyBehavior>
          <a className={styles.link} onClick={closeMenu}>
            Florian Schneider
          </a>
        </Link>
      </div>
      <ul className={isOpen ? styles.commalistOpen : styles.commalist}>
        <div className={styles.hideOnDesktop}>
          <li>
            <Link href="/" legacyBehavior>
              <a
                className={`${styles.link} ${checkActive("/")}`}
                onClick={closeMenu}
              >
                Home
              </a>
            </Link>
          </li>
        </div>
        <li>
          <Link href="/work" legacyBehavior>
            <a
              className={`${styles.link} ${checkActive("/work")}`}
              onClick={closeMenu}
            >
              Work
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about" legacyBehavior>
            <a
              className={`${styles.link} ${checkActive("/about")}`}
              onClick={closeMenu}
            >
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact" legacyBehavior>
            <a
              className={`${styles.link} ${checkActive("/contact")}`}
              onClick={closeMenu}
            >
              Contact
            </a>
          </Link>
        </li>
      </ul>
      <div className={styles.menu} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Menu"}
      </div>
    </nav>
  );
}
