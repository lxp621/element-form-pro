<template>
  <el-form size="small">
    <schema-form
      :model="model"
      :schema="schema"
    >
      <template v-slot:name>
        <div>
          <span>姓名</span>
          <el-tooltip content="请输入用户姓名" placement="right">
            <i class="el-icon-warning"></i>
          </el-tooltip>
        </div>
      </template>
    </schema-form>
  </el-form>
</template>

<script>
export default {
  name: 'SlotFront',
  data () {
    return {
      model: {
        name: ''
      },
      schema: [
        {
          type: 'input',
          prop: 'name',
          formItem: { label: '' },
          frontSlot: 'name'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
