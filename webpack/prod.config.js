'use strict'
const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const CleanPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const IsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')

const isomorphicConfig = require('./isomorphic-tools-config')

const webpackIsomorphicTools = new IsomorphicToolsPlugin(isomorphicConfig)

const outputPath = './build/public/compiled'

const gitSHA = process.env.SHA || 'no-git-sha'

module.exports = {
  context: path.join(__dirname, '..'),
  entry: { main: ['babel-polyfill', './src/client'] },
  output: {
    path: outputPath,
    filename: `[name]-${gitSHA}.min.js`,
    publicPath: '/compiled/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin(`[name]-${gitSHA}.min.css`, { allChunks: true }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      },
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: { warnings: false }
    }),
    webpackIsomorphicTools
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: path.join(__dirname, '..', 'src')
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!stylus')
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[name].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ],
        include: path.join(__dirname, '..', 'src')
      }
    ]
  },
  postcss: () => [autoprefixer]
}
