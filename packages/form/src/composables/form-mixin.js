import { computed, getCurrentInstance } from 'vue'
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
export const useFormMixin = ({ modifier, dynamicAttrs = {} }, { attrs, emit }) => {
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
    let _name = instance.ctx.$options.name
    return _name.replace('SchemaForm', '').toLowerCase() || ''
  })
  const globalOptions = computed(() => {
    const globalPro = instance.appContext.config.globalProperties
    return globalPro.$globalParams[componentName.value] || {}
  })
  const attrsAll = computed(() => {
    return { ...globalOptions.value, ...attrs, ...dynamicAttrs }
  })
  const bindVal = computed({
    get: () => formatVal(attrs.modelValue),
    set: (val) => {
      emit('update:modelValue', formatVal(val))
    }
  })
  return { bindVal, componentName, globalOptions, attrsAll, formatVal }
}
export const useFormTags = ({ attrsAll }) => {
  Object.keys(attrsAll).forEach(key => { // 兼容驼峰式及中横线式
    if (typeof (attrsAll[key]) === 'string' || typeof (attrsAll[key]) === 'boolean') {
      const newKey = key.replace( /-([a-z])/g, ( all, i ) => (i.toUpperCase()))
      attrsAll[newKey] = attrsAll[key]
      delete attrsAll[key]
    }
  })
  const showAdd = computed(() => { // 是否展示新增按钮
    return attrsAll['showAdd'] ? attrsAll['showAdd'] : false
  })
  const closable = computed(() => { // 标签是否可删除
    return attrsAll.hasOwnProperty('closable') ? attrsAll.closable : true
  })
  const type = computed(() => { // 标签类型
    return attrsAll.type ? attrsAll.type : ''
  })
  const hit = computed(() => { // 标签是否有边框描边
    return attrsAll.hit ? attrsAll.hit : false
  })
  const size = computed(() => { // 标签尺寸
    return attrsAll.size ? attrsAll.size : ''
  })
  const effect = computed(() => { // 标签主题
    return attrsAll.effect ? attrsAll.effect : 'light'
  })
  const color = computed(() => { // 标签背景色
    return attrsAll.color ? attrsAll.color : ''
  })
  const buttonSize = computed(() => { // 按钮尺寸
    return attrsAll['buttonSize'] ? attrsAll['buttonSize'] : 'small'
  })
  const buttonWords = computed(() => { // 按钮文案
    return attrsAll['buttonWords'] ? attrsAll['buttonWords'] : '+ New Tag'
  })
  const buttonType = computed(() => { // 按钮类型
    return attrsAll['buttonType'] ? attrsAll['buttonType'] : ''
  })
  return { showAdd, closable, type, hit, size, effect, color, buttonSize, buttonWords, buttonType }
}
