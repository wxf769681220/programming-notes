<template>
  <div class="object-2">
    <div class="card-column">
      <div class="card-column-title">1、工厂模式</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <strong class="bold">优点：</strong>工厂模式的优点：解决了使用同一接口创建多个对象, 从而产生大量重复代码的问题。<br>
            <strong class="bold">缺点：</strong>无法识别对象的具体类型。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  function person(name, age) {
    // 创建一个新对象
    var o = new Object()

    // 添加属性
    o.name = name
    o.age = age
    o.friends = ["f1", "f2", "f3"]
    o.say = function() {
      return this.name + this.age
    }

    // 返回这个新对象
    return o
  }

  // 普通函数调用
  var p1 = person("lee", 20)
  var p2 = person("alex", 24)

  p1.say() => "lee20"
  p2.say() => "alex24"
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">2、构造函数模式</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <strong class="bold">优点：</strong>可以创建特定类型的对象。<br>
            <strong class="bold">缺点：</strong>若特定类型对象的属性值是一个引用类型值，那么不同实例上的同名属性均不相等。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 构造函数
  function Person(name, age) {
    // 使用 this 关键字
    this.name = name
    this.age = age
    this.friends = ["f1", "f2", "f3"]

    // 每实例化一个新对象都会创建一个不同的 Function 的实例
    // 下面代码等价于：new Function('renturn this.name + this.age')
    this.say = function() {
      return this.name + this.age
    }
  }

  // 实例化
  var p1 = new Person("lee", 20)
  var p2 = new Person("alex", 24)

  p1.say() => "lee20"
  p2.say() => "alex24"

  // 不同实例上的同名属性不相等
  p1.friends === p2.friends => false
  p1.say === p2.say         => false
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">3、原型模式</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <strong class="bold">优点：</strong>原型对象可以让所有实例对象共享它所包含的属性和方法。<br>
            <strong class="bold">缺点：</strong>原型上的属性其值是一个引用类型值时，对某个新实例的修改会立即映射到其他的新实例上。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 构造函数
  function Person() {}

  // 定义原型
  Person.prototype.name = "lee"
  Person.prototype.age = 20
  Person.prototype.friends = ["f1", "f2", "f3"]
  Person.prototype.say = function() {
    return this.name + this.age
  }

  // 实例化
  var p1 = new Person()
  var p2 = new Person()

  // 属性共享
  p1.say() => "lee20"
  p2.say() => "lee20"
  p1.say === p2.say => true
  p1.friends === p2.friends => true

  // 对某个新实例的修改会立即映射到其他的新实例上
  p1.friends.push("f4")
  p1.friends => ["f1", "f2", "f3", "f4"]
  p2.friends => ["f1", "f2", "f3", "f4"]
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <strong class="bold">组合模式。</strong>
            这种模式只是一种设计思路，即：构造函数用于定义实例属性，原型模式用于定义共享的属性或方法。<br>
            <strong class="bold">优点：</strong>既可以为构造函数传值，实现函数的复用。 又可以保证每个实例对象拥有独有的属性和所有实例共享的属性和方法。<br>
            <strong class="bold">缺点：</strong>没有封装性。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 构造函数
  function Person(name, age) {
    this.name = name
    this.age = age
    this.friends = ["f1", "f2", "f3"]
  }

  // 定义原型
  Person.prototype.say = function() {
    return this.name + this.age
  }

  // 实例化
  var p1 = new Person("lee", 20)
  var p2 = new Person("alex", 24)

  p1.say()           => "lee20"
  p2.say()           => "alex24"
  p1.say === p2.say  => true

  // 不同实例拥有独有的属性
  p1.friends.push("f4")
  p1.friends => ["f1", "f2", "f3", "f4"]
  p2.friends => ["f1", "f2", "f3"]
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <strong class="bold">动态原型。</strong>
            作为最佳实践模式，这种模式将原型对象封装进构造函数中。它通过检查某个应该存在的方法是否有效，来决定是否初始化原型。 其中 if 语句只需检查一个方法是否存在即可。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 构造函数
  function Person(name, age) {
    this.name = name
    this.age = age
    this.friends = ["f1", "f2", "f3"]

    // 初始化原型
    if (typeof this.say !== "function") {
      // 定义原型
      Person.prototype.say = function() {
        return this.name + this.age
      }
    }
  }

  var p1 = new Person("lee", 20)
  var p2 = new Person("alex", 24)
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">4、寄生构造函数模式</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            这种模式与工厂模式十分类似，区别在于：1、使用的是构造函数，2.使用 new 关键字调用。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 构造函数
  function person(name, age) {
    // 创建一个新对象
    var o = new Object()

    // 添加属性
    o.name = name
    o.age = age
    o.friends = ["f1", "f2", "f3"]
    o.say = function() {
      return this.name + this.age
    }

    // 返回这个新对象
    return o
  }

  // 作为构造函数调用
  var p1 = new Person("lee", 20)
  var p2 = new Person("alex", 24)

  p1.say() => "lee20"
  p2.say() => "alex24"
</code>
            </pre>
          </div>
          <div class="card-header">
            使用场景：为已有对象类型创建一个新类型。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 构造函数
  function SpecialArray() {
    // 内置对象类型 Array 类型
    var arr = new Array()

    arr.push.apply(arr, arguments)

    arr.toPipedString = function() {
      return this.join('|')
    }

    return arr
  }

  // 作为构造函数调用
  var color = new SpecialArray('red', 'blue','green')
  color.toPipedString() => "red|blue|green"
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">5、稳妥构造函数模式</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <strong class="bold">稳妥对象</strong>：没有公共属性，其属性不引用 this。稳妥对象何时最一些安全的环境中(这些环境会禁止使用 this 和 new)。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  function Person(name, age) {
    var o = new Object()

    // 在这里可以定义私有变量
    o.say = function() {
      return name
    }

    return o
  }

  var p = Person('lee', 20)
  p.say() => 'lee'
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
  name: 'object-2'
}
</script>

<style scoped lang="stylus"></style>
