<template>
  <div class="function-2" ref="function2">
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">1、原型对象</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <ol>
                <li>所有函数都有一个 <strong>prototype</strong>（原型）属性，其属性值是一个对象，即<strong>原型对象</strong>。</li>
                <li>在默认情况下，所有原型对象都会自动获取一个 <strong>constructor</strong>（构造函数）属性，属性值是一个指向 prototype 属性所在函数的指针。</li>
                <li>所有对象都包含一个内部的 <strong>[[prototype]]</strong> 属性，属性值指向其构造函数的原型对象。</li>
                <li>由于 [[prototype]] 属性是一个内部属性，对脚本不可见，因此不能直接访问。主流浏览器都支持一个 <strong>__proto__</strong> 属性，该属性可以用于替代访问 [[prototype]] 属性。</li>
              </ol>
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
            <div class="card-header"><strong>内置的构造函数的原型是只读</strong>，为其赋值是无效的操作。</div>
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
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">2、对象字面量重写原型对象</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <p>使用对象字面量重写原型对象的实质是：<strong>让原型对象等于另一个对象。</strong></p>
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
              <p>使用对象字面量重写原型对象导致的问题：constructor 属性不再指向其构造函数，而是指向 Object 构造函数。</p>
              <pre v-highlight>
<code>
  Person.prototype.constructor === Person() => false
  Person.prototype.constructor === Object() => true
</code>
              </pre>
              <p>解决方式：</p>
              <ol>
                <li>手动添加。</li>
                <li>通过 <strong class="danger">Object.defineProperty()</strong> 方法添加属性。</li>
              </ol>
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
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">3、默认原型 Object</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <p>所有引用类型默认都继承 Object，这个继承是通过原型链实现的。所有函数的默认原型都是 Object 的实例，
                因此默认原型都会包含一个内部指针<strong>[[prototype]]</strong>，指向 <strong>Object.prototype</strong>。
              </p>
              <pre v-highlight>
<code>
  // 继承 Object.prototype 中的属性方法
  var obj = {
    name: 'lee',
    age: 20
  }

  obj.constructor                     => Object
  obj.hasOwnProperty('age')           => true
  Object.prototype.isPrototypeOf(obj) => true

  obj.toLocaleString()  => [object Object]
  obj.toString()        => [object Object]
  obj.valueOf()         => { name: 'lee', age: 20 }
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">4、原型链</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>原型链遵循向上搜索机制。</strong>当需要读取对象的某个属性时，首先会从实例属性中搜索；若没找到，则继续搜索指针指向的原型对象。
              <strong>若实例属性中与原型对象上有同名的属性，则原型上的属性将被屏蔽阻止访问。</strong>再使用 delete 操作符删除该实例属性后，可以重新访问原型上的同名属性。
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>确定对象与原型之间是否存在原型链的关系。</strong>
            </div>
            <div class="card-body">
              <ul>
                <li><strong class="danger">isPrototypeOf()</strong>：用于确定对象与原型之间是否存在原型关系。若存在，则返回 true。</li>
                <li><strong class="danger">Object.getPrototypeOf()</strong>：这个方法返回 [[Prototype]] 的值。</li>
              </ul>
              <pre v-highlight>
<code>
  Person.prototype.isPrototypeOf(p) => true

  Object.getPrototypeOf(p) === Person.prototype => true
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">5、遍历对象属性</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <ul>
                <li><strong class="danger">Object.keys()</strong>：它接收一个对象为参数，可遍历定义在该对象上的所有属性，返回一个包含由所有可枚举属性构成的字符串数组。</li>
                <li><strong class="danger">Object.getOwnPropertyNames()</strong>：该方法与 Object.keys() 方法一样，区别在于它忽略属性的可枚举性。</li>
              </ul>
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
              <strong>确定对象属性是实例属性还是原型属性。</strong>
              <ul>
                <li><strong>in</strong> 操作符，可遍历对象所有属性，返回对象所有可枚举的属性（无论是实例属性还是原型属性）。</li>
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
    </div>
  </div>
</template>

<script>
import reflowerMixins from 'common/js/mixins/reflower.js'
export default {
  name: 'function2',
  mixins: [reflowerMixins]
}
</script>

<style scoped lang="stylus">
</style>
