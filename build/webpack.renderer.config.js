const webpack = require('webpack');
const path = require('path');

module.exports = {
  stats: 'errors-only',
  output: {
    globalObject: 'this',
  },
  resolve: {
    alias: {
      '~data': path.resolve(__dirname, '../src/shared/data'),
      '~utils': path.resolve(__dirname, '../src/shared/utils'),
      '#config': path.resolve(__dirname, '../src/shared/config.js'),

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
