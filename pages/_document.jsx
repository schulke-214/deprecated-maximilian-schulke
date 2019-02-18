import Document, { Head, Main, NextScript } from "next/document";

export default class AppDocument extends Document {
  render() {
    return (
      <html>
        <Head />
        <body>
          <h1>from Document</h1>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
