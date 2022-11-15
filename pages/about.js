import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/About.module.css';
import typewriterImg from '../public/typewriter.jpg';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>bouysbouysbouys</title>
        <meta name="description" content="bouys portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
        <Image
            src={typewriterImg}
            alt='/'
            width='700'
            />
          <p className={styles.about}>I'm a creative developer with years of experience in building products
            and appealing web experiences. I've collaborated with individuals and
            teams to build experiences for SMEs and large enterprises including Wise,
            Google, Interswitch and Intelia. Each project is an opportuinity to learn
            new concepts across multiple domains including arts, maths and physics.</p>
        </div>
      </main>

    </div>
  )
}
