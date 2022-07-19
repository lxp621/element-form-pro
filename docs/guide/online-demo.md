---
title: 'form基本使用'
desc: 'form'
---

### 表单验证

::: demo

```vue
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
      },
			rules: {
         name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
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
    const formName = ref(null)
    function submitForm () {
      formName.value.validate((valid) => {
        if (valid) {
          console.log('submit!');
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


```

:::

### schema

参数|说明|类型|可选值|默认值
:--|:--|:--|:--|:--
prop|数据字段|string|-|-
type|组件类型|string|-|-
formItem|表单属性|object|-|-
modifier|修饰符|string|number,trim|-
attrs|组件属性|object|-|-
dynamicAttrs|组件动态属性| object|-|-
on|组件事件|object|-|-
hide|是否隐藏|boolean|-|false
colGrid|栅格布局,与el-col属性相同|object|-|-
