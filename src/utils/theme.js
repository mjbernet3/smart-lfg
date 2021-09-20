import { extendTheme } from "@chakra-ui/react";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";

const theme = extendTheme({
  styles: {
    global: {
      "html, body, #root": {
        margin: "0px",
        padding: "0px",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
      },
    },
  },
  colors: {
    primary: "#2B6CB0",
    surface: {
      first: "#171923",
      second: "#292B34",
    },
    medEmphasisText: "#718096",
  },
  components: {
    Steps,
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

export default theme;
