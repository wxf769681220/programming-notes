<template>
  <div class="function-1" ref="function1">
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">1、函数声明与函数表达式</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>函数声明。</strong>
            </div>
            <div class="card-body">
              <p>函数声明具有函数声明提升的特性，即解析器会率先读取函数声明，并使其在执行任何代码之前可用。</p>
              <pre v-highlight>
<code>
  fn()

  // 函数声明
  function fn() {
    //...
  }
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>函数表达式。</strong>
            </div>
            <div class="card-body">
              <p> 函数表达式不具有函数声明提升的特性，因此为了调用它，必须把它赋值给一个变量。<strong>（变量声明具有变量声明提升特性，但给变量赋值是不会被提前的）</strong></p>
              <pre v-highlight>
<code>
  // 函数表达式
  var fn = function() {
    //...
  }
</code>
              </pre>
              <p>函数表达式可以包含名称。若函数表达式包含名称，则函数名称将成为函数体内部的一个局部变量，并指向该函数对象。</p>
              <pre v-highlight>
<code>
  var fn = function foo(n) {
    foo => // 函数局部变量
    fn === foo => true
  }
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>Function 构造函数。</strong>
            </div>
            <div class="card-body">
              <p>每次调用一个函数实际上就相当于实例化了一次 Function 构造函数。Function 构造函数可以传入任意数量的字符串实参，
                最后一个实参所表示的文本就是函数体，并且函数体代码的编译总是在顶层函数执行。</p>
              <pre v-highlight>
<code>
  var x = 1

  function fn() {
    var x = 2
    return new Function('a', 'return x + a')
  }

  fn()(100) => 101
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">2、函数的属性</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>prototype</strong> 原型属性。
            </div>
            <div class="card-body">
              <pre v-highlight>
<code>
  // 构造函数
  function Fn() {
    //...
  }

  Fn.prototype => // 指向函数的原型对象
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>length</strong> 属性。
            </div>
            <div class="card-body">
              <pre v-highlight>
