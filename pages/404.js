import Link from "next/link";
import styles from "../styles/404.module.css";

export default function NotFound() {
  return (
    <div className={styles.four}>
      <div className={styles.row}>
        <h1 className={styles.flexitem}>HOOOPS</h1>
        <h2 className={styles.flexitem}>That page cannot be found.</h2>
        <div className={styles.flexitem}>
          Go back to{" "}
          <Link className={styles.link} href="/">
            Main Page
          </Link>
        </div>
      </div>
    </div>
  );
}
