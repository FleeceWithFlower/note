module.exports = {
    base: '/note/',
    title: 'FleeceWithFlower',
    description: 'Blog',
    displayAllHeaders: false,
    head: [
        ['link', { rel: 'icon', href: `/icon1.png` }]
    ],
    themeConfig: {
        nav: [
            {text: 'Home', link: '/',},
            {
                text: 'Client',
                items: [
                    {text: 'JavaScript', link: '/blog/Client/JavaScript/'},
                    {text: 'TypeScript', link: '/blog/Client/TypeScript/'},
                    {text: 'Vue', link: '/blog/Client/Vue/'},
                    {text: 'vue-router', link: '/blog/Client/Vue/vue-router/'},
                    {text: 'vue-vueX', link: '/blog/Client/Vue/vue-vueX/'},
                    {text: 'React', link: '/blog/Client/React/'},
                    {text: 'react-router', link: '/blog/Client/React/react-router/'},
                    {text: 'react-redux', link: '/blog/Client/React/react-redux/'},
                    {text: '微信小程序', link: '/blog/Client/微信小程序/'},
                ]
            },
            {
                text: 'Server',
                items: [
                    {text: 'Java', link: '/blog/Server/Java/'},
                    {text: 'spring', link: '/blog/Server/Java/Spring/'},
                    {text: 'springMVC', link: '/blog/Server/Java/SpringMVC/'},
                    {text: 'springBoot', link: '/blog/Server/Java/SpringBoot/'},
                    {text: 'springCloud', link: '/blog/Server/Java/springCloud/'},
                    {text: 'Node', link: '/blog/Server/NodeJs/'},
                    {text: 'express', link: '/blog/Server/NodeJs/Express/'},
                    {text: 'koa2', link: '/blog/Server/NodeJs/Koa2/'},
                    {text: 'C', link: '/blog/Server/C/'},
                ]
            },
            {
                text: 'DB',
                items: [
                    {text: 'MySQL', link: '/blog/Server/MySQL/'},
                    {text: 'Mybatis', link: '/blog/Server/Java/Mybatis/'},
                    {text: 'MongoDB', link: '/blog/Server/MongoDB/'},
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
                    {text: 'Flux', link: '/blog/Tools/flux/'},
                ]
            },
        ],
        sidebarDepth: 2,
        sidebar: {
            '/blog/Client/JavaScript/': [
                {
                    title: 'JavaScript',
                    path: '/blog/Client/JavaScript/'
                },
                {
                    title: 'Canvas',
                    path: '/blog/Client/JavaScript/Canvas/'
                },
            ],
            '/blog/Server/Java/': [
                {
                    title: 'Java',
                    path: '/blog/Server/Java/'
                },
                {
                    title: 'Spring',
                    path: '/blog/Server/Java/Spring/'
                },
                {
                    title: 'Mybatis',
                    path: '/blog/Server/Java/Mybatis/'
                },

            ],
            '/blog/Server/NodeJs/': [
                {
                    title: 'NodeJs',
                    path: '/blog/Server/NodeJs/',
                },
                {
                    title: 'Express',
                    path: '/blog/Server/NodeJs/Express/',
                },
                {
                    title: 'Koa2',
                    path: '/blog/Server/NodeJs/Koa2/',
                }
            ],
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
