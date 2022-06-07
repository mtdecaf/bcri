import { ServicesContextProvider } from "../context/services";

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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ServicesContextProvider>
    </>
  );
}

export default MyApp;
