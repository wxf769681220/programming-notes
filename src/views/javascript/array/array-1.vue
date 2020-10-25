<template>
  <div class="array-1" ref="array1">
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">1、Javascript 中的数组</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>创建数组。</strong>
            </div>
            <div class="card-body">
              <ol>
                <li>数据的有序列表。</li>
                <li>数组项可以保存任何数据类型。</li>
                <li>数组的长度可以动态调整，即可以随着数据的添加自动增长以容纳新的数据。</li>
              </ol>
              <pre v-highlight>
<code>
  // 空数组
  var arr1 = new Array()

  // 空数组，长度为10
  var arr2 = new Array(10)

  // 包含三个数组项的数组
  var arr3 = new Array(1, 2, 3)

  // 数组字面量
  var arr4 = []
</code>
            </pre>
            <p>数组项不一定是常量，它可以是任意表达式。</p>
            <pre v-highlight>
<code>
  var count = 10
  var arr = [count + 1, count + 2]
  arr => [11, 12]
</code>
            </pre>
            <p>数组允许有可选的结尾的逗号。</p>
            <pre v-highlight>
<code>
  var arr = [,,,]
  arr.length => 3
</code>
            </pre>
            <p>数组是对象的特殊形式。数组索引是对象属性名的一种特殊形式。</p>
            <pre v-highlight>
<code>
  var arr1 = ['x', 'y', 'z']
  var arr2 = []

  for (let p in arr1) {
    arr2.push(p)
  }

  // 对象属性名是字符串类型
  arr2 => ["0", "1", "2"]
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">2、数组的属性</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header"><strong>length 属性</strong>。</div>
            <div class="card-body">
              <p>数组的 length 属性决定了数组的长度。设置 length 值时，若数组的实际数组项小于 length 的值，则使用 undefined 值填充数组；
              若数组的实际数组项大于 length 的值，那么数组将从末尾删除多余的数组项。</p>
              <pre v-highlight>
<code>
  var arr = ["x", "y", "z"]
  arr.length = 4
  arr[3] => undefined

  // 删除数组中的最后一项
  arr.length = arr.length - 1
  arr => ["x", "y", "z"]
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">3、稀疏数组</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <p>稀疏数组就是包含从 0 开始的不连续索引的数组。稀疏数组的 length
              属性值总是大于数组项实际个数。</p>
              <pre v-highlight>
<code>
  // 不包含数组项，长度为5
  var arr1 = new Array(5)

  // 不包含数组项，长度为3
  var arr2= [,,,]

  // 包含1个数组项，长度为101
  var arr3 = []
  arr3[100] = 101
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              遍历稀疏数组，跳过 null、undefined 和不存在的元素。
            </div>
            <div class="card-body">
              <pre v-highlight>
<code>
  for (var i = 0, len = arr.length; i &lt; len; i++) {
    if (!arr[i]) continue;
    //...
  }
</code>
              </pre>
            </div>
            <div class="card-header">
              遍历稀疏数组，只跳过 undefined 和不存在的元素。
            </div>
            <div class="card-body">
              <pre v-highlight>
<code>
  for (var i = 0, len = arr.length; i &lt; len; i++) {
    if (arr[i] === undefined) continue;
    //...
  }
</code>
              </pre>
            </div>
            <div class="card-header">
              跳过不存在的元素，但仍然要处理存在的 undefined 元素。
            </div>
            <div class="card-body">
              <pre v-highlight>
<code>
  for (var i = 0, len = arr.length; i &lt; len; i++) {
    if (!(i in arr)) continue;
    //...
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
        <div class="card-column-title">4、类数组</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>类数组对象有哪些？</strong>
            </div>
            <div class="card-body">
              <ul>
                <li>argument 对象。</li>
                <li>HTMLCollection 对象。</li>
                <li>NodeList 对象。</li>
              </ul>
              <pre v-highlight>
  <code>
  </code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>如何构建一个类数组对象？</strong>
            </div>
            <div class="card-body">
              <p>类数组对象满足两个条件：1、以从 0 开始的连续整数数字值作为对象的属性名；2、另外还需设置一个 length 属性。</p>
              <pre v-highlight>
<code>
  var o = {}

  var i = 0
  var len = 3

  while (i &lt; len) {
    o[i] = i * i
    i++
  }

  o.length = i

  // 类数组对象
  o => { 0: 0, 1: 1, 2: 4, length: 3 }
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>类数组对象上的方法。</strong>
            </div>
            <div class="card-body">
              <p>类数组对象没有继承自 <strong class="bold">Array.prototype</strong>，因此不能在它们的上面直接调用原生数组的方法。
            尽管如此，我们可以间接的使用 <strong class="danger">Function.call()</strong> 方法调用。</p>
              <pre v-highlight>
<code>
  var o = {
    0: 0,
    1: 1,
    2: 4,
    3: 9,
    length: 4
  }

  // 间接调用
  Array.prototype.join.call(o, '-') => '0-1-4-9'
  Array.prototype.slice.call(o)     => [0, 1, 4, 9]
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">5、检测数组的方法</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong class="danger">Array.isArray()</strong> 方法。
            </div>
            <div class="card-body">
              <p>当 web 浏览器中有多个窗口或窗体（frame）存在，每个窗口都有自己的 javascript 环境，都有自己的全局对象。这时使用 <strong>instanceof 操作符</strong>用于数组检测并不可靠，
              使用 Array.isArray() 函数更为可靠。</p>
              <pre v-highlight>
<code>
  var arr = []

  arr instanceof Array  => true

  Array.isArray(arr)    => true
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
  name: 'array1',
  mixins: [reflowerMixins]
}
</script>

<style scoped lang="stylus"></style>
