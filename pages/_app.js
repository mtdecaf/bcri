import { ParallaxProvider } from "react-scroll-parallax";

import "../styles/global/global.scss";
import Layout from "../components/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>BC Roof Insepctions</title>
      </Head>
      <ParallaxProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ParallaxProvider>
    </>
  );
}

export default MyApp;
