import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import Page from '../layout/page';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>{this.props.styleTags}</Head>
        <style>{`* {margin: 0; padding: 0; box-sizing: border-box}`}</style>
        <body>
          <Page>
            <Main />
            <NextScript />
          </Page>
        </body>
      </html>
    );
  }
}
