const path = require('path')

const { NODE_ENV = 'production' } = process.env

module.exports = {
  resolve: {
    alias: {
      '~resources': path.resolve(__dirname, '../resources'),

      '~data': path.resolve(__dirname, '../src/shared/data'),
      '~utils': path.resolve(__dirname, '../src/shared/utils'),
      '#config': path.resolve(__dirname, `../src/shared/config/${NODE_ENV}.js`),

      '~components': path.resolve(__dirname, '../src/renderer/components'),
      '~actions': path.resolve(__dirname, '../src/renderer/state/actions'),
      '#selectors': path.resolve(__dirname, '../src/renderer/state/selectors.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
      // {
      //   test: /\.css$/,
      //   use: ['css-loader']
      // },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     'css-loader', 'sass-loader'
      //   ]
      // }
    ]
  }
}
