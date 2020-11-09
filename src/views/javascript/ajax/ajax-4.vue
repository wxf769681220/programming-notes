<template>
  <div class="ajax-4" ref="ajax4">
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">1、同源策略</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <ul>
                <li>浏览器处于安全方面的考虑，只允许本域名下的接口交互。对于其他访问域中的资源时，会受到同源策略的限制。<strong>同源：即使用相同的协议、域名和端口号</strong>。</li>
                <li>当试图访问上其他域中的资源时，都会引发安全错误，除非采用被认可的跨域解决方案。这个解决方案叫做 <strong>CORS（Cross-Origin Resource Sharing，跨域源资源共享）</strong> 。</li>
                <li>CORS 基本思想是：使用自定义的 HTTP 头部让浏览器与服务器进行沟通，从而决定请求或响应是应该成功还是失败。</li>
              </ul>
              <pre v-highlight>
<code>
 /**
  * 客户端配置，使用GET或POST发送一个简单的请求
  * 没有自定义的头部信息，主体内容的MEMI类型是text/pain
  * 发送请求时，需要给它附加一个额外的Origin头部
  */
  Origin: "http://www.example.com"

 /**
  * 服务器配置，如果没有下列这个头部，或者有这个头部但源信息不匹配
  * 浏览器就会驳回这个请求
  */
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Origin: "http://www.example.com"
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">2、CORS 跨域源资源共享</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>IE对CORS的实现</strong>。
            </div>
            <div class="card-body">
              <p>IE8 通过 <strong>XDomainRequest</strong> 对象支持 CORS。该类型与 XHR 类似，但能实现安全可靠的跨域通信。区别在于：</p>
              <ul>
                <li>cookie 不会随请求发送，也不会随响应返回。</li>
                <li>只能设置头部信息中 Content-Type 字段。</li>
                <li>不能访问响应的头部信息。</li>
                <li>只支持 GET 和 POST 请求。</li>
              </ul>
              <pre v-highlight>
<code>
  var xdr = new XDomainRequest()

  // 只要响应有效就会触发load事件
  // 只能访问到响应文本
  // 无法确定响应的状态
  xdr.onload = function() {
    console.log(xdr.responseText)
  }

  // 若失败（响应中缺少Access-Control-Allow-Origin头部）
  // 触发error事件
  xdr.onerror = function() {
    console.log("An error occurred")
  }

  // 异步执行
  xdr.open("POST", "www.misfish.com/api/test.php")

  // 为了支持POST请求
  // XDR对象提供了contentType属性
  // 用来表示发送数据的格式
  xdr.contentType = "application/x-www-form-urlencoded"

  xdr.send(null)
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>其他浏览器对CORS的实现。</strong>
            </div>
            <div class="card-body">
              <p>Firefox、Safari、Chrome、IOS 等浏览器通过 <strong>XHR 对象</strong>原生支持 CORS。跨域 XHR 对象也有一些限制：</p>
              <ul>
                <li>cookie 不会随请求发送，也不会随响应返回。</li>
                <li>不能通过 setRequestHeader() 设置自定义头部。</li>
                <li>调用 getAllResponeseHeaders() 方法总是返回空字符串。</li>
              </ul>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>跨浏览器的CORS</strong>。
            </div>
            <div class="card-body">
              <p>Firefox、Safari、Chrome、IOS 等浏览器中的 XMLHttpRequest 对象与 IE 中的 XMomainRequest 对象类似，都提供了足够用的接口：这两个对象共同的属性与方法：</p>
              <ul>
                <li><strong>onload</strong>：用于替代 onreadystatechange 检测成功。</li>
                <li><strong>onerror</strong>：用于替代 onreadystatechange 检测失败。</li>
                <li><strong>responseText</strong>：用于获取响应内容。</li>
                <li><strong>send()</strong>：用于发送请求。</li>
                <li><strong>abort()</strong>：用于停止正在进行的请求。</li>
              </ul>
              <p>即使浏览器对 CROS 的支持程度并不都一样，但所有的浏览器都支持简单的（非 Preflight（预检） 和不带凭据的）请求。下列实现一个跨浏览器解决方案：</p>
              <pre v-highlight>
