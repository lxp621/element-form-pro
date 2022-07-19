export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "actions": [
      {
        "text": "Get Started",
        "link": "/guide/",
        "type": "primary"
      },
      {
        "text": "Components",
        "link": "/components/table.html",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "JSON Schema Based",
        "details": "基于 JSON Schema 规范的数据驱动"
      },
      {
        "title": "Element UI Based",
        "details": "基于 Element UI 组件库的 Form 表单"
      },
      {
        "title": "Responsive Form",
        "details": "灵活的响应式的栅格表单布局"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2021-present lxp"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "index.md",
  "git": {
    "updatedTime": 1637754619000,
    "contributors": [
      {
        "name": "lixiaopan",
        "email": "lixiaopan@jd.com",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
