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
                    {text: 'vue', link: '/blog/Client/vue/'},
                    {text: 'vue-x', link: '/blog/Client/vue-x/'},
                    {text: 'vue-router', link: '/blog/Client/vue-router/'},
                ]

            },
            {
                text: 'Server',
                items: [
                            {text: 'node', link: '/blog/Server/NodeJS/'},
                ]
            },
            {
                text: 'Tools',
                items: [
                    {text: 'npm', link: '/blog/Tools/npm/'},
                    {text: 'git', link: '/blog/Tools/git/'},
                    {text: 'webpack', link: '/blog/Tools/webpack/'},
                    {text: 'cordova', link: '/blog/Tools/cordova/'},
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
        repo: 'https://github.com/FleeceWithFlower/note',
        repoLabel: '查看源码',
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
