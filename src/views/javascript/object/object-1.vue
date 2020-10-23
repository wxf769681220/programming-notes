<template>
  <div class="object-1" ref="object1">
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">1、Object 类型</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>JavaScript 中的对象有哪些？</strong>
            </div>
            <div class="card-body">
              <ol>
                <li><strong>宿主对象</strong>：由 JavaScript 解析器所嵌入的宿主环境(如：web 浏览器)定义的。客户端 javascript 中表示网页结构的 HTMLElement 对象均是宿主对象。</li>
                <li><strong>内置对象</strong>：由 ECMAScript 规范定义的对象，如：日期、正则表达式、基本包装对象、Math、数组、函数等。</li>
                <li><strong>自定义对象</strong>：运行中的 javascript 代码创建的对象。</li>
                <li><strong>自有属性</strong>：直接在对象中定义的属性。</li>
                <li><strong>继承属性</strong>：在对象的原型对象中定义的对象。</li>
              </ol>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>创建对象。</strong>
            </div>
            <div class="card-body">
              <p>创建一个对象最简单的方式：new 操作符 + Object（构造函数）。</p>
              <pre v-highlight>
<code>
  // 调用构造函数
  var person = new Object()

  // 添加属性
  person.name = "lee"
  person.age = 20
  person.friends = ["f1", "f2", "f3"]
  person.say = function() {
    return this.name + this.age
  }

  // 属性的字符串表示
  person['first name'] = "alex"
  person['5'] = true
  person[''] = null
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>对象字面量表示法。</strong>
            </div>
            <div class="card-body">
              <p>不会调用 Object 构造函数。</p>
              <pre v-highlight>
