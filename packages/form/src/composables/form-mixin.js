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
export const useFormTags = ({ attrsAll }) => {
  const showAdd = computed(() => { // 是否展示新增按钮
    return attrsAll['show-add'] ? attrsAll['show-add'] : false
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
    return attrsAll['button-size'] ? attrsAll['button-size'] : 'small'
  })
  const buttonWords = computed(() => { // 按钮文案
    return attrsAll['button-words'] ? attrsAll['button-words'] : '+ New Tag'
  })
  const buttonType = computed(() => { // 按钮类型
    return attrsAll['button-type'] ? attrsAll['button-type'] : ''
  })
  return { showAdd, closable, type, hit, size, effect, color, buttonSize, buttonWords, buttonType }
}
