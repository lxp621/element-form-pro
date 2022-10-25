<template>
  <div class="schema-form">
    <el-row
        class="schema-form__row"
        v-bind="layout"
        v-for="(row, rowIndex) in formatedSchema"
        :key="rowIndex"
    >
      <template v-for="(col, colIndex) in row">
        <el-col v-bind="col.colGrid || colCpt(row)" v-if="!col.hide" :key="colIndex">
          <slot v-if="col.slot" :name="col.slot"></slot>
          <template v-else>
            <!-- 具体组件的配置项目 -->
            <schema-form-item
                v-bind="$attrs"
                :col="col"
                :model="model"
                :options="options"
                v-on="$listeners"
            >
              <!--传递插槽 循环所有input插槽-->
              <template v-for="(item, key) in $slots" v-slot:[key]>
                <slot :name="key"></slot>
              </template>
<!--              <slot v-if="col.labelSlot" :name="col.labelSlot" :slot="col.labelSlot"></slot>-->
<!--              <slot v-if="col.frontSlot" :name="col.frontSlot" :slot="col.frontSlot"></slot>-->
<!--              <slot v-if="col.rearSlot" :name="col.rearSlot" :slot="col.rearSlot"></slot>-->
            </schema-form-item>
          </template>
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script>
import SchemaFormWrap from './SchemaFormWrap.vue'
import SchemaFormItem from './SchemaFormItem.vue'
import { defineComponent, computed } from 'vue'
import { chunckBy } from './util'
import chunk from 'lodash.chunk'
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
    rowLayout: { // 每行几列，如[3,3]为两行三列（第一行3列第二行3列）,不传默认为单列
      type: Array
    },
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
	    const list = props.schema.filter(it => !it.isDelete && !it.hide)
	    return props.rowLayout ? chunckBy(list, props.rowLayout) : chunk(list, list.length)
      // return props.schema.map(list => {
	    //   let _showNum = list.filter(item => !item.hide).length || 1
      //   return list.map(obj => ({ ...obj, colGrid: obj.colGrid || Math.round(24 / _showNum) }))
      // })
    })
    const colCpt = (row) => {
      return props.rowLayout ? { span: Math.round(24 / row.length) } : { span: 24 }
    }
    return {
      formatedSchema,
      colCpt
    }
  }
})
</script>

<style lang="scss">
</style>
