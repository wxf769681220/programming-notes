<template>
  <header class="site-header">
    <div class="logo">JAVASCRIPT</div>
    <slot></slot>
    <ul class="nav">
      <router-link tag="li" class="nav-item" to="/es6">ES6</router-link>
      <router-link tag="li" class="nav-item" to="/typescript">TypeScript</router-link>
      <router-link tag="li" class="nav-item" to="/vue">Vue</router-link>
      <router-link tag="li" class="nav-item" to="/python">Python</router-link>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'site-header',
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {},
  components: {}
}
</script>

<style scoped lang="stylus">
.site-header
  position: fixed
  top: 0
  left: 0
  z-index: 9
  display: flex
  align-items: center
  padding: 8px 0
  width: 100%
  color: #fff
  background-color: #eff1f5
  .logo
    margin: 0 20px
    width: 150px
    height: 40px
    line-height: 40px
    font-size: 20px
    font-weight: 700
    text-align: center
    color: orange
  .nav
    display: flex
    margin-left: 60px
    .nav-item
      display: block
      padding-left: 8px
      padding-right: 8px
      height: 56px
      line-height: 56px
      &:hover
        color: orange
      &.active
        color: orange
</style>
