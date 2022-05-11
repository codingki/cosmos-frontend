import { ColorModeScript } from "@chakra-ui/react";
import createEmotionServer from "@emotion/server/create-instance";
import { emotionCache } from "lib/emotion-cache";
import type { DocumentContext } from "next/document";
import Document, { Head, Html, Main, NextScript } from "next/document";
import { theme } from "styles/theme";
import { FaviconsMetaTags } from "ui/seo/favicons-meta-tags";

const css = createEmotionServer(emotionCache);

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = css.extractCritical(initialProps.html);
    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <style
          key="emotion-css"
          dangerouslySetInnerHTML={{ __html: styles.css }}
          data-emotion-css={styles.ids.join(" ")}
        />,
      ],
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
          <FaviconsMetaTags />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
