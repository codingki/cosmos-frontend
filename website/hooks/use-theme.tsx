import type { Theme as ChakraTheme } from "@chakra-ui/react";
import { useTheme as useChakraTheme } from "@chakra-ui/react";
import type { Theme } from "styles/theme";

export function useTheme() {
  return useChakraTheme<ChakraTheme & Theme>();
}
