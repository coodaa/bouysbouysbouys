import Script from 'next/script'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';


export default function Dashboard() {
  return (
    <>
      <canvas id="scrollAnimation"></canvas>
      <p id="copyExample">AirPods</p>

      <Script src="./scroll.js" />
    </>
  )
}
