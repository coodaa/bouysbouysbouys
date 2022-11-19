import styles from '../styles/Home.module.scss';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <ul className={styles.commalist}>
          <li>
            <Link className={styles.link} href="/">Florian Schneider</Link>
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
            <Link href="mailto:schneider.f@me.com" legacyBehavior>
              <a className={styles.link}>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
  );
}

export default Navbar;
