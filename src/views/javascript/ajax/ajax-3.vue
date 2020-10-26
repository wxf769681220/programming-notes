<template>
  <div class="ajax-4" ref="ajax4">
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">1、HTTP头部信息</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header"></div>
            <div class="card-body">
              <p>每个 HTTP 请求都会带有相应的头部信息。XHR 对象也提供了操作者两种头部信息的方法。默认情况下，在发送 XHR 请求的同时，
                会发送以下头部信息：（基本上是所有浏览器都会发送的）</p>
                <ul>
                  <li><strong>Accept</strong>：浏览器能够处理的内容类型。</li>
                  <li><strong>Accept-Charset</strong>：浏览器能够显示的字符集。</li>
                  <li><strong>Accept-Encoding</strong>：浏览器能够处理的压缩编码。</li>
                  <li><strong>Accept-Language</strong>：浏览器当前设置的语言。</li>
                  <li><strong>Connection</strong>：浏览器与服务器之间连接的类型。</li>
                  <li><strong>Cookie</strong>：当前页面设置的任何 Cookie。</li>
                  <li><strong>Host</strong>：发送请求的当前页面所在的域。</li>
                  <li><strong>Referer</strong>：发送请求的页面的URL。</li>
                  <li><strong>User-Agent</strong>：浏览器用户代理字符串。</li>
                </ul>
              <pre v-highlight>
<code>
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong class="danger">setRequestHeader() 方法</strong>。
            </div>
            <div class="card-body">
              <p>使用 setRequestHeader() 方法可以设置自定义的请求头部信息。这个方法接收两个参数：头部字段名称和头部字段的值。
                要成功的发送头部信息，必须在调用 open() 方法之后，调用 send() 方法之前调用 setRequestHeader() 方法。</p>
              <pre v-highlight>
<code>
  xhr.open("get", "example.php", true)

  // 自定义头部信息（推荐使用）
  xhr.setRequestHeader("myHeader", "myValue")

  xhr.send(null)
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong class="danger">getResponseHeader()</strong> 和 <strong class="danger">getAllResponseHeaders()</strong> 方法。
            </div>
            <div class="card-body">
              <p>使用 getResponseHeader() 方法并传入头部字段名称，可以获取相应的响应头部信息。
                而使用 getAllResponseHeaders() 方法可以取得一个包含所有响应头部信息的字符串。</p>
              <pre v-highlight>
<code>
  // 获取某一个字段
  xhr.getResponseHeader('myHeader')

  // 获取所有字段
  xhr.getAllResponseHeaders()
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">2、GET请求</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <p>GET 请求是最常见的请求类型，用于向服务器查询某些信息。通常可以将查询字符串参数追加到 URL 末尾，以便将信息发送给服务器。</p>
              <pre v-highlight>
<code>
   xhr.open("GET", "example.php?x=1&y=2", true)
</code>
              </pre>
              <p>GET 请求是最常见的错误就是查询字符串的格式问题。查询字符串中的每个参数的名称和值必须使用 <strong class="danger">encodeURIComponent()</strong> 进行编码。</p>
              <pre v-highlight>
<code>
  // 确保查询字段格式有效
  function addURLParam(url, name, value) {
    url += (url.indexOf("?") === -1 ? "?" : "&")
    url += encodeURIComponent(name) + "=" + encodeURIComponent(value)
    return url
  }

  var url = "example.php"

  // 添加参数
  url = addURLParam(url, "x", 1)
  url = addURLParam(url, "y", 2)

  xhr.open("GET", url, true)
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">3、POST请求</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <p>POST 请求是使用频率仅次于 GET 的请求类型，用于向服务器发送应该被保存的数据。
                POST 请求应该将数据作为请求的主体提交，主体可以包含非常多的数据，且格式不限。</p>
              <pre v-highlight>
<code>
  // data 需要提交给服务器的数据
  xhr.send(data)
</code>
              </pre>
              <p>默认情况下，服务器对 POST 提交和提交 Web 表单的请求并不会一视同仁。
                因此，服务端必须有程序来读取发送过来的原始数据，并从中解析出有用的部分。
                我们可以通过使用 XHR 来模仿 Web 表单提交，首先将 Content-Type 头部信息设置为 application/x-www-form-urlencoded，
                也就是表单提交时的内容类型。 另外以适当的格式创建一个字符串（使用 serialize() 函数序列化表单），作为请求的主体发送到服务器。</p>
              <pre v-highlight>
<code>
  // 使用XHR模仿Web表单提交
  xhr.open("POST", "example.php", true)

  xhr.setRequestHead("Content-Type", "application/x-www-form-urlencoded")

  var form = document.forms['myForm']

  xhr.send(serialize(form))
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>POST 与 GET 请求的区别。</strong>
            </div>
            <div class="card-body">
              <ol>
                <li>安全方面：
                  <ul>
                    <li>GET 请求将查询字符串参数追加到 url 末尾，并暴露在浏览器地址栏中。</li>
                    <li>POST 请求将数据做为请求主体提交，发送给服务器。（不会暴露在外面）</li>
                  </ul>
                </li>
                <li>编码问题：
                  <ul>
                    <li>GET 请求的查询字符串参数的名称和值必须使用 encodeURIComponent() 进行编码。</li>
                    <li>POST 请求数据可以使用多种编码方式。</li>
                  </ul>
                </li>
                <li>数据大小：GET 请求在 URL 中传送的查询字符串的长度限制的，而 POST 没有。</li>
                <li>缓存问题：GET 请求会被浏览器主动 cache，而 POST 不会，需要手动设置。</li>
                <li>浏览器行为：GET 请求在浏览器回退时是无害的，而 POST 可能会存在再次发送请求的情况。</li>
              </ol>
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
  name: 'ajax4',
  mixins: [reflowerMixins]
}
</script>

<style scoped lang="stylus"></style>
