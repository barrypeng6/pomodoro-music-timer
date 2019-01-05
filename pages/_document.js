import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"></link>
          <link href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah" rel="stylesheet"></link>
          <style>{`
            html {
              height: 100%;
            }
            body {
              margin: 0;
              height: 100%;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <script src="http://www.youtube.com/player_api"></script>
          <NextScript />
        </body>
      </html>
    );
  }
}
