// const requireComponent = import.meta.globEager("./**/*.vue")
import CodeCard from './code-card.vue'
export default {
	install: (app) => {
		console.log('app=', app)
		// for (const key in requireComponent) {
		// 	if (Object.prototype.hasOwnProperty.call(requireComponent, key)) {
		// 		const component = requireComponent[key].default
		// 		if (component.name) app.components(component.name, component)
		// 	}
		// }
		app.component(CodeCard.name, CodeCard)
	}
}
