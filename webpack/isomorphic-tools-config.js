'use strict'
const IsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')

module.exports = {
  assets: {
    style_modules: {
      extensions: ['styl', 'css'],
      filter: function (module, regex, options, log) {
        if (options.development) {
          return IsomorphicToolsPlugin.style_loader_filter(module, regex, options, log)
        }

        return regex.test(module.name)
      },
      path: function (module, options, log) {
        if (options.development) {
          return IsomorphicToolsPlugin.style_loader_path_extractor(module, options, log)
        }

        return module.name
      },
      parser: function (module, options, log) {
        if (options.development) {
          return IsomorphicToolsPlugin.css_modules_loader_parser(module, options, log)
        }

        return module.source
      }
    }
  }
}
