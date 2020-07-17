import capsize from "capsize";
import { fontMetrics } from "../capsize";

const tooltipTextStyles = capsize({
  fontMetrics,
  capHeight: 12,
  lineGap: 12,
});

export const Tooltip = {
  register: {
    parts: ["container", "text"],
  },

  baseStyle: (props) => ({
    container: {
      position: "absolute",
      top: 0,
      left: "50%",
      transform: "translate3d(-50%, -40px, 0)",
      p: 8,
      bgColor: "primary.900",
      borderRadius: 4,
      opacity: props.open ? 1 : 0,
      transitionProperty: "all",
      transitionTimingFunction: "ease-out-quart",
      transitionDuration: "fast",
    },
    text: {
      color: "text.onPrimary",
      fontFamily: "mono",
      whiteSpace: "nowrap",
      ...tooltipTextStyles,
    },
  }),
};
