<template>
  <div class="screen" ref="screen">
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">1、screen 对象</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">screen 对象用来表示客户端的能力，其中包括浏览器窗口的外部的显示器的信息，如：像素宽度和高度。<br>
            <ul>
              <li><strong>availHeight</strong>：屏幕的像素高度减系统部件高度之后的值。</li>
              <li><strong>availWidth</strong>：屏幕的像素宽度减系统部件宽度之后的值。</li>
              <li><strong>availHeight</strong>：未被系统部件占用的最上方的像素值。</li>
              <li><strong>availLef</strong>t：未被系统部件占用的最左侧的像素值。</li>
              <li><strong>height</strong>：屏幕的像素高度。</li>
              <li><strong>width</strong>：屏幕的像素宽度。</li>
              <li><strong>top</strong>：当前屏幕距上边的像素举例。</li>
              <li><strong>left</strong>：当前屏幕距左边的像素举例。</li>
            </ul>
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
  name: 'screen',
  mixins: [reflowerMixins]
}
</script>

<style scoped lang="stylus"></style>
