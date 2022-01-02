module.exports = {
    title: '西瓜皮儿',
    port: 8070,
    theme: 'reco',
    head: [
        ['link', { rel: 'icon', href: '/assets/icons/book128.png' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#ceffa0' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/assets/icons/book128.png' }],
        ['link', { rel: 'mask-icon', href: '/assets/icons/book128.svg', color: '#ceffa0' }],
        ['meta', { name: 'msapplication-TileImage', content: '/assets/icons/book128.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    themeConfig: {
        type: 'blog',
        author: '西瓜皮儿',
        startYear: '2021',
        authorAvatar: '/portrait.jpg',
        modePicker: false,
        logo: '/portrait.jpg',
        nav: require('./nav'),
        sidebar: require('./sidebar'),
        lastUpdated: '上次更新',
        friendLink: [
            {
              title: 'vuepress-theme-reco',
              desc: 'A simple and beautiful vuepress Blog & Doc theme.',
              logo: 'https://photo.smallsunnyfox.com/images/blog/friendlink/theme_reco.png',
              link: 'https://vuepress-theme-reco.recoluan.com'
            },
        ],
        // 博客设置
        blogConfig: {
            tag: {
                location: 2, // 在导航栏菜单中所占的位置，默认3
                text: 'Tag' // 默认 “标签”
            },
            socialLinks: [     // 信息栏展示社交信息
                { icon: 'reco-github', link: 'https://github.com/coderHDY' },
            ]
        },
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        // 自动形成侧边导航
        subSidebar: 'auto',
        sidebarDepth: 2,
        displayAllHeaders: false,
        //valine
        valineConfig: {
            appId: 'XDwlSXS2pD137bPrPpwQaqqD-gzGzoHsz', // your appId
            appKey: 'CQ8FKrMUP76LwycPcKlDoRqV', // your appKey
            placeholder: '说说你的看法~',
            avatar: 'wavatar',
            serverUrl: 'https://brhdq5vq.lc-cn-n1-shared.com'
        }
    },
    markdown: {
        lineNumbers: true
    },
    plugins: [
        [
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
            'permalink-pinyin',
            {
              lowercase: true,
              separator: '-'
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
        '@vuepress/back-to-top',
        require('./components/index.js')
    ],
    chainWebpack: (config, isServer) => {
        if (process.env.NODE_ENV === 'production') {
            config.output.filename('js/[name].js').end();
            config.output.chunkFilename('js/[name].js').end();
        }
    }
}