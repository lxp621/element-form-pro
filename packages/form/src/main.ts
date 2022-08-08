// import { App } from 'vue'
import SchemaForm from './Index.vue'

SchemaForm.install = (app, opt = {}): void => {
    app.component(SchemaForm.name, SchemaForm)
    app.config.globalProperties.$globalParams = opt
}
export default SchemaForm
