const path = require('path')
const nodeModules = path.resolve(__dirname, 'node_modules')
const dist = path.resolve(__dirname, 'dist')
module.exports = {
  module: {
    rules: [
      {
        exclude: [nodeModules],
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  output: {
    filename: 'server.js',
    path: dist,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  target: 'node',
}
