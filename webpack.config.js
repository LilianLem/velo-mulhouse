const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let config = {
  entry: "./src/scripts.js",
  resolve: {extensions: ['.js', '.ts']},
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./scripts.js"
  },
  plugins: [
      new HtmlWebpackPlugin({
          title: 'Infos Vélocité en temps réel - Vélo Mulhouse Live',
          template: './src/index.html',
          inject: false,
          minify: {
              removeComments: true,
              collapseWhitespace: false
          }
      }),
      new MiniCssExtractPlugin({
          filename: 'styles.css'
      }),
      require('autoprefixer')
  ],
  module: {
    rules: [{
      test: /\.scss$/,
      loader: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader']
    },
    {
      test: [/.js$/],
      exclude: /(node_modules)/,
      use: {
          loader: 'babel-loader',
          options: {
              presets: [
                  '@babel/preset-env'
              ]
          }
      }
    }]
  }
}

module.exports = config;