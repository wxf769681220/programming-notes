<template>
  <div id="app">
    <site-header>
      <RadioGroup v-model="isCollapse">
        <RadioButton :label="false">展开</RadioButton>
        <RadioButton :label="true">收起</RadioButton>
      </RadioGroup>
    </site-header>
    <main class="main-wrapper">
      <router-view :isCollapse="isCollapse"></router-view>
    </main>
  </div>
</template>

<script>
import SiteHeader from 'components/site-header'
import { RadioGroup, RadioButton } from 'element-ui'

export default {
  name: 'app',
  data() {
    return {
      isCollapse: false
    }
  },
  components: {
    SiteHeader,
    RadioGroup,
    RadioButton
  }
}
</script>

<style scoped lang="stylus">
.main-wrapper
  padding-top: 72px
  height: 100vh
</style>
