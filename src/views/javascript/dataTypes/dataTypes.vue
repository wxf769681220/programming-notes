<template>
  <div class="dataTypes">
    <div class="card-column">
      <div class="card-column-title">1、数据类型转换</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">字符串转数值。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 空字符串
  ""  => 0

  // 非空，数字值
  "123" => 123

  // 非空，非数字值
  "abc" => NaN
</code>
            </pre>
          </div>
          <div class="card-header">字符串转布尔值。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 空字符串
  ""  => false

  // 非空字符串
  "abc" => true
</code>
            </pre>
          </div>
          <div class="card-header">字符串转对象。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 相当于
  new String("")

  Object("")
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">数值转字符串。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 正负零
  ±0  => "0"

  // 非零数字值
  1 => "1"

  // 特殊值
  NaN => "NaN"

  // 无限值
  ±Infinity => "±Infinity"
</code>
            </pre>
          </div>
          <div class="card-header">数值转布尔值。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 零
  0  => false

  // 非零数字值
  1 => true
  10 => true

  // 特殊值
  NaN => false

  // 无限值
  ±Infinity => true
</code>
            </pre>
          </div>
          <div class="card-header">数值转对象。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 相当于
  new Number(0)

  Object(0)
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">布尔值转字符串。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 真值
  true  => "true"

  // 假值
  false => "false"
</code>
            </pre>
          </div>
          <div class="card-header">布尔值转数值。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 真值
  true  => 1

  // 假值
  false => 0
</code>
            </pre>
          </div>
          <div class="card-header">布尔值转对象。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 相当于
  new Boolean(false)

  Object(true)
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">特殊值 undefined 转字符串。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 后台调用 String() 方法
  undefined => "undefined"
</code>
            </pre>
          </div>
          <div class="card-header">特殊值 undefined 转数字值。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 后台调用 Number() 方法
  undefined => NaN
</code>
            </pre>
          </div>
          <div class="card-header">特殊值 undefined 转布尔值。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 后台调用 Boolean() 方法
  undefined => false
</code>
            </pre>
          </div>
          <div class="card-header">特殊值 undefined 转对象。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 相当于
  Object(undefined)
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">特殊值 Null 转字符串。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 后台调用 String() 方法
  Null => "Null"
</code>
            </pre>
          </div>
          <div class="card-header">特殊值 Null 转数值。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 后台调用 Number() 方法
  Null => 0
</code>
            </pre>
          </div>
          <div class="card-header">特殊值 Null 转布尔值。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 后台调用 Boolean() 方法
  Null => false
</code>
            </pre>
          </div>
          <div class="card-header">特殊值 Null 转对象。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 相当于
  Object(Null)
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">对象转字符串。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 调用 toString() 方法
  {}.toString() => "[object Object]"
</code>
            </pre>
          </div>
          <div class="card-header">对象转数值。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 1.调用 valueOf() 方法

  // 2.若转换结果为非数值（NaN），则调用 toString() 方法
