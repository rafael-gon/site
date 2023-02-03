import React from 'react';
import Document, { Html, Head, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): React.ReactElement {
    return (
      <Html>
        <Head>
          
          <meta name="msapplication-TileColor" content="#18181b" />
          <meta name="theme-color" content="#F5D0FE" />
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        </Head>
        <body>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;