<template>
  <div class="ajax-2" ref="ajax2">
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">1、请求超时设定</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>timeout 事件</strong>。
            </div>
            <div class="card-body">
              <p>IE8 为 XHR 对象添加了一个 timeout 属性，表示请求在等待响应多少毫秒后自行终止。
                如果在规定时间内浏览器还没有接收到响应，那么就会触发 timeout 事件，进而会调用 ontimeout 事件处理函数。</p>
              <pre v-highlight>
<code>
  var xhr = createXHR()

  xhr.open("get", 'example.php', true)

  // 请求在等待响应1s后终止
  xhr.timeout = 1000

  // 请求超时时触发该事件
  xhr.ontimeout = function () {
    alert('请求超时!')
  }

  xhr.send(null)
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">2、请求进度事件</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <p>W3C 针对 XHR 操作定义了客户端和服务器通信有关的事件，目前也被其他 API 借鉴。有以下6个进度事件：</p>
              <ul>
                <li><strong>loadStart</strong>：浏览器接收到响应数据的第一个字节时触发。</li>
                <li><strong>progress</strong>：浏览器在接受响应数据期间持续不断触发。</li>
                <li><strong>error</strong>：在请求发生错误时触发。</li>
                <li><strong>abort</strong>：在调用 abort() 方法终止连接时触发。</li>
                <li><strong>load</strong>：在接收到全部的响应数据时触发。</li>
                <li><strong>loadend</strong>：在通信完成或者触发了 error、abort 和 load 事件后触发。</li>
              </ul>
              <p>只要浏览器接收到服务器的响应，不管其状态如何，都会触发 load 事件，因此我们可以使用 load 事件代替 readystatechange 事件。
                onload 事件处理函数会接收一个 event 对象， 其 target 属性指向 XHR 对象的实例（xhr），因而可以访问到 XHR 对象上的所有方法和属性。</p>
              <pre v-highlight>
<code>
  var xhr = createXHR()

  xhr.onload = function(event) {
    if (xhr.status === 200 && xhr.status &lt; 300 || xhr.status === 304) {
      console.log( xhr.responseText)
    } else {
      console.log("Request was unsuccessful：" + xhr.status)
    }
  }

  xhr.open("get", 'example.php', true)

  xhr.send(null)
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">3、progress事件</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">字符串转数值。</div>
            <div class="card-body">
              <p>Mozilla 对 XHR 的添加一个 progress 事件。该事件会在浏览器接收新数据期间持续不断的触发。
                而 onprogress 事件处理函数接收一个 event 对象，其 target 属性是 XHR 对象，但包含三个额外的属性：</p>
                <ul>
                  <li><strong>lengthComputable</strong>：表示进度信息是否可用的布尔值。</li>
                  <li><strong>position</strong>：表示已经接收的字节数。</li>
                  <li><strong>totalSize</strong>：表示根据 Content-Length 响应头部确定的预期字节数。</li>
                </ul>
              <pre v-highlight>
<code>
  var xhr = createXHR()

  xhr.onload = function(event) {
    if (xhr.status === 200 && xhr.status &lt; 300 || xhr.status === 304) {
      console.log(xhr.responseText)
    } else {
      console.log("Request was unsuccessful：" + xhr.status)
    }
  }

  // 在open()之前调用
  xhr.onprogress = function(event) {
    var el = document.getElementsByTagName("body")
    if (event.lengthComputable) {
      el[0].innerHTML = event.position + "-" + event.totalSize
    }
  }

  xhr.open("GET", 'example.php', true)
  xhr.send(null)
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">4、MIME类型</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong class="danger">overrideMimeType()</strong> 方法。
            </div>
            <div class="card-body">
              <p>overrideMimeType()方法用于重写 XHR 响应的 MIME 类型。比如：浏览器返回的 MIME 类型是 text/plain，但数据中实际包含的是 XML。
                根据 MIME 类型，即使数据是 XML，responseXML 属性中仍然是 null。通过调用 overrideMimeType() 方法，可以保证把响应当作 XML 而非纯文本来处理。</p>
              <pre v-highlight>
<code>
  var xhr = createXHR()

  xhr.open("GET", "example.php", true)

  xhr.overideMimeType("text/xml")

  xhr.send(null)
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
  name: 'ajax2',
  mixins: [reflowerMixins]
}
</script>

<style scoped lang="stylus"></style>
