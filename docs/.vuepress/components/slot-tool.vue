<template>
  <el-form size="small" label-position="left" label-width="90px" class="slot-tool">
    <schema-form
      :model="model"
      :schema="schema"
    >
    </schema-form>
  </el-form>
</template>

<script>
export default {
  name: 'SlotTool',
  data () {
    return {
      model: {
        name: ''
      },
      schema: [
        {
          type: 'input',
          prop: 'name',
          frontHtml: '近',
          formItem: { label: '店铺年龄' },
          rearHtml: '天'
        }
      ]
    }
  }
}
</script>

<style >
.slot-tool  .el-input {
  width: auto;
}
</style>
