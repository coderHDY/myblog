const front = {
    text: '前端基础',
    ariaLabel: 'front base',
    items: [
        {
            text: 'js基础',
            link: '/front/base/'
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
            text: '文档编写方法',
            link: '/skill/introduction/'
        },
    ]
}
module.exports = [
    front,
    skill
]