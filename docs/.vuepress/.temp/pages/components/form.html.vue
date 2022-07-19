<template><h3 id="form" tabindex="-1"><a class="header-anchor" href="#form" aria-hidden="true">#</a> form</h3>
<demo sourceCode="&lt;template&gt;
  &lt;el-form class=&quot;basic-instance&quot; size=&quot;small&quot; label-position=&quot;left&quot; label-width=&quot;120px&quot;
		:model=&quot;model&quot; :rules=&quot;rules&quot; ref=&quot;formName&quot;&gt;
    &lt;schema-form
        :layout=&quot;layout&quot;
        :model=&quot;model&quot;
        :schema=&quot;schema&quot;
        :options=&quot;options&quot;
    &gt;
			&lt;template v-slot:line&gt;
        &lt;div class=&quot;line&quot;&gt;&lt;/div&gt;
      &lt;/template&gt;
			&lt;template v-slot:submit&gt;
        &lt;el-form-item&gt;
          &lt;el-button type=&quot;primary&quot; @click=&quot;submitForm&quot;&gt;立即创建&lt;/el-button&gt;
          &lt;el-button @click=&quot;resetForm&quot;&gt;重置&lt;/el-button&gt;
        &lt;/el-form-item&gt;
      &lt;/template&gt;
    &lt;/schema-form&gt;
  &lt;/el-form&gt;
&lt;/template&gt;

