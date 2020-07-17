import * as components from "./components";
import { breakpoints } from "./breakpoints";
import transition from "./transition";

const theme = {
  fonts: {
    mono:
      "'OperatorMonoSSm', SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
  letterSpacings: {
    button: 1.25,
    body: 0.5,
    h5: 0,
    h4: 0.25,
  },
  fontWeights: {
    button: 600,
    body: 500,
    heading: 500,
  },
  colors: {
    primary: {
      50: "#ddeff5",
      100: "#bcd5d9",
      200: "#98b8be",
      300: "#739ba2",
      400: "#58858e",
      500: "#3c707a",
      600: "#32626a",
      700: "#244f56",
      800: "#183c43",
      900: "#07272d",
    },
    text: {
      onSurface: "#07272d",
      onPrimary: "#fff",
    },
  },
  space: [],
  components,
  breakpoints,
  transition,
};

export default theme;
