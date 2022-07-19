
const alias = require('../../alias')
module.exports = {
    title: 'Element-Plus Schema form',
    description: '基于 JSON Schema 构建 element-plus 表单，表单页面开发从未如此高效',
    base: '/element-form-pro/',
    // bundler: '@vuepress/vite',
    alias,
    themeConfig: {
        sidebarDepth: 2,
        nav: [
            {
                text: 'GitHub',
                link: 'https://github.com/vueblocks/element-schema-form'
            }
        ],
        sidebar: {
            // 侧边栏
            "/": [
                {
                    title: '指南',
                    collapsable: false,
                    children: [
                        '',
                        '快速开始'
                    ]
                },
                {
                    title: '组件',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        { text: 'form 表单', link: '/components/form' },
                        { text: 'select 下拉', link: '/components/select' }
                    ]
                }
            ]
        }
    },
    plugins: ['demoblock-plus']
}