&lt;script&gt;
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
      formName.value.validate((valid) =&gt; {
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
&lt;/script&gt;
&lt;style scoped&gt;
  .basic-instance .line{
    height: 2px;
    background: rgb(220, 223, 230);
    margin: 15px 5px 0;
  }
&lt;/style&gt;


"><render-demo-0 />
        
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: #ffffff"><code><span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;</span><span style="color: #116329">el-form</span><span style="color: #24292F"> </span><span style="color: #0550AE">class</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;basic-instance&quot;</span><span style="color: #24292F"> </span><span style="color: #0550AE">size</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;small&quot;</span><span style="color: #24292F"> </span><span style="color: #0550AE">label-position</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;left&quot;</span><span style="color: #24292F"> </span><span style="color: #0550AE">label-width</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;120px&quot;</span></span>
<span class="line"><span style="color: #24292F">		:</span><span style="color: #0550AE">model</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">model</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F"> :</span><span style="color: #0550AE">rules</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">rules</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F"> </span><span style="color: #0550AE">ref</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;formName&quot;</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">schema-form</span></span>
<span class="line"><span style="color: #24292F">        :</span><span style="color: #0550AE">layout</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">layout</span><span style="color: #0A3069">&quot;</span></span>
<span class="line"><span style="color: #24292F">        :</span><span style="color: #0550AE">model</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">model</span><span style="color: #0A3069">&quot;</span></span>
<span class="line"><span style="color: #24292F">        :</span><span style="color: #0550AE">schema</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">schema</span><span style="color: #0A3069">&quot;</span></span>
<span class="line"><span style="color: #24292F">        :</span><span style="color: #0550AE">options</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">options</span><span style="color: #0A3069">&quot;</span></span>
<span class="line"><span style="color: #24292F">    &gt;</span></span>
<span class="line"><span style="color: #24292F">			&lt;</span><span style="color: #116329">template</span><span style="color: #24292F"> </span><span style="color: #0550AE">v-slot:line</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">        &lt;</span><span style="color: #116329">div</span><span style="color: #24292F"> </span><span style="color: #0550AE">class</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;line&quot;</span><span style="color: #24292F">&gt;&lt;/</span><span style="color: #116329">div</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">      &lt;/</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">			&lt;</span><span style="color: #116329">template</span><span style="color: #24292F"> </span><span style="color: #0550AE">v-slot:submit</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">        &lt;</span><span style="color: #116329">el-form-item</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">          &lt;</span><span style="color: #116329">el-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;primary&quot;</span><span style="color: #24292F"> @</span><span style="color: #0550AE">click</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">submitForm</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">&gt;立即创建&lt;/</span><span style="color: #116329">el-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">          &lt;</span><span style="color: #116329">el-button</span><span style="color: #24292F"> @</span><span style="color: #0550AE">click</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">resetForm</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">&gt;重置&lt;/</span><span style="color: #116329">el-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">        &lt;/</span><span style="color: #116329">el-form-item</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">      &lt;/</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;/</span><span style="color: #116329">schema-form</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;/</span><span style="color: #116329">el-form</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">script</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #CF222E">import</span><span style="color: #24292F"> { defineComponent, toRefs, reactive, ref } </span><span style="color: #CF222E">from</span><span style="color: #24292F"> </span><span style="color: #0A3069">&#39;vue&#39;</span></span>
<span class="line"><span style="color: #CF222E">export</span><span style="color: #953800"> </span><span style="color: #CF222E">default</span><span style="color: #953800"> </span><span style="color: #8250DF">defineComponent</span><span style="color: #953800">({</span></span>
<span class="line"><span style="color: #953800">  </span><span style="color: #8250DF">setup</span><span style="color: #953800"> () </span><span style="color: #24292F">{</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #CF222E">const</span><span style="color: #24292F"> </span><span style="color: #0550AE">initVal</span><span style="color: #24292F"> </span><span style="color: #CF222E">=</span><span style="color: #24292F"> </span><span style="color: #8250DF">reactive</span><span style="color: #24292F">({</span></span>
<span class="line"><span style="color: #24292F">      </span><span style="color: #6E7781">// 表单布局</span></span>
<span class="line"><span style="color: #24292F">      layout: {},</span></span>
<span class="line"><span style="color: #24292F">      </span><span style="color: #6E7781">// 表单绑定模型</span></span>
<span class="line"><span style="color: #24292F">      model: {</span></span>
<span class="line"><span style="color: #24292F">        name: </span><span style="color: #0A3069">&#39;&#39;</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">        region: </span><span style="color: #0A3069">&#39;&#39;</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">        date1: </span><span style="color: #0A3069">&#39;&#39;</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">        date2: </span><span style="color: #0A3069">&#39;&#39;</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">        delivery: </span><span style="color: #0550AE">false</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">        type: [],</span></span>
<span class="line"><span style="color: #24292F">        resource: </span><span style="color: #0A3069">&#39;&#39;</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">        desc: </span><span style="color: #0A3069">&#39;&#39;</span></span>
<span class="line"><span style="color: #24292F">      },</span></span>
<span class="line"><span style="color: #24292F">      </span><span style="color: #6E7781">// 表单 schema</span></span>
<span class="line"><span style="color: #24292F">      schema: [</span></span>
<span class="line"><span style="color: #24292F">        [{ type: </span><span style="color: #0A3069">&#39;input&#39;</span><span style="color: #24292F">, prop: </span><span style="color: #0A3069">&#39;name&#39;</span><span style="color: #24292F">, formItem: { label: </span><span style="color: #0A3069">&#39;活动名称&#39;</span><span style="color: #24292F"> }, attrs: { placeholder: </span><span style="color: #0A3069">&#39;请输入活动名称&#39;</span><span style="color: #24292F">, disabled: </span><span style="color: #0550AE">true</span><span style="color: #24292F"> } }],</span></span>
<span class="line"><span style="color: #24292F">        [{ type: </span><span style="color: #0A3069">&#39;select&#39;</span><span style="color: #24292F">, prop: </span><span style="color: #0A3069">&#39;region&#39;</span><span style="color: #24292F">, formItem: { label: </span><span style="color: #0A3069">&#39;活动区域：&#39;</span><span style="color: #24292F"> }, attrs: { placeholder: </span><span style="color: #0A3069">&#39;请选择活动区域&#39;</span><span style="color: #24292F"> } }],</span></span>
<span class="line"><span style="color: #24292F">        [</span></span>
<span class="line"><span style="color: #24292F">          {</span></span>
<span class="line"><span style="color: #24292F">            type: </span><span style="color: #0A3069">&#39;datepicker&#39;</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">            prop: </span><span style="color: #0A3069">&#39;date1&#39;</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">            formItem: { label: </span><span style="color: #0A3069">&#39;活动时间&#39;</span><span style="color: #24292F"> },</span></span>
<span class="line"><span style="color: #24292F">            colGrid: { span:</span><span style="color: #0550AE">11</span><span style="color: #24292F"> }</span></span>
<span class="line"><span style="color: #24292F">          },</span></span>
<span class="line"><span style="color: #24292F">          { slot: </span><span style="color: #0A3069">&#39;line&#39;</span><span style="color: #24292F">, colGrid: { span:</span><span style="color: #0550AE">2</span><span style="color: #24292F"> } },</span></span>
<span class="line"><span style="color: #24292F">          {</span></span>
<span class="line"><span style="color: #24292F">            type: </span><span style="color: #0A3069">&#39;timeselect&#39;</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">            prop: </span><span style="color: #0A3069">&#39;date2&#39;</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">            formItem: { label: </span><span style="color: #0A3069">&#39;&#39;</span><span style="color: #24292F">, </span><span style="color: #0A3069">&#39;label-width&#39;</span><span style="color: #24292F">: </span><span style="color: #0A3069">&#39;0px&#39;</span><span style="color: #24292F"> },</span></span>
<span class="line"><span style="color: #24292F">            colGrid: { span:</span><span style="color: #0550AE">11</span><span style="color: #24292F"> }</span></span>
<span class="line"><span style="color: #24292F">          }</span></span>
<span class="line"><span style="color: #24292F">        ],</span></span>
<span class="line"><span style="color: #24292F">        [</span></span>
<span class="line"><span style="color: #24292F">          { type: </span><span style="color: #0A3069">&#39;switch&#39;</span><span style="color: #24292F">, prop: </span><span style="color: #0A3069">&#39;delivery&#39;</span><span style="color: #24292F">, formItem: { label: </span><span style="color: #0A3069">&#39;即时配送&#39;</span><span style="color: #24292F"> } }</span></span>
<span class="line"><span style="color: #24292F">        ],</span></span>
<span class="line"><span style="color: #24292F">        [</span></span>
<span class="line"><span style="color: #24292F">          { type: </span><span style="color: #0A3069">&#39;checkbox&#39;</span><span style="color: #24292F">, prop: </span><span style="color: #0A3069">&#39;type&#39;</span><span style="color: #24292F">, formItem: { label: </span><span style="color: #0A3069">&#39;活动性质&#39;</span><span style="color: #24292F"> } }</span></span>
<span class="line"><span style="color: #24292F">        ],</span></span>
<span class="line"><span style="color: #24292F">        [</span></span>
<span class="line"><span style="color: #24292F">          { type: </span><span style="color: #0A3069">&#39;radio&#39;</span><span style="color: #24292F">, prop: </span><span style="color: #0A3069">&#39;resource&#39;</span><span style="color: #24292F">, formItem: { label: </span><span style="color: #0A3069">&#39;特殊资源&#39;</span><span style="color: #24292F"> } }</span></span>
<span class="line"><span style="color: #24292F">        ],</span></span>
<span class="line"><span style="color: #24292F">        [</span></span>
<span class="line"><span style="color: #24292F">          {</span></span>
<span class="line"><span style="color: #24292F">            type: </span><span style="color: #0A3069">&#39;input&#39;</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">            prop: </span><span style="color: #0A3069">&#39;desc&#39;</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">            formItem: { label: </span><span style="color: #0A3069">&#39;活动形式&#39;</span><span style="color: #24292F"> },</span></span>
<span class="line"><span style="color: #24292F">            attrs: { type: </span><span style="color: #0A3069">&#39;textarea&#39;</span><span style="color: #24292F"> }</span></span>
<span class="line"><span style="color: #24292F">          }</span></span>
<span class="line"><span style="color: #24292F">        ],</span></span>
<span class="line"><span style="color: #24292F">        [</span></span>
<span class="line"><span style="color: #24292F">          { slot: </span><span style="color: #0A3069">&#39;submit&#39;</span><span style="color: #24292F"> }</span></span>
<span class="line"><span style="color: #24292F">        ]</span></span>
<span class="line"><span style="color: #24292F">      ],</span></span>
<span class="line"><span style="color: #24292F">      </span><span style="color: #6E7781">// 表单 options</span></span>
<span class="line"><span style="color: #24292F">      options: {</span></span>
<span class="line"><span style="color: #24292F">        region: [{ label: </span><span style="color: #0A3069">&#39;区域一&#39;</span><span style="color: #24292F">, value: </span><span style="color: #0550AE">0</span><span style="color: #24292F"> }, { label: </span><span style="color: #0A3069">&#39;区域二&#39;</span><span style="color: #24292F">, value: </span><span style="color: #0550AE">1</span><span style="color: #24292F"> }],</span></span>
<span class="line"><span style="color: #24292F">        type: [</span></span>
<span class="line"><span style="color: #24292F">          { label: </span><span style="color: #0A3069">&#39;美食/餐厅线上活动&#39;</span><span style="color: #24292F">, value: </span><span style="color: #0A3069">&#39;美食/餐厅线上活动&#39;</span><span style="color: #24292F"> },</span></span>
<span class="line"><span style="color: #24292F">          { label: </span><span style="color: #0A3069">&#39;地推活动&#39;</span><span style="color: #24292F">, value: </span><span style="color: #0A3069">&#39;地推活动&#39;</span><span style="color: #24292F"> }</span></span>
<span class="line"><span style="color: #24292F">        ],</span></span>
<span class="line"><span style="color: #24292F">        resource: [</span></span>
<span class="line"><span style="color: #24292F">          { label: </span><span style="color: #0A3069">&#39;线上品牌商赞助&#39;</span><span style="color: #24292F">, value: </span><span style="color: #0A3069">&#39;线上品牌商赞助&#39;</span><span style="color: #24292F"> },</span></span>
<span class="line"><span style="color: #24292F">          { label: </span><span style="color: #0A3069">&#39;线下场地免费&#39;</span><span style="color: #24292F">, value: </span><span style="color: #0A3069">&#39;线下场地免费&#39;</span><span style="color: #24292F"> }</span></span>
<span class="line"><span style="color: #24292F">        ]</span></span>
<span class="line"><span style="color: #24292F">      },</span></span>
<span class="line"><span style="color: #24292F">			rules: {</span></span>
<span class="line"><span style="color: #24292F">         name: [</span></span>
<span class="line"><span style="color: #24292F">            { required: </span><span style="color: #0550AE">true</span><span style="color: #24292F">, message: </span><span style="color: #0A3069">&#39;请输入活动名称&#39;</span><span style="color: #24292F">, trigger: </span><span style="color: #0A3069">&#39;blur&#39;</span><span style="color: #24292F"> },</span></span>
<span class="line"><span style="color: #24292F">            { min: </span><span style="color: #0550AE">3</span><span style="color: #24292F">, max: </span><span style="color: #0550AE">5</span><span style="color: #24292F">, message: </span><span style="color: #0A3069">&#39;长度在 3 到 5 个字符&#39;</span><span style="color: #24292F">, trigger: </span><span style="color: #0A3069">&#39;blur&#39;</span><span style="color: #24292F"> }</span></span>
<span class="line"><span style="color: #24292F">          ],</span></span>
<span class="line"><span style="color: #24292F">          region: [</span></span>
<span class="line"><span style="color: #24292F">            { required: </span><span style="color: #0550AE">true</span><span style="color: #24292F">, message: </span><span style="color: #0A3069">&#39;请选择活动区域&#39;</span><span style="color: #24292F">, trigger: </span><span style="color: #0A3069">&#39;change&#39;</span><span style="color: #24292F"> }</span></span>
<span class="line"><span style="color: #24292F">          ],</span></span>
<span class="line"><span style="color: #24292F">          date1: [</span></span>
<span class="line"><span style="color: #24292F">            { type: </span><span style="color: #0A3069">&#39;date&#39;</span><span style="color: #24292F">, required: </span><span style="color: #0550AE">true</span><span style="color: #24292F">, message: </span><span style="color: #0A3069">&#39;请选择日期&#39;</span><span style="color: #24292F">, trigger: </span><span style="color: #0A3069">&#39;change&#39;</span><span style="color: #24292F"> }</span></span>
<span class="line"><span style="color: #24292F">          ],</span></span>
<span class="line"><span style="color: #24292F">          date2: [</span></span>
<span class="line"><span style="color: #24292F">            { type: </span><span style="color: #0A3069">&#39;date&#39;</span><span style="color: #24292F">, required: </span><span style="color: #0550AE">true</span><span style="color: #24292F">, message: </span><span style="color: #0A3069">&#39;请选择时间&#39;</span><span style="color: #24292F">, trigger: </span><span style="color: #0A3069">&#39;change&#39;</span><span style="color: #24292F"> }</span></span>
<span class="line"><span style="color: #24292F">          ],</span></span>
<span class="line"><span style="color: #24292F">          type: [</span></span>
<span class="line"><span style="color: #24292F">            { type: </span><span style="color: #0A3069">&#39;array&#39;</span><span style="color: #24292F">, required: </span><span style="color: #0550AE">true</span><span style="color: #24292F">, message: </span><span style="color: #0A3069">&#39;请至少选择一个活动性质&#39;</span><span style="color: #24292F">, trigger: </span><span style="color: #0A3069">&#39;change&#39;</span><span style="color: #24292F"> }</span></span>
<span class="line"><span style="color: #24292F">          ],</span></span>
<span class="line"><span style="color: #24292F">          resource: [</span></span>
<span class="line"><span style="color: #24292F">            { required: </span><span style="color: #0550AE">true</span><span style="color: #24292F">, message: </span><span style="color: #0A3069">&#39;请选择活动资源&#39;</span><span style="color: #24292F">, trigger: </span><span style="color: #0A3069">&#39;change&#39;</span><span style="color: #24292F"> }</span></span>
<span class="line"><span style="color: #24292F">          ],</span></span>
<span class="line"><span style="color: #24292F">          desc: [</span></span>
<span class="line"><span style="color: #24292F">            { required: </span><span style="color: #0550AE">true</span><span style="color: #24292F">, message: </span><span style="color: #0A3069">&#39;请填写活动形式&#39;</span><span style="color: #24292F">, trigger: </span><span style="color: #0A3069">&#39;blur&#39;</span><span style="color: #24292F"> }</span></span>
<span class="line"><span style="color: #24292F">          ]</span></span>
<span class="line"><span style="color: #24292F">      }</span></span>
<span class="line"><span style="color: #24292F">    })</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #CF222E">const</span><span style="color: #24292F"> </span><span style="color: #0550AE">formName</span><span style="color: #24292F"> </span><span style="color: #CF222E">=</span><span style="color: #24292F"> </span><span style="color: #8250DF">ref</span><span style="color: #24292F">(</span><span style="color: #0550AE">null</span><span style="color: #24292F">)</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #CF222E">function</span><span style="color: #24292F"> </span><span style="color: #8250DF">submitForm</span><span style="color: #24292F"> () {</span></span>
<span class="line"><span style="color: #24292F">      formName.value.</span><span style="color: #8250DF">validate</span><span style="color: #24292F">((</span><span style="color: #953800">valid</span><span style="color: #24292F">) </span><span style="color: #CF222E">=&gt;</span><span style="color: #24292F"> {</span></span>
<span class="line"><span style="color: #24292F">        </span><span style="color: #CF222E">if</span><span style="color: #24292F"> (valid) {</span></span>
<span class="line"><span style="color: #24292F">          console.</span><span style="color: #8250DF">log</span><span style="color: #24292F">(</span><span style="color: #0A3069">&#39;submit!&#39;</span><span style="color: #24292F">);</span></span>
<span class="line"><span style="color: #24292F">        } </span><span style="color: #CF222E">else</span><span style="color: #24292F"> {</span></span>
<span class="line"><span style="color: #24292F">          </span><span style="color: #CF222E">return</span><span style="color: #24292F"> </span><span style="color: #0550AE">false</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #24292F">        }</span></span>
<span class="line"><span style="color: #24292F">      })</span></span>
<span class="line"><span style="color: #24292F">    }</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #CF222E">function</span><span style="color: #24292F"> </span><span style="color: #8250DF">resetForm</span><span style="color: #24292F"> () {</span></span>
<span class="line"><span style="color: #24292F">      formName.value.</span><span style="color: #8250DF">resetFields</span><span style="color: #24292F">()</span></span>
<span class="line"><span style="color: #24292F">    }</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #CF222E">return</span><span style="color: #24292F"> { </span><span style="color: #CF222E">...</span><span style="color: #8250DF">toRefs</span><span style="color: #24292F">(initVal), submitForm, resetForm, formName }</span></span>
<span class="line"><span style="color: #24292F">  }</span></span>
<span class="line"><span style="color: #953800">})</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">script</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">style</span><span style="color: #24292F"> </span><span style="color: #0550AE">scoped</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  </span><span style="color: #0550AE">.basic-instance</span><span style="color: #24292F"> </span><span style="color: #0550AE">.line</span><span style="color: #24292F">{</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #0550AE">height</span><span style="color: #24292F">: </span><span style="color: #0550AE">2</span><span style="color: #CF222E">px</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #0550AE">background</span><span style="color: #24292F">: </span><span style="color: #0550AE">rgb</span><span style="color: #24292F">(</span><span style="color: #0550AE">220</span><span style="color: #24292F">, </span><span style="color: #0550AE">223</span><span style="color: #24292F">, </span><span style="color: #0550AE">230</span><span style="color: #24292F">);</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #0550AE">margin</span><span style="color: #24292F">: </span><span style="color: #0550AE">15</span><span style="color: #CF222E">px</span><span style="color: #24292F"> </span><span style="color: #0550AE">5</span><span style="color: #CF222E">px</span><span style="color: #24292F"> </span><span style="color: #0550AE">0</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #24292F">  }</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">style</span><span style="color: #24292F">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h3 id="schema" tabindex="-1"><a class="header-anchor" href="#schema" aria-hidden="true">#</a> schema</h3>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">可选值</th>
<th style="text-align:left">默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">prop</td>
<td style="text-align:left">数据字段</td>
<td style="text-align:left">string</td>
<td style="text-align:left">-</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">type</td>
<td style="text-align:left">组件类型</td>
<td style="text-align:left">string</td>
<td style="text-align:left">-</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">formItem</td>
<td style="text-align:left">表单属性</td>
<td style="text-align:left">object</td>
<td style="text-align:left">-</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">modifier</td>
<td style="text-align:left">修饰符</td>
<td style="text-align:left">string</td>
<td style="text-align:left">number,trim</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">attrs</td>
<td style="text-align:left">组件属性</td>
<td style="text-align:left">object</td>
<td style="text-align:left">-</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">dynamicAttrs</td>
<td style="text-align:left">组件动态属性</td>
<td style="text-align:left">object</td>
<td style="text-align:left">-</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">on</td>
<td style="text-align:left">组件事件</td>
<td style="text-align:left">object</td>
<td style="text-align:left">-</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">hide</td>
<td style="text-align:left">是否隐藏</td>
<td style="text-align:left">boolean</td>
<td style="text-align:left">-</td>
<td style="text-align:left">false</td>
</tr>
<tr>
<td style="text-align:left">colGrid</td>
<td style="text-align:left">栅格布局,与el-col属性相同</td>
<td style="text-align:left">object</td>
<td style="text-align:left">-</td>
<td style="text-align:left">-</td>
</tr>
</tbody>
</table>
</template>

<script lang="ts">
      import * as Vue from 'vue'
      
      export default {
        name: 'component-doc',
        components: {
          "render-demo-0": (function() {
    
    const { createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = Vue

const _hoisted_1 = /*#__PURE__*/_createElementVNode("div", { class: "line" }, null, -1 /* HOISTED */)
const _hoisted_2 = /*#__PURE__*/_createTextVNode("立即创建")
const _hoisted_3 = /*#__PURE__*/_createTextVNode("重置")

function render(_ctx, _cache) {
  const _component_el_button = _resolveComponent("el-button")
  const _component_el_form_item = _resolveComponent("el-form-item")
  const _component_schema_form = _resolveComponent("schema-form")
  const _component_el_form = _resolveComponent("el-form")

  return (_openBlock(), _createBlock(_component_el_form, {
    class: "basic-instance",
    size: "small",
    "label-position": "left",
    "label-width": "120px",
    model: _ctx.model,
    rules: _ctx.rules,
    ref: "formName"
  }, {
    default: _withCtx(() => [
      _createVNode(_component_schema_form, {
        layout: _ctx.layout,
        model: _ctx.model,
        schema: _ctx.schema,
        options: _ctx.options
      }, {
        line: _withCtx(() => [
          _hoisted_1
        ]),
        submit: _withCtx(() => [
          _createVNode(_component_el_form_item, null, {
            default: _withCtx(() => [
              _createVNode(_component_el_button, {
                type: "primary",
                onClick: _ctx.submitForm
              }, {
                default: _withCtx(() => [
                  _hoisted_2
                ]),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["onClick"]),
              _createVNode(_component_el_button, { onClick: _ctx.resetForm }, {
                default: _withCtx(() => [
                  _hoisted_3
                ]),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["onClick"])
            ]),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["layout", "model", "schema", "options"])
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["model", "rules"]))
}
  
    const { defineComponent, toRefs, reactive, ref } = Vue
const democomponentExport = defineComponent({
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
    return {
      render,
      ...democomponentExport
    }
  })(),
        }
      }
    </script>
<style>.basic-instance .line{
    height: 2px;
    background: rgb(220, 223, 230);
    margin: 15px 5px 0;
  }</style>