const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const webpack = require('webpack')
module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [new ReactRefreshWebpackPlugin(), new Dotenv()],
}
