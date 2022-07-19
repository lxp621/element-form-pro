// import { App } from 'vue'
import SchemaForm from './Index.vue'

SchemaForm.install = (app): void => {
    app.component(SchemaForm.name, SchemaForm)
}
export default SchemaForm
