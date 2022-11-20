import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/About.module.scss';
import typewriterImg from '../public/typewriter.jpeg';
import portfolioimgImg from '../public/portfolioimg.jpg';


export default function Home() {
  return (
    <div>
      <Head>
        <title>bouysbouysbouys</title>
        <meta name="description" content="bouys portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.mainAbout}>
          <Image
              className={styles.imgTypewriter}
              src={typewriterImg}
              alt='Typewriter'
              />
          <h4 className={styles.textImgTop}>creative developer</h4>
          <h4 className={styles.textImgBottom}>based in berlin</h4>
        </div>
        <div className={styles.textAbout}>
          <p>A journey of curiosity and explorations</p>
          <p>I'm a creative developer with years of experience in building products
          and appealing web experiences. I've collaborated with individuals and
          teams to build experiences for SMEs and large enterprises including Wise,
          Google, Interswitch and Intelia. Each project is an opportuinity to learn
          new concepts across multiple domains including arts, maths and physics.
        <Image
          className={styles.imgPortfolio}
          src={portfolioimgImg}
          alt='Portfolio Image'
          />
          </p>
        </div>
        <div className={styles.service}>
          <h4>services</h4>



        </div>
      </main>
    </div>
  )
}
