import { Box } from "@chakra-ui/react";
import { SkipNavContent, SkipNavLink } from "@chakra-ui/skip-nav";
import Head from "next/head";
import type { ReactNode } from "react";
import { MetaTags } from "ui/seo/meta-tags";

export interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <meta content="minimum-scale=1, initial-scale=1, width=device-width" name="viewport" />
      </Head>
      <MetaTags />
      <SkipNavLink>Skip to content</SkipNavLink>
      <Box as="main">
        <SkipNavContent />
        {children}
      </Box>
    </>
  );
}
