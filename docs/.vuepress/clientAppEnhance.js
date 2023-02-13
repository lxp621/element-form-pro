
/**
 * 全局注册组件 下文注释：重要、勿删，plop在自动新增组件的时候注入，不需要手动添加
 */
import { defineClientAppEnhance } from '@vuepress/client'
import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/src/index.scss'
// -- APPSTART ITEMS HERE --
import VuePressComponents from './components/index'

export default defineClientAppEnhance(({ app }) => {
  // -- APPEND ITEMS HERE --
	app.use(ElementPlus)
	app.use(VuePressComponents)

	// 此方式打包gitpage静态页面时会报doucment is undefine，改为如下方式
	// app.use(SchemaForm, {
	// 	erpSelect: {
	// 		params: 'account'
	// 	}
	// })
	app.mixin({
		mounted () {
			import('../../packages/form/src/main').then(m => {
				app.use(m.default, {
					erpSelect: {
						params: 'account'
					}
				})
			})
		}
	})
})
