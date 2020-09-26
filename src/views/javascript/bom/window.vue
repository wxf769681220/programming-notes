<template>
  <div class="history">
    <div class="card-column">
      <div class="card-column-title">1、window 对象</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">所有在全局作用域中定义的变量或函数都是 window 对象的属性和方法。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var color1 = 'red'
  window.color2 = 'blue'

  // 全局变量不能通过 delete 操作符删除
  // 因为 Configurable 特性默认值为 false
  delete color1
  color1 => 'red'

  // 直接在 window 上定义的属性可以使用delete删除
  delete window.color2
  window.color2 => undefined
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">2、浏览器窗口</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header"><strong  class="bold">导航和打开窗口。</strong>导航和打开窗口。使用 <strong>window.open()</strong> 方法，既可以导航到一个特定的 URL，
          也可以打开一个新的浏览器窗口。它接收4个参数，要加载的 URL、窗口目标、一个描述窗口的特性字符串和 一个表示新页面是否取代浏览器历史记录中当前加载页面的布尔值。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  window.open('http://www.baidu.com', '_blank', 'height=400,width=400')

  // 返回新窗口的引用
  var win = window.open(url)
  win.moveTo()
  win.resizeTo()
  win.close() // 关闭窗口,且只能关闭新打开的窗口
  win.closed => true

  // opener属性中保存着打开它的原始窗口对象
  // 设置null，表示浏览器新创建的窗口不需要与原始窗口通信
  // 可以在独立的进程中运行
  win.opener => window
  win.opener = null
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header"><strong  class="bold">窗口位置。</strong></div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 跨浏览器获得窗口左边与上边的位置
  var leftPos = (typeof window.screenLeft === 'number') ?
                window.screenLeft : window.screenX
  var topPos = (typeof window.screenTop === 'number') ?
                window.screenTop : window.screenY

  // 移动窗口位置(默认被禁用)
  window.moveTo(100,100) // 表示移动到(100, 100)这个坐标
  window.moveBy(100,100) // 表示移动量。水平和垂直方向分别移动100个像素
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header"><strong  class="bold">页面视口大小。</strong>因为主流浏览器之间存在差异，因此无法确定浏览器窗口本身的大小，但可以取得页面视口大小。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 跨浏览器获得页面视口大小
  var pageWidth = window.innerWidth
  var pageHeight = window.innerHeight

  if (typeof pageWidth !== 'number') {
    if (document.compatMode === "CSS1Compat") {
      pageWidth = document.documentElement.clientWidth
      pageHeight = document.documentElement.clientHeight
    } else {
      pageWidth = document.body.clientWidth
      pageHeight = document.body.clientHeight
    }
  }

  // 调整窗口大小(默认被禁用)
  window.resizeTo(100, 100) // 表示调整到100 * 100
  window.resizeBy(100, 100) // 表示调整量
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header"><strong  class="bold">窗口屏蔽程序。</strong>大多数浏览器都内置有弹出窗口屏蔽程序。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 检测浏览器弹窗是否被屏蔽
  var win = window.open('http://www.baidu.com', '_blank')
  if (win === null) {
    alert('弹出窗口已被屏蔽!')
  }

  // 若浏览器程序阻止弹出窗口,
  // window.open() 方法会抛出一个异常
  // 因此使用try/catch语句更为准确的检测
  var blocked = false
  try {
    var win = window.open('http://www.baidu.com', '_blank')
    if (win === null) {
      blocked = true
    }
  } catch(e) {
    blocked = true
  }
  if (blocked) {
    alert('弹出窗口已被屏蔽!')
  }
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">3、系统对话框</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">window 对象上的<strong>alert()</strong>、<strong>confirm()</strong> 和 <strong>prompt()</strong> 方法。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  alert('something')

  if (confirm('are you sure?')) {
    alert('ok')
  } else {
    alert('no')
  }

  var result = prompt('what your name?', '')
  if (result !== null) {
    alert(result)
  }
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">eval()方法</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header"><strong>eval()</strong> 方法就像一个完整的 ecmascript 解析器。它只接受一个参数，即要执行的 javascript 字符串。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  eval("alert('hello world!')")
</code>
            </pre>
          </div>
          <div class="card-header">eval() 方法中被执行的代码作用域。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 被执行的代码具有与该执行环境相同的作用域链
  var msg = "hello world!"
  eval("alert(msg)")

  eval("function fn() { alert('hello world!')}")
  fn()
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'history'
}
</script>

<style scoped lang="stylus"></style>
