const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [new ReactRefreshWebpackPlugin()],
}
