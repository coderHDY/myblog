module.exports = {
    title: '西瓜皮儿的blog',
    head: [
        ['link', {
            rel: 'icon',
            href: 'https://vuepress.vuejs.org/logo.png'
        }]
    ],
    themeConfig: {
        logo: 'https://vuepress.vuejs.org/logo.png',
        sidebarDepth: 2,
        nav: require('./nav'),
        sidebar: require('./sidebar'),
        lastUpdated: 'Last Updated',
    },
    plugins: [
        '@vuepress/back-to-top',
        require('./components/index.js')
    ],
}