<template><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #ffffff"><code><span class="line"><span style="color: #24292F">npm i @vueblocks/element-schema-form -S</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>or</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #ffffff"><code><span class="line"><span style="color: #24292F">yarn add @vueblocks/element-schema-form</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="引入组件" tabindex="-1"><a class="header-anchor" href="#引入组件" aria-hidden="true">#</a> 引入组件</h2>
<p>完整引入</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #ffffff"><code><span class="line"><span style="color: #CF222E">import</span><span style="color: #24292F"> SchemaForm </span><span style="color: #CF222E">from</span><span style="color: #24292F"> </span><span style="color: #0A3069">&#39;@vueblocks/element-schema-form&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #24292F">Vue.</span><span style="color: #8250DF">use</span><span style="color: #24292F">(SchemaForm)</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="引入第三方扩展" tabindex="-1"><a class="header-anchor" href="#引入第三方扩展" aria-hidden="true">#</a> 引入第三方扩展</h2>
<p><code>SchemaForm</code> 支持一些用于表单渲染的高级组件</p>
<p>例如 <code>codemirror</code>，使用前需要安装组件依赖</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #ffffff"><code><span class="line"><span style="color: #24292F">npm i codemirror vue-codemirror-lite -S</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>按需引入 <code>SchemaFormCodemirror</code> 组件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #ffffff"><code><span class="line"><span style="color: #CF222E">import</span><span style="color: #24292F"> SchemaFormCodemirror </span><span style="color: #CF222E">from</span><span style="color: #24292F"> </span><span style="color: #0A3069">&#39;@vueblocks/element-schema-form/lib/SchemaFormCodemirror.common.min&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #24292F">Vue.</span><span style="color: #8250DF">component</span><span style="color: #24292F">(</span><span style="color: #0A3069">&#39;SchemaFormCodemirror&#39;</span><span style="color: #24292F">, SchemaFormCodemirror)</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="组件预设配置" tabindex="-1"><a class="header-anchor" href="#组件预设配置" aria-hidden="true">#</a> 组件预设配置</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #ffffff"><code><span class="line"><span style="color: #6E7781">// input 输入框 placeholder 预设</span></span>
<span class="line"><span style="color: #24292F">Vue.</span><span style="color: #8250DF">use</span><span style="color: #24292F">(SchemaForm, {</span></span>
<span class="line"><span style="color: #24292F">  input: {</span></span>
<span class="line"><span style="color: #24292F">    placeholder: </span><span style="color: #0A3069">&#39;全局定义变量实验&#39;</span></span>
<span class="line"><span style="color: #24292F">  }</span></span>
<span class="line"><span style="color: #24292F">})</span></span>
<span class="line"></span>
<span class="line"><span style="color: #6E7781">// codemirror 插件配置项预设</span></span>
<span class="line"><span style="color: #24292F">Vue.</span><span style="color: #8250DF">use</span><span style="color: #24292F">(SchemaForm, {</span></span>
<span class="line"><span style="color: #24292F">  </span><span style="color: #0A3069">&#39;codemirror&#39;</span><span style="color: #24292F">: {</span></span>
<span class="line"><span style="color: #24292F">    cmOptions: {</span></span>
<span class="line"><span style="color: #24292F">      tabSize: </span><span style="color: #0550AE">2</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">      mode: </span><span style="color: #0A3069">&#39;text/javascript&#39;</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">      theme: </span><span style="color: #0A3069">&#39;cobalt&#39;</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">      lineNumbers: </span><span style="color: #0550AE">true</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">      line: </span><span style="color: #0550AE">true</span></span>
<span class="line"><span style="color: #24292F">    }</span></span>
<span class="line"><span style="color: #24292F">  }</span></span>
<span class="line"><span style="color: #24292F">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></template>
