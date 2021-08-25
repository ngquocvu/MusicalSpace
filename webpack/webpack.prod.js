const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
}
