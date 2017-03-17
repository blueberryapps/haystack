const webpack = require('webpack');
const path = require('path');
const enviroment = require('../env');
const ManifestPlugin = require('webpack-manifest-plugin');

const environemtVariables = enviroment(process.env, { isBrowser: true });
const isProduction = environemtVariables.NODE_PRODUCTION;
const plugins = isProduction
  ? [new webpack.optimize.UglifyJsPlugin({ sourceMaps: true }), new webpack.optimize.OccurrenceOrderPlugin()]
  : [new webpack.HotModuleReplacementPlugin()];
const entries = isProduction
    ? []
    : ['webpack-hot-middleware/client?reload=true'];

module.exports = {
  entry: {
    entry: entries.concat([
      path.join(__dirname, '../src/browser/main.js')
    ]),
    vendor: ['react', 'react-dom'],
  },
  devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../dist/'),
    sourceMapFilename: '[file].map',
    chunkFilename: '[id].[chunkhash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
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
  plugins: plugins.concat([
    new webpack.DefinePlugin({
      'process.env': environemtVariables
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: '[name].[hash].js',
    }),
    new ManifestPlugin()
  ]),
  target: 'web',
};
