import Head from 'next/head';
import styles from '../styles/Index.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>bouysbouysbouys</title>
        <meta name="description" content="bouys portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h2>Imprint</h2>
      </main>
    </div>
  )
}
