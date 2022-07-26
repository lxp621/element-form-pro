<template>
  <el-input
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
    @change="$emit('change', { prop, value: $event })"
  >
    <template v-for="(item, key) in $slots" v-slot:[key]>
      <slot :name="key"></slot>
    </template>
  </el-input>
</template>

<script>
import { defineComponent } from 'vue'
import { withProps, useFormMixin } from '../composables/form-mixin'

export default defineComponent({
  name: 'SchemaFormInput',
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
