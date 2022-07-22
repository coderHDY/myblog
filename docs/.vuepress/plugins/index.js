const path = require('path');

module.exports = [
  [
    '@vuepress/last-updated',
    {
      transformer: (timestamp, lang) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString();
      }
    }
  ],
  [
    'sitemap',
    {
      hostname: 'https://coderhdy.com'
    }
  ], ['seo',
    {
      siteTitle: (_, $site) => '西瓜皮儿的技术博客',
      title: $page => $page.title,
      description: $page => $page.frontmatter.description,
      author: (_, $site) => '西瓜皮儿',
      type: $page => 'article',
      url: (_, $site, path) => 'https://coderhdy.com' + path,
      image: ($page, $site) => "https://coderhdy.com/assets/img/portrait.jpg",
      publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
      modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
    }
  ], [
    'permalink-pinyin',
    {
      lowercase: true,
      separator: '-'
    }
  ], [
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
  ['vuepress-plugin-code-copy', {
    backgroundTransition: false,
    successText: '复制成功',
    // align: String,
    // color: String,
    // selector: String,
    // backgroundColor: String,
  }],
  require('./vuepress-plugin-jsonld'),
  (options, context) => ({

    // Vue实例上挂载上自己开发的插件
    enhanceAppFiles: [path.resolve(__dirname, 'enhanceAppFiles.js')],

    // markdown-it-container 解析器注册插件
    chainMarkdown(config) {
      config
        .plugin('myPlugins')
        .use(require('./myPlugin'), [options])
        .end()
    }
  }),
]