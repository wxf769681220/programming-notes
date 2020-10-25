<template>
  <div class="dom-4" ref="dom4">
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">1、事件流</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header"><strong>事件流</strong>。</div>
            <div class="card-body">
              <p>
                事件流描述页面从接收事件的顺序。"DOM2级事件"规定的事件流包括三个阶段：
              </p>
              <ol>
                <li>
                  <strong>事件捕获阶段</strong>：document
                  对象首先接收到事件，然后事件沿着 DOM 树依次向下传播。
                </li>
                <li><strong>处于目标阶段</strong>。</li>
                <li>
                  <strong>事件冒泡阶段</strong
                  >：即事件开始由最具体的元素接收，然后逐级向上传播，直到
                  document 对象。
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">2、事件处理程序</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <p>
                响应某个事件的函数就叫做事件处理程序（事件侦听器）。为事件指定处理程序有以下几种：
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-header"><strong>HTML</strong>。</div>
            <div class="card-body">
              <p>在 HTML 元素上添加事件处理程序。</p>
              <pre v-highlight>
<code>
  // 在 HTML 中定义
  // &lt;button onclick="alert(this)">click&lt;/button>
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header"><strong>DOM0级</strong>。</div>
            <div class="card-body">
              <p>javascript 指定事件处理程序。</p>
              <pre v-highlight>
<code>
  var btn = document.getElementById('myBtn')

  // DOM0级
  btn.onclick = function(e) {
    // e
  }
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header"><strong>DOM2级</strong>。</div>
            <div class="card-body">
              <p>
                所有 DOM 节点都包含都包含
                <strong class="danger">addEventListener()</strong> 和
                <strong class="danger">removeEventListener()</strong>
                方法，用于处理和删除事件处理程序。这两个方法都接收三个参数：
              </p>
              <ol>
                <li><strong>事件名</strong>。</li>
                <li><strong>事件处理函数</strong>。</li>
                <li>
                  <strong>表示在哪个阶段调用事件处理程序的布尔值</strong
                  >。若值为 true，则捕获阶段；若为 false，则冒泡阶段，一般设置
                  false。
                </li>
              </ol>
              <pre v-highlight>
<code>
  var btn = document.getElementById('myBtn')

  var handler = function() {
    //...
  }

  // 绑定一个事件处理程序
  if (btn.addEventListener) {
    btn.addEventListener('click', handler, false)
  }

  // 删除事件处理程序
  if (btn.removeEventListener) {
    btn.removeEventListener('click', handler, false)
  }
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>跨浏览器的事件处理程序。</strong>
            </div>
            <div class="card-body">
              <p>
                创建
                <strong> EventUtil 对象</strong
                >，其中保存两个事件处理方法：添加事件处理程序
                <strong class="danger">addHandler()</strong> 和删除事件处理程序
                <strong class="danger">removeHandler()</strong> 方法。
              </p>
              <pre v-highlight>
<code>
  var EventUtil = {
    addHandler: function(e, type, handler) {
      if (e.addEventListener) {
        // 支持DOM2级
        e.addEventListener(type, handler, false)
      } else if (e.attachEvent) {
        // 针对IE
        e.attachEvent("on" + type, handler)
      } else {
        // DOM0级
        e["on" + type] = handler
      }
    },
    removeHandler: function() {
      if (e.removeEventListener) {
        e.removeEventListener(type, handler, false)
      } else if (e.detachEvent) {
        e.detachEvent("on" + type, handler)
      } else {
        e["on" + type] = null
      }
    }
  }

  var btn = document.getElementById('myBtn')

  // 事件处理函数
  var handler = function(e) {
    this  => // 指向调用事件处理程序的元素
    e     => // 指向事件对象
  }

  // 添加事件处理程序
  EventUtil.addHandler(btn, "click", handler)

  // 删除事件处理程序
  EventUtil.removeHandler(btn, "click", handler)
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">3、移除事件处理程序</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <p>
                通过 addEventListener() 添加的事件处理程序，只能通过
                removeEventListener()
                方法删除，并且这两个方法的参数必须一致，否则事件处理程序将无法被移除。
              </p>
              <pre v-highlight>
<code>
  var btn = document.getElementById('myBtn')

  EventUtil.addHandler(btn, "click", function() {})

  // 无法移除事件处理程序
  // 因为创建了两个不同的Function实例
  EventUtil.removeHandler(btn, "click", function() {})
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header"><strong>性能优化</strong>。</div>
            <div class="card-body">
              <p>
                移除或替换带有事件处理程序的 DOM 元素，是纯粹的 DOM
                操作。而添加在 DOM
                元素上的事件处理程序极有可能不会被当做垃圾回收。
                有些浏览器不会对此做出恰当的处理，它们有可能会对元素和对事件处理程序的引用都保存在内存中（内存无法释放）。若你知道某个元素即将被移除或被替换掉，最好手动移除事件处理器程序。
              </p>
              <pre v-highlight>
