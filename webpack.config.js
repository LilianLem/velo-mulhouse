const webpack = require("webpack");
const path = require("path");

let config = {
  entry: "./src/scripts.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./scripts.js"
  },
  module: {
    rules: [{
      test: /\.scss$/,
      loader: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
    }]
  }
}

module.exports = config;