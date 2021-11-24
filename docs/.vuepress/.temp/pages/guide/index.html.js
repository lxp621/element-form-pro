export const data = {
  "key": "v-fffb8e28",
  "path": "/guide/",
  "title": "介绍",
  "lang": "en-US",
  "frontmatter": {
    "title": "介绍"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "背景",
      "slug": "背景",
      "children": []
    },
    {
      "level": 2,
      "title": "方案",
      "slug": "方案",
      "children": []
    },
    {
      "level": 2,
      "title": "核心功能",
      "slug": "核心功能",
      "children": []
    },
    {
      "level": 2,
      "title": "JSON Schema 规范",
      "slug": "json-schema-规范",
      "children": []
    },
    {
      "level": 2,
      "title": "可视化探索",
      "slug": "可视化探索",
      "children": []
    }
  ],
  "filePathRelative": "guide/README.md",
  "git": {}
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
