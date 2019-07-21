var path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Environment profile
const env = process.env.NODE_ENV || 'development';

// Project version
const PROJECT_VERSION = process.env.APP_VERSION || '';

// Project URL
const PROJECT_REPO_URL = process.env.REPO_URL;

// Input directory
const INPUT_PATH = process.env.INPUT_PATH;
const INPUT_PATH_ENTRY = INPUT_PATH + 'index.js';

// Output directory
const OUTPUT_PATH = process.env.OUTPUT_PATH || './build/';

// Modules dependencies directory
const MODULE_PATH = process.env.MODULE_PATH;

// Plugins
let plugins = [
   new webpack.optimize.OccurrenceOrderPlugin(),
   new webpack.DefinePlugin({
      APP_VERSION : JSON.stringify(PROJECT_VERSION),
      REPO_URL : JSON.stringify(PROJECT_REPO_URL)
   })
]

module.exports = {
   context : __dirname,
   entry: {
      app: INPUT_PATH_ENTRY
   },
   output: {
      path: path.join(__dirname, OUTPUT_PATH),
      filename: '[name].js'
   },
   cache : true,
   optimization: {
      // Generates vendor and app bundles
      splitChunks: {
         cacheGroups: {
            commons: {
               chunks: 'initial',
               minChunks: 2,
               maxInitialRequests: 5,
               minSize: 0
            },
            vendor: {
               test: /node_modules/,
               chunks: 'initial',
               name: 'vendor',
               priority: 10,
               enforce: true
            }
         }
      }
   },
   resolve : {
      extensions : [ '.scss', '.css', '.js', '.json' ],
      modules : [
         'src',
         path.resolve(__dirname, INPUT_PATH),
         'node_modules',
         path.resolve(__dirname, MODULE_PATH)
      ]
   },
   module : {
      rules : [
            {
               test : /(\.js)$/,
               exclude: /node_modules/,
               use: ['babel-loader', 'eslint-loader']
            } ]
   },
   plugins
};
