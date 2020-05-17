const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const fs = require ('fs');
const buildTime = new Date();
console.log(buildTime)

fs.writeFileSync('./dist/deploy-time.txt', buildTime.toISOString());

module.exports = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'default',
      filename: 'index.html',
      template: path.join(__dirname, 'index.html'),
      buildTime: buildTime.toISOString(),
    }),
    new HtmlWebpackPlugin({
      title: 'last-modified',
      filename: 'last-modified/index.html',
      template: path.join(__dirname, 'index.html'),
      buildTime: buildTime.toISOString(),
    }),
    new HtmlWebpackPlugin({
      title: 'expires',
      filename: 'expires/index.html',
      template: path.join(__dirname, 'index.html'),
      buildTime: buildTime.toISOString(),
    }),
    new HtmlWebpackPlugin({
      title: 'etag',
      filename: 'etag/index.html',
      template: path.join(__dirname, 'index.html'),
      buildTime: buildTime.toISOString(),
    }),
    new HtmlWebpackPlugin({
      title: 'max-age=0',
      filename: 'max-age-0/index.html',
      template: path.join(__dirname, 'index.html'),
      buildTime: buildTime.toISOString(),
    }),
    new HtmlWebpackPlugin({
      title: 'max-age=60',
      filename: 'max-age-60/index.html',
      template: path.join(__dirname, 'index.html'),
      buildTime: buildTime.toISOString(),
    }),
    new HtmlWebpackPlugin({
      title: 'max-age=600',
      filename: 'max-age-600/index.html',
      template: path.join(__dirname, 'index.html'),
      buildTime: buildTime.toISOString(),
    }),
    new HtmlWebpackPlugin({
      title: 'max-age=60000',
      filename: 'max-age-60000/index.html',
      template: path.join(__dirname, 'index.html'),
      buildTime: buildTime.toISOString(),
    }),
    new HtmlWebpackPlugin({
      title: 'no-cache',
      filename: 'no-cache/index.html',
      template: path.join(__dirname, 'index.html'),
      buildTime: buildTime.toISOString(),
    }),
    new HtmlWebpackPlugin({
      title: 'no-store',
      filename: 'no-store/index.html',
      template: path.join(__dirname, 'index.html'),
      buildTime: buildTime.toISOString(),
    }),
    new Webpack.DefinePlugin({
      'process.env': {
        BUILD_TIME: JSON.stringify(buildTime.toISOString()),
      }
    })
  ]
};
