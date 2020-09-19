<template>
  <div class="statements">
    <div class="card-column">
      <div class="card-column-title">1、语句类型</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <strong class="bold">表达式语句。</strong>
            表达式的最小单位包括：常量或直接量、关键字或保留字和变量。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 常量或直接量
  10 'hello' /pattern/

  // 关键字或保留字
  true / false / null / this

  // 变量
  sum / undefined / ±Infinity / NaN
</code>
            </pre>
          </div>
          <div class="card-header">其他表达式语句。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 对象创建表达式
  new Object()

  // 对象初始化表达式
  { x:1, y:2 }

  // 数组初始化表达式
  [1,2,3]

  // 属性访问表达式
  o.name
  o['x']

  // 函数表达式
  var fn = function() {}

  // 函数调用表达式
  fn()
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <strong class="bold">复合语句。</strong>
            <ul>
              <li>1、用花括号将多条语句括起来，形成一条复合语句。</li>
              <li>2、复合语句块结尾不需要分号。</li>
              <li>3、复合语句块没有作用域，即其中声明的变量并不是语句块私有的。</li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 复合语句
  {
    var x = 1
    var y = 2
  }

  x => 1
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <strong class="bold">空语句。</strong>
            允许包含 0 条语句的语句。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var i = 0
  var a = []

  // 空语句加注释说明
  for (/* empty */; i &lt; 3; a[i++] = i) /* empty */;

  // 总是会执行
  a => [1, 2, 3]
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <strong class="bold">声明语句。</strong>

          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 变量声明
  var x = 1

  // 函数声明
  function fn() {}
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">2、条件语句</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header"><strong class="bold">if 语句。</strong></div>
          <div class="card-body">
            <pre v-highlight>
<code>
  if (expression1) {
    //...
  } else if (expression2) {
    //...
  } else if (expression3) {
    //...
  } else {
    //...
  }
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <strong class="bold">switch 语句。</strong>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  switch (expression) {
    case value1:
      //...
      break;
    case value2:
      //...
      break;
    case value3:
      //...
      break;
    default:
      //...
  }
</code>
            </pre>
          </div>
          <div class="card-header">
            每个 case 后面都添加一个 break 语句，可以避免同时执行多个 case 代码。若需要混合使用，最好在代码中添加注释，说明是有意省略了 break 关键字。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  switch (expression) {
    case value1:
      /* 合并两种情况 */
      //...
    case value2:
      //...
      break;
    case value3:
      //...
      break;
    default:
      //...
  }
</code>
            </pre>
          </div>
          <div class="card-header">
            switch 语句若用在函数中，可以使用 return 来代替 break 终止 switch 语句。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  function fn() {
    switch (expression) {
      case value1:
        return 1
      case value2:
        return 2
      default:
        return 3
    }
  }
</code>
            </pre>
          </div>
          <div class="card-header">
            switch 语句中每个 case 的值不一定是常量，可以使变量，甚至是表达式。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var num = 10

  switch (true) {
    case num &lt; 10:
      //...
      break;
    case num > 10:
      //...
      break;
    case num === 10:
      //...
      break;
    default:
      //...
  }
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">3、循环语句</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <strong class="bold">for 语句。</strong>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  for (var i = 0; i &lt; 10; i++) {
    //...
  }
</code>
            </pre>
          </div>
          <div class="card-header">使用 for 循环一次迭代改变多个变量的情况。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  for (var i = 0, j = 10; i &lt; 10; i++, j--) {
    //...
  }
</code>
            </pre>
          </div>
          <div class="card-header">循环变量非数字值的情况。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 返回链表的最后一个节点对象
  function tail(o) {
    for (/* empty */; o.next; o = o.next) /* empty */ ;
    return o
  }
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <strong class="bold">while 语句。</strong>
            <ul>
              <li>1、while 语句是一种基本的循环语句。</li>
              <li>2、while 语句只有表达式的求值结果为 true 时，才会执行循环体。</li>
              <li>3、若表达式的求值结果永远是 true，那么循环也永远不会结束， 因此在循环体中始终有一个与表达式的值相关联的变量来控制循环的结束。</li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var count = 0

  while (count &lt; 10) {
    //...
    count++
  }
