<template>
  <div class="function-2">
    <div class="card-column card-800">
      <div class="card-column-title">1、原型对象</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <ul>
              <li>1、所有函数都有一个 <strong class="bold">prototype</strong>（原型）属性，其属性值是一个对象，即<strong class="bold">原型对象</strong>。</li>
              <li>2、在默认情况下，所有原型对象都会自动获取一个 <strong class="bold">constructor</strong>（构造函数）属性，属性值是一个指向 prototype 属性所在函数的指针。</li>
              <li>3、所有对象都包含一个内部的 <strong class="bold">[[prototype]]</strong> 属性，属性值指向其构造函数的原型对象。</li>
              <li>4、由于 [[prototype]] 属性是一个内部属性，对脚本不可见，因此不能直接访问。主流浏览器都支持一个 <strong class="bold">__proto__</strong> 属性，该属性可以用于替代访问 [[prototype]] 属性。</li>
            </ul>
            <img src="../../../common/img/prototype.jpg" style="width: 750px;height:495px"/>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 构造函数
  function Person(name, age) {
    this.name = name
    this.age = age
  }

  // 原型
  Person.prototype.say = function() {
    return this.name + this.age
  }

  // 实例化
  var p = new Person("lee", 20)
  p.say() => 'lee20'

  Person.prototype.constructor    => Person
  Function.prototype.constructor  => Function
  Object.prototype.constructor    => Object

  p.__proto__ === Person.prototype                  => true
  Person.prototype.__proto__ === Object.prototype   => true
  Person.__proto__ === Function.prototype           => true
  Function.prototype.__proto__ === Object.prototype => true

  // 原型上最初只包含的 constructor 属性也是共享的
  p.constructor      => Person
  Person.constructor => Function
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header"><strong class="bold">使用对象字面量重写原型对象。</strong>实质是：让原型对象等于另一个对象。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 构造函数
  function Person(name, age) {
    this.name = name
    this.age = age
  }

  // 使用对象字面量重写原型对象
  Person.prototype =  {
    say: function() {
      return this.name + this.age
    }
  }

  // 实例化
  var p = new Person("lee", 20)

  p.say() => 'lee20'
</code>
            </pre>
          </div>
          <div class="card-header">使用对象字面量重写原型对象导致的问题：constructor 属性不再指向其构造函数，而是指向Object 构造函数。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  Person.prototype.constructor === Person() => false
  Person.prototype.constructor === Object() => true
