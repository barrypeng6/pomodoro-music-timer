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
