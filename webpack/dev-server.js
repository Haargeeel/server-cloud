'use strict'
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const config = require('./dev.config')

const compiler = webpack(config)
const port = 8080
const host = 'localhost'
const options = {
  contentBase: `http://${host}:${port}`,
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: config.output.publicPath,
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: { colors: true }
}

const app = express()

app.use(webpackDevMiddleware(compiler, options))
app.use(webpackHotMiddleware(compiler))

app.listen(port, err => {
  if (err) return console.error(err)
  console.info('Webpack development server listening on port %s', port)
})
