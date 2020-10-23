<template>
  <div class="referenceType-3" ref="referenceType3">
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">1、基本包装对象</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>基本包装对象</strong>。
            </div>
            <div class="card-body">
              <ol>
                <li>调用 String 构造函数并传入字符串。</li>
                <li>调用 Number 构造函数并传入数字值。</li>
                <li>调用 Boolean 构造函数并传入布尔值。</li>
              </ol>
              <pre v-highlight>
<code>
  var x = new String('10')
  var y = new Number(10)
  var z = new Boolean(false)

  // 基本包装类型
  x instanceof String  => true
  y instanceof Number  => true
  z instanceof Boolean => true

  // Object 类型
  x instanceof Object  => true
  y instanceof Object  => true
  z instanceof Object  => true
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">2、String 对象</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>String 对象</strong>。
            </div>
            <div class="card-body">
              <p>String 对象是一个类数组对象。</p>
              <pre v-highlight>
<code>
  var x = new String('one')

  x => {
    0: 'o',
    1: 'n',
    2: 'e',
    length: 3
  }
</code>
              </pre>
            </div>
          </div>
         <div class="card">
            <div class="card-header">
              <strong class="danger">String.fromCharCode()</strong>
            </div>
            <div class="card-body">
              <p>通过传入字符编码获取特定字符。</p>
              <pre v-highlight>
<code>
  String.fromCharCode(104) => 'h'
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">3、String 对象的方法</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong class="danger">charAt()</strong> 方法。
            </div>
            <div class="card-body">
              <p>用于访问字符串中特定的字符。它都接收一个参数，即基于 0 的字符位置。</p>
              <pre v-highlight>
<code>
  var x = 'hello world'

  // 字符串第一个字符
  x.charAt(0) => 'h'
  x[0]        => 'h'

  // 字符串最后一个字符
  x.charAt(x.length - 1) => 'd'
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong class="danger">charCodeAt()</strong> 方法。
            </div>
            <div class="card-body">
              <p>用于访问字符串中特定字符的字符编码。它都接收一个参数，即基于 0 的字符位置。</p>
              <pre v-highlight>
<code>
  var x = 'hello world'

  // 'h' 的字符编码
  x.charCodeAt(0) => 104
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong class="danger">indexOf()</strong> 方法。
            </div>
            <div class="card-body">
              <p>返回某个指定的字符串值在字符串中首次出现的位置。如果要检索的字符串值没有出现，则该方法返回 -1。</p>
              <pre v-highlight>
<code>
  var str = "Hello world!"

  str.indexOf("H")     => 0
  str.indexOf("Hello") => 0
  str.indexOf("hi")    => -1
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong class="danger">concat()</strong> 方法。
            </div>
            <div class="card-body">
              <p>用于拼接字符串，返回拼接得到的新字符串。实践中更多使用加号操作符。</p>
              <pre v-highlight>
  <code>
    var x = 'hello '
    x.concat('world', '!') => 'hello world!'

    // 使用加号操作符进行字符串拼接
    x + 'world' => 'hello world'
  </code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong class="danger">slice()、substr() 和 substring()</strong> 方法。
            </div>
            <div class="card-body">
              <ol>
                <li>这三个方法都返回被操作字符串的一个子字符串（不会对源字符串进行修改）。</li>
                <li>它们都接收一个或两个参数。第一个参数表示：起始位置，第二个参数表示：结束位置。</li>
                <li>substr() 方法第二个参数表示返回字符的个数。</li>
              </ol>
              <pre v-highlight>
<code>
  var x = 'hello world'

  x.slice()     => 'hello world' // 一次深复制
  x.slice(1)    => 'ello world'  // 到结尾
  x.slice(1, 3) => 'el'          // 左闭右开区间

  x.substr()    => 'hello world'   // 一次深复制
  x.substr(1)   => 'ello world'    // 到结尾
  x.substr(1,3) => 'ell'           // 返回字符个数

  x.substring()    => 'hello world' // 一次深复制
  x.substring(1)   => 'ello world'  // 到结尾
  x.substring(1,3) => 'el'          // 左闭右开区间
</code>
              </pre>
              <p>参数为负值的情况。</p>
              <ol>
                <li>slice()：字符串长度 + 负值（始终要确保第二个参数大于第一个参数）。</li>
                <li>substr()：第一个参数是负值 + 字符串长度；若第一个参数为负值，则第二个参数不能是负值。</li>
                <li>substring()：两个参数不能都是负值。若只有一个参数且负值，则返回整个字符串。两个参数时，负值转为0。</li>
              </ol>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong class="danger">split()</strong> 方法。
            </div>
            <div class="card-body">
              <p>以指定字符分隔字符串，返回由分隔的各部分组成的数组。</p>
              <pre v-highlight>
<code>
  var qs = 'x=1&y=2&z=3'
  qs.split('&') => ['x=1', 'y=2', 'z=3']

  var str = '2020-09-18'
  str.split('-') => ['2020', '09', '18']

  // 空格分隔
  var str = 'a b c'
  str.split(/\s+/) => ['a', 'b', 'c']
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong class="danger">toUpperCase() 和 toLowerCase()</strong> 方法。
            </div>
            <div class="card-body">
              <p>字符串大小写转换。</p>
              <pre v-highlight>
  <code>
    var x = 'hEllo woRld'

    // 转为大写
    x.toUpperCase()       => 'HELLO WORLD'
    x.toLocaleUpperCase() => 'HELLO WORLD'

    // 转为小写
    x.toLowerCase()       => 'hello world'
    x.toLocaleLowerCase() => 'hello world'
  </code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong class="danger">localeCompare()</strong> 方法。
            </div>
            <div class="card-body">
              <p>用于比较两个字符串，它将返回下列值：</p>
              <ol>
                <li>字符串在字母表中排在字符串参数之前，则返回一个负值（多数情况为 -1）。</li>
                <li>字符串等于字符串参数，返回 0。</li>
                <li>字符串在字母表中排在字符串参数之后，则返回一个正数（多数情况为 1）。</li>
              </ol>
              <pre v-highlight>
  <code>
  var b = 'B'

  // 字母表排序：aAbBcC~zZ
  b.localeCompare('A') => 1
  b.localeCompare('B') => 0
  b.localeCompare('C') => -1

  // 常用函数
  function determinOrder(str1, str2) {
    var res = str1.localeCompare(str2)
    if (res &lt; 0) {
      console.log(str1 + '排在' + str2 + "之前!")
    } else if (res > 0) {
      console.log(str1 + '排在' + str2 + "之后!")
    } else {
      console.log(str1 + '与' + str2 + "相同!")
    }
  }

  determinOrder('B', 'A')
  determinOrder('B', 'B')
  determinOrder('B', 'C')
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
  name: 'referenceType3',
  mixins: [reflowerMixins]
}
</script>

<style scoped lang="stylus"></style>
