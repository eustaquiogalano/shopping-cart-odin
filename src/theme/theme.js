import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brown: {
      500: "#8c5a3c",
      600: "#c08552",
      700: "#4b2e2b",
    },
  },
  components: {
    Input: {
      defaultProps: {
        focusBorderColor: "brown.500",
      },
    },
  },
});
