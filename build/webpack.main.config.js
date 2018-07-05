const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  stats: 'errors-only',
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
    alias: {
      '~data': path.resolve(__dirname, '../src/shared/data'),
      '~utils': path.resolve(__dirname, '../src/shared/utils'),
      '#config': path.resolve(__dirname, `../src/shared/config.js`)
    }
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      OFFLINE: false
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../.temp/threads'),
        to: path.resolve(__dirname, '../dist/main/threads')
      }
    ])
  ]
}
