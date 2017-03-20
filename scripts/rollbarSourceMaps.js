#! /usr/bin/env node
/* eslint-disable no-console */
require('../env');
const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

if (!process.env.ROLLBAR_SERVER_TOKEN) {
  console.log('Cannot send source maps unless you setup ROLLBAR_SERVER_TOKEN');
  return;
}

const buildFilesPath = path.join(__dirname, '..', 'dist', 'public', 'assets');

const sourceMaps = fs.readdirSync(buildFilesPath)
  .filter(file => file.match(/\.map$/));

sourceMaps.map((sourceMap) => {
  const file = path.join(buildFilesPath, sourceMap);
  console.log(`Uploading source map: ${sourceMap}`);

  const curl = [
    'curl',
    'https://api.rollbar.com/api/1/sourcemap',
    `-F access_token="${process.env.ROLLBAR_SERVER_TOKEN}"`,
    '-F version=1',
    `-F minified_url="http://dynamichost/assets/${sourceMap.replace('.map', '')}"`,
    `-F source_map=@${file}`,
  ].join(' ');

  const spawn = childProcess.exec(
    curl,
    (error, stdout, stderr) => console.log(error, stdout, stderr)
  );
  return spawn;
});

