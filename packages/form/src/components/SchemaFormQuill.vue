<template>
  <quill-editor
    v-model:value="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
  />
</template>

<script>
import { quillEditor } from 'vue3-quill'
import { defineComponent } from 'vue'
import { withProps, useFormMixin } from '../composables/form-mixin'

export default defineComponent({
  name: 'SchemaFormQuill',
  components: {
	  quillEditor
  },
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
  .ql-container{
    height: calc(100% - 50px);
  }
</style>
