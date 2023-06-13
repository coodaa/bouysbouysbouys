import Head from "next/head";
import styles from "../styles/Index.module.css";
import useAnimatedText from "../hooks/useAnimatedText";
import VideoComponents from "../components/VideoComponents.js";

export default function Home() {
  const settings1 = {
    duration: 0.8,
    delay: 0.0,
    y: +90,
    stagger: 0.09,
  };
  const settings2 = {
    duration: 0.8,
    delay: -1.355,
    y: +90,
    stagger: 0.09,
  };

  const [upTextRef, upTextRef2] = useAnimatedText(settings1, settings2);

  return (
    <div>
      <Head>
        <title>Florian Schneider Portfolio</title>
        <meta name="description" content="florian schneider portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.char}>
          <p className={styles.textUp} ref={upTextRef}>
            creative
          </p>
          <p className={styles.textUp} ref={upTextRef2}>
            developer
          </p>
        </div>

        <VideoComponents />

        <section className={styles.section}>
          <p>
            PASSIONATE ABOUT WEB TECHNOLOGIES. I LOVE WORKING AT THE
            INTERSECTION OF CREATIVITY AND USER FRIENDLY INTERFACES. I CREATE
            MEMORABLE WEB EXPERIENCES. WHEN I'M NOT BUILDING OR EXPLORING NEW
            WEB EXPERIENCES, I'M PROBABLY FISHING AT A LAKE
          </p>
        </section>
      </main>
    </div>
  );
}