<code>
  function createCORSRequest(methed, url) {
    var xhr = createXHR()
    // 检测XHR是否支持CORS,即withCredentials属性是否存在
    if ("withCredentials" in xhr) {
      xhr.open(methed, url, true)
    } else if (typeof XDomainRequest !== "undefined") {
      xhr = new XDomainRequest()
      xhr.open(methed, url)
    } else {
      xhr = null
    }
    return xhr
  }

  var request = createCORSRequest("GET", "http://www.example.com/api/")

  if (request) {
    request.onload = function() {
      if (xhr.status === 200 && xhr.status &lt; 300 || xhr.status === 304) {
        console.log(xhr.responseText)
      } else {
        console.log("Request was unsuccessful：" + xhr.status)
      }
    }
    request.send(null)
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
        <div class="card-column-title">3、预检请求（Preflight Request）</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <p>Preflighted Requests 是 CORS 中一种透明服务器验证机制。它会先向服务器发送一个用于验证的请求，验证成功后，再发送一条真实的请求，
                为此付出的代价只是第一次发送这种请求时会多一次HTTP请求。</p>
              <ol>
                <li>它支持开发人员使用自定义头部。</li>
                <li>支持除了GET 或 POST 之外的方法。</li>
                <li>不同数据类型作为主体内容。</li>
              </ol>
              <p>使用下列高级选项来发送请求时，就会向服务器发送一个 Preflight 请求。这种请求使用 OPTIONS 方法，发送下列头部：</p>
              <ol>
                <li><strong>Origin</strong>：与简单的请求相同。</li>
                <li><strong>Access-Control-Request-Method</strong>：请求自身使用的方法。</li>
                <li><strong>Access-Control-Request-Headers</strong>：自定义头部信息，多个头部以逗号分隔。（可选）</li>
              </ol>
              <pre v-highlight>
<code>
  // 客户端配置
  Origin: http://www.example.com
  Access-Control-Request-Method: POST
  Access-Control-Request-Headers: NCZ

  /*
  * 服务端配置
  * 发送以上请求后,服务器可以决定是否允许这种类型的请求
  * 服务器通过在响应中发送如下头部与浏览器沟通
  */
  Access-Control-Request-Origin: http://www.example.com
  Access-Control-Request-Method: POST, GET
  Access-Control-Request-Headers: NCZ

 /**
  * 表示此Preflight请求应该缓存多长时间（以秒表示）
  * Preflight请求结束后，结果将按照响应中指定的时间缓存起来,
  * 而为此付出的代价只是第一次发送这种请求时会多一次HTTP请求
  */

  Access-Control-Max-Age: 172800
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">4、带凭据的请求</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>withCredentials 属性</strong>。
            </div>
            <div class="card-body">
              <p>默认情况下，跨域请求不提供凭据（cookie、HTTP 认证及客户端 SSL 证明等），但可以通过将 withCredentials 属性设置为 true，来指定某个请求应该发送凭证。
                如果服务器接受带凭据的请求，会使用下面的 HTTP 头部来响应。（在 Preflight 响应中发送这个 HTTP 头部，表示允许源发送带凭据的请求）</p>
              <pre v-highlight>
<code>
  // 服务端配置
  Access-Control-Request-Credentials: true

 /**
  * 如果发送的是带凭据的请求
  * 而服务器响应中没有包含这个头部
  * 浏览器就不会把响应交给 javascript 进行解析
  * 此时 responseText 将是一个空字符串
  * status的值为 0
  * 此时会调用 onerror 事件处理函数
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
  name: 'ajax4',
  mixins: [reflowerMixins]
}
</script>

<style scoped lang="stylus"></style>
