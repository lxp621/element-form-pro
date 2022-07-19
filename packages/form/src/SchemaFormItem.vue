<template>
  <el-form-item :prop="col.prop" v-bind="col.formItem" class="schema-form-item">
    <template slot="label" v-if="col.labelSlot">
      <slot :name="col.labelSlot"></slot>
    </template>
    <template slot="label" v-if="col.labelTooltip">
      <span class="schema-label">{{ labelContent }}</span>
      <el-tooltip :content="col.labelTooltip">
        <i class="el-icon-warning"></i>
      </el-tooltip>
    </template>
    <span v-if="col.frontHtml" v-html="col.frontHtml" />
    <slot :name="col.frontSlot" v-if="col.frontSlot"></slot>
    <component
      v-bind="col.attrs"
      v-on="$listeners"
      :is="getComponentName(col.type)"
      :prop="col.prop"
      v-model="model[col.prop]"
      :modifier="col.modifier"
      :dynamicAttrs="col.dynamicAttrs"
      :onEvents="col.on"
      :options="options[col.prop]"
      @change="changeEdit"
    >
    </component>
    <slot :name="col.rearSlot" v-if="col.rearSlot"></slot>
    <span v-if="col.rearHtml" v-html="col.rearHtml" />
  </el-form-item>
</template>

<script>
import importComp from './components/importComp'
import { defineComponent, computed, reactive } from 'vue'
export default defineComponent({
  name: 'SchemaFormItem',
  props: {
    model: { // 绑定的value值
      type: Object
    },
    options: { // 多选值绑定的陪选项目
      type: Object
    },
    col: {
      type: Object
    }
  },
  components: {
    ...importComp
  },
  setup (props, { emit }) {
    const builtInNames = reactive(['input', 'select', 'radio', 'datepicker',
      'cascader', 'placeholder', 'checkbox', 'slider', 'timeselect', 'timepicker', 'jsoneditor', 'quill', 'codemirror',
      'rate', 'switch', 'colorpicker', 'tags', 'progress'])
    const labelContent = computed(() => {
      let _formItem = props.col.formItem || {}
      return _formItem.label || ''
    })

    const getComponentName = (type) => {
      if (builtInNames.includes(type)) {
        // 内置组件
        return 'schema-form-' + type
      } else {
        // 外部组件
        return type
      }
    }
    const changeEdit = ({ prop, value }) => {
      emit('change', { prop, value })
    }
    return {
      labelContent,
      getComponentName,
      changeEdit
    }
  }
})
</script>

<style lang="scss" scoped>
.schema-form-item{
  .el-select{
    width: 100%;
  }
  .el-date-editor{
    width: 100%;
  }
  .el-cascader{
    width: 100%;
  }
  .el-date-editor.el-input{
    width:100%;
  }
}
</style>