</code>
            </pre>
          </div>
          <div class="card-header">解决方式：1、手动添加；2、通过 Object.defineProperty() 方法。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 手动指定 constructor 指向
  // 此时 constructor 属性由默认不可见变为可枚举属性
  Person.prototype =  {
    constructor: "Person",
    say: function() {
      return this.name + this.age
    }
  }

  // 使用 Object.defineProperty() 方法
  // 可设置其可见性
  Object.defineProperty(Person.prototype, 'constructor', {
    configurable: false,
    enumerable: false,
    writable: true,
    value: "Person"
  })
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header"><strong class="bold">内置的构造函数的原型是只读</strong>，为其赋值是无效的操作。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 不会报错，原型也没有被修改
  Object.prototype =  0
  Array.prototype =  0
  Function.prototype =  0
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">2、原型链</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <strong class="bold">向上搜索机制。</strong>当需要读取对象的某个属性时，首先会从实例属性中搜索；若没找到，则继续搜索指针指向的原型对象。
            <strong class="bold">若实例属性中与原型对象上有同名的属性，则原型上的属性将被屏蔽阻止访问。</strong>再使用 delete 操作符删除该实例属性后，可以重新访问原型上的同名属性。
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <strong class="bold">确定对象与原型之间是否存在原型链的关系。</strong>
            <ul>
              <li><strong>isPrototypeOf()</strong>：用于确定对象与原型之间是否存在原型关系。若存在，则返回 true。</li>
              <li><strong>Object.getPrototypeOf()</strong>：这个方法返回 [[Prototype]] 的值。</li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  Person.prototype.isPrototypeOf(p) => true

  Object.getPrototypeOf(p) === Person.prototype => true
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <strong class="bold">遍历对象属性。</strong>
            <ul>
              <li><strong>Object.keys()</strong>：它接收一个对象为参数，可遍历定义在该对象上的所有属性，返回一个包含由所有可枚举属性构成的字符串数组。</li>
              <li><strong>Object.getOwnPropertyNames()</strong>：该方法与 Object.keys() 方法一样，区别在于它忽略属性的可枚举性。</li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 返回可枚举属性
  Object.keys(p) => ['name', 'age']
  Object.keys(Person.prototype) => ['say']

  // 返回所有定义的属性（包括不可枚举的属性）
  Object.getOwnPropertyNames(p) => ['name', 'age']
  Object.getOwnPropertyNames(Person.prototype) => ['constructor','say']
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <strong class="bold">确定对象属性是实例属性还是原型属性。</strong>
            <ul>
              <li><strong class="bold">in</strong> 操作符，可遍历对象所有属性，返回对象所有可枚举的属性（无论是实例属性还是原型属性）。</li>
              <li><strong>hasOwnProperty()</strong>：只有是实例属性时才返回 true。</li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 遍历对象所有可枚举属性
  for (var p in new Person()) {
    p => name age say
  }

  // 如果该函数返回 true，表示给定属性属于原型属性，反之是实例属性
  function hasPrototypeProperty(object, name) {
    return !object.hasOwnProperty(name) && (name in object)
  }
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column card-800">
      <div class="card-column-title">3、原型链继承</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">原型链实现继承的方式： <strong class="bold">让一个原型对象等于另一个类型的实例。</strong><br>
            <img src="../../../common/img/inherit.jpg" style="width: 750px;height:728px"/>
            <!-- <ul>
              <li>1、constructor 属性的指向问题。</li>
              <li>2、超类型无论是实例属性还是原型属性都被继承在子类型的原型上。</li>
            </ul> -->
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
          <div class="card-header"> <strong class="bold">使用原型链实现继承时的注意事项。</strong><br>
           类型中需要覆盖超类型或添加超类型中不存在的某个方法时，给原型添加的方法的代码一定放在继承语句之后。
          </div>
          <div class="card-body">
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
          </div>
          <div class="card-header"> 子类型不能使用对象字面量创建原型对象。
          </div>
          <div class="card-body">
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
          <div class="card-header"> <strong class="bold">原型链继承的缺陷。</strong><br>
            <ul>
              <li>1、让一个原型对象等于另一个类型的实例，本质上重写了原型对象。因此，切断了实例对象与原型之间的联系，
                导致子类型的原型对象上的 constructor 指针不再指向子类型构造函数，而是指向超类型构造函数。</li>
              <li>2、在创建子类型实例时，切断了向超类型传递参数的可能。</li>
              <li>3、子类型在原型上继承了超类型的所有属性，如果超类型实例属性是一个引用类型值，那么该属性将被所有子类型的实例所共享（重现 oop 设计模式中原型模式的缺点）。</li>
            </ul>
          </div>
          <div class="card-body">
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
    <div class="card-column">
      <div class="card-column-title">4、借用构造函数</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">借用构造函数的设计思路：子类型构造函数内部通过 <strong>Function.call()</strong> 或 <strong>Function.apply()</strong> 方法调用超类型构造函数。</div>
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
    <div class="card-column">
      <div class="card-column-title">5、组合继承</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">组合继承的设计思路：通过借用构造函数实现对超类型实例属性的继承，而通过原型链实现对超类型原型上定义的方法继承。</div>
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
          <div class="card-header">缺点：超类型会被调用两次。</div>
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
    <div class="card-column">
      <div class="card-column-title">6、寄生式组合式继承</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">寄生式组合式继承是对组合继承的一种优化，设计思路：不必指定子类型的原型而调用超类型的构造函数，而是创建一个超类型原型的一个副本函数。</div>
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
    <div class="card-column">
      <div class="card-column-title">7、继承扩展</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header"><strong class="bold">原型式继承。</strong>基于已有的对象创建新对象。缺陷：被继承对象包含引用类型值。</div>
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
          </div>
          <div class="card-header">ECMAScript5 提供一个 <strong>Object.create()</strong> 方法规范化原型式继承。</div>
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
        <div class="card">
          <div class="card-header"><strong class="bold">寄生式继承。</strong>设计思路：创建一个仅用于封装继承过程的函数，该函数内部以某种方式来增强对象，最后返回这个对象。</div>
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
</template>

<script>
export default {
  name: 'function-2'
}
</script>

<style scoped lang="stylus">
.card-800
  flex: 0 0 800px !important
  width: 800px !important
</style>
