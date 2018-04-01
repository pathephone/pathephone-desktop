const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')

module.exports = env => {
  return merge(base(env), {
    entry: {
      background: './src/background/index.js',
      app: './src/renderer/index.js'
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, '../app')
    }
  })
}
