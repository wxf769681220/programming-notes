<template>
  <div class="ajax-1" ref="ajax1">
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">1、JS如何实现异步操作？</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>事件循环机制(Event Loop)</strong>。
            </div>
            <div class="card-body">
              <ul>
                <li>当 JS 解析执行时，会被引擎分为两类任务，<strong>同步任务（synchronous）</strong>和<strong>异步任务（asynchronous）</strong>。</li>
                <li>对于同步任务来说，会被推到执行栈按顺序去执行这些任务。</li>
                <li>对于异步任务来说，会被放到一个<strong>任务队列（task queue）</strong>里等待 JS 引擎去执行。</li>
                <li>当执行栈中的所有同步任务完成后，JS 引擎才会去任务队列里查看是否有任务存在，若存在，则将任务放到执行栈中去执行。</li>
                <li>当执行栈中的任务被清空之后，JS 引擎会再次进入任务队列里查看是否有任务存在。</li>
                <li>这种循环检查的机制，就叫做事件循环机制。</li>
              </ul>
              <pre v-highlight>
<code>
  /* 常见的异步操作有：
    1：回调函数
    2: 定时器
    3: 事件处理程序
    4. ajax
    5: promiss
  */
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">2、XMLHttpRequest对象</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <p>Ajax 技术，即能够通过异步的方式，无需刷新页面即可从服务器获取数据。Ajax 技术的核心是 XMLHttpRequest 对象，简称 XHR。</p>
              <pre v-highlight>
<code>
  function createXHR() {
    if (typeof XMLHttpRequest !== "undefined") {
      return new XMLHttpRequest()
    } else if (typeof activeXObject !== "undefined") { // 针对IE浏览器
        if (typeof arguments.callee.activeXString !== "string") {
          var versions = ["MSXML2.XMLHttp", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp.6.0"]
          for (var i = 0, len = versions.length; i &lt; len; i++) {
            try {
              new  ActiveXObject(versions[i])
              arguments.callee.activeXString = versions[i]
              break
            } catch (ex) {
              //跳过
            }
          }
        }
      return new ActiveXObject(arguments.callee.activeXString)
    } else {
      throw new Error("No XHR object available")
    }
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
        <div class="card-column-title">3、XHR的用法</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>发送一个 ajax 请求。</strong>
            </div>
            <div class="card-body">
              <ul>
                <li><strong class="danger">open()</strong>方法：它接收三个参数：要发送请求的类型（get、post等）、请求 URL 和表示是否异步发送请求布尔值。该方法并不会真正的发送请求，而只是启动一个请求已备发送。</li>
                <li><strong class="danger">send()</strong>方法，它接收一个参数，即要作为请求主体发送的数据。如果不需要通过请求主体发送数据，则可传入 null。调用 send() 方法之后，请求就会被派发到服务器中。</li>
              </ul>
              <pre v-highlight>
<code>
  var xhr = createXHR()

  // 请求预备
  xhr.open("get", "example.php", false) // 同步请求
  xhr.open("get", "example.php", true)  // 异步请求

  // 请求发送
  xhr.send(null)
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>服务器响应后，返回数据。</strong>
            </div>
            <div class="card-body">
              <p>在服务器收到响应后，返回响应数据会自动填充到 XHR 对象的属性中，相关属性如下：</p>
              <ul>
                <li><strong>status</strong>：响应的 HTTP 状态。一般来说，状态码 200 作为成功的标志。</li>
                <li><strong>responseText</strong>：作为响应主体被返回的文本。</li>
                <li><strong>responseXML</strong>：若响应的内容类型是 text/xml 或 application/xml，这个属性中将保存包含着响应数据的 XML DOM 文档。对于非 XML 数据而言，该属性值为 null。</li>
                <li><strong>statusText</strong>：HTTP 状态说明。</li>
              </ul>
              <pre v-highlight>
<code>
  if (xhr.status === 200 && xhr.status &lt; 300 || xhr.status === 304) {
    console.log(xhr.responseText)
  } else {
    console.log("Request was unsuccessful：" + xhr.status)
  }
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>onreadystatechange 事件。</strong>
            </div>
            <div class="card-body">
              <ul>
                <li><strong>同步请求</strong>：客户端发送请求，在服务端响应之后，才会继续执行后面的 javascript 代码。</li>
                <li><strong>异步请求</strong>：客户端发送请求，不必等待服务器响应，让 javascript 代码继续往下执行。</li>
              </ul>
              <p>可以检测 XHR 对象的 <strong>readyState 属性</strong>，该属性表示请求/响应过程的当前活动阶段。</p>
              <ul>
                <li><strong>0</strong>：未初始化。尚未调用 open() 方法。</li>
                <li><strong>1</strong>：启动。已经调用 open() 方法，尚未调用 send() 方法。</li>
                <li><strong>2</strong>：发送。已经调用 send() 方法，尚未接收到响应。</li>
                <li><strong>3</strong>：接收。已经接收到部分响应数据。</li>
                <li><strong>4</strong>：完成。已经接受到全部响应数据，可以在客</li>
              </ul>
              <p>只要 readyState 属性的值发生变化，都会触发一次 <strong>onreadystatechange 事件</strong>，可以利用这个事件监测每次状态变化后 readyState 的值。
                通常我们只检测值为4的阶段， 因为此时数据已经全部接收完毕。在接收响应之前还可以调用 abort() 方法来取消异步请求。</p>
              <pre v-highlight>
<code>
  var xhr = createXHR()

  // 若是异步发送请求
  // 可以在open()方法之前侦听 readyState 属性的变化，以确保跨浏览器兼容性
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 && xhr.status &lt; 300 || xhr.status === 304) {
        console.log(xhr.responseText)
      } else {
        console.log("Request was unsuccessful：" + xhr.status)
      }
    }
  }

  // 请求预备（异步请求）
  xhr.open("get", "example.php", true)

  // 请求发送
  xhr.send(null)

  // 取消异步请求
  // xhr.abort()
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
  name: 'ajax1',
  mixins: [reflowerMixins]
}
</script>

<style scoped lang="stylus"></style>
