import type { ThemeOverride } from "@chakra-ui/react";
import { extendTheme as _extendTheme, useColorModeValue } from "@chakra-ui/react";

export function extendTheme<T extends ThemeOverride>(t: T) {
  return _extendTheme(t) as T;
}

export const mode = useColorModeValue;
