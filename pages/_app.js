import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Layout from "../components/Layout";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [shouldAnimate, setShouldAnimate] = useState(true);

  const handleAnimation = () => {
    setShouldAnimate(true);
  };

  return (
    <>
      <Layout shouldAnimate={shouldAnimate} handleAnimation={handleAnimation}>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </>
  );
}

export default MyApp;
