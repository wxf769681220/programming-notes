<template>
  <div class="page-visibility" ref="pageVisibility">
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">1、页面可见性（Page visibility API）</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <ul>
                <li>有时候，开发者需要知道，用户正在离开页面。常用的方法是监听以下三个事件：
                  <ol>
                    <li><strong>pagehide 事件。</strong></li>
                    <li><strong>beforeunload 事件。</strong></li>
                    <li><strong>unload 事件。</strong></li>
                  </ol>
                </li>
                <li>在手机上这些事件可能还没来及触发，页面就直接卸载了。（因为手机系统可以将一个进程直接转入后台，然后卸载页面，比如：
                  <ol>
                    <li>用户点击了一条系统通知，切换到另一个 App。</li>
                    <li>用户进入任务切换窗口，切换到另一个 App。</li>
                    <li>用户点击了 Home 按钮，切换回主屏幕。</li>
                    <li>操作系统自动切换到另一个 App（比如，收到一个电话）。</li>
                  </ol>
                </li>
                <li>在以前，像上述情况，页面被系统切换，以及系统清除浏览器进程，是无法监听到的。为了解决这个问题，就诞生了 Page Visibility API。</li>
                <li>它的意义在于，通过监听网页的可见性，可以预判网页的卸载。还可以用来节省资源，减缓电能的消耗。比如，一旦用户不看网页（页面最小化或者隐藏在了其他标签页后面）， 那么下列功能是可以停下来的：
                  <ol>
                    <li>对服务器的轮询。</li>
                    <li>网页动画。</li>
                    <li>正在播放的音频或视频。</li>
                  </ol>
                </li>
              </ul>
              <pre v-highlight>
<code>
  // 返回一个布尔值，表示当前页面是否可见
  // 该属性只是出于历史原因而保留的，只要有可能，
  // 都应该使用document.visibilityState属性，而不是使用这个属性
  document.hidden
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">2、document.visibilityState</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <p>在 document 对象上，新增了一个 <strong>document.visibilityState</strong> 属性。该属性返回一个字符串，表示页面当前的可见性状态，共有三个可能的值：</p>
              <ul>
                <li><strong>hidden</strong>：页面彻底不可见。</li>
                <li><strong>visible</strong>：页面至少一部分可见。</li>
                <li><strong>prerender</strong>：页面即将或正在渲染，处于不可见状态。</li>
              </ul>
              <pre v-highlight>
<code>
  document.visibilityState => "visible"

  // 只有当浏览器出现以下情况时，才会返回"hidden"值
  // 1.浏览器最小化
  // 2.浏览器没有最小化，但是当前页面切换成了背景页
  // 3.浏览器将要卸载（unload）页面
  // 4.操作系统触发锁屏屏幕
  document.visibilityState => "hidden"
</code>
              </pre>
              <p>只要 document.visibilityState 属性发生变化，就会触发 <strong>visibilitychange 事件</strong>。
                因此，可以通过监听这个事件（通过document.addEventListener()方法或 document.onvisibilitychange 属性）， 跟踪页面可见性的变化。</p>
              <pre v-highlight>
<code>
  EventUtil.addHandler(document, "visibilitychange", function(event) {
    // 用户离开了当前页面
    if (document.visibilityState === 'hidden') {
      document.title = '页面不可见';
      // 暂停视频播放
      video.pause();
    }

    // 用户打开或回到页面
    if (document.visibilityState === 'visible') {
      document.title = '页面可见';
      // 开始播放视频
      video.play();
    }
  })
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">3、页面卸载</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <p>页面卸载可以分成下面几种情况。</p>
              <ul>
                <li>页面可见时，用户关闭Tab页或浏览器窗口。</li>
                <li>页面可见时，用户在当前窗口前往另一个页面。</li>
                <li>页面可见时，最小化窗口。</li>
                <li>页面不可见时，用户或系统关闭浏览器窗口。</li>
                <li>页面不可见时，最大化窗口。</li>
              </ul>
              <p>以上这些情况，都会触发 visibilitychange 事件。由此可见，visibilitychange 事件比 pagehide、beforeunload、unload 事件更可靠。
                因此，优先选择使用 visibilitychange 事件。</p>
              <pre v-highlight>
<code>
 /*
  * unload 事件在任何情况下都不必监听
  * beforeunload 事件只有一种适用场景，就是用户修改了表单，没有提交就离开当前页面
  * 指定了这两个事件的监听函数，浏览器就不会缓存当前页面。
  */
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
  name: 'pageVisibility',
  mixins: [reflowerMixins]
}
</script>

<style scoped lang="stylus"></style>
