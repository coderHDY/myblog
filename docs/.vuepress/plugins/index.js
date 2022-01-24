const path = require('path');

module.exports = [
  [
    'permalink-pinyin',
    {
      lowercase: true,
      separator: '-'
    }
  ],[
    '@vuepress/pwa',
    {
      serviceWorker: true,
      updatePopup: {
        message: '发现新内容可用',
        buttonText: '刷新'
      }
    }
  ],
  [
    'vuepress-plugin-container',
    {
      type: 'right',
      defaultTitle: '',
    },
  ],
  [
    'vuepress-plugin-container',
    {
      type: 'theorem',
      before: info => `<div class="theorem"><p class="title">${info}</p>`,
      after: '</div>',
    },
  ],
  (options, context) => ({

    // Vue实例上挂载上自己开发的插件
    enhanceAppFiles: [ path.resolve(__dirname, 'enhanceAppFiles.js') ],

    // markdown-it-container 解析器注册插件
    chainMarkdown (config) {
      config
        .plugin('myPlugins')
        .use(require('./myPlugin'), [options])
        .end()
    }
  }),
]