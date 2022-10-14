import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          data-href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        ></link>
        <meta
          name="description"
          content="BC Roof Inspections is a certified Roofing Inspection Company in British Columbia. Servicing its clients throughout the lower mainland."
        ></meta>
      </Head>
      <body>
        <div className="over-flow-wrapper">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
