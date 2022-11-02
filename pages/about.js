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
        <Link href="/">Florian Schneider</Link>
        <a>Work, About, Contact</a>


      </nav>

      <main className={styles.main}>
        <h1>ABOUT</h1>
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
