import { unref, reactive, shallowRef, nextTick } from 'vue'
import cloneDeep from 'lodash.cloneDeep'
export default function useForm(modelRef, ruleRef, options = { onValidate: () => {} }) {
  console.log('useFrom=', modelRef, ruleRef)
  const initialModel = cloneDeep(unref(modelRef))
  const validateInfos = reactive({})
  
  const rulesKeys = shallowRef([])
  function isRequired(rules) {
    let isRequired = false
    if (rules && rules.length) {
      rules.every((rule) => {
        if (rule.required) {
          isRequired = true
          return false
        }
        return true
      })
    }
    return isRequired
  }
  const resetFields = (newValues) => {
    Object.assign(unref(modelRef), {
      ...cloneDeep(initialModel),
      ...newValues
    })
    nextTick(() => {
      Object.keys(validateInfos).forEach(key => {
        validateInfos[key] = {
          autoLink: false,
          require: isRequired(unref(rulesRef)[key])
        }
      })
    })
  }
  return { resetFields }
}
