<template>
  <div class="javascript">
    <Menu class="menu-wrapper" router :collapse="isCollapse">
      <MenuItem index="dataTypes" to="javascript/dataTypes">
        <i class="el-icon-grape"></i>
        <span slot="title">数据类型</span>
      </MenuItem>
      <MenuItem index="operators" to="javascript/operators">
        <i class="el-icon-menu"></i>
        <span slot="title">运算符</span>
      </MenuItem>
      <MenuItem index="statements" to="javascript/statements">
        <i class="el-icon-menu"></i>
        <span slot="title">语句</span>
      </MenuItem>
      <Submenu index="referenceType">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">引用类型</span>
        </template>
        <MenuItem index="referenceType-1" to="javascript/referenceType1-1">时间日期</MenuItem>
        <MenuItem index="referenceType-2" to="javascript/referenceType1-2">正则表达式</MenuItem>
        <MenuItem index="referenceType-3" to="javascript/referenceType1-3">基本包装类型</MenuItem>
        <MenuItem index="referenceType-4" to="javascript/referenceType1-4">Math对象</MenuItem>
      </Submenu>
      <Submenu index="object">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">引用类型</span>
        </template>
        <MenuItem index="object-1" to="javascript/object-1">对象及对象属性</MenuItem>
        <MenuItem index="object-2" to="javascript/object-2">面向对象的程序设计</MenuItem>
        <MenuItem index="object-3" to="javascript/object-3">其他</MenuItem>
      </Submenu>
    </Menu>
    <section
      class="content-wrapper"
      :style="{ 'margin-left': isCollapse ? '83px' : '220px' }"
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
  .content-wrapper
    flex: 1 1 auto
</style>
