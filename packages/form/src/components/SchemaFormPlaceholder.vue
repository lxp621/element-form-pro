<template>
  <div class="schema-form--placeholder">
    <span>Empty Field</span>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { withProps, useFormMixin } from '../composables/form-mixin'

export default defineComponent({
	name: 'SchemaFormPlaceholder',
	props: {
		...withProps()
	},
	setup (props, { attrs, emit }) {
		const { bindVal, attrsAll } = useFormMixin(props, { attrs, emit })
		return { bindVal, attrsAll }
	}
})
</script>
