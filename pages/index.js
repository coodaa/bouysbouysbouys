import Head from 'next/head';
import styles from '../styles/Index.module.css';
import { useEffect, useState } from 'react';


export default function Home() {

  const [scrolled, setScrolled] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);
    return () => window.removeEventListener("scroll", scrollProgress);
  }, [])

  const scrollProgress = () => {
    const scrollpx = document.documentElement.scrollTop;
    const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrollLen = Math.ceil(scrollpx / winHeightPx * 100 / 0.69)

    setScrolled(scrollLen)
  }

  return (
    <div>
      <Head>
        <title>bouysbouysbouys</title>
        <meta name="description" content="bouys portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* <h2 className={styles.staircaseAnimation}>creative developer</h2> */}
        <header className={styles.AppHeader}>
          <img src={`https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${scrolled.toString().padStart(4, '0')}.jpg` } />
        </header>
        <p className={styles.staircaseAnimation}>florian schneider</p>
        <p className={styles.staircaseAnimation}>ist ein toller typ</p>
        <p className={styles.staircaseAnimation}>book me</p>
      </main>
    </div>
  )
}
