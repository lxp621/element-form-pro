<template>
  <el-form class="basic-instance" size="small" label-position="left" label-width="120px" :model="model">
    <schema-form
        :layout="layout"
        :model="model"
        :schema="schema"
        :options="options"
    >
      <div class="line" slot="line"></div>
      <el-form-item slot="submit">
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </schema-form>
  </el-form>
</template>

<script>
import { defineComponent, toRefs, reactive, ref } from 'vue'
export default defineComponent({
  setup () {
    const initVal = reactive({
      // 表单布局
      layout: {},
      // 表单绑定模型
      model: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      // 表单 schema
      schema: [
        [{ type: 'input', prop: 'name', formItem: { label: '活动名称' }, attrs: { placeholder: '请输入活动名称', disabled: true } }],
        [{ type: 'select', prop: 'region', formItem: { label: '活动区域：' }, attrs: { placeholder: '请选择活动区域' } }],
        [
          {
            type: 'datepicker',
            prop: 'date1',
            formItem: { label: '活动时间' },
            colGrid: { span:11 }
          },
          { slot: 'line', colGrid: { span:2 } },
          {
            type: 'timeselect',
            prop: 'date2',
            formItem: { label: '', 'label-width': '0px' },
            colGrid: { span:11 }
          }
        ],
        [
          { type: 'switch', prop: 'delivery', formItem: { label: '即时配送' } }
        ],
        [
          { type: 'checkbox', prop: 'type', formItem: { label: '活动性质' } }
        ],
        [
          { type: 'radio', prop: 'resource', formItem: { label: '特殊资源' } }
        ],
        [
          {
            type: 'input',
            prop: 'desc',
            formItem: { label: '活动形式' },
            attrs: { type: 'textarea' }
          }
        ],
        [
          { slot: 'submit' }
        ]
      ],
      // 表单 options
      options: {
        region: [{ label: '区域一', value: 0 }, { label: '区域二', value: 1 }],
        type: [
          { label: '美食/餐厅线上活动', value: '美食/餐厅线上活动' },
          { label: '地推活动', value: '地推活动' }
        ],
        resource: [
          { label: '线上品牌商赞助', value: '线上品牌商赞助' },
          { label: '线下场地免费', value: '线下场地免费' }
        ]
      }
    })
    const formName = ref(null)
    function submitForm (formName) {
      formName.value.validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          return false;
        }
      })
    }
    function resetForm (formName) {
      formName.value.resetFields()
    }
    return { ...toRefs(initVal), submitForm, resetForm }
  }
})
</script>
<style scoped>
  .basic-instance .line{
    height: 2px;
    background: rgb(220, 223, 230);
    margin: -10px 5px 0;
  }
</style>
