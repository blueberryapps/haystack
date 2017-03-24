export const colors = {
  gray: '#757575',
  light: '#adafaf',
  grayLighter: '#b5b5b5',
  grayLightest: '#ebebeb',
  dark: '#090909',
  black: 'black',
  white: 'white',

  primary: '#13a9d6',
  secondary: '#252525',
  text: '#757575',

  elevate: '#42b583',
};

export const breakpoints = {
  infinity: Infinity,
  xl: 1400,
  l: 1190,
  md: 1024,
  m: 768,
  s: 480,
  xs: 320
};

export const media = {
  xl: `@media screen and (min-width: ${breakpoints.xl}px)`,
  l: `@media screen and (min-width: ${breakpoints.l}px)`,
  m: `@media screen and (min-width: ${breakpoints.m}px)`,
  s: `@media screen and (min-width: ${breakpoints.s}px)`,
  xs: `@media screen and (min-width: ${breakpoints.xs}px)`,
  exactXl: `@media screen and (min-width: ${breakpoints.xl}px)`,
  exactL: `@media screen and (min-width: ${breakpoints.l}px) and (max-width: ${breakpoints.xl - 1}px)`,
  exactM: `@media screen and (min-width: ${breakpoints.m}px) and (max-width: ${breakpoints.l - 1}px)`,
  exactS: `@media screen and (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.m - 1}px)`,
  exactXs: `@media screen and (min-width: ${breakpoints.xs}px) and (max-width: ${breakpoints.s - 1}px)`,
  maxXl: `@media screen and (max-width: ${breakpoints.xl - 1}px)`,
  maxL: `@media screen and (max-width: ${breakpoints.l - 1}px)`,
  maxM: `@media screen and (max-width: ${breakpoints.m - 1}px)`,
  maxS: `@media screen and (max-width: ${breakpoints.s - 1}px)`,
  maxXs: `@media screen and (max-width: ${breakpoints.xs - 1}px)`,
  retina: '@media (-webkit-min-device-pixel-ratio: 2)'
};

export const fontSizeBase = 17;

// helper functions
function em(val, base = fontSizeBase) {
  return `${Math.round((val / base) * 10000) / 10000}em`;
}

function rem(val) {
  return `${Math.round((val / fontSizeBase) * 10000) / 10000}rem`;
}

export { em, rem };
