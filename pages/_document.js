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
          <title>Pomodoro Music Timer</title>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-132387945-1"
          />
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-132387945-1');
            `}
          </script>

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
          <script async src="https://www.youtube.com/player_api" />
          <NextScript />
        </body>
      </html>
    );
  }
}
