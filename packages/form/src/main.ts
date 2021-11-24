import { App } from 'vue'
import SchemaForm from './Index.vue'
import SchemaFormItem from './components/SchemaFormItem.vue'
import SchemaFormInput from './components/SchemaFormInput.vue'
const components = [ SchemaForm, SchemaFormItem, SchemaFormInput ]

// SchemaForm.install = (app: App): void => {
//     app.component(SchemaForm.name, SchemaForm)
// }
function install(app: App): void {
    components.forEach(component => {
        app.component(component.name, component)
    })
}

export default install
