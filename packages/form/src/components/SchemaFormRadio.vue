<template>
  <el-radio-group
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
    @change="$emit('change', { prop, value: $event })"
  >
    <el-radio
      v-for="(option,idx) in options"
      :key="`${option.value}_${idx}`"
      :label="option.value"
      :disabled="option.disabled"
    >
      {{option.label}}
    </el-radio>
  </el-radio-group>
</template>

<script>
import { defineComponent } from 'vue'
import { withProps, useFormMixin } from '../composables/form-mixin'

export default defineComponent({
	name: 'SchemaFormRadio',
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
