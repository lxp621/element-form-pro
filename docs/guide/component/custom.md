### 自定义组件

SchemaForm 组件提供了便于创建自定义组件的方案，使用 `FormMixin` 创建你的自定义组件

#### 创建自定义组件

``` vue
// @/components/CustomNumber.vue
<template>
  <el-input-number
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="onEvents"
  />
</template>

<script>
import { defineComponent } from 'vue'
import { withProps, useFormMixin } from '../composables/form-mixin'

export default defineComponent({
	name: 'CustomNumber',
	props: {
		...withProps()
	},
	setup (props, { attrs, emit }) {
		const { bindVal, attrsAll } = useFormMixin(props, { attrs, emit })
		return { bindVal, attrsAll }
	}
})
</script>
```

#### main.js 全局引入组件

``` js
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import SchemaForm from '@vueblocks/element-schema-form'
import CustomNumber from '@/components/CustomNumber.vue'

Vue.use(ElementUI)
Vue.use(SchemaForm)
Vue.component('CustomNumber', CustomNumber)
```

#### 使用自定义组件

