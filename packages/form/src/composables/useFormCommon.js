import { computed, defineComponent, getCurrentInstance } from 'vue'
export default defineComponent({
  name: 'SchemaFormInput',
  props: {
    prop: String,
    modifier: String, // v-model修饰符
    dynamicAttrs: Object, // 动态属性
    options: Array, // 多选项目
    onEvents: { // 绑定事件
      type: Object,
      default () { return {} }
    }
  },
  setup (props, { attrs, emit }) {
    const { modifier, dynamicAttrs = {} } = props
    const instance = getCurrentInstance()
    const formatVal = (val) => {
      if (modifier === 'number') {
        let n = parseFloat(val)
        return isNaN(n) ? val : n
      }
      if (modifier === 'trim' && val) return val.trim()
      return val
    }
    const componentName = computed(() => {
      let _name = instance?.ctx?.$options?.name
      return _name?.replace('SchemaForm', '').toLowerCase() || ''
    })
    const globalOptions = computed(() => {
      const globalPro = instance.appContext.config.globalProperties
      return globalPro.$globalParams[componentName.value] || {}
    })
    const attrsAll = computed(() => {
      console.log('ttt=', props)
      return { ...globalOptions.value, ...attrs, ...props.dynamicAttrs }
    })
    const bindVal = computed({
      get: () => formatVal(attrs.modelValue),
      set: (val) => {
        emit('update:modelValue', formatVal(val))
      }
    })
    return { bindVal, componentName, globalOptions, attrsAll, formatVal }
  }
})
