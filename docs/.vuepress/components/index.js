const requireComponent = require.context('.', true, /\.vue$/)

import CodeCard from './code-card.vue'

export default {
	install: (app) => {
		requireComponent.keys().forEach(fileName => {
			const componentConfig = requireComponent(fileName)
			if (componentConfig.default.name) app.component(componentConfig.default.name, componentConfig.default || componentConfig)
		})
		// for (const key in requireComponent) {
		// 	if (Object.prototype.hasOwnProperty.call(requireComponent, key)) {
		// 		const component = requireComponent[key].default
		// 		if (component.name) app.component(component.name, component)
		// 	}
		// }
		app.component(CodeCard.name, CodeCard)
	}
}
