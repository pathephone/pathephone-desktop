const path = require('path')
const nodeExternals = require('webpack-node-externals')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => ({
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  externals: [nodeExternals()],
  resolve: {
    alias: {
      env: path.resolve(__dirname, `../config/env_${env}.json`),
      '~actions': path.resolve(__dirname, '../src/renderer/data/store/actions.js'),
      '~selectors': path.resolve(__dirname, '...src/renderer/data/store/selectors.js')
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', 'css-loader', 'sass-loader'
        ]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|mp3|flac)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: './index.html',
      template: 'src/renderer/index.html',
      chunks: ['app'] // relative to root of the application
    }),
    new FriendlyErrorsWebpackPlugin({ clearConsole: env === 'development' })
  ]
})
