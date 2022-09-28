<template>
  <el-form>
    <schema-form
      :model="{}"
      :layout="layout"
      :schema="schema"
      :options="{}"
    >
      <template v-for="idx in 4" :key="idx" v-slot:[`col_${idx}`]>
        <div class="grid-content"></div>
      </template>
    </schema-form>
  </el-form>
</template>

<script>
export default {
  name: 'LayoutGutter',
  data () {
    return {
      layout: {
        gutter:20
      },
      schema: [
        {slot: 'col_1'},
        {slot: 'col_2'},
        {slot: 'col_3'},
        {slot: 'col_4'}
      ]
    }
  }
}
</script>

<style  scoped>
.grid-content{
  border-radius: 4px;
  min-height: 36px;
  background: #d3dce6;
}
</style>
