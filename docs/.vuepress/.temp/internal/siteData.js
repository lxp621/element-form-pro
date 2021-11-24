export const siteData = {
  "base": "/element-form-pro/",
  "lang": "en-US",
  "title": "Element-Plus Schema form",
  "description": "基于 JSON Schema 构建 element-plus 表单，表单页面开发从未如此高效",
  "head": [],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
