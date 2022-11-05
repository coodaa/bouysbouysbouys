import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Navbar from '../components/Navbar';



export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
      <title>bouysbouysbouys</title>
      <meta name="description" content="bouys portfolio" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
      <main className={styles.main}>
        <h2>WORK</h2>

      </main>

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
    </div>
  )
}
