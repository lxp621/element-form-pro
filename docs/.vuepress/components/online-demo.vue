<template>
  <el-form class="basic-instance" size="small" label-position="left" label-width="120px"
           :model="model" :rules="rules" ref="formName">
    <schema-form
      :layout="layout"
      :model="model"
      :schema="schema"
      :options="options"
    >
      <template v-slot:line>
        <div class="line"></div>
      </template>
      <template v-slot:submit>
        <el-form-item>
          <el-button type="primary" @click="submitForm">立即创建</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </template>
    </schema-form>
  </el-form>
</template>

<script>
  import { defineComponent, toRefs, reactive, ref } from 'vue'
  export default defineComponent({
    name: 'online-demo',
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
          desc: '',
          introduction: '',
          tags: ['Tag 1', 'Tag 2', 'Tag 3'],
          colors: 'rgba(19, 206, 102, 0.8)',
          percentage: 50,
          rate: 1,
          cascader: [],
          dateVal: '',
          timeVal: '',
          timeSelVal: ''
        },
        // 表单 schema
        schema: [
          { type: 'cascader', prop: 'cascaders', formItem: { label: '级联信息' }, attrs: { placeholder: '请选择级联信息' } },
          { type: 'input', prop: 'name', formItem: { label: '活动名称' }, attrs: { placeholder: '请输入活动名称', disabled: true } },
          { type: 'select', prop: 'region', formItem: { label: '活动区域：' }, attrs: { placeholder: '请选择活动区域' } },
          { type: 'switch', prop: 'delivery', formItem: { label: '即时配送' } },
          { type: 'checkbox', prop: 'type', formItem: { label: '活动性质' } },
          { type: 'radio', prop: 'resource', formItem: { label: '特殊资源' } },
          { type: 'quill', prop: 'introduction', formItem: { label: '介绍' } },
          { type: 'input', prop: 'desc', formItem: { label: '活动形式' }, attrs: { type: 'textarea' } },
          { type: 'tags', prop: 'tags', formItem: { label: '标签' }, attrs: { 'show-add': true } },
          { type: 'colorpicker', prop: 'colors', formItem: { label: '颜色选取' }, attrs: { 'show-alpha': true } },
          { type: 'progress', prop: 'percentage', formItem: { label: '进度条' }, attrs: { status: 'success' } },
          { type: 'rate', prop: 'rate', formItem: { label: '评分' }, attrs: { size: 'large', 'allow-half': true } },
          { type: 'datepicker', prop: 'dateVal', formItem: { label: '日期选择' }, attrs: { size: 'large' } },
          { type: 'timepicker', prop: 'timeVal', formItem: { label: '时间选择器' }, attrs: { size: 'large' } },
          { type: 'timeselect', prop: 'timeSelVal', formItem: { label: '时间选择' }, attrs: { format: 'hh:mm A' } },
          { slot: 'submit' }
        ],
        // 表单 options
        options: {
          cascaders: [
            {
              value: 'guide',
              label: 'Guide',
              children: [
                {
                  value: 'disciplines',
                  label: 'Disciplines',
                  children: [
                    {
                      value: 'consistency',
                      label: 'Consistency',
                    },
                    {
                      value: 'feedback',
                      label: 'Feedback',
                    },
                    {
                      value: 'efficiency',
                      label: 'Efficiency',
                    },
                    {
                      value: 'controllability',
                      label: 'Controllability',
                    },
                  ],
                },
                {
                  value: 'navigation',
                  label: 'Navigation',
                  children: [
                    {
                      value: 'side nav',
                      label: 'Side Navigation',
                    },
                    {
                      value: 'top nav',
                      label: 'Top Navigation',
                    },
                  ],
                },
              ],
            },
          ],
          region: [{ label: '区域一', value: 0 }, { label: '区域二', value: 1 }],
          type: [
            { label: '美食/餐厅线上活动', value: '美食/餐厅线上活动' },
            { label: '地推活动', value: '地推活动' }
          ],
          resource: [
            { label: '线上品牌商赞助', value: '线上品牌商赞助' },
            { label: '线下场地免费', value: '线下场地免费' }
          ]
        },
        rules: {
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      })
      // const { resetFields } = useForm(initVal.model, initVal.rules)
      const formName = ref(null)
      function submitForm () {
        formName.value.validate((valid) => {
          if (valid) {
            console.log('submit!', initVal.model);
          } else {
            return false;
          }
        })
      }
      function resetForm () {
        formName.value.resetFields()
      }
      return { ...toRefs(initVal), submitForm, resetForm, formName }
    }
  })
</script>
<style scoped>
  .basic-instance .line{
    height: 2px;
    background: rgb(220, 223, 230);
    margin: 15px 5px 0;
  }
</style>
