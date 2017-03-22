export default ({
  '*': {
    WebkitTapHighlightColor: 'transparent',
  },

  '*, ::after, ::before': {
    boxSizing: 'border-box',
  },

  html: {
    fontFamily: 'sans-serif',
    MsTextSizeAdjust: '100%',
    color: 'blue',
    WebkitTextSizeAdjust: '100%',
  },

  body: {
    margin: 0,
  },

  'article, aside, details, figcaption, figure, footer, header, main, menu, nav, section, summary': {
    display: 'block',
  },

  'audio, canvas, progress, video': {
    display: 'inline-block',
  },

  'audio:not([controls])': {
    display: 'none',
    height: 0,
  },

  progress: {
    verticalAlign: 'baseline',
  },

  'template, [hidden]': {
    display: 'none',
  },

  a: {
    backgroundColor: 'transparent',
  },

  'a:active, a:hover': {
    outlineWidth: 0,
  },

  'abbr[title]': {
    borderBottom: 'none',
    textDecoration: 'underline',
  },

  'b, strong': {
    fontWeight: 'bolder',
  },

  dfn: {
    fontStyle: 'italic',
  },

  h1: {
    fontSize: '2em',
    margin: '0.67em 0',
  },

  mark: {
    backgroundColor: '#ff0',
    color: '#000',
  },

  small: {
    fontSize: '80%',
  },

  'sub, sup': {
    fontSize: '75%',
    lineHeight: 0,
    position: 'relative',
    verticalAlign: 'baseline',
  },

  sub: {
    bottom: '-0.25em',
  },

  sup: {
    top: '-0.5em',
  },

  img: {
    borderStyle: 'none',
  },

  'svg:not(:root)': {
    overflow: 'hidden',
  },

  'code, kbd, pre, samp': {
    fontFamily: 'monospace, monospace',
    fontSize: '1em',
  },

  figure: {
    margin: '1em 40px',
  },

  hr: {
    boxSizing: 'content-box',
    height: 0,
    overflow: 'visible',
  },

  'button, input, select, textarea': {
    font: 'inherit',
    margin: 0,
  },

  optgroup: {
    fontWeight: 'bold',
  },

  'button, input, select': {
    overflow: 'visible',
  },

  'button, select': {
    textTransform: 'none',
  },

  'button, html [type="button"], [type="reset"], [type="submit"]': {
    WebkitAppearance: 'button',
  },

  'button::-moz-focus-inner, input::-moz-focus-inner': {
    border: 0,
    padding: 0,
  },

  'input[type=number]': {
    MozAppearance: 'textfield',
  },

  select: {
    MozAppearance: 'none',
  },

  'button:-moz-focusring, input:-moz-focusring': {
    outline: '1px dotted ButtonText',
  },

  fieldset: {
    border: '1px solid #c0c0c0',
    margin: '0 2px',
    padding: '0.35em 0.625em 0.75em',
  },

  legend: {
    boxSizing: 'border-box',
    color: 'inherit',
    display: 'table',
    maxWidth: '100%',
    padding: 0,
    whiteSpace: 'normal',
  },

  textarea: {
    overflow: 'auto',
  },

  '[type="checkbox"], [type="radio"]': {
    boxSizing: 'border-box',
    padding: 0,
  },

  '[type="number"]::Webkit-inner-spin-button, [type="number"]::Webkit-outer-spin-button': {
    height: 'auto',
  },

  '[type="search"]': {
    WebkitAppearance: 'textfield',
  },

  '[type="search"]::Webkit-search-cancel-button, [type="search"]::Webkit-search-decoration': {
    WebkitAppearance: 'none',
  }
});
