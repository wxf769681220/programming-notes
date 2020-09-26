<template>
  <div class="object-1">
    <div class="card-column">
      <div class="card-column-title">1、JavaScript 中的对象有哪些？</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <ul>
              <li>1、宿主对象：由 JavaScript 解析器所嵌入的宿主环境(如：web 浏览器)定义的。客户端 javascript 中表示网页结构的 HTMLElement 对象均是宿主对象。</li>
              <li>2、内置对象：由 ECMAScript 规范定义的对象，如：日期、正则表达式、基本包装对象、Math、数组、函数等。</li>
              <li>3、自定义对象：运行中的 javascript 代码创建的对象。</li>
              <li>4、自有属性：直接在对象中定义的属性。</li>
              <li>5、继承属性：在对象的原型对象中定义的对象。</li>
            </ul>
          </div>
          <div class="card-header"><strong class="bold">创建对象。</strong>通过 new 操作符 + Object 构造函数。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 调用构造函数
  var person1 = new Object()
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

  // 字面量表示法
  var person2 = {
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
    <div class="card-column">
      <div class="card-column-title">2、对象的属性类型</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <ul>
              <li>1、ECMA-262 在定义只有内部才用的特性（attribute）时，描述了属性（property）的各种特征。</li>
              <li>2、这些特性是为了实现 javascript 引擎用的，因此在 javascript 中不能直接访问它们。</li>
              <li>3、为了表示特性是内部值，通常将它们放在双括号中, 如：[[Enumerable]]。</li>
              <li>4、ECMAScript 中有两种属性：<strong class="bold">数据属性</strong>和<strong class="bold">访问器属性</strong>（存取器属性）。</li>
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <strong class="bold">数据属性。</strong>它包含一个数据值的位置，这个位置可以读取或写入值；它有四个描述其行为的特性：
            <ul>
              <li>1、[[Configurable]]：表示能否通过 delete 删除属性从而重新定义属性；能否修改属性的特性或者能否把属性修改为访问器属性；默认值为 true。</li>
              <li>2、[[Enumerable]]：表示能否通过 for-in 循环返回属性；默认值为 true。</li>
              <li>3、[[Writable]]：表示能否修改属性的值；默认值为 ture。</li>
              <li>4、[[Value]]：表示属性的数据值；读取属性时，从此位置读取，写入数据值时，把新值保存在这个位置；默认值为 undefined。</li>
            </ul>
          </div>
          <div class="card-body">
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
        <div class="card">
          <div class="card-header">
            <strong class="bold">访问器属性。</strong>访问器属性不包含数据值，它包含一对 getter 和 setter 函数。读取访问器属性时调用 getter 函数，它负责返回有效值；
            写入访问器属性时调用 setter 函数并传入新值。访问器属性也有四个描述其行为的特性：
            <ul>
              <li>1、[[Configurable]]：表示能否通过 delete 删除属性从而重新定义属性；能否修改属性的特性或者能否把属性修改为访问器属性； 默认值为 false。</li>
              <li>2、[[Enumerable]]：表示能否通过 for-in 循环返回属性；默认值为 false。</li>
              <li>3、[[Get]]：读取属性时调用的函数；默认值为 undefined。</li>
              <li>4、[[Set]]：写入属性时调用的函数；默认值为 undefined。</li>
            </ul>
            访问器访问器属性不能直接定义（它不包含数据值位置），必须使用 <strong>Object.defineProperty()</strong> 方法来定义
          </div>
          <div class="card-body">
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
          </div>
          <div class="card-header">
            定义访问器属性最简单的方法是：使用对象直接量语法的一种扩展写法：
          </div>
          <div class="card-body">
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
          </div>
          <div class="card-header">
            ECMAScript5 还提供两个非标准的方法用来创建访问器属性：<strong>__defineGetter__()</strong> 和 <strong>__defineSetter()__</strong>。
          </div>
          <div class="card-body">
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
    <div class="card-column">
      <div class="card-column-title">3、特性的操作方法</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <strong>Object.defineProperty() </strong> 方法。用于修改已定义的属性的特性, 它接收三个参数：目标对象、属性名和一个描述符对象。
          </div>
          <div class="card-body">
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
          </div>
          <div class="card-header">若对象本身并没有定义给定属性，则为该对象添加给定属性。此时给定属性的特性 [[Configurable]]、[[Enumerable]] 和 [[Writable]] 的值均为 false。</div>
          <div class="card-body">
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
            <strong>Object.defineProperties()</strong> 方法。
            ECMAScript5 提供一个 Object.defineProperties() 方法用于同时定义多个属性，它接收两个对象作为参数。其中第二个参数对象中的属性必须以描述符对象的形式存在。
          </div>
          <div class="card-body">
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
    <div class="card-column">
      <div class="card-column-title">4、对象序列化</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            ECMAScript5 提供了内置函数 <strong>JSON.stringify()</strong> 和 <strong>JSON.parse()</strong> 用来序列化和还原 javascript 对象，这些方法都使用 JSON 作为数据交换格式。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var o = { x: 1, y: 2, z: 3 }

  // 对象转字符串
  var s = JSON.stringify(o)
  s => '{ x: 1, y: 2, z: 3 }'

  // 字符串转对象
  var p = JSON.parse(s)
  p => { x: 1, y: 2, z: 3 }
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
  name: 'object-1'
}
</script>

<style scoped lang="stylus"></style>
