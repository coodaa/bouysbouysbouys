import Head from 'next/head'
import styles from '../styles/Work.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>bouysbouysbouys</title>
        <meta name="description" content="bouys portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.work}>
          <h2>WORK</h2>
        </main>
    </div>
  )
}
