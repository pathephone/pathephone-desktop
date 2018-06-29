const nodeExternals = require('webpack-node-externals')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')
const glob = require('glob')

const entryFiles = glob.sync('src/main/**/*.thread.js')
  .reduce((acc, filePath) => {
    const actualPath = path.resolve(process.cwd(), filePath)
    const basename = path.basename(filePath)
    acc[basename] = actualPath
    return acc
  }, {})

const outputDir = path.resolve(process.cwd(), '.temp/threads')

if (entryFiles.length === 0) {
  console.log('No thread files found.')
  return
}

module.exports = {
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  entry: entryFiles,
  output: {
    path: outputDir,
    filename: '[name]'
  },
  resolveLoader: {
    modules: [ path.join(__dirname, '../node_modules') ]
  },
  stats: 'errors-only',
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
  },
  plugins: [
    new CleanWebpackPlugin(['.temp'], {
      root: path.resolve(__dirname, '../')
    })
  ]
}
