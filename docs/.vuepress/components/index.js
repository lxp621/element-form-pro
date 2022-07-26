const requireComponent = import.meta.globEager("./**/*.vue")
import CodeContain from './code-contain.vue'
export default {
	install: (app) => {
		for (const key in requireComponent) {
			if (Object.prototype.hasOwnProperty.call(requireComponent, key)) {
				const component = requireComponent[key].default
				if (component.name) app.components(component.name, component)
			}
		}
		app.component(CodeContain.name, CodeContain)
	}
}
