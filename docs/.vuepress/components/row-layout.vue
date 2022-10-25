<template>
  <el-form>
    <schema-form
      :model="{}"
      :rowLayout="[3,2]"
      :schema="schema"
    >
      <template v-for="idx in 5" :key="idx" v-slot:[`col_${idx}`]>
        <div class="grid-content"></div>
      </template>
    </schema-form>
  </el-form>
</template>

<script>
export default {
  name: 'RowLayout',
  data () {
    return {
      layout: {
        gutter:20
      },
      schema: [
        { slot: 'col_1'},
        { slot: 'col_2'},
        { slot: 'col_3'},
        { slot: 'col_4'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.grid-content{
  border-radius: 4px;
  min-height: 36px;
  background: #d3dce6;
  margin-bottom: 10px;
  &:not(last-child){
    margin-right: 6px;
  }
}
</style>
