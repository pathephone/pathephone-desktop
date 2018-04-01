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
      env: path.join(__dirname, `../config/env_${env}.json`),
      '~components': path.join(__dirname, '../src/app/view/_/'),
      '~app': path.join(__dirname, '../src/app/'),
      '~root': path.join(__dirname, '../')
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
      template: 'src/app/index.html',
      chunks: ['app'] // relative to root of the application
    }),
    new FriendlyErrorsWebpackPlugin({ clearConsole: env === 'development' })
  ]
})
