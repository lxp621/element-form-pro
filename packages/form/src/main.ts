// import { readonly } from 'vue'
import SchemaForm from './Index.vue'
import useForm from './useForm.js'
import SchemaFormItem from './SchemaFormItem.vue'

SchemaForm.install = (app, opt = {}): void => {
    app.component(SchemaForm?.name, SchemaForm)
    app.config.globalProperties.$globalParams = opt
}
// export default SchemaForm
export default {
    SchemaForm,
    useForm,
    SchemaFormItem
};
