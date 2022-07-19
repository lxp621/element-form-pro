<template>
  <el-col v-bind="col.colGrid" v-if="!col.hide">
    <slot v-if="col.slot" :name="col.slot"></slot>
    <template v-else>
      <!-- 具体组件的配置项目 -->
      <schema-form-item
          v-bind="col.formItem"
          :prop="col.prop"
          :col="col"
          :model="model"
          :options="options"
          v-on="$listeners"
      >
        <slot v-if="col.labelSlot" :name="col.labelSlot" :slot="col.labelSlot"></slot>
        <slot v-if="col.frontSlot" :name="col.frontSlot" :slot="col.frontSlot"></slot>
        <slot v-if="col.rearSlot" :name="col.rearSlot" :slot="col.rearSlot"></slot>
      </schema-form-item>
    </template>
  </el-col>
</template>

<script>
import { defineComponent } from 'vue'
import SchemaFormItem from './SchemaFormItem.vue'
export default {
  name: 'SchemaFormWrap',
  props: {
	  col: [Array, Object],
	  model: { // 绑定的value值
		  type: Object,
		  required: true,
		  default: () => {}
	  },
	  options: { // 多选值绑定的陪选项目
		  type: Object,
		  default: () => {}
	  }
  },
	components: {
		SchemaFormItem
	}
}
</script>

<style scoped>

</style>
