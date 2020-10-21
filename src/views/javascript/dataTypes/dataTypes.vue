<template>
  <div class="dataTypes clearfix" ref="dataTypes">
    <div class="card-column">
      <div class="card-column-title">1、数据类型</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <strong>ECMAScript 数据类型</strong>
          </div>
          <div class="card-body">
            <div>
              ECMAScript 中有 5
              种基本类型值：<strong>Undefined</strong>、<strong>Null</strong>、<strong>Boolean</strong>、<strong>Number</strong>、<strong
                >String</strong
              >
              和 1 种 复杂数据类型 - <strong>Object</strong>。
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <strong>数据类型转换表</strong>
          </div>
          <div class="card-body">
            <el-table border :data="tableData">
              <el-table-column
                prop="value"
                label="值"
                width="190px"
                fixed
              ></el-table-column>
              <el-table-column
                prop="string"
                label="字符串"
                width="100px"
              ></el-table-column>
              <el-table-column prop="number" label="数值"></el-table-column>
              <el-table-column prop="boolean" label="布尔"></el-table-column>
              <el-table-column
                prop="object"
                label="对象"
                width="180px"
              ></el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">2、转型函数</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <strong>转型函数</strong>：<strong class="danger">String()</strong
            >、<strong class="danger">Number()</strong>、<strong class="danger"
              >Boolean()</strong
            >。
          </div>
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
  Boolean(null)       => false
  Boolean(undefined)  => false
  Boolean("0")        => true
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <strong>转型函数</strong>：<strong class="danger">Object()</strong
            >。
          </div>
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
            <strong>转型函数</strong>：<strong class="danger">parseInt()</strong
            >。
          </div>
          <div class="card-body">
            <ol>
              <li>它忽略字符串前面的空格，直到找到第一个非空格字符。</li>
              <li>若第一个字符不是正负号或数字字符，则返回 NaN。</li>
              <li>
                若第一个字符是正负号或数字字符，则继续向后解析第二个字符，直到解析完所有字符或遇到一个非数字字符。
              </li>
            </ol>
            <pre v-highlight>
<code>
    parseInt("  1")       =>1
    parseInt("-1")        =>-1
    parseInt("1.234")     => 1
    parseInt("1234abc")   => 1234

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
            <strong>转型函数</strong>：<strong class="danger"
              >parseFloat()</strong
            >。
          </div>
          <div class="card-body">
            <ol>
              <li>
                它从第一个字符开始解析每一个字符，直到遇见一个无效的浮点数字字符为止，也就是第一个小数点有效，第二个小数点就无效了，后面的字符串将被忽略。
              </li>
              <li>
                它忽略字符串前导空格和零，因此以 0
                为开头的十六进制格式的字符串始终返回 0。
              </li>
              <li>该函数只会解析十进制值，因此它没有第二个参数。</li>
              <li>若该函数解析一个整数，则返回整数。</li>
            </ol>
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
            <strong>toString()</strong> 方法。除了 null 和 undefined
            之外，任何其他值都有 toString()
            方法。它可以接收一个参数，表示输出数值的基数。
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
            <strong>toFixed()</strong>
            方法：指定小数点后的位数，将数字转为字符串。
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
            <strong>toExponential()</strong>
            方法：使用科学计数法，将数字转为字符串。它接收一个参数来指定小数点后的位数。
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
            <strong>toPrecision()</strong>
            方法：指定有效数字位数，将数字转为字符串。若有效数字位数小于数字整数部分的位数，则使用指数形式。
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
            <strong class="bold">typeof 操作符</strong
            >用于检测数据类型时，可能返回以下字符串：
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
            <strong class="bold">instanceof 操作符</strong
            >用于检测引用类型的值（对象）的类型。若对象是给定引用类型的实例，则返回
            true。
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
        <div class="card">
          <div class="card-header">
            检测对象具体类型。
          </div>
          <div class="card-body">
            <pre v-highlight>
              <code>
                // 是否是一个函数
                function isFunction(o) {
                  return Object.prototype.toString.call(o) === "[object Function]"
                }

                // 是否是一个数组
                // 类似于 Array.isArray() 方法
                function isArray(o) {
                  return Object.prototype.toString.call(o) === "[object Array]"
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
// import { reflower } from 'common/js/dom'

export default {
  name: 'dataTypes',
  data() {
    return {
      tableData: [
        {
          value: '""（空字符串）',
          string: '',
          number: 0,
          boolean: 'false',
          object: 'new String("")'
        },
        {
          value: '"0"（非空，数字值）',
          string: '',
          number: 0,
          boolean: 'true',
          object: 'new String("0")'
        },
        {
          value: '"abc"（非空、非数字值）',
          string: '',
          number: NaN,
          boolean: 'true',
          object: 'new String("abc")'
        },
        {
          value: '±0',
          string: '"0"',
          number: '',
          boolean: 'false',
          object: 'new Number(±0)'
        },
        {
          value: '1（非零，数字值）',
          string: '"1"',
          number: '',
          boolean: 'true',
          object: 'new Number(1)'
        },
        {
          value: NaN,
          string: '"NaN"',
          number: '',
          boolean: 'false',
          object: 'new Number(NaN)'
        },
        {
          value: '±Infinity',
          string: '"±Infinity"',
          number: '',
          boolean: 'true',
          object: 'new Number(±Infinity)'
        },
        {
          value: 'true',
          string: '"true"',
          number: 1,
          boolean: '',
          object: 'new Boolean(true)'
        },
        {
          value: 'false',
          string: '"false"',
          number: 0,
          boolean: '',
          object: 'new Boolean(false)'
        },
        {
          value: '{}',
          string: '',
          number: '',
          boolean: 'true',
          object: 'new Object()'
        },
        {
          value: '[]',
          string: '',
          number: '',
          boolean: 'true',
          object: 'new Array()'
        },
        {
          value: 'function() {}',
          string: '',
          number: '',
          boolean: 'true',
          object: 'new Function()'
        }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      // reflower(this.$refs.dataTypes)
    })
  }
}
</script>

<style scoped lang="stylus"></style>
