/* globals __dirname module */

'use strict';
const path = require('path');
const webpack = require('webpack');
const config = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      { test: /\.glsl$/, use: 'raw-loader' },
      { test: /\.woff2?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.otf$/, use: 'file-loader' },
      { test: /\.ttf$/, use: 'file-loader' },
      { test: /\.eot$/, use: 'file-loader' },
      { test: /\.svg$/, use: 'url-loader' },
      { test: /\.html$/, use: 'html-loader' },
      { test: /\.css$/, use: 'style-loader!css-loader' },
      {
        test: /\.ltrTreeLayoutWorker\.js$/,
        use: { loader: 'worker-loader' }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEBUG__: process.env.NODE_ENV !== 'production',
      __HIDE_DATA__: !!process.env.HIDE_DATA
    }),
  ]
}

module.exports = config;