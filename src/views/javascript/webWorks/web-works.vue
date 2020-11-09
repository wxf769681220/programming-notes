<template>
  <div class="web-works" ref="webWorks">
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">1、Web Worker</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <ul>
                <li>在 JavaScript 中经常会通过 setTimeout、setinterval 等方法来模拟实现多线程应用。</li>
                <li>但却改变不了 javascript 的单线程本质，也无法做到主线程与子线程间相互独立且不受影响。</li>
                <li>为了利用多核 CPU 的计算能力，HTML5 提出 Web Worker 标准，允许 JavaScript 脚本创建多个线程，但是子线程完全受主线程控制，且不得操作 DOM。</li>
                <li>Web Worker 实现多线程 web 应用，允许开发人员编写能够长时间运行而不会被中断的后台脚本程序，且能保证对主线程的及时响应。</li>
              </ul>
              <pre v-highlight>
<code>
  // 检测浏览器是否支持
  // chrome不允许通过本地文件访问使用Web Worker，
  // 可以使用别的浏览器重新进行尝试，比如IE浏览器
  // 将程序部署在服务器下
  if (Worker) {
    var worker = new Worker("count.js");

    // 将数据传给线程
    worker.postMessage(1000);

    // Worker后台运行的脚本错误触发error事件
    worker.onerror = function (event) {
      event.filename //错误文件名
      event.lineno   //代码行号
      event.message  //错误信息
    }

    // web workers脚本文本count.js返回的数据
    worker.onmessage = function (event) {
      event.data => 5050
    }

    // 可在任何时候立即停止Worker的工作
    worker.terminate();

  } else {
    console.log("your browse not support Web workers");
  }

  // Worker后台运行的脚本count.js
  // count.js是定义在外部的文件，因此无法访问window、document等对象
  // count.js中的self始终指向Worker
  self.onmessage = function (event) {
      var num = event.data,
      result = 0,
      i = 0;

      while (i &lt;= num) {
        result += i++;
      }

      // 向线程创建源送回消息
      self.postMessage(result);
  }

  // 可在任何时候立即停止Worker的工作
  self.close();
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">2、Worker与页面之间的数据通信</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <p>任何可以序列化为 JSON 结构的值都可以作为参数传递给 <strong class="danger">postMessage()</strong>。这意味着传入的值是被复制 clone 到 Worker 中的，而非直接传过去的。</p>

              <pre v-highlight>
<code>
  var worker = new Worker("count.js")

  // 若参数是一个基本类型值，则直接传入（包括 undefined）,
  // 若参数是一个对象或数组，要先检测其是否有效的JSON数据结构,
  // 若不能，则会抛出错误
  worker.postMessage({
    name: "alex",
    age: 24,
    friends: ["f1", "f2"]
  })

  worker.onerror = function (event) {
    //...
  }

  worker.onmessage = function (event) {
    var data = event.data
    data => {
      name: "alex",
      age: 24,
      friends: ["f1", "f2"]
    }
  }

  // Worker后台运行的脚本count.js
  onmessage = function (event) {
    var data = event.data
    console.log(data)
    postMessage(data)
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
        <div class="card-column-title">3、Worker 全局作用域</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <p>Web workers 所执行的 javascript 代码完全是在另一个作用域，与当前网页中的代码不共享作用域。在 Web workers 中，同样有一个全局对象和其他的对象以及方法。</p>
              <ul>
                <li>最小化的 navigator对象。</li>
                <li>只读的 location对象。</li>
                <li>setTimeout()、setInterval()、clearTimeout 和方法 clearInterval() 方法。</li>
                <li>XMLHttpRequest 构造函数。</li>
              </ul>
              <pre v-highlight>
<code>
  var worker = new Worker("count.js");

  worker.postMessage(100);

  worker.onerror = function (event) {
    //...
  }

  worker.onmessage = function (event) {
    console.log(event.data)
  }

  // count.js
  self.onmessage = function (event) {
    var data = event.data;
    self.postMessage(data);
    console.log(this) => Worker对象
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
        <div class="card-column-title">4、Worker中添加其他脚本</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <pre v-highlight>
<code>
  // count.js
  self.onmessage = function (event) {
    var data = event.data;
    self.postMessage(data);

    // 每个脚本文件的加载过程都是异步的
    // 当所有的脚本文件加载完之后，才会执行这个方法
    // 执行的时候仍然会按照脚本文件定义时的先后顺序执行相应的脚本代码
    importScripts("file1.js", "file2.js")
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
        <div class="card-column-title">5、Worker 应用场景</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <pre v-highlight>
<code>
  // 计算一个较大的值
  // 如：一个从0加到10000的值：worker.postMessage(10000);
  self.onmessage = function (event) {
    var num = event.data;
    result = 0,
    i = 0;

    while (i &lt;= num) {
      result += i++;
    }

    self.postMessage(result);
  }

  // 对传入的数组进行排序
  // 如：worker.postMessage([10, 12, 1, 4, 6, 3, 9])
  self.onmessage = function (event) {
    var arr = event.data;

    arr.sort(function(a, b) {
      return a -b
    })

    self.postMessage(arr);
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
  name: 'webWorks',
  mixins: [reflowerMixins]
}
</script>

<style scoped lang="stylus"></style>
