// eslint-disable-file no-param-reassign
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

// Load environment variables from .env file in root
const envFile = path.join(__dirname, '..', '.env');
if (fs.existsSync(envFile)) dotenv.config({ path: envFile });

function cleanup(constants, isWebpack) {
  return Object.keys(constants).reduce((previous, key) => {
    const value = constants[key];

    if (!value) {
      return previous;
    }

    // If variable is string Webpack needs to wrap it into "\"variable\""
    // This is because webpack is inserting it directly to code without any
    // modifications so {foo: 'bar'} in code:
    // 'good' + process.env.foo
    // will result to:
    // 'good' + bar
    // with stringifying to JSON will result be:
    // 'good' + "bar"
    if (typeof value === 'string' && isWebpack) {
      return Object.assign(previous, { [key]: JSON.stringify(value) });
    }
    return Object.assign(previous, { [key]: value });
  }, {});
}

function configure(env, { isBrowser, customEnvVariables }) {
  return cleanup(
    Object.assign({
      APP_ENV: env.APP_ENV || 'development',
      NODE_ENV: env.NODE_ENV !== 'production' ? 'development' : 'production',
      NODE_PRODUCTION: env.NODE_ENV === 'production',
      NODE_DEVELOPMENT: env.NODE_ENV !== 'production',
      ROLLBAR_SERVER_TOKEN: env.ROLLBAR_SERVER_TOKEN || '9275dbbc016848b2ac0e31564426d1be',
      ROLLBAR_CLIENT_TOKEN: env.ROLLBAR_CLIENT_TOKEN || '606f40eba9e14fb9860f8075543ca98c',
      IS_BROWSER: isBrowser,
      GTM_ID: env.GTM_ID || null,
      ENABLE_SEARCH_BOTS: process.env.ENABLE_SEARCH_BOTS,
    },
    customEnvVariables || {}
  ), isBrowser);
}

// Setup custom ENV variables into process.env
process.env = Object.assign(
  {},
  process.env,
  configure(process.env, { isBrowser: false })
);

module.exports = configure;
