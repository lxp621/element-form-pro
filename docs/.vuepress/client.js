
/**
 * 全局注册组件 下文注释：重要、勿删，plop在自动新增组件的时候注入，不需要手动添加
 */
import { defineClientConfig } from '@vuepress/client'
import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/src/index.scss'
// -- APPSTART ITEMS HERE --
import SchemaForm from '../../packages/form/src/main'
import vuepressComponent from './components/index.js'

export default defineClientConfig({
	enhance({ app}) {
		// -- APPEND ITEMS HERE --
		app.use(vuepressComponent)
		app.use(ElementPlus)
		app.use(SchemaForm)
	}
})
