const path = require('path');

module.exports = {
    title: '西瓜皮儿',
    port: 8070,
    // host: '192.168.31.237',
    theme: 'reco',
    head: [
        ['link', { rel: 'icon', href: '/assets/icons/book128.png' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#ceffa0' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/assets/icons/portrait128.png' }],
        ['link', { rel: 'mask-icon', href: '/assets/icons/portrait128.svg', color: '#ceffa0' }],
        ['meta', { name: 'msapplication-TileImage', content: '/assets/icons/portrait128.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
        ['meta', { name: 'baidu-site-verification', content: 'code-VjoGmCBp2v' }],
        ['meta', { name: 'description', content: '西瓜皮儿的技术博客~' }],
        ['meta', { name: 'keywords', content: '西瓜皮儿,前端西瓜皮儿,前端博客,前端,前端学习,算法,软件知识,JS,JS知识,前端开发,编程,编程知识,CSS,JavaScript' }],
    ],
    locales: {
        '/': {
            lang: 'zh-CN',
        },
    },
    markdown: {
        externalLinks: { target: '_blank', rel: 'nofollow noopener noreferrer' }
    },
    themeConfig: {
        type: 'blog',
        author: '西瓜皮儿',
        startYear: '2021',
        authorAvatar: '/assets/img/portrait.jpg',
        modePicker: false,
        logo: '/assets/img/portrait.jpg',
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
            {
                title: '午后南杂',
                desc: 'Enjoy when you can, and endure when you must.',
                logo: 'https://photo.smallsunnyfox.com/images/blog/friendlink/reco.png',
                link: 'https://www.recoluan.com'
            },
            {
                title: '小紫念沁',
                desc: '不积跬步,无以至千里.不积小流,无以成江海',
                logo: 'https://anyfork.gitee.io/blog-docs/images/user.jpg',
                link: 'https://anyfork.gitee.io/blog-docs/'
            },
            {
                title: '山月行',
                desc: '山月不知心底事，水风空落眼前花',
                logo: 'https://photo.smallsunnyfox.com/images/blog/friendlink/theme_reco.png',
                link: 'https://shanyue.tech/'
            },
        ],
        // 博客设置
        blogConfig: {
            tag: {
                location: 2, // 在导航栏菜单中所占的位置，默认3
                text: 'Tag' // 默认 “标签”
            },
            category: {
                location: 5, // 在导航栏菜单中所占的位置，默认3
                text: '分类' // 默认 “标签”
            },
            socialLinks: [     // 信息栏展示社交信息
                { icon: 'reco-github', link: 'https://github.com/coderHDY' },
                { icon: 'reco-coding', link: 'https://leetcode-cn.com/u/huang-tong-xue-e/' },
                { icon: 'reco-other', link: 'https://coderhdy.github.io/react-stories/?path=/story' },
                { icon: 'reco-wechat', link: '/blog/2022/contact.html' },
                { icon: 'reco-theme', link: 'https://coderhdy.github.io/h5-demo/' },
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
        // valineConfig: {
        //     appId: 'XDwlSXS2pD137bPrPpwQaqqD-gzGzoHsz', // your appId
        //     appKey: 'CQ8FKrMUP76LwycPcKlDoRqV', // your appKey
        //     placeholder: '说说你的看法~',
        //     avatar: 'wavatar',
        //     serverUrl: 'https://brhdq5vq.lc-cn-n1-shared.com'
        // },
        vssueConfig: {
            platform: 'github',
            owner: 'coderHDY',
            repo: 'myblog',
            clientId: '7af64d26fd58ad665393',
            clientSecret: '13750c77ab2cbbc6c91bc76b8b0f16b1de1d69ee',
            autoCreateIssue: true,
            admins: ['coder-HDY'],
        }
    },
    markdown: {
        lineNumbers: true
    },
    plugins: require('./plugins/index.js'),
    clientRootMixin: path.resolve(__dirname, './plugins/mixins/index.js'),
}