<code>
  var btn = document.getElementById("myBtn");

  EventUtil.addHandler(btn, "click", function() {
    // DOM元素被移除或替换之前
    // 移除事件处理器
    btn.onlick = null
    div.innHTML = "Process..."
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
        <div class="card-column-title">4、事件对象</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header"><strong>event 对象</strong>。</div>
            <div class="card-body">
              <p>
                在触发 DOM 上的某个元素时，会产生一个事件对象
                event，该对象包含所有的与事件有关的信息。 事件对象包含以下属性：
              </p>
              <ul>
                <li><strong>type</strong>：被触发的事件的类型。（String）</li>
                <li><strong>target</strong>：事件的目标元素。（Element）</li>
                <li>
                  <strong>currentTarget</strong>：事件处理程序当前正在处理事件的元素。（Element）
                </li>
                <li><strong>bubbles</strong>：表明事件是否冒泡。（Boolean）</li>
                <li>
                  <strong>stopPropagation</strong>：取消事件进一步捕获或冒泡，同时阻止任何事件处理程序被调用（DOM3 新增）。（Function）
                </li>
                <li>
                  <strong>stopImmediatePropagation</strong>：取消事件进一步捕获或冒泡（前提是 bubbles 为true）。（Function）
                </li>
                <li>
                  <strong>cancelable</strong>：是否可以取消事件的默认行为。（Boolean）
                </li>
                <li>
                  <strong>preventDefault</strong>：取消事件的默认行为（前提是 cancelable 为 true）。（Function）
                </li>
                <li>
                  <strong>defaultPrevented</strong>：为 true 时表示已经调用了
                  preventDefault()（DOM3新增）。（Boolean）
                </li>
                <li>
                  <strong>eventPhase</strong
                  >：调用事件处理程序的阶段。1：表示捕获阶段；2：表示"处于目标"；3：表示冒泡阶段。（Integer）
                </li>
                <li>
                  <strong>view</strong>：与事件关联的抽象视图。等同于发生事件的
                  window 对象。（Abstractive）
                </li>
                <li>
                  <strong>relatedTarget</strong
                  >：提供相关元素信息。只对于鼠标事件中的 mouseover 和 mouseout
                  事件才包含值；对于其他事件，返回 null 值。（Abstractive/null）
                </li>
              </ul>
              <pre v-highlight>
<code>
  var btn = document.getElementById('myBtn')

  btn.onclick = function (event) {
    // 事件类型
    event.type => 'click'

    // 事件目标
    this => // 指向&lt;button>元素
    event.currentTarget === this => true
    event.target === this => true

    // 阻止默认行为
    event.preventDefault()

    // 阻止事件冒泡
    event.stopPropagation()
  }
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>跨浏览器的事件对象。</strong>
            </div>
            <div class="card-body">
              <p>对前面的创建的 EventUtil 对象的增强。</p>
              <pre v-highlight>
<code>
  var EventUtil = {
    getEvent: function(event) {
      return event ? event : window.event
    },
    getTarget: function(event) {
      return event.target || event.srcElement
    },
    preventDefault: function(event) {
      if (event.preventDefault) {
        event.preventDefault()
      } else {
        event.returnValue = false
      }
    },
    stopPropagation: function(event) {
      if (stopPropagation) {
        stopPropagation()
      } else {
        event.cancelBubble = true
      }
    },
    getRelatedTarget: function(event) {
      if (event.relatedTarget) {
        return event.relatedTarget
      } else if (event.toElement) {
        return event.toElement
      } else if (event.fromElement) {
        return event.fromElement
      } else {
        return null
      }
    },
    getCharCode: function(event) {
      if (typeof event.charCode === 'number') {
        return event.charCode
      } else {
        return event.keyCode
      }
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
        <div class="card-column-title">5、事件委托</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <ol>
                <li>事件委托：即利用时间冒泡，指定一个事件处理程序，就可以管理某一类型的所有事件。</li>
                <li>使用事件委托，只需在 DOM 树中尽量高的层次上添加一个事件处理程序。</li>
                <li>可以考虑为 document 对象添加一个事件处理程序，用于页面上发生的某一特定类型的事件。</li>
                <li>docuement 对象作为事件委托的对象有以下优点：
                  <ul>
                    <li>document 对象访问速度快，在页面的生命周期内任何时间点上为它添加事件处理程序。（无需等待 load 事件或 DOMContentLoaded 事件）
                    </li>
                    <li>DOM 引用更少，所花的时间也更少。</li>
                    <li>整个页面占用的内存空间更少，能够提升整体性能。</li>
                  </ul>
                </li>
              </ol>
              <pre v-highlight>
<code>
  // Document对象作为事件委托的对象
  // 若不使用 event.stopPropagation() 阻止冒泡
  // 页面中的所有 click 事件都会冒泡到该层
  EventUtil.addHandler(document, "click", function(event) {
    event = EventUtil.getEvent(event)
    var target = EventUtil.getTarget(event)

    // 根据指定的元素id执行相关的click操作
    switch (target.id) {
      case "item1":
        console.log(target.innerText)
        break;
      case "item2":
        console.log(target.innerText)
        break;
      case "item3":
        console.log(target.innerText)
        break;
      default:
        //...
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
        <div class="card-column-title">6、模拟事件</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <ul>
                <li>
                  javascript 可以在任意时刻触发特定的事件，即模拟事件。模拟事件就如同浏览器创建的事件一样。
                </li>
                <li>模拟事件可以冒泡。</li>
                <li>
                  模拟事件能够导致浏览器执行已经制定的处理它们的事件处理程序。
                </li>
              </ul>
              <pre v-highlight>
<code>
  // 检测浏览器是否支持自定义事件
  if (document.implementation.hasFeature("MyEvents", "3.0")) {
    var event = document.createEvent("MyEvent")
    event.initMyEvent("click", true, true, "hello world!")
    btn.dispatchEvent(event)
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
  name: 'dom4',
  mixins: [reflowerMixins]
}
</script>

<style scoped lang="stylus"></style>
