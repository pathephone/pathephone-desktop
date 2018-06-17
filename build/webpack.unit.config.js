const nodeExternals = require('webpack-node-externals')
const path = require('path')
const glob = require('glob')

const entryFiles = glob.sync('src/**/*.spec.js')
  .map(filePath => path.resolve(process.cwd(), filePath))
const outputDir = path.resolve(process.cwd(), '.temp/unit')

if (entryFiles.length === 0) {
  console.log('No unit tests found.')
  return
}

module.exports = {
  target: 'node',
  mode: 'development',
  node: {
    __dirname: false,
    __filename: false
  },
  entry: entryFiles,
  output: {
    path: outputDir,
    filename: 'test.js'
  },
  resolve: {
    alias: {
      '~data': path.resolve(__dirname, '../src/shared/data'),
      '~utils': path.resolve(__dirname, '../src/shared/utils'),
      '~resources': path.resolve(__dirname, '../src/shared/assets')
    }
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|mp3|flac|txt|svg)$/,
        use: 'file-loader'
      }
    ]
  }
}
