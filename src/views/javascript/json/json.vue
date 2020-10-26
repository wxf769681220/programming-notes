<template>
  <div class="json" ref="json">
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">1、JSON 数据结构</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>1、语法</strong>
            </div>
            <div class="card-body">
              <p>JSON 是一种数据结构，而非一种编程语言。很多编程语言都有针对 JSON 的解析器和序列化器。JSON 的语法可以表示以下三种类型的值：</p>
              <ul>
                <li>基本类型值：<strong>字符串</strong>、<strong>数值</strong>、<strong>布尔值</strong>和 <strong>null</strong>。（不支持 undefined）</li>
                <li><strong>对象</strong>：一组无序的键值对。
                  <ol>
                    <li>对象属性名必须使用双引号。</li>
                    <li>属性名可以是空字符串，访问该属性时需要使用方括号表示法。</li>
                    <li>同一个对象中不应该出现同名属性。</li>
                  </ol>
                </li>
                <li><strong>数组</strong>：一组有序的值的列表。</li>
              </ul>
              <pre v-highlight>
<code>
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">2、序列化</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong class="danger">JSON.stringify()</strong> 方法。
            </div>
            <div class="card-body">
              <p>将 javasccript 对象序列化成字符串，字符串特点：</p>
              <ol>
                <li>不包含任何空格字符和缩进。</li>
                <li>所有函数及原型成员都会被忽略，不体现在结果集中。</li>
                <li>值为 undefined 的任何属性也都会被跳过。</li>
              </ol>
              <pre v-highlight>
<code>
  var data = {
    name: "lee",
    age: 20,
    friends: ["f1", "f2", "f3"]
    say: function() {
      return this.name + this.age
    }
  }

  // 序列化
  var res = JSON.stringify(data)
  res => {"name":"lee","age":20,"friends":["f1", "f2", "f3"]}
  typeof res => string
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>序列化选项。</strong>
            </div>
            <div class="card-body">
              <p>JSON.stringify() 方法另外还可以接收两个参数，这两个参数用于指定以不同的方式序列化 javascrip 对象。</p>
              <ol>
                <li>第一个参数是一个过滤器，可以是一个数组或一个函数（过滤函数）。</li>
                <li>第二个参数是一个选项，表示是否在 JSON 字符串中保留缩进。</li>
              </ol>
              <pre v-highlight>
<code>
  var data = {
    name: "lee",
    age: 20,
    friends: ["f1", "f2", "f3"],
    say: undefined
  }

  // 第一个参数是数组
  // 则返回的结果字符串中只包含出现的数组项
  var res = JSON.stringify(data, ["name", "age"])
  res => '{"name":"lee","age":20}'

  // 第一个参数是函数
  // 该函数接收两个参数：属性名和对应属性值（属性名必须以字符串的形式存在）
  var res = JSON.stringify(data, fn)

  function fn(key, value) {
    switch(key) {
      case "age":
        return 24
      case "friends":
        return value.join("-")
      default:
        return value
    }
  }

  res => "{"name":"lee","age":24,"friends":"f1-f2-f3"}"

  /////////////////////////////////////////////////////////

  /**
   * 第二个参数用于控制结果中的缩进和空白符
   * 它可以是数字值，表示每个级别缩进的空格数
   * 也可以是字符串：表示缩进的字符
   * 缩进空格数或是最大只能为 10
   */
  var res1 = JSON.stringify(data, null, 2)
  var res2 = JSON.stringify(data, null, '+')
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">3、解析</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong class="danger">JSON.parse()</strong> 方法。
            </div>
            <div class="card-body">
              <p>JSON 字符串解析为原生 javascript 对象。</p>
              <pre v-highlight>
<code>
  var res = "{'age':24}"

  try {
    var result = JSON.parse(res)
  } catch(ex) {
    console.log(ex) => error
  } finally {
    console.log(result) => undefined
  }
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>解析选项。</strong>
            </div>
            <div class="card-body">
              <p>JSON.parse() 方法也可以接收另一个参数。该参数是一个函数（还原函数），该函数接收两个参数：一个键和一个值，并且都需要返回一个值。</p>
              <pre v-highlight>
<code>
  var data = {
    name: "lee",
    age: 20,
    friends: ["f1", "f2", "f3"]
  }

  // 序列化
  var str = JSON.stringify(data)

  // 解析
  var y = JSON.parse(str, function(key, value) {
    switch (key) {
      case "name":
        return "alex"    // 以新值插入
      case "friends":
        return undefined // 表示删除
      default:
        return value     // 原值插入
    }
  })

  y => {name: "alex", age: 20}
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">4、toJSON 方法</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">字符串转数值。</div>
            <div class="card-body">
              <p>为对象定义 toJSON 方法，返回其自身的 JSON 数据格式。</p>
              <pre v-highlight>
<code>
  /**
   * 可以为任何对象添加 toJSON() 方法
   * 在使用 JSON.stringify() 方法序列化该对象时,会首先看对象上有没有该方法
   * 若有且返回有效值，则调用该方法；反之，则返回对象本身
   */

  var data = {
    name: "lee",
    age: 24,
    friends: ["f1", "f2", "f3"],
    toJSON: function() {
      return this.name + this.age
    }
  }

  var res = JSON.stringify(data)
  res => "lee24"
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
  name: 'json',
  mixins: [reflowerMixins]
}
</script>

<style scoped lang="stylus"></style>
