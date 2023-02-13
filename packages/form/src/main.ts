// import { readonly } from 'vue'
import SchemaForm from './Index.vue'
import useForm from './useForm.js'
import SchemaFormItem from './SchemaFormItem.vue'

import SchemaFormInput from './components/SchemaFormInput.vue'
import SchemaFormSelect from './components/SchemaFormSelect.vue'
import SchemaFormRadio from './components/SchemaFormRadio.vue'
import SchemaFormDatepicker from './components/SchemaFormDatepicker.vue'
import SchemaFormCascader from './components/SchemaFormCascader.vue'
import SchemaFormPlaceholder from './components/SchemaFormPlaceholder.vue'
import SchemaFormCheckbox from './components/SchemaFormCheckbox.vue'
// import SchemaFormSlider from './components/SchemaFormSlider.vue'
import SchemaFormTimeselect from './components/SchemaFormTimeselect.vue'
import SchemaFormTimepicker from './components/SchemaFormTimepicker.vue'
import SchemaFormRate from './components/SchemaFormRate.vue'
import SchemaFormSwitch from './components/SchemaFormSwitch.vue'
import SchemaFormColorpicker from './components/SchemaFormColorpicker.vue'
import SchemaFormTags from './components/SchemaFormTags.vue'
import SchemaFormProgress from './components/SchemaFormProgress.vue'
import SchemaFormQuill from './components/SchemaFormQuill.vue'

const components = [
  SchemaForm,
  SchemaFormInput,
  SchemaFormSelect,
  SchemaFormRadio,
  SchemaFormDatepicker,
  SchemaFormCascader,
  SchemaFormPlaceholder,
  SchemaFormCheckbox,
//   SchemaFormSlider,
  SchemaFormTimeselect,
  SchemaFormRate,
  SchemaFormSwitch,
  SchemaFormColorpicker,
  SchemaFormTags,
  SchemaFormProgress,
  SchemaFormTimepicker,
  SchemaFormQuill
]

function install (app, opt = {}) {
    components.forEach(component => {
        app.component(component.name, component)
    })
    app.config.globalProperties.$globalParams = opt
}
// export default SchemaForm
export default install
export {
    SchemaForm,
    useForm,
    SchemaFormItem
};
