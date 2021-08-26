const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const dotenv = require('dotenv').config()
const webpack = require('webpack')
module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [new ReactRefreshWebpackPlugin(), new Dotenv()],
}
