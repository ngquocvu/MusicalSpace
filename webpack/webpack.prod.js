const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const dotenv = require('dotenv')
const webpack = require('webpack')
module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
  ],
}