</code>
            </pre>
          </div>
          <div class="card-header">do-while 与 while 语句相比，它的循环体至少会被执行一次。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var count = 0

  do {
    //...
    count++
  } while (count &lt; 10); // 必须使用分号结尾
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">4、break 和 continue 语句</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <strong class="bold">break 和 continue 语句。</strong>
            <ul>
              <li>1、break 和 continue 语句用于在循环语句中精准地控制代码的执行。</li>
              <li>2、break 语句会立即退出循环，强制执行之后的代码。</li>
              <li>3、continue 语句也是立即退出循环，但退出循环后会从循环的顶部继续执行。</li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // break 语句
  var num1 = 0
  for (var i = 1; i &lt; 10; i++) {
    if (i % 2 === 0) {
      // 终止循环立即跳出
      break
      // 忽略下面的代码...
    }
    num1++
  }
  num1 => 1

  // continue 语句
  var num2 = 0
  for (var i = 1; i &lt; 10; i++) {
    if (i % 2 === 0) {
      // 终止本次循环立即跳出，继续执行下一次循环
      continue;
      // 忽略下面的代码...
    }
    num2++
  }
  num2 => 5
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">5、try/catch/finally 语句</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <strong class="bold">try/catch/finally 语句。</strong>
            <ul>
              <li>1、try/catch/finally 语句是 Javascript 的异常处理机制。</li>
              <li>2、在 try/catch/finally 语句中，catch 与 finally 都是可选的，但 try 从句需要至少二者之一组成完整的语句。</li>
              <li>3、try 语句中的代码，通常会从头执行到尾而不产生任何问题，但有时会出现错误，就会随即抛出一个异常。（也可以由 throw 语句直接抛出异常）</li>
              <li>4、catch 语句中的代码，当且仅当 try 语句块代码出现错误并抛出异常时，才会执行其中的代码。catch 语句，通过局部变量 e 来获得对 Error 对象或者抛出的其他值的引用。</li>
              <li>5、finally 语句中的代码始终都会被执行（不管 try 语句块是否抛出了出现了错误）。</li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  try {
    // 可能会导致错误的代码
  }
  catch(e) {
    // 在错误发生时如何处理
  }
  finally {
    // 这里代码始终都会被执行
  }
</code>
            </pre>
          </div>
          <div class="card-header">
            立即终止 try 语句的方式：
            <ul>
              <li>1、正常终止，执行完 try 语句块的最后一条语句。</li>
              <li>2、抛出一个异常（或遇到 throw 语句），异常被 catch 语句捕获。</li>
              <li>3、抛出一个异常（或遇到 throw 语句），异常未被捕获，继续向上传播。</li>
              <li>4、通过 break、continue 或 return 语句终止。</li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  /**
   * 由于 finally 语句中也包含 return 语句
   * 导致 try 语句中的 return 语句被忽略，fn 函数返回 3
   * 若去掉 finally 语句，fn 函数返回 1
   */
  function fn() {
    try {
      return 1
    } catch(e) {
      return 2
    } finally {
      return 3
    }
  }

  fn() => 3
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">6、语句扩展</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <strong class="bold">throw 语句。</strong>在 Javascript 中，当产生运行时错误或程序使用 throw 语句时就会显式地抛出异常。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  throw new Error('Something is wrong!')
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <strong class="bold">debugger 语句。</strong> 用来产生一个断点，javascript 代码会在断点的位置停止执行。这时可以使用浏览器的网页调试器可以输出变量的值，
            检查调用栈等。debugger 语句不会启动调试器， 只有在调试器已经运行中，这条语句才会真正产生一个断点。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var x = 1
  debugger

  // 若开启调试器，下面代码不会被运行
  // 若未开启调试器，则会忽略 debugger 语句，代码会继续执行
  console.log(x)
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <strong class="bold">label 语句。</strong>可以在代码中添加标签。break 和 continue 语句引用。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var num = 0
  outermost:
  for (var i = 0; i &lt; 10; i++) {
    for (var j = 0; j &lt; 10; j++) {
      if (i == 5 && j == 5) {
        break outermost
      }
      num++
    }
  }
  num => 55
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <strong class="bold">with 语句。</strong>将代码的作用域设置到一个特定的对象中。（严格模式下无效）
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var qs = location.search.substring(1)
  var hostName = location.hostname
  var url = location.href

  // 相当于
  with(location) {
    var qs = search.substring(1)
    var hostName = hostname
    var url = href
  }
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
  name: 'statements'
}
</script>

<style scoped lang="stylus"></style>
