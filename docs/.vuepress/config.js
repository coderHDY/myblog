module.exports = {
    title: '西瓜皮儿的blog',
    port: 8070,
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
        lastUpdated: '上次更新',
    },
    plugins: [
        '@vuepress/back-to-top',
        require('./components/index.js')
    ],
    // chainWebpack: (config, isServer) => {
    //     if (process.env.NODE_ENV === 'production') {
    //         config.output.filename('js/[name].js').end();
    //         config.output.chunkFilename('js/[name].js').end();
    //     }
    // }
}