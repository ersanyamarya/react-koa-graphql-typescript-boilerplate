import { join, resolve } from 'path'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HtmlWebPackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { Configuration as WebpackConfiguration, ProvidePlugin } from 'webpack'
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration
}

const nodeModules = resolve(__dirname, 'node_modules')
const app = join(__dirname, 'src', 'index.tsx')
const template = join(__dirname, 'src', 'index.html')
const dist = resolve(__dirname, 'dist')
const favicon = join(__dirname, 'public', 'assets', 'favicon.ico')
const config: Configuration = {
  entry: {
    app,
    vendor: ['react', 'react-dom'],
  },
  output: {
    filename: '[name].bundle.js',
    path: dist,
  },
  devtool: 'source-map',
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      process: 'process/browser',
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: 'ts-loader',
        exclude: [nodeModules],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  devServer: {
    contentBase: dist,
    compress: true,
    port: 4200,
    host: '0.0.0.0',
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: './src/**/*',
      },
    }),
    new HtmlWebPackPlugin({
      template,
      favicon,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new ProvidePlugin({
      process: 'process/browser',
    }),
  ],
}

export default config
