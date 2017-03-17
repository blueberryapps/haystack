![Haystack](https://github.com/blueberryapps/haystack/blob/master/docs/haystack_logo.png?raw=true)
# Haystack [![CircleCI](https://circleci.com/gh/blueberryapps/haystack/tree/master.svg?style=svg&circle-token=e5efa5dbeb9c1f6c9f3bab2a2e7602d625055e31)](https://circleci.com/gh/blueberryapps/haystack/tree/master)

> Blueberry JS Stack

## Scripts

- install dependencies: `yarn`
- start app: `yarn start`
- build app: `yarn build`
- test app: `yarn test`

## Production Build
- production build: `yarn build`
- production server: `yarn production:server`
- production build and server: `yarn run production`

## Configuration

| env | values | default | meaning |
|-----|--------|---------|---------|
| NODE_ENV | development, production | development  | development - hot reload, production - compiled & minified code |
| PORT | number | 8000 | which port to use to run server side express App |
| HTML_ERRORS | true | enabled by default in production | Show nicely formatted html errors for 404 and 500 |
| | | | |
