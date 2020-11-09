<template>
  <div class="test" ref="test">
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">1、XSS分类</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">字符串转数值。</div>
            <div class="card-body">
              <pre v-highlight>
<code>
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import reflowerMixins from 'common/js/mixins/reflower.js'
export default {
  name: 'test',
  mixins: [reflowerMixins]
}
</script>

<style scoped lang="stylus"></style>
