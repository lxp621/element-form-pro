<template>
  <el-time-select
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
    @change="$emit('change', { prop, value: $event })"
  >
  </el-time-select>
</template>

<script>
import { defineComponent } from 'vue'
import { withProps, useFormMixin } from '../composables/form-mixin'

export default defineComponent({
  name: 'SchemaFormTimeselect',
  props: {
    ...withProps()
  },
  setup (props, { attrs, emit }) {
    const { bindVal, attrsAll } = useFormMixin(props, { attrs, emit })
    return { bindVal, attrsAll }
  }
})
</script>

<style lang="scss" scoped>

</style>
