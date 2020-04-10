module.exports = {
    base: '/note/',
    title: 'FleeceWithFlower',
    description: 'Blog',
    displayAllHeaders: true,
    themeConfig: {
        nav: [
            {text: 'Home', link: '/',},
            {
                text: 'Client',
                items: [
                    {text: 'JavaScript',items:[{text: '基础语法', link: '/blog/Client/JS/'}]},
                    {text: 'Vue', link: '/blog/Client/Vue/'},
                    {text: 'React', link: '/blog/Client/React/'},
                ]

            },
/*            {
                text: 'Server',
                items: [
                    {text: 'Java', link: '/blog/Server/Java/'},
                    {text: 'NodeJs', link: '/blog/Server/NodeJs/'},
                    {text: 'C', link: '/blog/Server/C/'},
                    {text: 'MongoDB', link: '/blog/Server/MongoDB/'},
                    {text: 'MySQL', link: '/blog/Server/MySQL/'}
                ]
            },
            {
                text: 'OS',
                items: [
                    {text: 'Linux', link: '/blog/Server/Linux/'},
                    {text: 'Windows', link: '/blog/Server/Windows/'}
                ]
            },
            {
                text: 'Tools',
                items: [
                    {text: 'Cordova', link: '/blog/Tools/Cordova/'},
                    {text: 'Git', link: '/blog/Tools/Git/'},
                    {text: 'HTTP', link: '/blog/Tools/HTTP/'},
                    {text: 'MarkDown', link: '/blog/Tools/MarkDown/'},
                    {text: 'Nginx', link: '/blog/Tools/Nginx/'},
                    {text: 'Npm', link: '/blog/Tools/Npm/'},
                    {text: 'Shell', link: '/blog/Tools/shell/'},
                    {text: 'Vim', link: '/blog/Tools/vim/'},
                    {text: 'VuePress', link: '/blog/Tools/VuePress/'},
                    {text: 'Webpack', link: '/blog/Tools/webpack/'},
                    {text: 'Yum', link: '/blog/Tools/yum/'},
                    {text: 'TypeScript', link: '/blog/Tools/typeScript/'},
                    {text: 'Flux', link: '/blog/Tools/flux/'},
                ]
            },*/
        ],
        /*        sidebar:'false',*/
        sidebar: {
/*            '/blog/Client/Vue/': [
                {
                    title: 'Vue',
                    collapsable: false,
                    path: '/blog/Client/Vue/',
                    children: []
                }
            ],*/
/*            '/blog/Server/Java/': [
                {
                    title: 'Java',
                    collapsable: false,
                    path: '/blog/Server/Java/',
                    children: [
                        {
                            title: '基础语法',
                            path: '/blog/Server/Java/'
                        }, {
                            title: 'Mybatis',
                            path: '/blog/Server/Java/Mybatis/'
                        },
                        {
                            title: 'Junit',
                            path: '/blog/Server/Java/Junit/'
                        }, {
                            title: 'Spring',
                            path: '/blog/Server/Java/Spring/'
                        }, {
                            title: 'Druid',
                            path: '/blog/Server/Java/Druid/'
                        }]

                }
            ],
            '/blog/Server/NodeJs/': [
                {
                    title: 'NodeJs',
                    collapsable: false,
                    path: '/blog/Server/NodeJs/',
                    children: [
                        {
                            title: '基础语法',
                            path: '/blog/Server/NodeJs/'
                        }, {
                            title: 'Express',
                            path: '/blog/Server/NodeJs/'
                        },
                        {
                            title: 'Koa2',
                            path: '/blog/Server/NodeJs/'
                        }
                        ]

                }
            ],*/
        },
        lastUpdated: 'Last Updated',
    },
    plugins: [
        /*        [
                    "vuepress-plugin-live2d",
                    {
                        "modelName": 'shizuku',/!*  ['z16','Epsilon2.1','izumi','koharu','shizuku','miku', 'hijiki', 'tororo']  *!/
                        "mobileShow": false
                    }
                ]*/
    ]

}
