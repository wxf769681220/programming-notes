<template>
  <div class="form-3" ref="form3">
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">1、select 选择框</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header"></div>
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
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">2、富文本</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header"></div>
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
  name: 'form3',
  mixins: [reflowerMixins]
}
</script>

<style scoped lang="stylus"></style>
