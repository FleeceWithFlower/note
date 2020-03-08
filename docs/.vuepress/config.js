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
                    {text: 'JavaScript', link: '/blog/Client/JS/'},
                    {text: 'Vue', link: '/blog/Client/vue/'},
                    {text: 'React', link: '/blog/Client/React/'},
                    {text: 'Axios', link: '/blog/Client/axios/'},
                    {text: 'Canvas', link: '/blog/Client/canvas/'},
                    {text: 'Vue-x', link: '/blog/Client/vue-x/'},
                    {text: 'Vue-router', link: '/blog/Client/vue-router/'},
                    {text: 'LocalForage', link: '/blog/Client/localForage/'},
                ]

            },
            {
                text: 'Server',
                items: [
                            {text: 'NodeJs', link: '/blog/Server/NodeJs/'},
                            {text: 'Linux', link: '/blog/Server/Linux/'},
                            {text: 'MongoDB', link: '/blog/Server/MongoDB/'},
                            {text: 'Mongoose', link: '/blog/Server/MongoDB/mongoose/'},
                            {text: 'Express', link: '/blog/Server/NodeJs/express/'},
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
        sidebar:'auto',
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
