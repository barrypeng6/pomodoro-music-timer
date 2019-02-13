import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en-US">
        <Head>
          <link rel="shortcut icon" type="image/png" href="../static/favicon.ico" />
          <link rel="apple-touch-icon" type="image/png" href="../static/favicon.ico" />
          <title>Pomodoro Music Timer</title>
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-132387945-1"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=no"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
            integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah"
            rel="stylesheet"
          />
          <style>
            {`
            html {
              height: 100%;
            }
            body {
              margin: 0;
              height: 100%;
            }
          `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <script async src="https://www.youtube.com/player_api" /> */}
        </body>
      </html>
    );
  }
}
