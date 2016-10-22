require('babel-register')({
  babelrc: false,
  presets: ['react', 'stage-0', 'es2015'],
  only: [/src/, "app/controller"]
})
const path = require('path')
const IsomorphicToolsPlugin = require('webpack-isomorphic-tools')
const isomorphicConfig = require('./webpack/isomorphic-tools-config')

global.__CLIENT__ = false
global.__SERVER__ = true
global.__DEVELOPMENT__ = process.env.NODE_ENV === 'development'

const srcPath = path.resolve('./src')
const regx = new RegExp(`.json$|.styl$|${srcPath}`, 'i')

if (__DEVELOPMENT__) {
  if (!require('piping')({
    hook: true,
    ignore: regx
  })) {
    return;
  }
}

global.webpackIsomorphicTools = new IsomorphicToolsPlugin(isomorphicConfig)
  .development(__DEVELOPMENT__)
  .server(path.resolve('./'), function () {
    require('./app/index.js')
  })
