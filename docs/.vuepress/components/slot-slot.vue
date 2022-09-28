<template>
  <el-form size="small">
    <schema-form
      :model="model"
      :schema="schema"
    >
      <template v-slot:name>
        <el-form-item label="活动名称">
          <el-input v-model="model.name"></el-input>
        </el-form-item>
      </template>
    </schema-form>
  </el-form>
</template>

<script>
export default {
  name: 'SlotSlot',
  data () {
    return {
      model: {
        name: ''
      },
      schema: [{ slot: 'name' }]
    }
  }
}
</script>

<style scoped>

</style>
