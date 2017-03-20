// Bootstrap environment
require('../../env');

// Enabling Source maps for node
require('source-map-support/register');
require('babel-register');// eslint-disable-line import/no-extraneous-dependencies

// Start timer
const timer = require('../utils/timer');

timer.start();

// Require libraries
const chalk = require('chalk');
const clearConsole = require('react-dev-utils/clearConsole');
const drawHaystack = require('../utils/drawHaystack');
const errorHandler = require('./middlewares/errorHandler');
const express = require('express');
const fs = require('fs');
const path = require('path');

const isInteractive = process.stdout.isTTY;
const rootDir = require('path').resolve(__dirname, '..', '..');

// HOT RELOAD: preload application so it will be loaded directly after removing cache
// and it will not wait for user interacation :D
const preloadApplication = () => {
  try {
    console.log(chalk.cyan('Application preload started'));
    require('./main'); // eslint-disable-line global-require
    console.log(chalk.green('♥ Application preload finished'));
    return true;
  } catch (error) {
    console.error(chalk.red('❌  Unable to preload application because of syntax error'));
    console.log();
    console.error(error);
    return false;
  }
};

// HOT RELOAD: Reloading code in running node application without need of restart
// https://medium.com/@kevinsimper/dont-use-nodemon-there-are-better-ways-fc016b50b45e#.gn0pnlbnb
const watchChanges = () => {
  const watcher = require('chokidar'); // eslint-disable-line import/no-extraneous-dependencies, global-require
  const ignoreRegexp = /([/\\]\.)|(\.json$)/;
  const sourceFilesRegexp = new RegExp(path.resolve(__dirname, '..'));

  // Chokidar is watching for file changes in src directory and ignoring dotfiles and *.json
  watcher.watch(path.join(__dirname, '..'), { ignored: ignoreRegexp }).on('all', (event, file) => {
    if (event === 'change') {
      if (isInteractive) { clearConsole(); }
      console.log(chalk.red('NODE HOT RELOAD:'), ' Changes detected in ', chalk.yellow(path.relative(rootDir, file)));
      timer.start();

      // remember cache size
      const originalCacheSize = Object.keys(require.cache).length;

      // remove all files from require cache which are in ./src/ directory
      // this will force next call of require to load files again
      Object.keys(require.cache).forEach((id) => {
        if (sourceFilesRegexp.test(id)) delete require.cache[id];
      });

      // enforce node to cache main.js directly after removing cache
      // This speeds up development process - after change node is caching new changed content
      // and user will get faster response
      if (originalCacheSize !== Object.keys(require.cache).length) {
        if (preloadApplication()) {
          console.log(
            chalk.green('NODE HOT RELOAD:'),
            ' Caching new version finished in ',
            chalk.green('%dms'), ' at %s',
            timer.get(),
            new Date()
          );
        }
      }
    }
  });
};

// Create express app
const app = express();

const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackIsomorphicAssets = require('../../webpack/assets');
const WebpackIsomorphicTools = require('webpack-isomorphic-tools');
const webpack = require('webpack');
const config = require('../../webpack/webpack.config');

global.webpackIsomorphicTools = new WebpackIsomorphicTools(webpackIsomorphicAssets)
  .server(rootDir, () => console.log('Webpack isomorphic tools started.'));

// Make express to listen on port
const port = process.env.PORT || 8000;

if (process.env.NODE_ENV === 'development') {
  const options = {
    key: fs.readFileSync(path.join(__dirname, '/cert/server.key')),
    cert: fs.readFileSync(path.join(__dirname, '/cert/server.crt'))
  };

  const spdy = require('spdy'); // eslint-disable-line global-require
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    noInfo: true
  });
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  spdy
    .createServer(options, app)
    .listen(port, (error) => {
      if (error) {
        console.error(error);
        return process.exit(1);
      }
      watchChanges();
      return undefined;
    });
} else {
  app.listen(port);
}


// HOT RELOAD: We need to require('./main') in every call to express app
// When application is required and in cache it will not slow it down
// But for development it is crucial for reload to perform require on every call.
app.use((req, res, cb) => {
  req.generatedAssets = generatedAssets; // eslint-disable-line no-param-reassign
  try {
    require('./main')(req, res, cb); // eslint-disable-line global-require
  } catch (error) {
    // This error handling is for developer to see nice formated output
    // of node in browser whe it was not able to load code
    errorHandler(error, req, res);
  }
});

// This is most simple error handler which will show error,
// when there is some error in other error handlers
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.error(chalk.red('Last resort error handler catched'), err.stack);
  res.status(500).send(`
    Last resort error handler caught error at path: ${req.path}
    ${err.stack.toString().replace(/\[\d+m/mg, '')}
  `);
});

// HOT RELOAD: enforce node to cache main.js so first request will be already from cache
if (preloadApplication()) {
  if (process.env.NODE_ENV === 'development') {
    drawHaystack();
  }

  console.log(
    'Server started in %sms at port %s in %s ENV and %s APP ENV',
    chalk.green(timer.get()),
    chalk.blue(port),
    chalk.yellow(process.env.NODE_ENV),
    chalk.red(process.env.APP_ENV)
  );
}
