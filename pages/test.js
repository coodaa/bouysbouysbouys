import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/test.module.css';
import typewriterImg from '../public/typewriter.jpeg';
import portfolioimgImg from '../public/portfolioimg.jpg';
import { useEffect, useState } from 'react';

export default function Home() {
  // const [count, setCount] = useState(1)

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

      <main>
        <div className={styles.test}>
          <header className={styles.AppHeader}>
            <img src={`https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${scrolled.toString().padStart(4, '0')}.jpg` } />
          </header>
        </div>

      </main>
    </div>
  )
}