</code>
            </pre>
          </div>
          <div class="card-header">对象转布尔值。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 后台调用 Boolean() 方法
  // 对任何对象返回 true
  {} => true
  [] => true
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">2、数据类型转换函数</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">转型函数：<strong>String()</strong>、<strong>Number()</strong>、<strong>Boolean()</strong> 函数。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 转为字符串
  String(null)       => "null"
  String(undefined)  => "undefined"

  // 转为数值
  Number(null)      => 0
  Number(undefined) => NaN

  // 转为布尔值
  Boolean(null)   => false
  Boolean("abc")  => true
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">转型函数：<strong>Object()</strong> 函数。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 基本类型值
  Object("")       // 相当于：new String("")
  Object(0)        // 相当于：new Number(0)
  Object(false)    // 相当于：new Boolean(false)

  // 特殊值，则返回空对象
  Object(undefined)    => {}
  Object(null)         => {}

  // 引用类型值
  Object({})  // 相当于：new Object()
  Object([])  // 相当于：new Array()
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">3、字符串转数值的方法</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <strong>parseInt()</strong> 函数的转换规则：
            <ul>
              <li>1、它忽略字符串前面的空格，直到找到第一个非空格字符。</li>
              <li>2、若第一个字符不是正负号或数字字符，则返回 NaN。</li>
              <li>3、若第一个字符是正负号或数字字符，则继续向后解析第二个字符，直到解析完所有字符或遇到一个非数字字符。</li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
    parseInt("  1")        => 1
    parseInt(" -1")        => -1
    parseInt("1.234")      => 1
    parseInt("1234abc")  => 1234

    // 识别各种整数格式
    parseInt("70")   => 70（十进制）
    parseInt("070")  => 70（ECMAScript 5不支持字面量形式的八进制值）
    parseInt("0xf")  => 15（十六进制）

    // 带有第二个参数，表示以多少进制转换，
    // 为了正确转换，传入这个参数很有必要
    parseInt("1", 10)    => 1（十进制）
    parseInt("10", 2)    => 2（二进制）
    parseInt("070", 8)   => 56（强制使用八进制进行转换）
    parseInt("0xf", 16)  => 15（十六进制）
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <strong>parseFloat()</strong> 函数的转换规则：
            <ul>
              <li>1、它从第一个字符开始解析每一个字符，直到遇见一个无效的浮点数字字符为止，也就是第一个小数点有效，第二个小数点就无效了，后面的字符串将被忽略。</li>
              <li>2、它忽略字符串前导空格和零。（因此以 0 为开头的十六进制格式的字符串始终返回 0。）</li>
              <li>3、该函数只会解析十进制值，因此它没有第二个参数。</li>
              <li>4、若该函数解析一个整数，则返回整数。</li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 忽略前导 0 或空格
  parseFloat("  0001.1")    => 1.1

  // 十六进制数
  parseFloat("0xA")         => 0

  // 只能识别第一个小数点字符
  parseFloat("10.123.456")  => 10.123

  // 解析整数时，返回整数
  parseFloat("1.234e7")     => 12340000
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">4、数值转字符串的方法</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <strong>toString()</strong> 方法。除了 null 和 undefined 之外，任何其他值都有 toString() 方法。它可以接收一个参数，表示输出数值的基数。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var num = 10

  // 十进制（默认）
  num.toString(10)  => "10"

  // 二进制
  num.toString(2)  => "1010"
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <strong>toFixed()</strong> 方法：指定小数点后的位数，将数字转为字符串。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var num = 123456.789

  // 对结果会适当地进行四舍五入或填充零
  num.toFixed(0)  => "123457"
  num.toFixed(2)  => "123456.79"
  num.toFixed(5)  => "123456.78900"
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <strong>toExponential()</strong> 方法：使用科学计数法，将数字转为字符串。它接收一个参数来指定小数点后的位数。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var num = 123456.789

  // 对结果会适当地进行四舍五入
  num.toExponential(1)  => "1.2e+5"
  num.toExponential(7)  => "1.2345679e+5"
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <strong>toPrecision()</strong> 方法：指定有效数字位数，将数字转为字符串。若有效数字位数小于数字整数部分的位数，则使用指数形式。
            若有效数字位数大于数字整数部分的位数，则用零在小数位补位。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var num = 123456.789

  // 对结果会适当地进行四舍五入或填充零
  num.toPrecision(4)  => "1.235e+5"
  num.toPrecision(7)  => "123456.8"
  num.toPrecision(10) => "123456.7890"
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">5、数据类型检测</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <strong class="bold">typeof 操作符</strong>用于检测数据类型时，可能返回以下字符串：
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 基本类型值
  typeof ""          => "string"
  typeof 10          => "number"
  typeof false       => "boolean"
  typeof undefined   => "undefined"
  typeof null        => "object"

  // 引用类型值
  typeof new Function()     => "function"
  typeof new Object()       => "object"
  typeof new Array()        => "object"
  typeof new Date()         => "object"
  typeof new RegExp()       => "object"
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <strong class="bold">instanceof 操作符</strong>用于检测引用类型的值（对象）的类型。若对象是给定引用类型的实例，则返回 true。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 用于基本类型值时，始终返回 false
  null instanceof Object    => false

  // 用于基本包装类型
  Object("") instanceof String      => true
  Object(10) instanceof Number      => true
  Object(false) instanceof Boolean  => true

  // 用于引用类型
  new Object() instanceof Object      => true
  new Function() instanceof Function  => true
  new Array() instanceof Array        => true
  new Date() instanceof Date          => true
  new RegExp() instanceof RegExp      => true
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
  name: 'dataTypes'
}
</script>

<style scoped lang="stylus"></style>
