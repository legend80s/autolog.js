const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { resolveRoot } = require('./util');
const webpackCommonConfig = require('./webpack.common.conf');

module.exports = merge(webpackCommonConfig, {
  mode: 'development',
  entry: resolveRoot('./dev/index.ts'),
  output: {
    filename: 'antd-message-mini-showcase.js',
    path: resolveRoot(''),
    // library: 'autolog',
    libraryTarget: 'umd',
    environment: {
      const: false,
      arrowFunction: false,
    },
  },
  devServer: {
    compress: true,
    port: 9000,
    static: {
      watch: true,
      directory: resolveRoot('./dev'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: 'raw-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'AntD Message Mini Showcase',
      favicon: resolveRoot('./autolog.svg'),
      template: resolveRoot('./dev/index.html'),
    }),
  ],
});
