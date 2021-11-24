<template><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2>
<p>前端领域里，在中后台实际业务场景中，基本上逃不过表单页面的开发，表单页面承担着数据输入的角色，是数据收集的重要来源。</p>
<p>而对于工程中使用 <strong>Element</strong> 作为UI组件库的项目而言，前端开发者在使用 <code>el-form</code> 的时候可能更多的都在关注：</p>
<ul>
<li>如何布局表单</li>
<li>表单控件类型</li>
<li>表单控件配置项</li>
<li>表单的状态管理</li>
<li>表单校验</li>
</ul>
<p>从而为了实现一个业务场景复杂的表单，往往要编写大量重复的代码，以及产生篇幅巨大的单页面组件，而这样的开发方式是不必要的。</p>
<h2 id="方案" tabindex="-1"><a class="header-anchor" href="#方案" aria-hidden="true">#</a> 方案</h2>
<p>经过我们在表单领域的不断探索与尝试，总结出了一套基于 <strong>JSON Schema</strong> 规范的数据动态生成表单的解决方案 <strong>Element Schema Form</strong>。</p>
<p><strong>Element Schema Form</strong> 是一个基于 <code>Vue</code>、<code>element-ui</code> 技术栈封装的表单组件，用于解决大型、复杂表单页面开发过程中所做的大量重复性工作。使用一份 JSON Schema 即可生成一个成型的 form 表单，使表单组件代码变得简洁并便于维护。开发表单更高效。</p>
<h2 id="核心功能" tabindex="-1"><a class="header-anchor" href="#核心功能" aria-hidden="true">#</a> 核心功能</h2>
<ul>
<li>基于 JSON Schema 的数据结构生成表单</li>
<li>基于 <code>el-row</code>/<code>el-col</code> 的灵活表单布局</li>
<li>支持所有 <code>element-ui</code> 基础表单组件</li>
<li>支持常用第三方扩展组件，如 <code>codemirror</code>、<code>quill editor</code>、<code>markdown editor</code> 等</li>
<li>支持个性化的自定义插槽组件</li>
<li>支持可视化构建表单</li>
</ul>
<h2 id="json-schema-规范" tabindex="-1"><a class="header-anchor" href="#json-schema-规范" aria-hidden="true">#</a> JSON Schema 规范</h2>
<p>如果你还不了解什么是 JSON Schema，请移步这里 <a href="https://json-schema.org/" target="_blank" rel="noopener noreferrer">JSON Schema<OutboundLink/></a></p>
<h2 id="可视化探索" tabindex="-1"><a class="header-anchor" href="#可视化探索" aria-hidden="true">#</a> 可视化探索</h2>
<p>为了开发更高效，我们提供了基于 <strong>Element Schema Form</strong> 开发的可视化配置工具</p>
<p>表单设计器 <a href="https://github.com/vueblocks/element-form-generator" target="_blank" rel="noopener noreferrer">element-form-generator<OutboundLink/></a></p>
<p>只需简单操作几步即可配置好一个 form 表单</p>
</template>
