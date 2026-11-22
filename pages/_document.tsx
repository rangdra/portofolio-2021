import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preload" href="/fonts/instrument-sans-basic.woff2" as="font" type="font/woff2" crossOrigin="" />
          <link rel="preload" href="/fonts/instrument-serif-italic-basic.woff2" as="font" type="font/woff2" crossOrigin="" />
          <link rel="icon" type="image/webp" href="/favicon.webp" sizes="128x128" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link
            rel="icon"
            type="image/webp"
            href="/icon-196x196.webp"
            sizes="196x196"
          />
          <link
            rel="icon"
            type="image/webp"
            href="/icon-96x96.webp"
            sizes="96x96"
          />
          <link
            rel="icon"
            type="image/webp"
            href="/icon-32x32.webp"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/webp"
            href="/icon-16x16.webp"
            sizes="16x16"
          />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
