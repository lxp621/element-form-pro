export const themeData = {
  "sidebarDepth": 2,
  "nav": [
    {
      "text": "GitHub",
      "link": "https://github.com/vueblocks/element-schema-form"
    }
  ],
  "sidebar": {
    "/guide/": [
      {
        "title": "指南",
        "collapsable": false,
        "children": [
          {
            "text": "介绍",
            "link": "/guide/"
          },
          {
            "text": "快速开始",
            "link": "/guide/start"
          },
          {
            "text": "在线示例",
            "link": "/guide/online-demo"
          }
        ]
      },
      {
        "title": "组件",
        "collapsable": false,
        "sidebarDepth": 1,
        "children": [
          {
            "text": "form 表单",
            "link": "/guide/component/SchemaForm"
          },
          {
            "text": "schema 详解",
            "link": "/guide/component/schema"
          }
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "logo": null,
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
