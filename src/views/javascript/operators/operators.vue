<template>
  <div class="operators" ref="operators">
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">1、操作符优先级</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header"><strong>优先级。</strong></div>
            <div class="card-body">
              <pre v-highlight>
<code>
  // 一元操作符
  ++ -- 自增/自减
  + -   加/减
  ~     按位非
  !     逻辑非
  delete
  typeof
  void

  // 二元操作符
  *、/、%             乘性操作符
  +、-                加性操作符
  &lt;&lt;、>>、>>>   左移位、有符号右移和无符号右移
  &lt;、&lt;=、>、>=  比较操作符
  instanceof
  in
  ==、!==、===、!==  相等操作符
  &、^、|            按位与、按位异或和按位或
  &&、||             逻辑与和逻辑或

  // 三元操作符
  ?:   条件操作符

  // 二元操作符
  =                   赋值
  *=、/=、%=、+=、-=  运算且赋值
  ,                   忽略第一个操作数，返回第二个操作数
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header"><strong>结合性。</strong></div>
            <div class="card-body">
              <pre v-highlight>
<code>
  var n = x + y + z

  // 相当于
  var n = ((x+y) + z)
</code>
              </pre>
              <p>从右到左结合，如：一元运算符、三元运算符和赋值运算符。</p>
              <pre v-highlight>
<code>
  // 从右到左结合
  var x = ~-y           // 相当于 ~(-y)
  var y = x = z = a     // 相当于 (x=(z=a))
  var z = a?b:c?d:e?f:g // 相当于 a?b:(c?d:(e?f:g))
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header"><strong>运算顺序。</strong></div>
            <div class="card-body">
              <pre v-highlight>
<code>
  var n = x + y + z

  // 相当于
  var n = ((x+y) + z)
</code>
              </pre>
              <p>运算符的优先级和结合性规定了它们在复杂的表达式中的运算顺序。在 Javascript 中总是严格的按照从左到右的顺序来计算表达式的。</p>
              <pre v-highlight>
<code>
  /**
  * 先通过从左到右计算各个表达式
  * 通过结合性得到最终结果
  * 首先计算表达式 n，再计算 x、y 和 z
  * 然后计算 y*z，加上 x，赋值给变量 n
  */
  var n = x + y * z
</code>
              </pre>
              <p>举例：递增递减运算符。</p>
              <pre v-highlight>
<code>
  var i = 3
  var k = i++ + i

  k => 7（3+(3+1)）
  i => 4

  // ...
  var i = 3
  var k = i++ + i++

  k => 7
  i => 5
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">2、一元操作符</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>void 操作符</strong>。
            </div>
            <div class="card-body">
              <p>void 操作符执行括号里的表达式，多个表达式用逗号分隔。另外，void() 没有返回值。</p>
              <pre v-highlight>
<code>
  /* 用于 HTML 标签
    &lt;a href="javascript:void(0);">单击此处什么都不会发生&lt;/a>
    &lt;a href="javascript:void(alert('hello world!'))">点击触发弹框&lt;/a>
    &lt;a href="javascript:void(console.log('hi'))">点击打印结果&lt;/a>
  */

  var a, b, c

  a = void(b = 2, c = 3)

  a => undefiend
  b => 2
  c => 3
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>delete 操作符</strong>。
            </div>
            <div class="card-body">
              <p>delete 操作符用于删除对象的属性。</p>
              <pre v-highlight>
<code>
  var o = {
    x: 1
  }

  delete o.x  => true

  o.x => undefined
</code>
              </pre>
              <p>通过 var 关键字声明的变量是无法通过 delete 删除的。</p>
              <pre v-highlight>
<code>
  var x = 1
  delete x => false
  x => 1
</code>
              </pre>
              <p>通过 function 关键字声明函数也是无法通过 delete 删除的，但可以重新赋值。</p>
              <pre v-highlight>
<code>
  function fn() { return 1 }
  delete fn
  fn() => 1

  var foo = fn
  foo() => 1
</code>
              </pre>
              <p>delete 操作符不能删除全局定义的变量，但若是定义在 window 对象上的属性则可以删除。</p>
              <pre v-highlight>
