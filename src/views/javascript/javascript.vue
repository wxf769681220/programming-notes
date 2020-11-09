<template>
  <div class="javascript">
    <Menu class="menu-wrapper" router :collapse="isCollapse">
      <Submenu index="ecmascript">
        <template slot="title">
          <strong slot="title">ECMAScript</strong>
        </template>
        <MenuItem index="dataTypes">
          <strong slot="title">数据类型</strong>
        </MenuItem>
        <MenuItem index="operators">
          <strong slot="title">运算符</strong>
        </MenuItem>
        <MenuItem index="statements">
          <strong slot="title">语句</strong>
        </MenuItem>
        <Submenu index="referenceType">
          <template slot="title">
            <strong slot="title">引用类型</strong>
          </template>
          <MenuItem index="referenceType-1">时间日期</MenuItem>
          <MenuItem index="referenceType-2">正则表达式</MenuItem>
          <MenuItem index="referenceType-3">基本包装类型</MenuItem>
          <MenuItem index="referenceType-4">Math对象</MenuItem>
        </Submenu>
        <Submenu index="object">
          <template slot="title">
            <strong slot="title">对象</strong>
          </template>
          <MenuItem index="object-1">对象、属性</MenuItem>
          <MenuItem index="object-2">面向对象的程序设计</MenuItem>
        </Submenu>
        <Submenu index="array">
          <template slot="title">
            <strong slot="title">数组</strong>
          </template>
          <MenuItem index="array-1">数组</MenuItem>
          <MenuItem index="array-2">数组方法</MenuItem>
        </Submenu>
        <Submenu index="function">
          <template slot="title">
            <strong slot="title">函数</strong>
          </template>
          <MenuItem index="function-1">函数</MenuItem>
          <MenuItem index="function-2">原型、原型链</MenuItem>
          <MenuItem index="function-3">继承</MenuItem>
          <MenuItem index="function-4">模块模式设计</MenuItem>
          <MenuItem index="function-5">高级函数</MenuItem>
        </Submenu>
      </Submenu>
      <Submenu index="bom">
        <template slot="title">
          <strong slot="title">BOM</strong>
        </template>
        <MenuItem index="window">Window 对象</MenuItem>
        <MenuItem index="navigator">Navigator 对象</MenuItem>
        <MenuItem index="location">Location 对象</MenuItem>
        <MenuItem index="screen">Screen 对象</MenuItem>
        <MenuItem index="history">History 对象</MenuItem>
      </Submenu>
      <Submenu index="dom">
        <template slot="title">
          <strong slot="title">DOM</strong>
        </template>
        <MenuItem index="dom-1">Node 对象</MenuItem>
        <MenuItem index="dom-2">节点类型</MenuItem>
        <MenuItem index="dom-3">DOM HTML5</MenuItem>
        <MenuItem index="dom-4">事件处理程序</MenuItem>
        <MenuItem index="dom-5">DOM 事件</MenuItem>
        <MenuItem index="dom-6">DOM 操作技术</MenuItem>
      </Submenu>
      <Submenu index="form">
        <template slot="title">
          <strong slot="title">表单</strong>
        </template>
        <MenuItem index="form-1">Form 类型</MenuItem>
        <MenuItem index="form-2">表单字段</MenuItem>
        <MenuItem index="form-3">选择框、富文本</MenuItem>
      </Submenu>
      <router-link class="link" tag="div" to="/javascript/json">JSON</router-link>
      <Submenu index="ajax">
        <template slot="title">
          <strong slot="title">Ajax</strong>
        </template>
        <MenuItem index="ajax-1">XMLHttpRequest 对象</MenuItem>
        <MenuItem index="ajax-2">XMLHttpRequest 2级</MenuItem>
        <MenuItem index="ajax-3">HTTP 请求</MenuItem>
        <MenuItem index="ajax-4">CORS 跨域技术</MenuItem>
        <MenuItem index="ajax-5">其他跨域技术</MenuItem>
        <MenuItem index="ajax-6">XSS 跨站脚本</MenuItem>
      </Submenu>
      <router-link class="link" tag="div" to="/javascript/web-works">模拟多线程</router-link>
      <router-link class="link" tag="div" to="/javascript/page-visibility">页面可见性</router-link>
      <router-link class="link" tag="div" to="/javascript/timeout">定时器</router-link>
      <router-link class="link" tag="div" to="/javascript/storage">客户端存储</router-link>
    </Menu>
    <section
      class="content-wrapper"
      :style="{ 'margin-left': isCollapse ? '83px' : '200px', 'padding-top': '20px' }"
    >
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import { Menu, Submenu, MenuItem } from 'element-ui'

export default {
  name: 'javascript',
  props: {
    isCollapse: {
      type: Boolean,
      default: true
    }
  },
  components: {
    Menu,
    Submenu,
    MenuItem
  }
}
</script>

<style scoped lang="stylus">
.javascript
  display: flex
  height: 100%
  .menu-wrapper:not(.el-menu--collapse)
    flex: 0 0 200px
    width: 200px
  .menu-wrapper, .el-menu--collapse
    position: fixed
    top: 72px
    left: 0
    bottom: 0
    z-index: 1
    overflow: auto
    overflow: -moz-scrollbars-none
    overflow: -moz-scrollbars-none
    &::-webkit-scrollbar
      display: none
      -webkit-overflow-scrolling: touch
    .link
      padding: 0 20px
      height: 56px
      line-height: 56px
      font-weight: bold
      &:hover
        background: rgba(236,245,255,1)
  .content-wrapper
    flex: 1 1 auto
</style>
