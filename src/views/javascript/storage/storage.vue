<template>
  <div class="storage" ref="storage">
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">1、HTTP Cookie</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <ul>
                <li>HTTP Cookie，通常直接叫做 cookie，用于在客户端储存会话信息。</li>
                <li>HTTP Cookie 要求服务器对任意 HTTP 请求发送 Set-Cookie HTTP 头部信息作为响应的一部分，其中包含会话信息。</li>
                <li>cookie 在性质上是绑定在某个指定的域名下的。</li>
                <li>为了确保 cookie 不被恶意使用，每个域的 cookie 数量是有限的（超过限制，会清除以前设置的 cookie）。</li>
                <li>cookie 的携带的信息量大小也是有限制的。</li>
              </ul>
              <pre v-highlight>
<code>
  /**
    * 服务器端
    * HTTP Cookie要求服务器对任意HTTP请求发送Set-Cookie HTTP头部信息作为响应的一部分
    * 其中包含会话信息（以name为名称、以value为值的一个cookie)
    * 其中name名称和value值在传送时必须是经过URL编码的
    */

  // 浏览器会储存以下会话信息：
  HTTP/1.1 200 OK
  Content-type: text/html
  Set-Cookie: name=value
  other-header: other-header-value

  /**
    * 客户端
    * 浏览器会储存上述代码中的信息。在此之后,
    * 通过为每个HTTP请求添加Cookie HTTP头部信息将信息发送回服务器
    */
  GET /index.html HTTP/1.1
  cookie: name=value
  other-header: other-header-value
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>HTTP Cookie 会话信息构成</strong>。
            </div>
            <div class="card-body">
              <ul>
                <li><strong>名称</strong>：一个唯一确定 cookie 的名称。不区分大小写，且必须是经过 URL 编码的。</li>
                <li><strong>值</strong>：储存在 cookie 中的字符串的值。值必须被 URL 编码的。</li>
                <li><strong>域</strong>：cookie 被绑定在哪个指定域下（包含子域）。</li>
                <li><strong>路径</strong>：对于指定域中的那个路径，应该向服务器发送 cookie。
                  如：指定该（http://www.example.com/test/）应该路径应该向服务器发送 cookie，那么 （http://www.example.com）的页面就不会发送 cookie 了。</li>
                <li><strong>失效时间</strong>：表示 cookie 应该何时被删除的时间戳。默认情况下是，会话结束时即将所有 cookie 删除，也可以自己设置删除时间。
                  若设置了准确的删除时间，cookie 可以在浏览器关闭后依然保存在用户的机器上。若该时间是一个过去的时间，则 cookie 会被立即删除。</li>
                <li><strong>安全标志</strong>：指定后，cookie 只有在使用 SSL（Secure Socket Layer）连接的时候才发送到服务器。
                  如：https://www.example.com（SSL加密传输协议）可以发送 cookie，而 http://www.example.com 不能发送 cookie。secure 是 cookie 中唯一一个非名值对的部分。</li>
              </ul>
              <pre v-highlight>
<code>
 /*
  * 对于所有example.com的子域（由domain参数指定的）
  * 及域名下（由path参数指定的）的所有页面都有效的cookie
  * HTTP/1.1 200 OK
  * Content-type: text/html
  * Set-Cookie: name=value; expires=Mon, 22-Jan-07 07:10:24 GMT; domain=.example.com; path=/; secure
  * other-header: other-header-value
  */
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>Javascript Cookie。</strong>
            </div>
            <div class="card-body">
              <ul>
                <li>通过 document.cookie 属性可以获取当前页面可用的所有 cookie 的字符串，一系列由分号隔开的名值对。</li>
                <li>所有名字和值都是经过 URL 编码的，所以 必须使用 decodeURLComponent() 来解码。</li>
                <li>通过 document.cookie 属性可以设置一个新的 cookie 字符串。
                  这个字符串会被解释并添加到现有的 cookie 集合中（不会覆盖 cookie，除非 cookie 的名字已经存在）。</li>
              </ul>
              <pre v-highlight>
