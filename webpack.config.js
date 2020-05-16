const webpack = require('webpack');
const HtmlWebpackPlugin = require('webpack-')
const path = require('path');

const buildTime = new Date();

module.exports = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: []
};
