import capsize from "capsize";
import { fontMetrics } from "../capsize";
import { mq } from "../breakpoints";

const heroHeadingMobileStyles = capsize({
  fontMetrics,
  capHeight: 16,
  lineGap: 16,
});

const heroHeadingDesktopStyles = capsize({
  fontMetrics,
  capHeight: 24,
  lineGap: 24,
});

export const Heading = {
  baseStyle: {
    color: "text.onSurface",
    fontFamily: "mono",
    fontWeight: "heading",
    whiteSpace: "nowrap",
    ...heroHeadingMobileStyles,
    [mq.md]: heroHeadingDesktopStyles,
  },
};
