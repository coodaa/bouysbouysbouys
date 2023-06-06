import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "../styles/Layout.module.css";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Navbar key={router.route} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
