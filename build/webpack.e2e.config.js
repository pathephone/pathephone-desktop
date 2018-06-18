const nodeExternals = require('webpack-node-externals')
const path = require('path')

const entryFile = path.resolve(process.cwd(), 'src/e2e/tests.js')
const outputDir = path.resolve(process.cwd(), '.temp/e2e')

module.exports = {
  target: 'node',
  mode: 'development',
  node: {
    __dirname: false,
    __filename: false
  },
  entry: entryFile,
  output: {
    path: outputDir,
    filename: 'test.js'
  },
  resolveLoader: {
    modules: [ path.join(__dirname, '../node_modules') ]
  },
  resolve: {
    alias: {
      '~reusable': path.resolve(__dirname, '../src/e2e/reusable'),
      '~data': path.resolve(__dirname, '../src/shared/data'),
      '~utils': path.resolve(__dirname, '../src/shared/utils'),
      '~resources': path.resolve(__dirname, '../src/shared/assets')
    }
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js?$/,
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
