const nodeExternals = require('webpack-node-externals');
const path = require('path');
const glob = require('glob');

const entryFiles = glob.sync('src/**/*.spec.js')
  .map(filePath => path.resolve(process.cwd(), filePath));
const outputDir = path.resolve(process.cwd(), '.temp/unit');

if (entryFiles.length === 0) {
  console.log('No unit tests found.');
  return;
}

module.exports = {
  target: 'node',
  mode: 'development',
  node: {
    __dirname: false,
    __filename: false,
  },
  entry: entryFiles,
  output: {
    path: outputDir,
    filename: 'test.js',
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
};
