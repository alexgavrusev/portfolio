export const breakpoints = ["38rem", "52rem"];

const getMediaQuery = (size) => `@media(min-width: ${size})`;

export const mq = {
  sm: getMediaQuery(breakpoints[0]),
  md: getMediaQuery(breakpoints[1]),
};
