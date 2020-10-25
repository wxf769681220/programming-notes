<template>
  <div class="function-3" ref="function3">
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">1、原型链继承</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>让一个原型对象等于另一个类型的实例。</strong>
            </div>
            <div class="card-body">
              <pre v-highlight>
<code>
  // 超类型
  function Person() {
    this.name = "lee"
    this.age = 24
    this.friends = ["f1", "f2", "f3"]
  }

  Person.prototype.say = function() {
    return this.name + this.age
  }

  // 子类型
  function Child() {}

  // 原型链继承
  Child.prototype = new Person()

  var p1 = new Child()
  p1.say() => "lee24"
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>注意事项。</strong>
            </div>
            <div class="card-body">
              <p>类型中需要覆盖超类型或添加超类型中不存在的某个方法时，给原型添加的方法的代码一定放在继承语句之后。</p>
              <pre v-highlight>
<code>
  // 继承
  Child.prototype = new Person()

  // 为子类型添加新的原型属性
  // 必须放在继承语句之后
  Child.prototype.say = function() {
    //...
  }
</code>
              </pre>
              <p>子类型不能使用对象字面量创建原型对象。</p>
              <pre v-highlight>
<code>
  // 继承
  Child.prototype = new Person()

  // 让一个原型等于另一个对象
  // 实质上是重写了整个原型对象
  // 导致上面继承语句失效
  Child.prototype = {
    say: function() {
      //...
    }
  }
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>原型链继承的缺陷。</strong>
            </div>
            <div class="card-body">
              <ol>
                <li>让一个原型对象等于另一个类型的实例，本质上重写了原型对象。因此，切断了实例对象与原型之间的联系，
                  导致子类型的原型对象上的 constructor 指针不再指向子类型构造函数，而是指向超类型构造函数。</li>
                <li>在创建子类型实例时，切断了向超类型传递参数的可能。</li>
                <li>子类型在原型上继承了超类型的所有属性，如果超类型实例属性是一个引用类型值，那么该属性将被所有子类型的实例所共享（重现 oop 设计模式中原型模式的缺点）。</li>
              </ol>
              <pre v-highlight>
<code>
  Child.prototype.construtor === Child => false
  Child.prototype.construtor === Person => true

  var p1 = new Child()
  var p2 = new Child()

  p1.friends.push('f4')

  // 原型属性被所有实例所共享
  p2.friends => ["f1", "f2", "f3", "f4"]
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">2、借用构造函数</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>子类型构造函数内部通过 <strong class="danger">Function.call()</strong> 或 <strong class="danger">Function.apply()</strong> 方法调用超类型构造函数。</strong>
            </div>
            <div class="card-body">
              <pre v-highlight>
<code>
  // 超类型
  function Person() {
    this.name = "lee"
    this.age = 24
    this.friends = ["f1", "f2", "f3"]
  }

  // 原型
  Person.prototype.say = function() {
    return this.name + this.age
  }

  // 子类型
  function Child() {
    // 实现对超类型实例属性的继承
    Person.call(this)
  }

  var p = new Child()
  p.name => "lee"
  p.age  => 24

  // 缺点：超类型原型对子类型不可见
  p.say() => error
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">3、组合继承</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>通过借用构造函数实现对超类型实例属性的继承，而通过原型链实现对超类型原型上定义的方法继承。</strong>
            </div>
            <div class="card-body">
              <pre v-highlight>
<code>
  // 超类型
  function Person(name, age) {
    this.name = name
    this.age = age
    this.friends = ["f1", "f2", "f3"]
  }

  // 原型
  Person.prototype.say = function() {
    return this.name + this.age
  }

  // 子类型
  function Child(age) {
    // 继承实例属性
    Person.call(this, 'lee', 24)
    this.age = age
  }

  // 继承原型属性
  Child.prototype = new Person()

  // 重设 constructor 指向
  Child.prototype.constructor = Child

  // 为子类型添加新的原型属性
  Child.prototype.say = function() {
    return this.age
  }

  var p = new Child(20)

  p.name => 'lee'
  p.age => 20
  p.say() => 20
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>缺点是：超类型会被调用两次。</strong>
            </div>
            <div class="card-body">
              <pre v-highlight>
<code>
  // 第一次调用
  Child.prototype = new Person()

  // 第二次调用
  Person.call(this, 'lee', 24)
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">4、寄生式组合式继承</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              寄生式组合式继承是对组合继承的一种优化。设计思路：<strong>不必指定子类型的原型而调用超类型的构造函数，而是创建一个超类型原型的一个副本函数。</strong>
            </div>
            <div class="card-body">
              <pre v-highlight>
<code>
  // 超类型
  function Person(name, age) {
    this.name = name
    this.age = age
    this.friends = ["f1", "f2", "f3"]
  }

  // 原型
  Person.prototype.say = function() {
    return this.name + this.age
  }

  // 子类型
  function Child(age) {
    Person.call(this, 'lee', 24)
    this.age = age
  }

  // 创建超类型原型副本
  function inheritPrototype(subType, superType) {
    // 创建对象
    var prototype = Object(superType.prototype)

    // 增强对象
    prototype.constructor = subType

    // 指定对象
    subType.prototype = prototype
  }

  // 实现继承
  inheritPrototype(Child, Person)

  Child.prototype.say = function() {
    return this.name + this.age
  }

  var p = new Child(20)
  p.say() => 'lee20'
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">5、原型式继承</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>基于已有的对象创建新对象。缺陷：被继承对象包含引用类型值。</strong>
            </div>
            <div class="card-body">
              <pre v-highlight>
<code>
  // 被继承对象
  var o = {
    name: 'lee',
    age: 24,
    friends: ["f1", "f2", "f3"],
    say: function() {
      return this.name + this.age
    }
  }

  // 创建继承函数
  function fn(o) {
    function Person() {}

    Person.prototype = o

    return new Person()
  }

  var res = fn(o)
  res.say() => 'lee24'
</code>
              </pre>
              <p>ECMAScript5 提供一个 <strong class="danger">Object.create()</strong> 方法规范化原型式继承。</p>
              <pre v-highlight>
<code>
  var o = {
    name: 'lee',
    age: 24,
    friends: ["f1", "f2", "f3"],
    say: function() {
      return this.name + this.age
    }
  }

  // 第二个参数以属性描述符的方式存在
  var res = Object.create(o, {
    name: {
      value: 'LEE'
    }
  })

  // 同名属性被覆盖
  res.name => 'LEE'
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">6、寄生式继承</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>创建一个仅用于封装继承过程的函数，该函数内部以某种方式来增强对象，最后返回这个对象。</strong>
            </div>
            <div class="card-body">
              <pre v-highlight>
<code>
  var o = {
    name: 'lee',
    age: 24,
    friends: ["f1", "f2", "f3"],
    say: function() {
      return this.name + this.age
    }
  }

  // 继承函数
  function fn(o) {
    // 通过调用函数创建一个新对象
    // Object()函数非必须的
    // 任何能返回新对象的函数都适用于此模式
    var clone = Object(o)

    // 通过某种方式增强这个对象
    clone.name ='LEE'

    clone.say = function() {
      return this.name
    }

    // 返回对象
    return clone
  }

  var res = fn(o)

  res.say() => 'LEE'
  res.age => 24
  res.friends => ["f1", "f2", "f3"]
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
  name: 'function3',
  mixins: [reflowerMixins]
}
</script>

<style scoped lang="stylus">
</style>