<code>
  function fn(a, b, c) {
    return a + b + c
  }

  // 返回形参个数
  fn.length => 3
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>自定义的函数属性。</strong>
            </div>
            <div class="card-body">
              <p>函数是一个特殊的对象，可以通过函数名扩展属性。</p>
              <pre v-highlight>
  <code>
    // 以下是一个简单的函数计数器
    // 每次调用该函数，这个函数的 count 属性值+1
    fn.count = 1
    function fn() {
      return fn.count++
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
        <div class="card-column-title">3、函数参数</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>arguments 对象。</strong>
            </div>
            <div class="card-body">
              <ol>
                <li>arguments 对象本质上是函数的一个局部变量。（在全局中访问会抛出 ReferenceError 错误）</li>
                <li>arguments 对象在函数中会自动声明并初始化。</li>
                <li>arguments 对象是指向函数实参对象的引用，它是一个类数组对象。</li>
                <li>arguments 对象的数组项与形参是等同的，即修改其中一个值会影响到另一个值。</li>
              </ol>
              <pre v-highlight>
<code>
  fn(1, 2)

  function fn(a, b) {
    arguments[0] => 1
    arguments[1] => 2

    // 改变形参的值
    a = true
    b = false
    arguments[0] => true
    arguments[1] => false
  }
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>length 属性。</strong>
            </div>
            <div class="card-body">
              <p>argments 对象的 length 属性表示实参个数。由于 arguments 是一个类数组对象，因此改变其 length 属性值并不会影响到数组项。</p>
              <pre v-highlight>
  <code>
    fn(1, 2)

    function fn() {
      // 实参长度
      arguments.length => 2

      // 重设length
      arguments.length = 0

      // 正常访问
      arguments[1] => 2
    }
  </code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>callee 属性。</strong>
            </div>
            <div class="card-body">
              <p>该属性指向当前正在执行的函数。在严格模式访问 arguments.callee 会抛出 TypeError 错误。</p>
              <pre v-highlight>
<code>
  // 阶乘函数
  function factorial(n) {
    if (!this) {
      throw new Error('在严格模式下，arguments.callee未定义')
    } else {
      if (n &lt; 2) {
        return 1
      } else {
        return n * arguments.callee(n - 1)
      }
    }
  }
  factorial(5) => 120
</code>
              </pre>
              <p>使用 callee 属性检测函数实参个数与期望实参个数是否一致。</p>
              <pre v-highlight>
<code>
  function check(arg) {
    var a = arg.length
    var b = arg.callee.length
    if (a !== b) {
      return false
    } else {
      return true
    }
  }

  // 期望参数三个
  function foo(a, b, c) {
    check(arguments)
    return a + b + c
  }

  // 传入两个参数
  foo(1, 2) => false
</code>
              </pre>
              <p>callee 属性上包含一个非标准属性 <strong>caller</strong>，指向调用当前函数的函数。</p>
              <pre v-highlight>
<code>
  function factorial() {
    arguments.callee.caller => fn
  }

  ;(fn() {
    factorial()
  })()
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>对象属性作为实参。</strong><br>
            </div>
            <div class="card-body">
              <p>将对象属性作为实参，可以忽略函数传入实参的顺序。</p>
              <pre v-highlight>
<code>
  function result(a, b, c) {
    // 逻辑代码
    return a + b + c
  }

  function bridge(o) {
    // 对象属性作为实参传入
    return result(o.x, o.y, o.z)
  }

  // 对象属性是无序的
  bridge({ x: 1, y: 2, z: 3 }) => 6
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">4、自执行函数</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>立即调用的函数表达式。</strong>
            </div>
            <div class="card-body">
              <p>自执行函数是某个一个值而不是一个引用，因此自执行函数不能通过函数名再调用。</p>
              <pre v-highlight>
<code>
  // 常用圆括号方式
  (function() {}())
  (function() {})()

  // 赋值操作符
  var fn = function() {}()

  // 逻辑操作符或逗号操作符
  true && function() {}()
  false || function() {}()
  0, function() {}()

  // 一元操作符
  !function() {}()
  ~function() {}()
  -function() {}()
  +function() {}()

  // new操作符
  new function() {}
</code>
              </pre>
              <p>使用自执行函数时，若上一行代码没有使用分号结尾，可以在自执行函数前添加一个分号，以保证代码可正常执行。</p>
              <pre v-highlight>
<code>
  var x = 1

  ;(function(){
    //...
  }())
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">5、回调函数</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <p>函数 A 指针(引用地址)作为参数传递到另一个函数 B 中，并且在函数 B 中执行函数 A。我们就说函数 A 叫做<strong>回调函数</strong>。</p>
              <pre v-highlight>
  <code>
    // 回调函数
    function A() {
      return 1
    }

    function B(a) {
      return a() + 2
    }

    B(A) => 3
  </code>
              </pre>
              <p>如果是匿名函数，就叫做<strong>匿名回调函数</strong>。</p>
              <pre v-highlight>
<code>
  // 匿名回调函数
  B(function() {
    return 1
  }) => 3

  function B(callback) {
    return callback() + 2
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
        <div class="card-column-title">6、函数调用方式</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>作为普通函数调用。</strong>
            </div>
            <div class="card-body">
              <p>一般不使用 this 关键字，不过 this 可以用来判断当前是否是严格模式。</p>
              <pre v-highlight>
<code>
  function strict() {
    return !this
  }

  // 作为普通函数调用
  if (strict()) {
    alert("javascript已启用严格模式!")
  } else {
    alert("javascript使用非严格模式!")
  }
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong >作为某个对象的方法调用。</strong>
            </div>
            <div class="card-body">
              <p>当对象某个方法不需要返回值时，最好直接返回 this 。在 API 设计中常采用这种方式来实现 API 的'链式调用。</p>
              <pre v-highlight>
<code>
  // 作为某个对象的方法调用
  var o = {
    x: function() {
      return this
    },
    y: function() {
      return this
    }
  }

  // 链式调用
  o.x().y() => o
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>作为构造函数调用。</strong>
            </div>
            <div class="card-body">
              <pre v-highlight>
<code>
  // 构造函数
  function Fn() {}

  // 实例化
  var f = new Fn()
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              通过 <strong class="danger">apply()</strong> 和  <strong class="danger">call()</strong> 方法实现函数的间接调用。
            </div>
            <div class="card-body">
              <pre v-highlight>
<code>
  var person = {
    name: 'lee',
    age: 20
  }

  function fn() {
    return this.name + '-' + this.age
  }

  // Function.call()
  fn.call(o) => 'lee-20'
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">7、嵌套函数（闭包）</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>执行环境与作用域。</strong>
            </div>
            <div class="card-body">
              <ul>
                <li>javascript 中有两类执行环境：<strong>全局执行环境</strong>和<strong>局部执行环境</strong>（函数的执行环境）。</li>
                <li>每个执行环境中都有一个与之关联的<strong>变量对象</strong>，其作用是：<strong>保存着该执行环境中定义的所有变量和函数</strong>。</li>
                <li>当代码在一个执行环境中执行时，会创建变量对象的一个<strong>作用域链</strong>。其作用是：<strong>保证对执行环境有权访问的所有变量和函数的有序访问</strong>。</li>
                <li>作用域链的前端，始终是当前执行的代码所在执行环境的变量对象。若该执行环境是函数，则将其活动对象作为变量对象。活动对象最开始只包含一个 arguments 变量；
                  作用域链的下一个变量对象来自包含的外部环境；再下一次的变量对象则来自下一个包含环境；这样一直延续到全局执行环境，全局执行环境的变量对象始终是作用域链中的最后一个对象。</li>
                <li>内部环境通过作用域链可以访问所有的外部环境，但外部环境不能访问内部环境中的任何变量和函数。</li>
              </ul>
              <pre v-highlight>
<code>
  // 全局变量
  var num = 1

  function fn() {
    // 函数的活动对象中包含两个变量：arguments 和 num
    console.log(num); => undefined

    if (false) {
      // 该语句虽然永远不会被执行
      // 但是依然存在变量声明提升的特性
      // 也就是说此时函数活动对象中的 num 变量被重新声明了
      // 因此在变量赋值之前，该变量取默认的 undefined 值
      var num = 2
    }
  }

  fn()
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>什么是闭包？</strong>
            </div>
            <div class="card-body">
              <ol>
                <li>闭包：实质上就是一个函数。</li>
                <li>创建闭包的常见方式：在一个函数体内创建另一个函数。</li>
                <li>闭包作用：有权访问外部函数作用域中定义的所有变量。</li>
              </ol>
              <pre v-highlight>
<code>
  function fn() {
    // 有名字的闭包
    function foo() {
      return false
    }

    // 匿名闭包
    return function() {
      return true
    }
  }
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>闭包中的作用域链。</strong>
            </div>
            <div class="card-body">
              <p>作用域链是函数定义时创建的，闭包就定义在这个作用域链里。对于外部函数的局部变量而言，不管在何时调用闭包函数，这种绑定依然有效。</p>
              <pre v-highlight>
<code>
  var x = 1

  function fn() {
    var x = 2
    function foo() {
      return x
    }
    // 在外部函数中调用闭包
    return foo()
  }

  fn() => 2

  // 全局作用下的闭包调用
  var x = 1

  function fn() {
    var x = 2
    function foo() {
      return x
    }
    return foo
  }

  // 获取闭包的引用
  var y = fn()

  // 在全局作用域下调用闭包
  y() => 2
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>闭包导致的内存泄漏。</strong>
            </div>
            <div class="card-body">
              <ol>
                <li>在函数中访问一个变量时，就会从作用域链中搜索具有相应名字的变量。</li>
                <li>当函数执行完毕后，局部活动对象就会被销毁，此时内存中仅保存全局执行环境的变量对象。</li>
                <li>但闭包有所不同：外部函数的活动对象依然会留在内存中，因为闭包的作用域链仍然引用这个活动对象。</li>
                <li>直到闭包被销毁后，外部函数的活动对象才会被销毁。因此闭包会消耗一定的内存。</li>
              </ol>
              <pre v-highlight>
<code>
  function fn(a) {
    // 闭包
    return function(b) {
      return a + b
    }
  }

  // 获取对闭包的引用
  var f = fn(1)

  f(2) => 3

  // 销毁闭包，释放内存
  f = null
</code>
              </pre>
              <p>如果闭包的作用域中保存着一个 HTML 元素，那就意味着该元素将无法被销毁，因此占用内存就永远不会被收回。解决的方法：手动取消对 HTML 元素的引用。</p>
              <pre v-highlight>
<code>
  function fn() {
    var element = documents.getElementById('myDiv')

    var id = element.id

    element.onclick = function() {
      // 1.闭包中不存在对HTML元素的任何直接引用
      // 2.实际上闭包中仍然存在对外部函数的活动对象的引用
      console.log(id)
    }

    // 移除事件处理程序
    // 解除对 HTML 元素的引用
    element = null
  }
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>闭包的副作用</strong>。</div>
            <div class="card-body">
              <p>闭包只能取得外部函数中任何变量的最终值。因为它保存的是整个变量对象，而不是某个特殊的值。</p>
              <pre v-highlight>
<code>
  function fn() {
    var arr = []
    for (var i = 0; i &lt; 3; i++) {
      arr[i] = function() {
        // 只能取得i最终值10
        return i
      }
    }
    return arr
  }
</code>
              </pre>
              <p>创建另一个匿名函数强制让闭包的行为符合预期。</p>
              <pre v-highlight>
<code>
  function fn() {
    var arr = []
    for (var i = 0; i &lt; 10; i++) {
      // 自执行函数并传入参数
      arr[i] = function(a) {
        return function() {
          return a
        }
      }(i)
    }
    return arr
  }
</code>
              </pre>
            </div>
          </div>
          <div class="card">
              <div class="card-header">
                <strong>闭包中的 this、arguments</strong>。
              </div>
              <div class="card-body">
                <p>每个函数在被调用时都会获得两个特殊的变量：this 和 arguments 变量。闭包在搜索这两个变量时，只会搜索其自身的活动对象中的 this 和 arguments，
                永远不可能直接访问外部函数中的 this 和 arguments。因此闭包中的 this 具有全局性。</p>
                <pre v-highlight>
<code>
  var age = 30

  var o = {
    age: 20,
    say: function() {
      // 函数作为某个对象的方法调用时，this指向该对象
      // 保存外部函数this
      var self = this

      // 闭包
      return function () {
        self.age => 20

        // this指向window
        return this.age
      }
    }
  }
  o.say()() => 30
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

  name: 'function1',
  mixins: [reflowerMixins]
}
</script>

<style scoped lang="stylus"></style>
