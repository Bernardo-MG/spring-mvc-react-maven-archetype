var path = require('path');
const webpack = require('webpack');

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
const OUTPUT_FILE_VENDOR = 'vendor.bundle.js';

const OUTPUT_PATH = process.env.OUTPUT_PATH;
const OUTPUT_PATH_BUNDLE = OUTPUT_PATH + 'bundle.js';

// Modules dependencies directory
const MODULE_PATH = process.env.MODULE_PATH;

// Plugins
let plugins = [
   new webpack.optimize.OccurrenceOrderPlugin(),
   new webpack.optimize.CommonsChunkPlugin({
      name : 'vendor',
      filename : OUTPUT_FILE_VENDOR,
      minChunks : 2
   }),
   new webpack.NoEmitOnErrorsPlugin(),
   new webpack.DefinePlugin({
      APP_VERSION : JSON.stringify(PROJECT_VERSION),
      REPO_URL : JSON.stringify(PROJECT_REPO_URL)
   })
]

module.exports = {
   context : __dirname,
   entry: {
      app: INPUT_PATH_ENTRY,
   },
   cache : true,
   output : {
      path : path.resolve(__dirname, OUTPUT_PATH),
      filename : 'bundle.js'
   },
   resolve : {
      extensions : [ '.scss', '.css', '.js', '.json' ],
      modules : [
         'src/main/js',
         path.resolve(__dirname, INPUT_PATH),
         'node_modules',
         path.resolve(__dirname, MODULE_PATH)
      ]
   },
   module : {
      rules : [
       		{
               test : /(\.js)$/,
               enforce: 'pre',
               exclude: /node_modules/,
               loader: 'eslint-loader'
            },
            {
               test : /(\.js)$/,
               exclude: /node_modules/,
               use: {
                  loader : 'babel-loader'
               }
            },
            {
               test : /\.(css|scss)$/,
               exclude: /node_modules/,
               use: [
                  {
                     loader: 'file-loader',
                     options: {
                        name: '[name].css'
                     }
                  },
                  {
                     loader: 'sass-loader',
                     options: {
                        includePaths : [ path.resolve(__dirname, MODULE_PATH) ]
                     }
                  }
               ]
            } ]
   },
   plugins
};
