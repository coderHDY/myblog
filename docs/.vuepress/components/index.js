const path = require('path')

module.exports = (options, context) => ({

  // Vue实例上挂载上自己开发的插件
  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceAppFiles.js')
  ],

  // markdown-it-container 解析器注册插件
  chainMarkdown (config) {
    config
      .plugin('myPlugins')
      .use(require('./myPlugin'), [options])
      .end()
  }
})
