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
      <main className={styles.main}>
        <h2>WORK</h2>
      </main>
    </div>
  )
}
