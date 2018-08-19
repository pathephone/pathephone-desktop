const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  stats: 'errors-only',
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    alias: {
      '~shared': path.resolve(__dirname, '../src/shared'),
    },
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      OFFLINE: false,
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../.temp/threads'),
        to: path.resolve(__dirname, '../dist/main/threads'),
      },
    ]),
  ],
};
