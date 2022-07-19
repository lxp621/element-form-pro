import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/index.md"]],
  ["v-89c9a156","/components/form.html","form基本使用",["/components/form","/components/form.md"]],
  ["v-fffb8e28","/guide/","介绍",["/guide/index.html","/guide/README.md"]],
  ["v-733566c8","/guide/online-demo.html","form基本使用",["/guide/online-demo","/guide/online-demo.md"]],
  ["v-621628ba","/guide/start.html","快速开始",["/guide/start","/guide/start.md"]],
  ["v-14c584be","/guide/component/","组件",["/guide/component/index.html","/guide/component/README.md"]],
  ["v-084a9d56","/guide/component/SchemaForm.html","SchemaForm",["/guide/component/SchemaForm","/guide/component/SchemaForm.md"]],
  ["v-b98832ec","/guide/component/attr.html","",["/guide/component/attr","/guide/component/attr.md"]],
  ["v-dee426ec","/guide/component/custom.html","",["/guide/component/custom","/guide/component/custom.md"]],
  ["v-6c60f090","/guide/component/dynamic.html","",["/guide/component/dynamic","/guide/component/dynamic.md"]],
  ["v-3f23a9fe","/guide/component/expand.html","",["/guide/component/expand","/guide/component/expand.md"]],
  ["v-72676871","/guide/component/layout.html","",["/guide/component/layout","/guide/component/layout.md"]],
  ["v-8373bf4c","/guide/component/schema.html","",["/guide/component/schema","/guide/component/schema.md"]],
  ["v-682652c6","/guide/component/slot.html","",["/guide/component/slot","/guide/component/slot.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
