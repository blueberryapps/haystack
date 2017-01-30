const path = require('path');



module.exports = {
  entry: [
    path.join(__dirname, '../src/browser/index.js')
  ],
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // instead of excluding we just include source files
        // otherwise there will be a problem with linked modules
        include: [
          path.join(__dirname, '../src'),
        ],
        use: [{ loader: 'babel-loader',
          options: {
            cacheDirectory: false,
            presets: ['es2015', 'react', 'stage-1'],
            plugins: [
              'add-module-exports',
              'transform-decorators-legacy',
              ['transform-runtime', { polyfill: false, regenerator: false }]
            ],
            env: {
              development: {
                // plugins: [
                //   'react-hot-loader/babel'
                // ]
              },
              production: {
                plugins: [
                  'transform-react-constant-elements',
                  'transform-react-inline-elements',
                  'transform-react-remove-prop-types'
                ]
              }
            }
          }
        }]
      },
    ]
  }
};