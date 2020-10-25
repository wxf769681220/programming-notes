<template>
  <div class="history" ref="history">
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">1、history对象</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <p>history 对象保存着用户上网的历史记录。</p>
              <pre v-highlight>
<code>
  // 后退一步
  history.go(-1)
  history.back()

  // 前进一步
  history.go(1)
  history.forward()

  // 前进两步
  history.go(2)

  // 跳转至历史记录中包含该字符串的第一个位置
  // 若历史记录中不包含该字符串,则什么也不做
  history.go('example.com')
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>length 属性。</strong>
            </div>
            <div class="card-body">
              <p>保存着历史记录的数量。</p>
              <pre v-highlight>
<code>
  if (history.length === 0) {
    // 这里应该是用户打开窗口后的第一个页面
  }
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">2、历史状态管理API</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong class="danger">pushState()</strong> 方法。
            </div>
            <div class="card-body">
              <ol>
                <li>pushState() 方法。：能够在不重载页面的情况下改变浏览器的 URL。</li>
                <li>该方法接收三个参数：状态对象（尽可能的提供初始化页面状态所需的各种信息），新状态标题（可以是空字符串）和相对 URL（可选）。</li>
                <li>执行 pushState() 方法后，新的状态信息就会被加入实例状态栈，浏览器地址栏也会变成新的相对 URL。</li>
                <li>浏览器不会真的向服务器发送请求，即使状态改变后查询 location.href 也会返回与地址栏中相同的地址。</li>
              </ol>
              <pre v-highlight>
<code>
  var btn = document.getElementById("btn")

  btn.onclick =  function (event) {
    history.pushState({page: 1}, "Page1", "?q=1#page1")
    console.log(location.href)
  }
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>popstate 事件</strong>。
            </div>
            <div class="card-body">
              <p>pushState() 方法会创建新的历史状态。执行该方法后，浏览器后退 / 前进按钮就被激活了。按下后退 / 前进按钮，会触发 window 的 popstate 事件。
                popstate 事件的事件对象有一个 state 属性，这个属性就包含着当初以第一个参数传递给 pushState() 的状态对象。对于第一个页面来说，这个 state 属性值为 null。</p>
              <pre v-highlight>
<code>
  window.onpopstate = function(event) {

    // 后退到第一个页面时
    event.state => null

    // 前进到下一个状态时
    // event.state => {page: 1}
  }
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong class="danger">replaceState()</strong> 方法。
            </div>
            <div class="card-body">
              <p>可以更新当前状态。这个方法接收两个参数与 pushstate() 方法前两个参数相同。调用这个方法不会在历史状态栈中创建新状态，只会重写当前状态。</p>
              <pre v-highlight>
<code>
  var btn = document.getElementById("btn")

  btn.onclick =  function (event) {
    history.replaceState({page: 2}, "Page2")
    console.log(location.href)
  }
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
  name: 'history',
  mixins: [reflowerMixins]
}
</script>

<style scoped lang="stylus"></style>
