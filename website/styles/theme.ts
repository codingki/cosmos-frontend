import type { ThemeOverride } from "@chakra-ui/react";
import { extendTheme, theme as defaultTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";

import { colors } from "./colors";

export const themeOverrides = (<T extends ThemeOverride>(t: T) => t)({
  config: {
    initialColorMode: "system",
  },
  colors: {
    gray: colors.neutral,
  },
  fonts: {
    body: `'InterVariable', ${defaultTheme.fonts.body}`,
    heading: `'InterVariable', ${defaultTheme.fonts.heading}`,
    mono: `'JetBrains Mono', ${defaultTheme.fonts.mono}`,
  },
  sizes: {
    "screen-h": "100vh",
    "screen-w": "100vw",
    "sidebar-w": "300px",
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      ":root": {
        colorScheme: mode("light", "dark")(props),
      },
      body: {
        bg: mode("gray.100", "gray.900")(props),
        color: mode("gray.800", "whiteAlpha.900")(props),
        fontFamily: "body",
        lineHeight: "base",
        textRendering: "optimizeLegibility",
        transitionDuration: "normal",
        transitionProperty: "background-color",
        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
      },
      "*::placeholder": {
        color: mode("gray.400", "whiteAlpha.400")(props),
      },
      "*, *::before, &::after": {
        borderColor: mode("gray.200", "whiteAlpha.300")(props),
        wordWrap: "break-word",
      },
    }),
  },
});

export const theme = extendTheme(
  themeOverrides,
  //
) as typeof themeOverrides;
