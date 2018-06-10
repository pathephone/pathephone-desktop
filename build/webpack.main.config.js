const webpack = require('webpack')
const path = require('path')

const { NODE_ENV = 'production' } = process.env

module.exports = {
  resolve: {
    alias: {
      '~data': path.resolve(__dirname, '../src/shared/data'),
      '~utils': path.resolve(__dirname, '../src/shared/utils'),
      '#config': path.resolve(__dirname, `../src/shared/config.js`)
    }
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV
    })
  ]
}
