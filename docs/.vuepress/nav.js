const front = {
    text: '前端基础',
    ariaLabel: 'front base',
    items: [
        {
            text: 'js基础',
            link: '/front/base/'
        },
        {
            text: 'js手写底层',
            link: '/front/sourcecode/'
        },
        {
            text: 'js算法',
            link: '/front/algorithm/'
        },
        {
            text: '前端面试题',
            link: '/front/interview/'
        },
        {
            text: 'CSS相关',
            link: '/front/css/'
        },
        {
            text: 'node',
            link: '/front/node/'
        },
        {
            text: 'vue',
            link: '/front/vue/'
        },
        {
            text: 'react',
            link: '/front/react/'
        },
        {
            text: '代码技巧',
            link: '/front/technique/'
        },
    ]
};

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
    ]
}
module.exports = [
    front,
    skill,
    books
]