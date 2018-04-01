const merge = require('webpack-merge')
const path = require('path')
const base = require('./webpack.base.config')

// Test files are scattered through the whole project. Here we're searching
// for them and generating entry file for webpack.

const entryFile = path.resolve(process.cwd(), 'src/e2e/tests.js')
const outputDir = path.resolve(process.cwd(), '.temp')

module.exports = env => {
  return merge(base(env), {
    entry: entryFile,
    output: {
      filename: 'e2e.js',
      path: outputDir
    }
  })
}
