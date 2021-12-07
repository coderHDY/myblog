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
            title: '内置对象',
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
                'dom',
                'bom',
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
            ]
        },
    ],
    '/front/algorithm/': [
        {
            title: '字符串相关',
            collapsable: false,
            children: [
                ''
            ]
        }
    ],
    '/front/sourcecode/': [
        '',
        'dom',
        'recursion'
    ],
    '/front/interview/': [
        '',
    ],
    '/front/css/': [
        '',
    ],
    '/front/node/': [
        '',
    ],
    '/front/vue/': [
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
                'bugs'
            ]
        },
        {
            title: '辅助工具',
            collapsable: false,
            children: [
                'pm2',
                'git',
                'node'
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
        'atom'
    ]
}

const books = {
    '/books/javascript/': [
        {
            title: '编程能力',
            collapsable: false,
            children: [
                'regexp',
                '',
            ]
        },
        {
            title: '开发思想',
            collapsable: false,
            children: [
                'principle'
            ]
        },

    ],
}

module.exports = {
    ...front,
    ...skill,
    ...books
}