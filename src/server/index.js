// Bootstrap environment
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

require('source-map-support/register');
require('babel-register');
const timer = require('../utils/timer')
timer.start();

const drawHaystack = require('../utils/drawHaystack');
const express = require('express');
const path = require('path');
const rootDir = require('path').resolve(__dirname, '..', '..');

// HOT RELOAD: preload application so it will be loaded directly after removing cache
// and it will not wait for user interacation :D
const preloadApplication = () => {
  try {
    require('./app'); // eslint-disable-line global-require
  } catch (error) {
    console.error('Unable to server application because of syntax error');
    console.log(error)
  }
};

// HOT RELOAD: Reloading code in running node application without need of restart
// https://medium.com/@kevinsimper/dont-use-nodemon-there-are-better-ways-fc016b50b45e#.gn0pnlbnb
const watchChanges = () => {
  const watcher = require('chokidar'); // eslint-disable-line global-require
  const ignoreRegexp = /([/\\]\.)|(\.json$)/;
  const sourceFilesRegexp = new RegExp(path.resolve(__dirname, '..'));

  // Chokidar is watching for file changes in src directory and ignoring dotfiles and *.json
  watcher.watch(path.join(__dirname, '..'), { ignored: ignoreRegexp }).on('all', (event) => {
    if (event === 'change') {
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
        preloadApplication();
        console.log('NODE HOT RELOAD: caching new version finished in %dms', timer.get());
      }
    }
  });
};

const app = express();

// HOT RELOAD: We need to require('./main') in every call to express app
// When application is required and in cache it will not slow it down
// But for development it is crucial for reload to perform require on every call.
app.use((req, res, cb) => {
  try {
    require('./app')(req, res, cb); // eslint-disable-line global-require
  } catch (error) {
    // This error handling is for developer to see nice formateed output
    // of node in browser whe it was not able to load code
    const errorText = error.stack.toString()
      .replace(/\[1m/mg, '<span style="color: red">')
      .replace(/\[39m/mg, '<span style="color: gray">')
      .replace(/\[32m/mg, '<span style="color: green">')
      .replace(/\[90m/mg, '<span style="color: darkgray">')
      .replace(/\[33m/mg, '<span style="color: black">')
      .replace(/\[\d+m/mg, '<span style="color: gray">')
      .replace(/\[0m/mg, '</span>')
      .replace(/\n/gm, '<br />');

    res.status(500).send(`<html></body><code><pre>${errorText}</pre></code></body></html>`);
  }
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  if (process.env.NODE_ENV === 'development') {
    watchChanges();
  }
});

// HOT RELOAD: enforce node to cache app.js so first request will be already from cache
preloadApplication();

console.log('Server started in %dms at port %d ENV:[%s]', timer.get(), port, process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  drawHaystack();
}
