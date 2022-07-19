import { computed } from 'vue'
export const withProps = () => ({
  prop: String,
  modifier: String, // v-model修饰符
  dynamicAttrs: Object, // 动态属性
  options: Array, // 多选项目
  onEvents: { // 绑定事件
    type: Object,
    default () { return {} }
  }
})
export const useFormMixin = ({ modifier, dynamicAttrs }, { attrs, emit }) => {
  const formatVal = (val) => {
    if (modifier === 'number') {
      let n = parseFloat(val)
      return isNaN(n) ? val : n
    }
    if (modifier === 'trim' && val) return val.trim()
    return val
  }
  const componentName = computed(() => {
    let _name = this.$options.name
    return _name.replace('SchemaForm', '').toLowerCase() || ''
  })
  const globalOptions = computed(() => {
    return {} // this.$globalParams[this.componentName] || {}
  })
  const attrsAll = computed(() => {
    return { ...globalOptions, ...attrs, ...dynamicAttrs }
  })
  const bindVal = computed({
    get: () => formatVal(attrs.modelValue),
    set: (val) => {
      emit('update:modelValue', formatVal(val))
    }
  })
  return { bindVal, componentName, globalOptions, attrsAll, formatVal }
}

