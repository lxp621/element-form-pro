---
title: 'form'
desc: 'form'
---

### form

::: demo

```vue
<template>
  <el-form size="small" label-position="left" label-width="120px" :model="model">
    <schema-form
      :layout="layout"
      :model="model"
      :schema="schema"
      :options="options"
    >
    </schema-form>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      // 表单布局
      layout: {},
      // 表单绑定模型
      model: {},
      // 表单 schema
      schema: [
        // [
            { type: 'input', prop: 'dataName', formItem: { label: '数据源：' }, attrs: { placeholder: '请输入数据源', disabled: true } },
            { type: 'input', prop: 'resultName', formItem: { label: '结果名称：' }, attrs: { placeholder: '请输入结果名称' } },
            { type: 'input', prop: 'dataName2', formItem: { label: '数据源2：' }, attrs: { placeholder: '请输入数据源', disabled: true } },
            { type: 'input', prop: 'resultName2', formItem: { label: '结果名称2：' }, attrs: { placeholder: '请输入结果名称' } },
            { type: 'input', prop: 'test', formItem: { label: '测试：' }, attrs: { placeholder: '请输入测试' } }
        // ]
      ],
      // 表单 options
      options: {}
    }
  }
}
</script>

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
