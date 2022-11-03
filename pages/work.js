import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';


export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
      <title>bouysbouysbouys</title>
      <meta name="description" content="bouys portfolio" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <nav className={styles.nav}>
        <ul className={styles.menu}>
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

      <main className={styles.main}>
        <h2>WORK</h2>

      </main>

      <footer className={styles.footer}>
        <a>
          Florian Schneider Creative Developer
        </a>
        <a>
          LinkedIn, Github
        </a>
        <a>
          Design & Development Florian Schneider
        </a>
      </footer>
    </div>
  )
}
