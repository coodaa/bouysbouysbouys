import Image from "next/image";
import styles from "../styles/Work.module.css";

const Work = () => {
  return (
    <div className={styles.workPage}>
      <div className={styles.projectSection}>
        <div className={styles.textSection}>
          <div className={styles.sticky}>Gropiusbau </div>
        </div>
        <div className={styles.imageSection}>
          <Image
            src="/img/gas.webp"
            alt="Beschreibung des Bildes"
            width={500}
            height={300}
          />
          <Image
            src="/img/gas2.webp"
            alt="Beschreibung des Bildes"
            width={500}
            height={300}
          />
          <Image
            src="/img/gas3.webp"
            alt="Beschreibung des Bildes"
            width={500}
            height={300}
          />{" "}
        </div>
      </div>
      <div className={styles.projectSection}>
        <div className={styles.textSection}>
          <div className={styles.sticky}>Reinickendorf </div>
        </div>
        <div className={styles.imageSection}>
          <Image
            src="/img/gas.webp"
            alt="Beschreibung des Bildes"
            width={500}
            height={300}
          />
          <Image
            src="/img/gas2.webp"
            alt="Beschreibung des Bildes"
            width={500}
            height={300}
          />
          <Image
            src="/img/gas3.webp"
            alt="Beschreibung des Bildes"
            width={500}
            height={300}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Work;
