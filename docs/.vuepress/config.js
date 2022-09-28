
const alias = require('../../alias')
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': 'packages/form'
            }
        }
    },
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
            '/guide/': [
                {
                    text: '指南',
                    collapsable: true,
                    children: [
                        { text: '介绍', link: '/guide/' },
                        { text: '快速开始', link: '/guide/start' },
                        { text: '在线示例', link: '/guide/online-demo' }
                    ]
                },
                {
                    text: '组件',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        { text: 'form 表单', link: '/guide/component/SchemaForm' },
                        { text: 'schema 详解', link: '/guide/component/schema' },
                        { text: 'layout 布局', link: '/guide/component/layout' },
                        { text: 'slot 插槽', link: '/guide/component/slot' },
                        { text: 'dynamicAttrs 动态属性', link: '/guide/component/dynamic' },
                        { text: '第三方拓展', link: '/guide/component/expand' },
                        { text: '拓展属性', link: '/guide/component/attr' },
                        { text: '自定义组件', link: '/guide/component/custom' },
                    ]
                }
            ]
        }
    }
}
