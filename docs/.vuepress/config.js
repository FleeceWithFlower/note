module.exports = {
    base: '/note/',
    title: 'FleeceWithFlower',
    description: 'Blog',
    displayAllHeaders: true,
    themeConfig: {
        nav: [
            {text: 'Home', link: '/',},
            {text: 'My', link: '/blog/My/',},
            {
                text: 'Client',
                items: [
                    {text: 'vue', link: '/blog/Client/vue/'},
                    {text: 'axios', link: '/blog/Client/axios/'},
                    {text: 'canvas', link: '/blog/Client/canvas/'},
                    {text: 'vue-x', link: '/blog/Client/vue-x/'},
                    {text: 'vue-router', link: '/blog/Client/vue-router/'},
                    {text: 'localForage', link: '/blog/Client/localForage/'},
                ]

            },
            {
                text: 'UI',
                items: [
                    {text: 'Animate.css', link: '/blog/UI/Animate.css/'},
                ]

            },
            {
                text: 'Server',
                items: [
                            {text: 'NodeJs', link: '/blog/Server/NodeJs/'},
                            {text: 'Linux', link: '/blog/Server/Linux/'},
                            {text: 'MongoDB', link: '/blog/Server/MongoDB/'},
                            {text: 'MySQL', link: '/blog/Server/MySQL/'},
                            {text: 'Windows', link: '/blog/Server/Windows/'},
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
                    {text: 'shell', link: '/blog/Tools/shell/'},
                    {text: 'vim', link: '/blog/Tools/vim/'},
                    {text: 'VuePress', link: '/blog/Tools/VuePress/'},
                    {text: 'webpack', link: '/blog/Tools/webpack/'},
                    {text: 'yum', link: '/blog/Tools/yum/'},
                ]
            },
            {
                text: 'Work',
                items: [
                    {text: 'TBE', link: '/blog/Work/TBE/'},
                ]
            },
        ],
        sidebar:'auto',
        lastUpdated: 'Last Updated',
    },
    plugins: [
        [
            "vuepress-plugin-live2d",
            {
                "modelName": 'shizuku',/*  ['z16','Epsilon2.1','izumi','koharu','shizuku','miku', 'hijiki', 'tororo']  */
                "mobileShow": false
            }
        ]
    ]

}
