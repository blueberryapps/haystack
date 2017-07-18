export default function isFeatureOn(name) {
  return getFeatures().indexOf(name) !== -1;
}

export function getFeatures(req) {
  const envFeatures = process.env.IS_BROWSER
    ? window.__FEATURES // eslint-disable-line no-underscore-dangle
    : `${process.env.FEATURES}`.split(',');

  if (req) {
    return `${req.cookies.FEATURES}`.split(',').concat(envFeatures);
  }

  return envFeatures;
}
