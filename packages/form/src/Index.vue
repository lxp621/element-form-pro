<template>
  <div class="schema-form">
    <el-row
        class="schema-form__row"
        v-bind="layout"
        v-for="(row, rowIndex) in formatedSchema"
        :key="rowIndex"
    >
      <template v-for="(col, colIndex) in row">
        <el-col v-bind="col.colGrid" v-if="!col.hide" :key="colIndex">
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
    </el-row>
  </div>
</template>

<script>
import SchemaFormWrap from './SchemaFormWrap'
import SchemaFormItem from './SchemaFormItem.vue'
import { defineComponent, computed } from 'vue'
// import { chunckBy } from './util'
export default defineComponent({
  name: 'SchemaForm',
  components: {
	  SchemaFormWrap,
	  SchemaFormItem
  },
  props: {
    layout: { // 关于el-row 的拓展
      type: Object,
      default: () => {}
    },
    // rowLayout: {
    //   type: Array,
    //   default: () => [3, 3]
    // },
    schema: { // 表单的格局
      type: Array,
      required: true,
      validator (val) {
        return val.every(arr => Array.isArray(arr) && arr.length > 0)
      }
    },
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
  setup(props) {
    const formatedSchema = computed(() => {
      return props.schema.map(list => {
	      let _showNum = list.filter(item => !item.hide).length || 1
        return list.map(obj => ({ ...obj, colGrid: obj.colGrid || Math.round(24 / _showNum) }))
      })
    })
    return {
      formatedSchema
    }
  }
})
</script>

<style lang="scss">
</style>
