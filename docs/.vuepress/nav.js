const home = {
    text: 'Home',
    link: '/',
    icon: 'reco-home'
};

const front = {
    text: '前端',
    ariaLabel: 'front base',
    items: [
        {
            text: 'js基础',
            link: '/front/base/'
        },
        {
            text: 'CSS相关',
            link: '/front/css/'
        },
        {
            text: '数据结构和算法',
            link: '/front/algorithm/'
        },
        {
            text: '前端面试题',
            link: '/front/interview/'
        },
        {
            text: 'vue2',
            link: '/front/vue2/'
        },
        {
            text: 'vue3',
            link: '/front/vue3/'
        },
        {
            text: 'react',
            link: '/front/react/'
        },
        {
            text: 'webpack',
            link: '/front/webpack/'
        },
        {
            text: '工具封装',
            link: '/front/technique/'
        },
        {
            text: 'IOS',
            link: '/front/ios/'
        },
    ]
};

const backend = {
    text: '后端',
    ariaLabel: 'backend base',
    items: [
        {
            text: '数据库',
            link: '/backend/database/'
        },
        {
            text: 'node',
            link: '/backend/node/'
        },
    ]
}

const skill = {
    text: '必备技能',
    ariaLabel: 'soft enginer necessary',
    items: [
        {
            text: 'git',
            link: '/skill/git/'
        },
        {
            text: 'linux',
            link: '/skill/linux/'
        },
        {
            text: 'shell',
            link: '/skill/shell/'
        },
        {
            text: '网络',
            link: '/skill/internet/'
        },
        {
            text: '文档编写方法',
            link: '/skill/introduction/'
        },
        {
            text: '小技巧',
            link: '/skill/smalltips/'
        },
    ]
}

const books = {
    text: '读书笔记',
    ariaLabel: 'reading and thinking',
    items: [
        {
            text: '前端相关',
            link: '/books/javascript/'
        },
        {
            text: '计算机',
            link: '/books/computer/'
        },
    ]
}

const timeline = {
    text: '时间线',
    link: '/timeline/',
    icon: 'reco-date'
}

module.exports = [
    home,
    front,
    backend,
    skill,
    books,
    timeline,
]