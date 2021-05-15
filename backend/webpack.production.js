const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

const common = require('./webpack.common.js')
const main = path.join(__dirname, 'src/index.ts')
module.exports = merge(common, {
  devtool: 'source-map',
  entry: [main],
  externals: [nodeExternals({})],
  mode: 'production',
  plugins: [new CleanWebpackPlugin()],
})
