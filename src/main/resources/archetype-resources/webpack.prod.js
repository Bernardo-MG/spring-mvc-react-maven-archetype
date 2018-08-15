const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
   devtool: 'cheap-module-source-map',
   plugins: [
      new UglifyJsPlugin({
         sourceMap: true,
         uglifyOptions: {
            compress: {
               warnings: false,
               conditionals: true,
               unused: true,
               comparisons: true,
               sequences: true,
               dead_code: true,
               evaluate: true,
               if_return: true,
               join_vars: true,
            },
            output: {
               comments: false
            }
         }
      }),
      new webpack.DefinePlugin({
         'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new OptimizeCssAssetsPlugin()
   ]
});
