![Haystack](https://github.com/blueberryapps/haystack/blob/master/docs/haystack_logo.png?raw=true)
# Haystack [![CircleCI](https://circleci.com/gh/blueberryapps/haystack/tree/master.svg?style=svg&circle-token=e5efa5dbeb9c1f6c9f3bab2a2e7602d625055e31)](https://circleci.com/gh/blueberryapps/haystack/tree/master)

> Blueberry JS Stack

## Scripts

- install dependencies: `yarn`
- start app: `yarn start`
- build app: `yarn build`
- test app: `yarn test`

## Development

```
yarn start
open https://localhost:8000
```

## Production Build
- production build: `yarn production:build`
- production server: `yarn production:server`
- production build and server: `yarn run production`

## Polyfills

We are using polyfills from www.polyfill.io and to add new polyfill go to
`src/server/frontend/Html.react.js` and update this line
`<Script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Symbol" />`.

## Configuration

You can set ENV variables from `.bash_profile`, `export NODE_ENV=production`, running them inline `NODE_ENV=production yarn start` or use `.env` file in project root.

| env | values | default | meaning |
|-----|--------|---------|---------|
| NODE_ENV | development, production | development  | development - hot reload, production - compiled & minified code |
| APP_ENV | development, staging, production | development | env for APP where it runs |
| PORT | number | 8000 | which port to use to run server side express App |
| HTML_ERRORS | true | enabled by default in production | Show nicely formatted html errors for 404 and 500 |
| ROLLBAR_CLIENT_TOKEN | string | default project in rollbar | token for browser error reporting |
| ROLLBAR_SERVER_TOKEN | string | default project in rollbar | token for server error reporting |
| GTM_ID | string | null | add this to enable Google Tag Manager |
| | | | |

## Variants

* [with basic redux](https://github.com/blueberryapps/haystack/tree/redux)
* [with basic router](https://github.com/blueberryapps/haystack/tree/router)
* [with redux + router](https://github.com/blueberryapps/haystack/tree/redux-router)

## Made with love by
[![](https://camo.githubusercontent.com/d88ee6842f3ff2be96d11488aa0d878793aa67cd/68747470733a2f2f7777772e676f6f676c652e636f6d2f612f626c75656265727279617070732e636f6d2f696d616765732f6c6f676f2e676966)](https://www.blueberry.io)