<code>
  // 获取cookie
  document.cookie

  // 设置cookie,并添加额外的信息
  document.cookie = encodeURIComponent("name") + "=" +
  encodeURIComponent("alex") + ";

  domain=.example.com; path=/"
</code>
              </pre>
              <p>由于 javascript 中读写 cookie 不是很直观，常常需要写一些函数来简化 cookie 的功能。</p>
              <pre v-highlight>
<code>
  // 封装cookie的读取、写入和删除操作
  var CookieUtil = {
    get: function (name) {
      var cookieName = encodeURIComponent(name) + "=";
      var cookieStart = document.cookie.indexOf(cookieName);
      var cookieValue = null;

      if (cookieStart > -1) {
        var cookieEnd = document.cookie.indexOf(";", cookieStart);
        if (cookieEnd === -1) {
          cookieEnd = document.cookie.length;
        }
        cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
      }

      return cookieValue;
    },
    set: function (name, value, domain, path, expires, secure) {
      var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
      var split = "; ";
      if (domain) {
        cookieText += split + "domain=" + domain;
      }
      if (path) {
        cookieText += split + "path=" + path;
      }
      if (expires instanceof Date) {
        cookieText += split + "expires=" + expires.toGMTString();
      }
      if (secure) {
        cookieText += split + secure;
      }
      document.cookie = cookieText;
    },
    unset: function (name, domain, path, secure) {
      this.set(name, "", domain, path, new Date(0), secure)
    }
  }

  CookieUtil.set("name", "alex")

  // 注意：使用的Chrome或者FF内核的浏览器在本地测试时，
  // document.cookie始终返回空字符串。
  // 上传到服务器就好了,本地文件不允许记录cookie
  CookieUtil.get("name") => "alex"
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>Cookie 的局限性。</strong>
            </div>
            <div class="card-body">
              <p>
                由于所有的 cookie 都会由浏览器作为请求头发送，所以在 cookie 中储存大量信息会影响到特定域的请求性能。
                cookie 信息越大，完成对服务器请求的时间就越长。尽管浏览器对 cookie 的大小进行了限制，不过最好是尽可能在 cookie 中少存储信息，以避免影响性能。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">2、Storage 类型</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <ul>
                <li>Storage 提供了访问特定域名下的会话存储或本地存储的功能，例如，可以添加、修改或删除存储的数据项。</li>
                <li>如果你想要操作一个域名的会话存储，可以使用 <strong>Window.sessionStorage</strong></li>
                <li>如果想要操作一个域名的本地存储，可以使用 <strong>Window.localStorage。</strong></li>
                <li>Storage 的实例有以下属性或方法：
                  <ul>
                    <li><strong>length</strong>：表示存储在 Storage 对象中的数据项数量。（只读）</li>
                    <li><strong class="danger">getItem(name)</strong>：根据指定的 name 名字获取对应的值。</li>
                    <li><strong class="danger">setItem(name)</strong>：为指定的 name 设置一个对应的值。</li>
                    <li><strong class="danger">removeItem(name)</strong>：删除由 name 指定的名值对。</li>
                    <li><strong class="danger">key(index)</strong>：获取 index 位置处的值的名字。</li>
                    <li><strong class="danger">clear()</strong>：删除所有值。（firefox中没有实现）</li>
                  </ul>
                </li>
              </ul>
              <pre v-highlight>
<code>
  Storage.length
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>globalStorage 对象</strong>
            </div>
            <div class="card-body">
              <ul>
                <li>作为 Web Storage 规范的一部分，globalStorage 对象的目的是跨越会话储存数据，但有特定的访问限制。</li>
                <li>要使用 globalStorage 对象，首先要指定哪些域可以访问该数据。</li>
                <li>globalStorage 不是 Storage 的实例，而具体的 globalStorage['example.com'] 才是。</li>
                <li>若不使用 removeitem() 或 delete 操作符，又或者用户未清除浏览器缓存，则储存在 globalStorage 属性上的数据会一直保留在磁盘上。</li>
              </ul>
              <pre v-highlight>
