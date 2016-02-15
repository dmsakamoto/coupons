'use strict'

let path = require('path');
let webpack = require('webpack');

module.exports = {
  entry: [
    "webpack-hot-middleware/client",
    "./client/index.js"
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
};
