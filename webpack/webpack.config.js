const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    entry: path.join(__dirname, '../src/browser/main.js'),
    vendor: ['react', 'react-dom'],
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.join(__dirname, '../dist/'),
    chunkFilename: "[id].[chunkhash].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // instead of excluding we just include source files
        // otherwise there will be a problem with linked modules
        include: [
          path.join(__dirname, '../src/'),
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
                plugins: [
                  // 'react-hot-loader/babel'
                ]
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
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: '[name].[chunkhash].js',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../webpack/index.html'),
      chunks: ['entry', 'vendor']
      // inject: 'body',
      // title: 'Title',
      // filename: 'index.html'

    }),
    // new webpack.optimize.AggressiveSplittingPlugin({
    //   minSize: 30000,
    //   maxSize: 50000
    // }),

  ],
  target: 'web',
  recordsPath: path.join(__dirname, '../dist/records.json'),
  recordsOutputPath: path.join(__dirname, '../dist/records.json'),
};