const webpack = require('webpack')
const path = require('path')

module.exports = {
  stats: 'errors-only',
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
    })
  ]
}
