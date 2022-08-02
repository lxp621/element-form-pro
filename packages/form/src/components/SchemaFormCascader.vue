<template>
  <el-cascader
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
    :options="options"
    @change="$emit('change', { prop, value: $event })"
  >
  </el-cascader>
</template>

<script>
import { defineComponent } from 'vue'
import { withProps, useFormMixin } from '../composables/form-mixin'

export default defineComponent({
  name: 'SchemaFormCascader',
  props: {
    ...withProps()
  },
  setup (props, { attrs, emit }) {
    const { bindVal, attrsAll } = useFormMixin(props, { attrs, emit })
    return { bindVal, attrsAll }
  }
})
</script>

<style lang="less" scoped>

</style>
