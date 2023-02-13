<template>
  <el-progress
    :percentage="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
    @change="$emit('change', { prop, value: $event })"
  />
</template>

<script>
import { defineComponent } from 'vue'
import { withProps, useFormMixin } from '../composables/form-mixin'

export default defineComponent({
	name: 'SchemaFormProgress',
	props: {
		...withProps()
	},
	setup (props, { attrs, emit }) {
		const { bindVal, attrsAll } = useFormMixin(props, { attrs, emit })
		return { bindVal, attrsAll }
	}
})
</script>