<code>
  window.x = 1
  delete window.x
  window.x => undefined
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>逗号操作符</strong>。
            </div>
            <div class="card-body">
              <p>逗号操作符可以在一条语句中执行多个操作，比如同时声明多个变量。逗号操作符还可以用于赋值，它总返回表达式中的最后一项。</p>
              <pre v-highlight>
<code>
  // 用于声明变量
  var n1 = 1, n2 = 2, n3 = 3

  // 用于赋值
  var n = (1, 2, 3, 4, 5)
  n => 5
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">3、递增递减操作符</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>递增递减操作符。</strong>
            </div>
            <div class="card-body">
              <ol>
                <li>递增递减操作符包括前置型和后置型。</li>
                <li>表示对于数值进行加减 1 的操作。</li>
                <li>对于非数值，先将操作数转为数值，在进行加减 1 的操作。</li>
              </ol>
              <pre v-highlight>
<code>
  // 后置型
  var n1 = 10
  var n2 = n1++ + 10
  n1 => 11
  n2 => 20

  // 前置型
  var n1 = 10
  var n2 = ++n1 + 10
  n1 => 11
  n2 => 21

  // 对于非数值
  var n1 = true
  var n2 = ++n1 + 10
  n1  => 2
  n2  => 12
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">4、一元加减操作符</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>一元加减操作符。</strong>
            </div>
            <div class="card-body">
              <ol>
                <li>一元加操作符在数值面前，对数值不会产生任何影响。</li>
                <li>一元减操作符在数值面前，表示负数。</li>
                <li>对于非数值时，一元加减操作符会先像 Number() 函数一样对这个值进行数值转换。</li>
              </ol>
              <pre v-highlight>
<code>
// 常规加减运算
var n1 = +10
var n2 = -10
n1 - n2 => 20

