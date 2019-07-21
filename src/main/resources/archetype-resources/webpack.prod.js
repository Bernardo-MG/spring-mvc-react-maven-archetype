const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
   mode: 'production',
   devtool: 'cheap-module-source-map',
   plugins: [
      new OptimizeCssAssetsPlugin()
   ]
});
