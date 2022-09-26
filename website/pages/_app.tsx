import { ChakraProvider } from "@chakra-ui/react";
import { GrazProvider, mainnetChains } from "graz";
import type { AppProps } from "next/app";
import { theme } from "styles/theme";
import { Layout } from "ui/layout";

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <GrazProvider
        grazOptions={{
          defaultChain: mainnetChains.cosmoshub,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GrazProvider>
    </ChakraProvider>
  );
}