<code>
  // 字面量表示法
  var person = {
    // 含特殊字符使用字符串
    'first name': 'alex',
    // 数字值属性自动转换为字符串
    5: true
    // 即使是空字符串也是允许的
    '': null
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
        <div class="card-column-title">2、对象的属性类型</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <ol>
                <li>ECMA-262 在定义只有内部才用的特性（attribute）时，描述了属性（property）的各种特征。</li>
                <li>这些特性是为了实现 javascript 引擎用的，因此在 javascript 中不能直接访问它们。</li>
                <li>为了表示特性是内部值，通常将它们放在双括号中, 如：[[Enumerable]]。</li>
                <li>ECMAScript 中有两种属性：<strong class="bold">数据属性</strong>和<strong class="bold">访问器属性</strong>（存取器属性）。</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">3、数据属性</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>数据属性</strong>。
            </div>
            <div class="card-body">
              <p>它包含一个数据值的位置，这个位置可以读取或写入值；它有四个描述其行为的特性：</p>
              <ol>
                <li><strong>[[Configurable]]</strong>：表示能否通过 delete 删除属性从而重新定义属性；能否修改属性的特性或者能否把属性修改为访问器属性；默认值为 true。</li>
                <li><strong>[[Enumerable]]</strong>：表示能否通过 for-in 循环返回属性；默认值为 true。</li>
                <li><strong>[[Writable]]</strong>：表示能否修改属性的值；默认值为 ture。</li>
                <li><strong>[[Value]]</strong>：表示属性的数据值；读取属性时，从此位置读取，写入数据值时，把新值保存在这个位置；默认值为 undefined。</li>
              </ol>
              <pre v-highlight>
<code>
  var person = {
    name: "lee"
  }

  // 获取给定属性的描述符
  var myName = Object.getOwnPropertyDescriptor(person, "name")

  // 属性的特性
  myName.configurable => true
  myName.enumerable   => true
  myName.writable     => true
  myName.value        => "lee"

</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">4、访问器属性</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>访问器属性</strong>。
            </div>
            <div class="card-body">
              <p>不包含数据值，它包含一对 getter 和 setter 函数。读取访问器属性时调用 getter 函数，它负责返回有效值；
              写入访问器属性时调用 setter 函数并传入新值。访问器属性也有四个描述其行为的特性：</p>
              <ol>
                <li><strong>[[Configurable]]</strong>：表示能否通过 delete 删除属性从而重新定义属性；能否修改属性的特性或者能否把属性修改为访问器属性； 默认值为 false。</li>
                <li><strong>[[Enumerable]]</strong>：表示能否通过 for-in 循环返回属性；默认值为 false。</li>
                <li><strong>[[Get]]</strong>：读取属性时调用的函数；默认值为 undefined。</li>
                <li><strong>[[Set]]</strong>：写入属性时调用的函数；默认值为 undefined。</li>
              </ol>
              <br>
              <p>访问器访问器属性不能直接定义（它不包含数据值位置），必须使用 <strong class="danger">Object.defineProperty()</strong> 方法来定义</p>
              <pre v-highlight>
<code>
  var person = {
    name: "lee",
    age: 18
  }

  // 定义访问器属性
  Object.defineProperty(person, "year", {
    get: function() {
      return this.name + this.age
    },
    set: function(value) {
      if (value > 2000) {
        this.age = value - 2000
      }
    }
  })

  // 写入属性值
  person.year = 2020

  person      => { name: "lee", age: 20 }
  person.year => "lee20"

</code>
              </pre>
              <p><strong>对象直接量语法定义访问器属性。</strong></p>
              <pre v-highlight>
<code>
  var person = {
    name: "lee",
    age: 18,
    get year() {
      return this.name + this.age
    },
    set year(value) {
      if (value > 2000) {
        this.age = value - 2000
      }
    }
  }

  // 写入属性值
  person.year = 2020

  person      => { name: "lee", age: 20 }
  person.year => "lee20"
</code>
              </pre>
              <p>ECMAScript5 还提供两个非标准的方法用来创建访问器属性：<strong class="danger">__defineGetter__()</strong> 和 <strong class="danger">__defineSetter()__</strong>。</p>
              <pre v-highlight>
<code>
  var person = {
    name: "lee",
    age: 18
  }

  person.__defineGetter__("year", function() {
    return this.name + this.age
  })
  person.__defineSetter__("year", function(value) {
    if (value > 2000) {
      this.age = value - 2000
    }
  })

  // 写入属性值
  person.year = 2020

  person      => { name: "lee", age: 20 }
  person.year => "lee20"
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">5、特性的操作方法</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong class="danger">Object.defineProperty() </strong> 方法。
            </div>
            <div class="card-body">
              <p>用于修改已定义的属性的特性, 它接收三个参数：目标对象、属性名和一个描述符对象。</p>
              <pre v-highlight>
<code>
  // 修改属性默认的特性
  var person = {
    name: "lee"
  }

  Object.defineProperty(person, "name", {
    // configurable: true,
    // enumerable: true,
    // writable: true,
    value: "alex"
  })

  person.name =>"alex"
</code>
              </pre>
              <p>若对象本身并没有定义给定属性，则为该对象添加给定属性。此时给定属性的特性 [[Configurable]]、[[Enumerable]] 和 [[Writable]] 的值均为 false。</p>
              <pre v-highlight>
<code>
  var person = {}

  // 添加属性
  Object.defineProperty(person, "name", {
    //configurable: false,
    //enumerable: false,
    //writable: false,
    value: "lee"
  })

  person.name => "lee"
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong class="danger">Object.defineProperties()</strong> 方法。
            </div>
            <div class="card-body">
              <p>用于同时定义多个属性，它接收两个对象作为参数。其中第二个参数对象中的属性必须以描述符对象的形式存在。</p>
              <pre v-highlight>
<code>
  var person = {}

  Object.defineProperties(person, {
    // 定义一个数据属性
    name: {
      // configurable: false,
      // enumerable: false,
      // writable: false,
      value: "lee"
    },
    age: {
      // configurable: false,
      // enumerable: false,
      // writable: false,
      value: 18
    },
    // 定义一个访问器属性
    year: {
      // configurable: false,
      // enumerable: false,
      get: function() {
        return this.name + this.age
      },
      set: function(value) {
        if (value > 2000) {
          this.age = value - 2000
        }
      }
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
        <div class="card-column-title">6、对象序列化</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong class="danger">JSON.stringify()</strong> 方法。
            </div>
            <div class="card-body">
              <p> 用来序列化 javascript 对象。</p>
              <pre v-highlight>
<code>
  var o = { x: 1, y: 2, z: 3 }

  var str = JSON.stringify(o)

  str => { "x": 1, "y": 2, "z": 3 }

  typeof str => 'string'
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong class="danger">JSON.parse()</strong> 方法。
            </div>
            <div class="card-body">
              <p>将 JSON 字符串还原 javascript 对象。</p>
              <pre v-highlight>
<code>
  var str = '{ "x": 1, "y": 2, "z": 3 }'

  // 字符串转对象
  var o = JSON.parse(s)

  o => { x: 1, y: 2, z: 3 }
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
  name: 'object1',
  mixins: [reflowerMixins]
}
</script>

<style scoped lang="stylus"></style>
