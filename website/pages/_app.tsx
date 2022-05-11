import "@fontsource/inter/variable.css";
import "@fontsource/jetbrains-mono/latin.css";

import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { GlobalProvider } from "store/global/provider";
import { theme } from "styles/theme";
import { Layout } from "ui/layout";

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <ChakraProvider resetCSS theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </GlobalProvider>
  );
}
