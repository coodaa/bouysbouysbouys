import Link from 'next/link'
import styles from '../styles/Home.module.scss';


const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>HOOOPS</h1>
      <h2>That page cannot be found.</h2>
      <p>Go back to <Link href="/" legacyBehavior><a>Portfolio</a></Link></p>
    </div>
  );
}

export default NotFound;
