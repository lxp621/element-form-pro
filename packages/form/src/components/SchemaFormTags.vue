<template>
  <div class="schema-form-tag">
    <el-tag
      v-for="(tag,idx) in bindVal"
      :key="`${tag}_${idx}`"
      :type="type"
      :hit="hit"
      :size="size"
      :effect="effect"
      :color="color"
      :closable="closable"
      :disable-transitions="false"
      @close="handleClose(tag)">
      {{tag}}
    </el-tag>
    <el-input
        class="input-new-tag"
        v-if="showAdd && inputVisible"
        ref="InputRef"
        v-model="inputValue"
        size="small"
        @keyup.enter="handleInputConfirm"
        @blur="handleInputConfirm"
    />
    <el-button v-else class="button-new-tag" :size="buttonSize" @click="showInput">
      {{buttonWords}}
    </el-button>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, nextTick, ref } from 'vue'
import { withProps, useFormMixin, useFormTags } from '../composables/form-mixin'
export default defineComponent({
  name: 'SchemaFormTags',
	props: {
		...withProps()
	},
	setup (props, { attrs, emit }) {
  	const tagState = reactive({
		  inputVisible: false,
		  inputValue: ''
	  })
    const InputRef = ref()
		const { bindVal, attrsAll } = useFormMixin(props, { attrs, emit })
    const formTags = useFormTags({ attrsAll: attrsAll.value })
		function handleClose (tag) {
			bindVal.value.splice(bindVal.value.indexOf(tag), 1)
			emit('change', { prop: props.prop, value: bindVal.value })
		}
		function showInput () {
			tagState.inputVisible = true
			nextTick(_ => {
				InputRef.value.input.focus()
			})
		}
		function handleInputConfirm () {
			let inputValue = tagState.inputValue
			if (inputValue) {
				bindVal.value.push(inputValue)
			}
			tagState.inputVisible = false
			tagState.inputValue = ''
			emit('change', { prop: props.prop, value: bindVal.value })
		}
		return { bindVal, attrsAll, ...toRefs(tagState), handleClose,
      showInput, handleInputConfirm, InputRef, ...formTags }
	}
})
</script>

<style lang="scss" scoped>
.schema-form-tag{
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
}

</style>
