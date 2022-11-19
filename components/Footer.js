import styles from '../styles/Home.module.scss';
import Link from 'next/link';

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
            <Link href="https://www.linkedin.com/in/florianschneiderberlin/" legacyBehavior>
              <a target="_blank" className={styles.link}>LinkedIn</a>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/coodaa" legacyBehavior>
              <a target="_blank" className={styles.link}>Github</a>
            </Link>
          </li>
        </ul>
        <ul className={styles.commalist}>
          <li className={styles.myself}>
            <a>Design & Development</a>
            <a>Florian Schneider</a>
          </li>
        </ul>
      </div>
      <ul className={styles.imprint}>
        <li>
          <a>2022 Florian Schneider</a>
        </li>
        <li>
          <Link href="/imprint" legacyBehavior>
            <a className={styles.link}>Imprint</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
