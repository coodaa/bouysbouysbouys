import Head from 'next/head'
import styles from '../styles/Work.module.css'
import React, { useEffect } from 'react';
import SplitType from 'split-type'
import { gsap } from "gsap/dist/gsap";
import '../styles/Work.module.css'

export default function Home() {

  const header = React.createRef();
  useEffect(() => {
    gsap.to(header.current, {color: "#8c0", duration: 5})
  }, [header]);

  useEffect(() => {
    const title = document.querySelector('#myText');
    const myText = new SplitType(title)
    gsap.to(".char", {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.05,
      delay: 0.2,
    }, [myText]);
  })

  return (
    <div>
      <Head>
        <title>bouysbouysbouys</title>
        <meta name="description" content="bouys portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.work}>
          <h1 ref={header}>Creative Developer</h1>

          <h1 id="myText">Creative Developer</h1>

        </main>
    </div>
  )
}
