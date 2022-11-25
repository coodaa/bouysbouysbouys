import Head from 'next/head'
import styles from '../styles/Work.module.css'
import React, { useEffect } from 'react';
import { gsap } from 'gsap'
import SplitType from 'split-type'


export default function Home() {


  // const header = React.createRef();
  // useEffect(() => {
  //   gsap.to(header.current, {color: "#8c0", duration: 5})
  // }, [header]);


  useEffect(() => {
    const title = document.querySelector("#myText");
    const myText = new SplitType(title)
    gsap.to(".char", {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.05,
      delay: 0.2,
    }, [myText]);
  })



  // if(typeof window !== "undefined"){
  //     const myText = new SplitType('#myText')

  //   useEffect(() => {
  //     gsap.to('.char', {
  //       y: 0,
  //       stagger: 0.05,
  //       delay: 0.2,
  //       duration: .1
  //     })
  //   }, [myText]);
  // }

  return (
    <div>
      <Head>
        <title>bouysbouysbouys</title>
        <meta name="description" content="bouys portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.work}>
          {/* <h1 ref={header}>Creative Developer</h1> */}

          <h1 id="myText" className={styles.myText}>Creative Developer</h1>

        </main>
    </div>
  )
}
