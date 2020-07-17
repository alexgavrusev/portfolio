import capsize from "capsize";
import { transparentize } from "@chakra-ui/theme-tools";
import { fontMetrics } from "../capsize";

const textStyles = capsize({ fontMetrics, capHeight: 12, lineGap: 12 });

export const Button = {
  register: {
    parts: ["container", "text"],
    variants: ["contained", "outlined"],
  },
  baseStyle: {
    container: {
      cursor: "pointer",
      py: 12,
      px: 16,
      borderWidth: 2,
      borderStyle: "solid",
      borderRadius: 4,
      transitionProperty: "all",
      transitionTimingFunction: "ease-out-quart",
      transitionDuration: "fast",
    },
    text: {
      fontFamily: "mono",
      textTransform: "uppercase",
      fontWeight: "button",
      letterSpacing: "button",
      ...textStyles,
    },
  },
  variants: {
    contained: ({ theme }) => ({
      container: {
        bgColor: transparentize("primary.900", 1)(theme),
        borderColor: "transparent",
        _hover: {
          bgColor: transparentize("primary.900", 0.8)(theme),
        },
      },
      text: {
        color: "text.onPrimary",
      },
    }),
    outlined: ({ theme }) => ({
      container: {
        bgColor: transparentize("primary.900", 0)(theme),
        borderColor: transparentize("primary.900", 1)(theme),
        _hover: {
          bgColor: transparentize("primary.900", 0.1)(theme),
          borderColor: transparentize("primary.900", 0.8)(theme),
        },
      },
      text: {
        color: "text.onSurface",
      },
    }),
  },
};
