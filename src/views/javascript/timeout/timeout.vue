<template>
  <div class="timeout" ref="timeout">
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">1、定时器</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <ul>
                <li>javascript 是运行于单线程的环境中的。</li>
                <li>javascript 中没有任何代码是立刻执行的，当主执行进程结束后，一旦下一进程处于空闲，下一个代码会被触发并立即执行。</li>
                <li>定时器：指定时间间隔表示何时将定时器的代码添加到队列，而不是何时实际的执行代码。</li>
              </ul>
              <pre v-highlight>
<code>
  /**
    * 1秒后将代码添加到队列
    * 若在这个时间点上，进程处于空闲状态，则立即执行代码
    * 表面上代码在1秒后这个时间点上被执行
    * 实际上代码可能需要比1秒等待更长时间才执行
    */

  setTimeout(function() {
    alert('hello')
  }, 1000)
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">1、超时调用</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong class="danger">setTimeout()</strong> 方法。
            </div>
            <div class="card-body">
              <p>window 对象的 setTimeout() 方法：在指定的时间之后执行代码。它接收两个参数：要执行的代码和执行代码前需要等待的时间毫秒数。若第二个参数为空，则立即执行代码。</p>
              <pre v-highlight>
<code>
  // 一般不推荐传递字符串
  setTimeout("alert('hello')", 1000)

  // 推荐方式
  setTimeout(function() {
    alert('hello')
  }, 1000)
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong class="danger">clearTimeout()</strong> 方法。
            </div>
            <div class="card-body">
              <p>setTimeout() 方法返回一个<strong>数值 ID</strong>, 表示超时调用。这个超时调用 ID 是执行代码的唯一标识符，将其作为 clearTimeout() 方法的参数，可以用来取消超时调用。</p>
              <pre v-highlight>
<code>
  var timer = setTimeout(function() {
    alert('hello')
  }, 1000)

  // 注意这里直接取消了超时调用,
  // 因此上述要执行的代码并未执行
  clearTimeout(timer)

</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">2、间歇调用</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong class="danger">setInterval() </strong> 方法。
            </div>
            <div class="card-body">
              <p>window 对象的 setInterval() 方法：在指定的时间间隔重复执行代码。它接收两个参数：要执行的代码和重复执行代码需要的时间间隔。若第二个参数为空，则立即执行代码。</p>
              <pre v-highlight>
<code>
  // 一般不推荐传递字符串
  setInterval("alert('hello')", 1000)

  // 推荐方式
  setInterval(function() {
    alert('hello')
  }, 3000)
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong class="danger">clearInterval() </strong> 方法。
            </div>
            <div class="card-body">
              <p>setInterval() 方法也返回一个数值 ID, 表示间歇调用。这个间歇调用 ID 时执行代码的唯一标识符，将其作为 clearInterval() 方法的参数，可以用来取消间歇调用。
                <strong>取消间歇调用十分的重要，若不及时取消，则间歇调用会一致执行到页面卸载。</strong>
              </p>
              <pre v-highlight>
<code>
  var timer = setInterval(function() {
    alert('hello')
  }, 3000)

  // 注意这里直接取消了间歇调用,
  // 因此上述要执行的代码并未执行
  clearInterval(timer)
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>使用超时调用来实现间歇调用。</strong>
            </div>
            <div class="card-body">
              <ul>
                <li>使用 setInterval() 创建的定时器可能会存在后一个间歇调用会在前一个间歇调用结束之前启动，这导致定时器代码连续运行好几次而之间没有任何间隔停顿。</li>
                <li>通常 setInterval() 间歇调用并不常用，而使用超时调用来实现间歇调用。</li>
                <li>通过以下模式使用链式 setTimeout()调用。</li>
                <li>这样做的好处是：在前一个定时器代码执行完之前，不会向插入新的定时器代码，确保不会有任何缺失的时间间隔。
                  它确保在下一次的定时器代码执行之前，至少要等待指定的间隔时间， 避免了连续的运行。</li>
              </ul>
              <pre v-highlight>
<code>
  var interval = 100

  setTimeout(function() {
    // 处理代码

    // 这里使用arguments.callee代用同一个匿名函数
    setTimeout(arguments.callee, interval)
  }, interval)
</code>
              </pre>
              <p>做一个简单的计时器。</p>
              <pre v-highlight>
<code>
  var num = 0,
  max = 10,
  interval = 1000

  setTimeout(function() {
    num++
    if (num &lt;= max) {
      console.log(num)
      setTimeout(arguments.callee, interval)
    } else {
      console.log("Done")
    }
  }, interval)
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">4、高级定时器</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>数组分块技术（array chunking）</strong>
            </div>
            <div class="card-body">
              <p>使用定时器分割循环，小块小块的处理数组。</p>
              <pre v-highlight>
<code>
  var arr = ["red", "green", "blue", "yellow"],
  interval = 100;

  setTimeout(function() {
    // 取得数组的第一项
    var item = arr.shift()

    // 处理
    process(item)

    // 若数组还有剩余项，再设置另一个定时器
    if (arr.length > 0) {
      setTimeout(arguments.callee, interval)
    }
  }, interval)

  // 对数组的部分处理
  function process(data) {
    console.log(data)
  }
</code>
              </pre>
              <p>数组分块函数。</p>
              <pre v-highlight>
<code>
  function chunk(array, process) {
    setTimeout(function() {
      var item = array.shift()

      process.call(null, item)

      if (array.length > 0) {
        setTimeout(arguments.callee, 100)
      }
    }, 100)
  }

  var arr = ["red", "green", "blue", "yellow"],

  function process(data) {
    console.log(data)
  }

  // 会修改原数组
  chunk(arr, process)

  // 创建原数组的一个副本，不会对原数组修改
  //chunk(arr.slice(), process)
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>函数节流。</strong>
            </div>
            <div class="card-body">
              <p>某些代码不可以在没有时间间隔的情况下连续重复的执行。比如：调整浏览器窗口大小的时候，会连续触发 onresize 事件。
                若尝试进行 DOM 操作，其高频率的更改 可能会让浏览器崩溃。函数节流是指：第一次调用函数，创建一个定时器，在指定时间间隔之后运行代码。
                当第二次调用函数时，它会清除第一次的定时器并设置另一个。</p>
              <pre v-highlight>
<code>
  var processor = {
    timer = null,

    // 实际进行处理的方法
    performProcessing: function() {
      // 实际执行的代码
    },

    // 初始处理调用的方法
    process: function() {
      clearTimeout(this.timer);
      var that = this;
      this.timer = setTimeout(function() {
        that.performProcessing()
      }, 100)
    }
  }
  processor.process()
</code>
              </pre>
              <p>以上模式可以用：throttle() 函数来简化，这个函数可以自动进行定时器的设置和清除。</p>
              <pre v-highlight>
<code>
  function throttle(method, context) {
    clearTimeout(method.tId);
    method.tId = setTimeout(function() {
      method.call(context)
    }, 100)
  }

  /*******************************************/
  // 控制onresize事件处理的频率，
  // 以确保浏览器在极短的时间内进行过多的计算
  function resizeDiv() {
    var myDiv = document.getElementById("myDiv");
    myDiv.style.height = myDiv.offsetWidth + "px";
  }

  window.onresize = function() {
    throttle(resizeDiv);
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
  name: 'timeout',
  mixins: [reflowerMixins]
}
</script>

<style scoped lang="stylus"></style>
