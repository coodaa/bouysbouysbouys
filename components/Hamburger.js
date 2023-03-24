import styles from "../styles/Hamburger.module.scss";
// import Link from "next/link";

export default function Hamburger() {
  return (
    <>
      <div className={styles.hamburger}>
        <div className={`${styles.burger} ${styles.burger1}`} />
        <div className={`${styles.burger} ${styles.burger2}`} />
        <div className={`${styles.burger} ${styles.burger3}`} />
      </div>
    </>
  );
}
