
const alias = require('../../alias')
const { defaultTheme } = require('vuepress')
module.exports = {
    title: 'Element-Plus Schema form',
    description: '基于 JSON Schema 构建 element-plus 表单，表单页面开发从未如此高效',
    base: '/element-form-pro/',
    // bundler: '@vuepress/vite',
    alias,
    theme: defaultTheme({
        navbar: [
            {
                text: 'GitHub',
                link: 'https://github.com/vueblocks/element-schema-form'
            }
        ],
        sidebar: {
            // 侧边栏
            '/guide/': [
                {
                    text: '指南',
                    collapsable: false,
                    children: [
                        { text: '介绍', link: '/guide/' },
                        { text: '快速开始', link: '/guide/getting-start' },
                        { text: '在线示例', link: '/guide/online-demo' }
                    ]
                },
                {
                    text: '组件',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        { text: 'form 表单', link: '/guide/component/SchemaForm' },
                        { text: 'schema 详解', link: '/guide/component/schema' }
                    ]
                }
            ]
        }
    }),
    plugins: ['demoblock-plus']
}
