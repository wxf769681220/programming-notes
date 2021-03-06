<template>
  <div class="location" ref="location">
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">1、location对象</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <p><strong>location 对象</strong>既是 window 对象的属性，也是 document 对象的属性。它不仅保存着当前文档的信息，还将 URL 解析为独立的片段，让开发人员能够通过不同的属性名访问。</p>
              <ul>
                <li><strong>href</strong>：返回当前页面完整的URL。等价于 <strong class="danger">location.toString()</strong>。</li>
                <li><strong>protocol</strong>：返回页面使用的协议，通常是 http: 或 https。</li>
                <li><strong>host</strong>：返回服务器名称和端口号。</li>
                <li><strong>hostname</strong>：返回服务器名称。</li>
                <li><strong>port</strong>：返回URL中指定的端口号。若 URL 中不包含端口号，则返回空字符串。</li>
                <li><strong>pathname</strong>：返回 URL 中的目录和文件名。</li>
                <li><strong>search</strong>：返回 UR L的查询字符串，这个字符串以问号开头。</li>
                <li><strong>hash</strong>：返回 URL 中 hash(#号后跟零或多个字符)，若不包含散列，则返回空字符串。</li>
              </ul>
              <pre v-highlight>
<code>
  // 指向同一对象
  window.location === document.location => true
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">2、URI编码方法</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>URI 编码。</strong>
            </div>
            <div class="card-body">
              <p>以下两种方法可都以对 URI (通用资源标识符)进行编码。一个有效的 URI 中不能包含某些字符，如空格。这两个方法就可以对 URI 进行编码，他们使用特殊的 utf-8 编码替代无效的字符，
                从来让浏览器能够接受和理解。</p>
               <ul>
                <li><strong class="danger">encodeURI()</strong> 方法：对整个 URI 进行编码，不会对本身属于 URI 的特殊字符进行编码，如：冒号、正斜杠、问号和井字号。</li>
                <li><strong class="danger">encodeURIComponent()</strong> 方法：对 URI 中的某一片段进行编码，对 URI 中任何非标准字符进行编码。</li>
              </ul>
              <pre v-highlight>
<code>
  var uri = 'https://www.example.com/pag e1#start'
  encodeURI(uri) => 'https://www.example.com/pag%20e1#start'
  encodeURIComponent(uri) => 'https%3A%2F%2Fwww.example.com%2Fpag%20e1%23start'
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>URI 解码。</strong>
            </div>
            <div class="card-body">
              <ul>
                <li><strong class="danger">decodeURI()</strong> 方法：只能对通过 encodeURI() 方法编码的 uri 进行解码。</li>
                <li><strong class="danger">decodeURIComponent()</strong> 方法：只能对通过 encodeURIComponent() 方法编码的 uri 进行解码。</li>
              </ul>
              <pre v-highlight>
<code>
  decodeURI('https://www.example.com/pag%20e1#start')
  decodeURIComponent('https%3A%2F%2Fwww.baidu.com%2Fpag%20e1%23start')
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">3、查询字符串</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              访问 URL 包含的查询字符串的属性。
            </div>
            <div class="card-body">
              <pre v-highlight>
<code>
  // URL: "http://www.example.com/page?x=1&y=2&z=3"

  // 查询函数
  function getQueryStringArgs() {
    // 获取查询字符串并去掉开头的问号
    var qs = location.search.length > 0 ? location.search.substring(1) : ''

    // 以指定字符分隔字符串，返回由分隔的各部分组成的数组
    var items = qs.length ? qs.split('&') : []

    // 创建一个用来保存数据的对象
    var args = {}

    // 获取每一项
    for (var i = 0, len = items.length; i &lt; len ; i++) {
      var item = items[i].split('=')
      // 因为查询字符串是被编码过的
      // 所以这里需要使用解码
      var name = decodeURIComponent(item[0])
      var value = decodeURIComponent(item[1])

      if (name.length) {
        args[name] = value
      }
    }

    return args
  }

  getQueryStringArgs() => { x: '1', y: '2', z: '3' }
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">4、URL</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>URL 跳转</strong>
            </div>
            <div class="card-body">
              <p>页面跳转的方式有很多，包括：<strong>window.location</strong>、<strong>location.href</strong> 和 <strong class="danger">location.assign()</strong> 方法。</p>
              <pre v-highlight>
<code>
  // 最常用
  location.href = 'http://www.example.com'

  // 等价于
  window.location = 'http://www.example.com'
  location.assign('http://www.example.com')
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>URL 重载。</strong>
            </div>
            <div class="card-body">
              <p>通过将 location 对象的 hostname、port、pathname、search、hash 属性设置为新值来改变 URL。每次修改 location 的这些属性时，除了 hash 之外，页面都会以新的 URL 重新加载。</p>
              <pre v-highlight>
<code>
  // 修改 hash，页面不会重新加载
  location.hash = '1'
</code>
              </pre>
              <p>使用 <strong class="danger">location.reload()</strong> 方法，可以重载当前页面。该不传递参数时，以高效方式重载页面，即自上次请求以来，页面并未改变过，则从浏览器缓存中重载页面。
                  若需要强制从服务器重新加载，则可以将 true 作为参数传入。
              </p>
              <pre v-highlight>
<code>
  // 可能从缓存中重载页面
  location.reload()

  // 强制从服务器重载页面
  location.reload(true)
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>历史记录。</strong>
            </div>
            <div class="card-body">
              <p>通过修改 location 对象的属性实现页面重载时，都会在浏览器历史记录中产生一条记录。要禁用这种行为， 可以使用 <strong class="danger">location.replace()</strong> 方法，
              导航到指定 URL，不会产生历史记录，用户不能退回到前一个页面。</p>
              <pre v-highlight>
<code>
  //导航到指定URL，不会产生历史记录
  location.replace('http://www.example.com')
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">5、hashchange事件</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
            <ol>
              <li>户每次操作不一定会打开一个新的页面，因此"前进"和"后退"按钮就失去了作用，导致用户很难在不同的状态间切换。</li>
              <li>HTML5 新增 <strong>hashchange 事件</strong>，以便在 <strong>location.hash</strong> 发生变化时通知开发人员。</li>
              <li>在 Ajax 应用中，经常利用 location.hash 来保存状态或导航信息。</li>
              <li>必须把 hashchange 事件处理程序添加给 <strong>window 对象</strong>，然后 location.hash 只要有变化就会立即调用它。</li>
            </ol>
              <pre v-highlight>
<code>
  // 修改设置 hash 值
  location.hash = '1'

  // 触发hashchange事件
  window.hashchange = function(e) {
    console.log(e1)
    console.log(e.oldURL)
    console.log(e.newURL)
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
  name: 'location',
  mixins: [reflowerMixins]
}
</script>

<style scoped lang="stylus"></style>
