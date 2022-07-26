
<template>
  <el-input-number
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
  ></el-input-number>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { withProps, useFormMixin } from '../../../../packages/form/src/composables/form-mixin'
export default defineComponent({
  name: 'CustomNumber',
  props: {
    ...withProps()
  },
  setup (props, { attrs, emit }) {
    const { bindVal, attrsAll } = useFormMixin(props, { attrs, emit })
    return { bindVal, attrsAll }
  }
})
</script>

<style scoped>

</style>
