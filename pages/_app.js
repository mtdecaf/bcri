import "../styles/global/global.scss";
import Layout from "../components/layout";
import Head from "next/head";
import { ServicesContextProvider } from "../context/state";

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
