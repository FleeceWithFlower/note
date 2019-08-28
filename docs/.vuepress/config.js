module.exports = {
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Client',
                items:[
                    { text: 'vue', link: '/blog/Client/vue/' },
                    { text: 'vue-x', link: '/blog/Client/vue-x/'},
                    { text: 'vue-router', link: '/blog/Client/vue-router/'},
                ] },
            { text: 'Server',
                items:[
                    { text: 'node', link: '/blog/Server/node.js/' },
                ] },
            { text: 'Tools',
                items:[
                    { text: 'npm', link: '/blog/Tools/npm/' },
                    { text: 'git', link: '/blog/Tools/git/' },
                    { text: 'webpack', link: '/blog/Tools/webpack/'},
                    { text: 'cordova', link: '/blog/Tools/cordova/'},
                ] },

        ],
        sidebar: 'auto'

    }
}
