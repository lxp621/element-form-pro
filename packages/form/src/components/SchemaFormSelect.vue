<template>
  <el-select
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
    @change="$emit('change', { prop, value: $event })"
  >
    <el-option
      v-for="(option,idx) in options"
      :key="`${option.value}_${idx}`"
      :label="option.label"
      :value="option.value"
      :disabled="option.disabled"
    >
      <template v-if="hasOptionSides">
        <span v-for="(items, index) in optionSides" :key="index" :class="`side-${index}`">
          {{ option[items] }}
        </span>
      </template>
      <span v-else>{{ option.label }}</span>
    </el-option>
  </el-select>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { withProps, useFormMixin } from '../composables/form-mixin'

export default defineComponent({
  name: 'SchemaFormSelect',
	props: {
		...withProps()
	},
  setup (props, { attrs, emit }) {
	  const { bindVal, attrsAll } = useFormMixin(props, { attrs, emit })
    const optionSides = computed(() => {
		  return attrsAll.optionSides || ''
	  })
	  const hasOptionSides = computed(() => {
		  return Array.isArray(optionSides) && optionSides.length >= 2
	  })
    return { optionSides, hasOptionSides, bindVal, attrsAll }
  }
})
</script>

<style lang="less" scoped>
</style>