// 对于非数值
var n1 = +true
var n2 = +null
n1 - n2 => 1
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">5、乘性操作符</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>乘性操作符：乘法、除法和求模（余数）</strong>。
            </div>
            <div class="card-body">
              <ol>
                <li>若两个操作数都是数值，则执行常规的乘法/除法/求模的计算。</li>
                <li>若两个操作中有一个不是数值，则后台调用 Number() 将其转换为数值，再执行常规的计算。</li>
                <li>注意：对于特殊值 0、NaN 和 Infinity 特殊值的计算规则。</li>
              </ol>
              <pre v-highlight>
  <code>
    // 乘法
    10 * 10  => 100

    // 除法
    10 / 10  => 1

    // 余数
    10 % 10  => 0
  </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">6、加性操作符</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>加性操作符：加法和减法</strong>。
            </div>
            <div class="card-body">
              <ol>
                <li>若两个操作数都是数值，则执行常规的加法/减法的计算。</li>
                <li>加法：（转为字符串）
                  <ul>
                    <li>若两个操作数都是字符串，则将两个操作数拼接起来。</li>
                    <li>若两个操作数中有一个操作数是字符串，则将另一个操作数转换为字符串，再拼接起来。</li>
                    <li>若两个操作数中有一个操作数是对象、数值或布尔值，则调用它们的 toString() 方法。而对于 undefined 和 null，则调用 String() 方法。</li>
                  </ul>
                </li>
                <li>减法：（转为数字值）
                  <ul>
                    <li>若两个操作数都是数值，则执行常规的减法计算。</li>
                    <li>若两个操作数中有一个操作数是字符串、布尔值、undefined 或 null，则调用 Number() 函数进行转换，再执行常规的减法计算。</li>
                    <li>若两个操作数中有一个操作数是对象，则调用对象的 valueOf() 方法，取得表示该对象的数值，再执行常规的减法计算。</li>
                  </ul>
                </li>
              </ol>
              <pre v-highlight>
  <code>
    // 加法，转为字符串
    "5" + 5 + true => "55true"

    // 减法，转为数字值
    "5" - 5 + true => 1
  </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">7、比较操作符</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>比较操作符：&lt;、>、&lt;= 和 >=</strong>。
            </div>
            <div class="card-body">
              <p>每个比较操作符都返回一个布尔值。</p>
              <ol>
                <li>若两个操作数都是字符串，则比较两个字符串对应的字符编码值。</li>
                <li>若两个操作数中有一个操作数是数值，则将另一个操作数转换成数值，再进行比较。</li>
                <li>若两个操作数中有一个操作数是布尔值，则先将其转换为数值，再进行比较。</li>
                <li>若两个操作数中有一个操作数是对象，则调用对象的 valueOf() 方法取得数值结果，再进行比较。</li>
              </ol>
              <pre v-highlight>
  <code>
    // 比较字符编码值
    "a" &lt; "b" => true
    "1" &lt; "2" => true

    // 转为数字值
    10 > "20" => false

    // 转为布尔值
    1 > false => true
  </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">8、相等操作符</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>相等操作符：==、!=、=== 和 !==</strong>。
            </div>
            <div class="card-body">
              <p>这几个操作符都返回一个布尔值。 在进行相等和不相等运算时，这两个操作符都会先转换操作数，然后再比较它们的相等性，而全等和不全等则强制不会进行转换。</p>
              <pre v-highlight>
  <code>
    /*
      乘/赋值 *=
      除/赋值 /=
      模/赋值 %=
      加/赋值 +=
      减/赋值 -=
      左移/赋值 &lt;&lt;=
      有符号右移/赋值 >>=
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
        <div class="card-column-title">9、条件操作符</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>条件操作符：expression ? A : B</strong>。
            </div>
            <div class="card-body">
              <p>条件操作符使用三个操作数。一个条件后面会跟一个问号（?），如果条件为 true ，则问号后面的表达式 A 将会执行；表达式 A 后面跟着一个冒号（:），
                如果条件为 false ，则冒号后面的表达式 B 将会执行。</p>
              <pre v-highlight>
  <code>
    var n = 10
    var a = n > 0 ? 1 : 2
    a => 1
  </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">10、逻辑操作符</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>逻辑非操作符</strong>。
            </div>
            <div class="card-body">
              <ol>
                <li>逻辑非：由一个感叹号（!）表示。</li>
                <li>逻辑非的操作数只有一个，因此它是一个一元操作符。</li>
                <li>逻辑非先将其操作数转换为一个布尔值，然后再进行求反。</li>
              </ol>
              <pre v-highlight>
  <code>
    !null       => true
    !undefined  => true
    !true       => false
    !false      => true
    !{}         => false
    ![]         => false
  </code>
              </pre>
              <p>当同时应用两个逻辑非操作符时，最终结果与调用 Boolean() 函数相同。</p>
              <pre v-highlight>
  <code>
    !!0    => false

    // 相当于
    Boolean(0) => false
  </code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
            <strong>逻辑与操作符</strong>。
            </div>
            <div class="card-body">
              <ol>
                <li>逻辑与：由两个和号（&&）表示，它有两个操作数，因此它是一个二元操作符。</li>
                <li>若两个操作数都是布尔值，则遵循：当任意一个操作数为 false，则结果为 false。</li>
                <li>若两个操作数中有一个操作数不是布尔值，则遵循：
                  <ul>
                    <li>若第一个操作符求值结果为 true，那么结果将直接返回第二个操作数。</li>
                    <li>若第一个操作符求值结果为 false，则不会再对第二个操作数求值，结果返回第一个操作数。</li>
                  </ul>
                </li>
              </ol>
              <pre v-highlight>
  <code>
    // 有一个操作数不是布尔值
    // 第一个操作符求值结果为 true
    true && false      => false
    1 && null          => null
    "1" && undefined   => undefined
    {} && 0            => 0

    // 第一个操作符求值结果为 false
    false && n       => false
    NaN && n         => NaN
    null && n        => null
    undefined && n   => undefined
    0 && n           => 0
    "" && n          => ""
  </code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
            <strong>逻辑或操作符</strong>。
            </div>
            <div class="card-body">
              <ol>
                <li>逻辑或：由两个竖线号（||）表示，它有两个操作数，因此它是一个二元操作符。</li>
                <li>若两个操作数都是布尔值，则遵循：当任意一个操作数为 true，则结果为 true。</li>
                <li>若两个操作数中有一个操作数不是布尔值，则遵循：
                  <ul>
                    <li>若第一个操作符求值结果为 true，则不会再对第二个操作数求值，结果返回第一个操作数。</li>
                    <li>若第一个操作符求值结果为 false，那么结果将直接返回第二个操作数。</li>
                  </ul>
                </li>
              </ol>
              <pre v-highlight>
  <code>
    // 有一个操作数不是布尔值
    // 第一个操作数的求值结果为 true
    true || n        => true
    1 || n           => 1
    "1" || n         => "1"
    {} || n          => {}

    // 第一个操作符求值结果为 false
    false || true      => true
    NaN || 1           => 1
    null || "1"        => "1"
    undefined || {}    => {}
  </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">11、位操作符</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>ECMAScript 整数</strong>。
              <ol>
                <li>ECMAScript 中的所有数值都是以IEEE-754 64 位格式存储。</li>
                <li>位操作符不直接操作 64 位的值，而是先将其转换成 32 位的整数，然后执行操作，最后再将结果转回 64 位。</li>
                <li>对于有符号整数（包含正数和负数），32 位中的前 31 位表示整数的数值；用第 32 位（符号位）表示整数的符号，0 表示正数，1 表示负数。</li>
                <li>正数以二进制格式存储。前 31 位中的每一位都表示 2 的幂，从第 1 位（位 0）开始，表示 2<sup>0</sup> ；第 2 位（位 1）表示 2<sup>1</sup>。 没用到的位用 0 填充，即忽略不计。</li>
                <li>负数以二进制补码格式存储。计算一个负数的二进制补码需要经过以下步骤：
                  <ul>
                    <li>先求这个负数绝对值的二进制码。</li>
                    <li>再求这个二进制码的反码（即：1 变为 0，0 变为 1）。</li>
                    <li>将得到的二进制反码加 1。</li>
                  </ul>
                </li>
              </ol>
            </div>
            <div class="card-body">
              <pre v-highlight>
  <code>
    // 正数18的二进制码
    (0)000 0000 0000 0000 0000 0000 0001 0010
    24*1 + 23*0 + 22*0 + 21*1 + 20*0 = 18

    // 负数-18的二进制码
    (0)000 0000 0000 0000 0000 0000 0001 0010 // 二进制码
    (1)111 1111 1111 1111 1111 1111 1110 1101 // 二进制反码
    (1)111 1111 1111 1111 1111 1111 1110 1110 // 二进制反码+1

    var n = 18
    n.toString(2) => "10010"   // 5个有效位

    var n = -18
    n.toString(2) => "-10010"  // 负数以合理的逻辑显示
  </code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>按位非操作符</strong>。
            </div>
            <div class="card-body">
              <ol>
                <li>按位非：由一个波浪线表示（~）。</li>
                <li>按位非操作符只有一个操作数，因此它是一个一元操作符。</li>
                <li>在对数值应用按位非操作符时，返回数值的反码。</li>
                <li>按位非的本质：就是其操作数的负值减 1。</li>
                <li>在对 NaN 和 Infinity 值应用位操作符时，这两个值都会被当做 0 来处理。</li>
                <li>在对非数值应用位操作符时，会在后台调用 Number() 函数将该值转换为一个数值。</li>
              </ol>
              <pre v-highlight>
  <code>
    // 正数
    ~10 => -11

    // 负值（绝对值-1）
    ~-10 => 9

    // 特殊值
    ~NaN       => -1
    ~Infinity  => -1
    ~-Infinity => -1

    // 非数值
    ~"abc" => ~Number("abc") => ~NaN => -1
  </code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>按位与操作符</strong>。
            </div>
            <div class="card-body">
              <ol>
                <li>按位与：由一个和号表示（&）。</li>
                <li>按位非操作符只有一个操作数，因此它是一个二元操作符。</li>
                <li>本质上：就是将两个操作数的二进制码每一位对齐然后执行 AND 操作。</li>
                <li>AND 操作。即：1AND1=1、0AND1=0、1AND0=0、0AND0=0。</li>
              </ol>
              <pre v-highlight>
  <code>
    0000 0000 0000 0000 0000 0000 0001 1001   // 25
    0000 0000 0000 0000 0000 0000 0000 0011   // 3
    0000 0000 0000 0000 0000 0000 0000 0001   // AND操作

    25 & 3  => 1 // 二进制码"1"
  </code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>按位或操作符</strong>。
            </div>
            <div class="card-body">
              <ol>
                <li>按位或：由一个竖线表示（|）。</li>
                <li>按位非操作符只有一个操作数，因此它是一个二元操作符。</li>
                <li>本质上：就是将两个操作数的二进制码每一位对齐然后执行 OR 操作。</li>
                <li>OR 操作即：1OR1=1、0OR1=1、1OR0=1、0OR0=0。</li>
              </ol>
              <pre v-highlight>
  <code>
    0000 0000 0000 0000 0000 0000 0001 1001   // 25
    0000 0000 0000 0000 0000 0000 0000 0011   // 3
    0000 0000 0000 0000 0000 0000 0001 1011   // OR操作

    25 | 3 => 27 // 二进制码"11011"
  </code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>按位异或操作符</strong>。
            </div>
            <div class="card-body">
              <ol>
                <li>按位异或：由一个插入表示（^）。</li>
                <li>按位非操作符只有一个操作数，因此它是一个二元操作符。</li>
                <li>本质上：就是将两个操作数的二进制码每一位对齐然后执行 XOR 操作。</li>
                <li>XOR 操作即：1XOR1=0、0OR1=1、1OR0=1、0XOR0=0。</li>
              </ol>
              <pre v-highlight>
  <code>
    0000 0000 0000 0000 0000 0000 0001 1001   // 25
    0000 0000 0000 0000 0000 0000 0000 0011   // 3
    0000 0000 0000 0000 0000 0000 0001 1010   // XOR操作

    25 ^ 3 => 26 // 二进制码"11010"
  </code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>左移</strong>。
            </div>
            <div class="card-body">
              <ol>
                <li>左移：由两个小于号表示（&lt;&lt;）。</li>
                <li>将数值的二进制码向左移动 n 位，右侧多出空位用 0 填充。</li>
                <li>左移不会影响符号位。</li>
              </ol>
              <pre v-highlight>
  <code>
    (0)000 0000 0000 0000 0000 0000 0001 1001   // 25
    (0)000 0000 0000 0000 0000 0000 1100 1000   // 左移3位

    // 正数
    25 &lt;&lt; 3  => 200

    // 负数
    -25 &lt;&lt; 3 => -200
  </code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>有符号右移</strong>。
            </div>
            <div class="card-body">
              <ol>
                <li>有符号右移：由两个大于号表示（>>）。</li>
                <li>将数值的二进制码向右移动 n 位，左侧空位以符号位的值来填充。</li>
                <li>对于负数有符号右移（其结果本质上是正数的负值减 1）。</li>
              </ol>
              <pre v-highlight>
  <code>
    (0)000 0000 0000 0000 0000 0000 0001 1001   // 25
    (0)000 0000 0000 0000 0000 0000 0000 0110   // 右移2位

    // 正数
    25 >> 2 => 6

    // 负数
    -25 >> 2 => -7
  </code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>无符号右移</strong>。
            </div>
            <div class="card-body">
              <ol>
                <li>无符号右移：由三个大于号表示（>>>）。</li>
                <li>将数值的二进制码向右移动 n 位，左侧空位以符号位的值来填充。</li>
                <li>对于负数无符号右移会把负数的二进制码当成正数的二进制码。</li>
              </ol>
              <pre v-highlight>
  <code>
    (0)000 0000 0000 0000 0000 0000 0001 1001   // 25
    (0)000 0000 0000 0000 0000 0000 0000 0110   // 右移2位

    // 正数
    25 >>> 2 => 6

    // 负数
    -25 >>> 2 => 1073741817（Number）
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
  name: 'operators',
  mixins: [reflowerMixins]
}
</script>

<style scoped lang="stylus"></style>