<code>
  // 储存空间对于example.com及其所有子域都是可见的
  globalStorage['example.com'].name = "alex"

  // 储存空间只对于来自www.example.com页面可见
  globalStorage['www.example.com'].name = "alex"

  // 使用Storage对象方法
  globalStorage['www.example.com'].setItem("name", "alex")
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">3、sessionStorage 对象</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <ul>
                <li>sessionStorage 对象存储特定于某个会话的数据，该数据只保持到浏览器关闭（浏览器关闭后失效）。</li>
                <li>sessionStorage 对象中的数据可以跨越页面刷新而存在。浏览器崩溃或重启之后依然存在（需要浏览器支持）。</li>
                <li>sessionStorage 对象绑定于某个服务器会话，所以当文件在本地运行时是不可用的。</li>
                <li>sessionStorage 对象中的数据只能由最初给对象存储数据的页面访问到，所以对多页面应用有限制。</li>
                <li>sessionStorage 对象其实是 Storage 类型的一个实例，所以可以使用 Storage 类型的属性方法或者直接设置新的属性来存储数据。</li>
              </ul>
              <pre v-highlight>
<code>
  // 存储数据的方式
  sessionStorage.setItem("name", "alex")
  sessionStorage.book = "javascript"

  // 获取数据的方式
  var name = sessionStorage.getItem("name")
  var book = sessionStorage.book
</code>
              </pre>
              <p>通过 length 属性再结合 <strong class="danger">key()</strong> 方法，可以迭代 sessionStorage 中的值。</p>
              <pre v-highlight>
<code>
  // for 循环
  for (var i = 0, len = sessionStorage.length; i &lt; len; i++) {
    var key = sessionStorage.key(i)
    var value = sessionStorage.getItem(key)
    alert(key + "=" + value)
  }

  // for-in 循环
  for (var key in sessionStorage) {
    var value = sessionStorage.getItem(key)
    alert(key + "=" + value)
  }
</code>
              </pre>
              <p>从 sessionStorage 中删除数据，可以使用 delete 操作符删除对象属性，也可以使用 <strong class="danger">removeItem()</strong> 方法。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">4、localStorage 对象</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <ul>
                <li>localStorage 对象在 HTML5 规范中作为持久保存客户端数据的方案取代了 globalStorage。</li>
                <li>要访问一个 localStorage 对象，页面必须来自同一个域名（子域名无效），使用同一种协议，在同一个端口上。（同源）</li>
                <li>由于 localStorage 对象是 Storage 的实例，所以可以像 sessionStorage 一样使用它。</li>
              </ul>
              <pre v-highlight>
<code>
  // 存储数据的方式
  localStorage.setItem("name", "alex")
  localStorage.book = "javascript"

  // 获取数据的方式
  var name = localStorage.getItem("name")
  var book = localStorage.book
</code>
              </pre>
              <p>为了兼容只支持 globalStorage 的浏览器，可以使用以下函数：</p>
              <pre v-highlight>
<code>
  // 跨浏览器
  function getLocalStorage() {
    if (typeof localStorage === "object") {
      return localStorage;
    } else if (typeof globalStorage === "object") {
      return globalStorage[location.host];
    } else {
      throw new Error("Local storage not available!")
    }
  }

  var storage = getLocalStorage();
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>storage事件</strong>。
            </div>
            <div class="card-body">
              <p>对 storage 对象的任何修改，都会在文档上触发 storage 事件。</p>
              <pre v-highlight>
<code>
  EventUtil.addHandler(window, "storage", function(event) {
    // 发生变化的储存空间的域名
    event.domain
    // 设置或者删除的键名
    event.key
    // 如果是设置值，则是新值；若是删除键，则是null
    event.newValue
    // 键被更改之前的值
    event.oldValue
  })
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
  name: 'storage',
  mixins: [reflowerMixins]
}
</script>

<style scoped lang="stylus"></style>
