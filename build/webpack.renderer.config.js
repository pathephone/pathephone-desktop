const webpack = require('webpack');
const path = require('path');

module.exports = {
  stats: 'errors-only',
  output: {
    globalObject: 'this',
  },
  resolve: {
    alias: {
      '~shared': path.resolve(__dirname, '../src/shared'),

      '~components': path.resolve(__dirname, '../src/renderer/components'),
      '~actions': path.resolve(__dirname, '../src/renderer/state/actions'),
      '#selectors': path.resolve(__dirname, '../src/renderer/state/selectors.js'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        resolve: { extensions: ['.js', '.jsx'] },
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader' },
      },
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
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      OFFLINE: false,
    }),
  ],
};
