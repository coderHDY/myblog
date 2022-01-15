const front = {
    '/front/base/': [
        {
            title: '基础类型',
            collapsable: false,
            children: [
                '',
                'typeof',
                'var',
                'string',
                'array',
                'number',
                'function',
                'object',
                'class',
                'symbol',
            ]
        },
        {
            title: '内置类型/对象',
            collapsable: false,
            children: [
                'set',
                'map',
                'regexp',
                'date',
                'math',
                'proxy',
                'promise',
                'async',
                'generator',
                'dom',
                'bom',
                'history',
                'event',
                'json',
                'ajax',
            ]
        },
        {
            title: '必备知识',
            collapsable: false,
            children: [
                'fetch',
                'cors',
                'storage',
                'module',
                'worker',
                'canvas',
            ]
        },
    ],
    '/front/algorithm/': [
        {
            title: '数据结构',
            collapsable: false,
            children: [
                '',
                'queue',
                'linklist',
                'hash',
                'binarytree',
            ]
        },
        {
            title: '算法',
            collapsable: false,
            children: [
                'sort',
                'string',
                'greedy',
                'dynamic',
                'tree',
            ]
        }
    ],
    '/front/interview/': [
        '',
        'js',
        'css',
    ],
    '/front/css/': [
        {
            title: '基础样式',
            collapsable: false,
            children: [
                '',
                'selector',
                'box',
                'text',
            ]
        },
        {
            title: 'css动画',
            collapsable: false,
            children: [
                'animation',
                'transition',
                'transform',
                'effects'
            ]
        },
    ],
    '/front/vue2/': [
        '',
        'props',
        'router',
    ],
    '/front/node/': [
        '',
    ],
    '/front/react/': [
        '',
    ],
    '/front/technique/': [
        '',
    ],
}

const skill = {
    '/skill/git/': [
        '',
        'hight_level',
        'git_thinking',
    ],
    '/skill/linux/': [
        {
            title: '基础命令',
            collapsable: false,
            children: [
                '',
                'base',
                'bugs',
                'regexp'
            ]
        },
        {
            title: '辅助工具',
            collapsable: false,
            children: [
                'pm2',
                'git',
                'node',
                'nginx',
            ]
        },
    ],
    '/skill/shell/': [
        {
            title: '基础命令',
            collapsable: false,
            children: [
                '',
            ]
        },
    ],
    '/skill/internet/': [
        {
            title: '网络基础',
            collapsable: false,
            children: [
                '',
            ]
        },
        {
            title: '小知识点',
            collapsable: false,
            children: [
                'reqhead',
            ]
        },
    ],
    '/skill/introduction/': [
        '',
        'ability',
        'plugin_dev',
        'traps'
    ],
    '/skill/smalltips/': [
        '',
        'atom',
        'vuepress',
    ]
}

const books = {
    '/books/javascript/': [
        {
            title: '编程能力',
            collapsable: false,
            children: [
                '',
                'design',
                'vue3ts',
            ]
        },

    ],
}

module.exports = {
    ...front,
    ...skill,
    ...books
}