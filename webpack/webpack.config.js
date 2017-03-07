const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    entry: [
      'webpack-hot-middleware/client?reload=true',
      path.join(__dirname, '../src/browser/main.js')
    ],
    vendor: ['react', 'react-dom'],
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../dist/'),
    chunkFilename: '[id].[chunkhash].bundle.js'
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: '[name].[hash].js',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../webpack/index.html'),
      chunks: ['entry', 'vendor']
    }),
    // new webpack.optimize.AggressiveSplittingPlugin({
    //   minSize: 30000,
    //   maxSize: 50000
    // }),
    //  TODO AggressiveSplittingPlugin don't work with HtmlWebpackPlugin.
    //  status: https://github.com/jantimon/html-webpack-plugin/issues/446

  ],
  target: 'web',
  // recordsPath: path.join(__dirname, '../dist/records.json'),
  // recordsOutputPath: path.join(__dirname, '../dist/records.json'),
};
