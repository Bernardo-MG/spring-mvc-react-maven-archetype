const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

process.traceDeprecation = true;

module.exports = merge(common, {
   mode: 'development',
   devtool: 'cheap-module-eval-source-map',
   plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.LoaderOptionsPlugin({
         debug: true
      })
   ]
});
