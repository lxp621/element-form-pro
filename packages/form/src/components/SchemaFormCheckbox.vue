<template>
  <el-checkbox-group
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
    @change="$emit('change', { prop, value: $event })"
  >
    <el-checkbox
      v-for="(option,idx) in options"
      :key="`${option.label}_${idx}`"
      :label="option.value"
      :disabled="option.disabled"
    >{{option.label}}</el-checkbox>
  </el-checkbox-group>
</template>

<script>
import { defineComponent } from 'vue'
import { withProps, useFormMixin } from '../composables/form-mixin'

export default defineComponent({
	name: 'SchemaFormCheckbox',
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
