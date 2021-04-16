import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script type="text/javascript" src="/nav.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
