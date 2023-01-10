import Link from "next/link";
import styles from "../styles/404.module.scss";

const NotFound = () => {
  return (
    <div className={styles.fourofour}>
      <div className={styles.row}>
        <h1 className={styles.flexitem}>HOOOPS</h1>
        <h2 className={styles.flexitem}>That page cannot be found.</h2>
        <div className={styles.flexitem}>
          Go back to{" "}
          <Link href="/" legacyBehavior>
            <h2 className={styles.item}>Main Page</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
