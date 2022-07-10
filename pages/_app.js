import { ServicesContextProvider } from "../context/services";
import { ParallaxProvider } from 'react-scroll-parallax';

import "../styles/global/global.scss";
import Layout from "../components/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head >
       <title>BC Roof Insepctions</title>
      </Head>
      <ServicesContextProvider>
        <ParallaxProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ParallaxProvider>
      </ServicesContextProvider>
    </>
  );
}

export default MyApp;
