// import SchemaFormInput from './modules/SchemaFormInput.vue'
// import SchemaFormCheckbox from './modules/SchemaFormCheckbox.vue'
// export default {
// 	SchemaFormInput,
// 	SchemaFormCheckbox
// }
const modules = {}
const files = require.context('./', false, /\.vue$/)
files.keys().forEach((key) => {
	let name = key.match(/\.\/(.+)\.vue$/)![1]
	modules[name] = files(key).default
})
export default modules
