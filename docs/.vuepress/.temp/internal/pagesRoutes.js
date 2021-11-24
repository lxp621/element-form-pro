import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/index.md"]],
  ["v-89c9a156","/components/form.html","form",["/components/form","/components/form.md"]],
  ["v-df88a5ea","/components/table.html","Table",["/components/table","/components/table.md"]],
  ["v-fffb8e28","/guide/","介绍",["/guide/index.html","/guide/README.md"]],
  ["v-47cd5558","/guide/%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B.html","快速开始",["/guide/快速开始.html","/guide/%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B","/guide/快速开始.md","/guide/%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B.md"]],
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
