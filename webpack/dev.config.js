'use strict'
const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const IsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')
const isomorphicConfig = require('./isomorphic-tools-config')
const hotMiddleware = 'webpack-hot-middleware/client?path=http://localhost:8080/__webpack_hmr&timeout=20000&reload=true'
// const hotMiddleware = 'webpack-hot-middleware/client?path=http://10.42.3.86:8080/__webpack_hmr&timeout=20000&reload=true'
const webpackIsomorphicTools = new IsomorphicToolsPlugin(isomorphicConfig)

module.exports = {
  devtool: 'eval',
  context: path.join(__dirname, '..'),
  entry: [hotMiddleware, 'webpack/hot/dev-server', './src/client'],
  output: {
    path: path.join(__dirname, '..', 'build/public/compiled'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/'
    // publicPath: 'http://10.42.3.86:8080/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
      __CLIENT__: true,
      __SERVER: false
    }),
    webpackIsomorphicTools.development()
  ],
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'standard',
      include: path.join(__dirname, '..', 'src')
    }],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, '..', 'src')
      },
      {
        test: /\.styl$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!stylus'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ],
        include: path.join(__dirname, '..', 'src')
      }
    ]
  },
  postcss: () => [autoprefixer]
}
