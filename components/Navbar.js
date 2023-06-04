import { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleClick = (path) => {
    setIsAnimating(true);
    setTimeout(() => {
      router.push(path).then(() => {
        setIsAnimating(false);
        setShouldAnimate(true);
        closeMenu();
      });
    }, 800);
  };

  const checkActive = (path) => {
    return router.pathname === path ? styles.active : "";
  };

  return (
    <div
      className={`${styles.pageTransition} ${
        isAnimating ? styles.animate : ""
      }`}
    >
      <nav className={`${styles.nav} ${shouldAnimate ? styles.animate : ""}`}>
        <div className={styles.leftSide} onClick={() => handleClick("/")}>
          <Link className={styles.link} href="/">
            Florian Schneider
          </Link>
        </div>
        <ul className={isOpen ? styles.commalistOpen : styles.commalist}>
          <div className={styles.hideOnDesktop}>
            <li onClick={() => handleClick("/")}>
              <Link className={`${styles.link} ${checkActive("/")}`} href="/">
                Home
              </Link>
            </li>
          </div>
          <li onClick={() => handleClick("/work")}>
            <Link
              className={`${styles.link} ${checkActive("/work")}`}
              href="/work"
            >
              Work
            </Link>
          </li>
          <li onClick={() => handleClick("/about")}>
            <Link
              className={`${styles.link} ${checkActive("/about")}`}
              href="/about"
            >
              About
            </Link>
          </li>
          <li onClick={() => handleClick("/contact")}>
            <Link
              className={`${styles.link} ${checkActive("/contact")}`}
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className={styles.menu} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Menu"}
        </div>
      </nav>
    </div>
  );
}
