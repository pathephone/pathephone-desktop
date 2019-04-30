const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const glob = require('glob');

const entryFiles = glob.sync('src/main/**/*.thread.js')
  .reduce((acc, filePath) => {
    const actualPath = path.resolve(process.cwd(), filePath);
    const basename = path.basename(filePath);
    acc[basename] = actualPath;
    return acc;
  }, {});

const outputDir = path.resolve(process.cwd(), '.temp/threads');

if (entryFiles.length === 0) {
  console.log('No thread files found.');
  return;
}

module.exports = {
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  entry: entryFiles,
  output: {
    path: outputDir,
    filename: '[name]',
  },
  resolveLoader: {
    modules: [path.join(__dirname, '../node_modules')],
  },
  stats: 'errors-only',
  resolve: {
    alias: {
      '~shared': path.resolve(__dirname, '../src/shared'),
    },
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|mp3|flac|txt|svg)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['.temp'], {
      root: path.resolve(__dirname, '../'),
    }),
  ],
};
