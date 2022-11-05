import styles from '../styles/Home.module.css';
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className={styles.footer}>
        <a>
          Florian Schneider Creative Developer
        </a>

        <ul className={styles.commalist}>
          <li>
            <Link href="https://www.linkedin.com/in/florianschneiderberlin/" legacyBehavior>
              <a target="_blank" className={styles.link}>LinkedIn</a>
            </Link>
          </li>
        </ul>
        <ul className={styles.commalist}>
          <li>
            <Link href="https://github.com/coodaa" legacyBehavior>
              <a target="_blank" className={styles.link}>Github</a>
            </Link>
          </li>
        </ul>

        <a>
          Design & Development Florian Schneider
        </a>
      </footer>
  );
}

export default Footer;
