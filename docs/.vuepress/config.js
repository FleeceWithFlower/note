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
                    {text: 'JavaScript', link: '/blog/Client/JS/'},
                    {text: 'Vue', link: '/blog/Client/Vue/'},
                    {text: 'React', link: '/blog/Client/React/'},
                ]
            },
            {
                text: 'Server',
                items: [
                    {text: 'Java', link: '/blog/Server/Java/'},
                    {text: 'NodeJs', link: '/blog/Server/NodeJs/'},
                    {text: 'MongoDB', link: '/blog/Server/MongoDB/'},
                    {text: 'MySQL', link: '/blog/Server/MySQL/'},
                    {text: 'C', link: '/blog/Server/C/'},
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
            },
        ],
        sidebarDepth: 2,
        sidebar: {
            '/blog/Client/Vue/': [
                {
                    title: 'Vue',
                    path: '/blog/Client/Vue/'
                },
                {
                    title: 'Vue-x',
                    path: '/blog/Client/Vue/Vue-x/'
                },
                {
                    title: 'Vue-router',
                    path: '/blog/Client/Vue/Vue-router/'
                },
                {
                    title: 'Axios',
                    path: '/blog/Client/Vue/Axios/'
                }

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
