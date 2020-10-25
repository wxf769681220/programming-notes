<template>
  <div class="function-5" ref="function5">
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">1、作用域安全的构造函数</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <p>作用域安全的构造函数，首先要确认 this 对象是正确类型的实例。若不是，则会创建新的实例并返回。作用域安全的构造函数不会影响原型链的继承。</p>
              <pre v-highlight>
<code>
  /**
   * 无论是作为构造函数调用还是作为普通函数调用
   * 都会返回一个 Person 的新实例
   * 从而避免在全局对象上意外设置属性
   */
  function Person(name, age) {
    if (this instanceof Person) {
      this.username = name;
      this.age = age;
      this.friends = ["tom", "Jerry", "Speike"]
    } else {
      return new Person(name, age)
    }
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
        <div class="card-column-title">2、惰性载入函数</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <ol>
                <li>函数体中包含大量的 if 语句，每次调用函数时，都要对 if 语句的每个分支进行检查。</li>
                <li>实际上对于某些函数来说，在第一次调用时，if 语句的某个分支可以决定结果的，就不需要每次调用函数时都去执行 if 语句再去检查各个分支。</li>
                <li> 比如：createXHR()函数。</li>
              </ol>
              <pre v-highlight>
<code>
  /**
   * 惰性载入函数的实现
   * if 语句的每一个分支都会为 createXHR 变量赋值
   * 若某个分支可以决定结果，则用新赋值的 createXHR 变量覆盖了原有的函数
   * 最后返回调用这个新赋 createXHR 函数
   */
  function createXHR() {
    if (typeof XMLHttpRequest !== "undefined") {
      createXHR = function() {
        return new XMLHttpRequest()
      }
    } else if (typeof activeXObject !== "undefined") {
      createXHR = function() {
        if (typeof arguments.callee.activeXString !== "string") {
          var versions = ["MSXML2.XMLHttp", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp.6.0"]
          for (var i = 0, len = versions.length; i &lt; len; i++) {
            try {
              new  ActiveXObject(versions[i])
              arguments.callee.activeXString = versions[i]
              break
            } catch (ex) {
              //跳过
            }
          }
        }
        return new ActiveXObject(arguments.callee.activeXString)
      }
    } else {
      createXHR = function() {
        throw new Error("No XHR object available")
      }
    }

    return createXHR()
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
        <div class="card-column-title">3、限制对象扩展属性的方法</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>防篡改对象</strong>。
            </div>
            <div class="card-body">
              <ol>
                <li>对象不可扩展属性或方法。</li>
                <li>对于已有的属性。可修改值。</li>
                <li>防篡改对象使用 <strong class="danger">Object.preventExtensions(obj)</strong> 方法。</li>
              </ol>
              <pre v-highlight>
<code>
  var obj = {
    color: "red"
  }
  Object.preventExtensions(obj);

  // 扩展属性时，抛出错误
  obj.username = "alex" => error

  // 对已有属性的修改
  obj.color = "green"
  obj => {"color": green}
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>密封对象</strong>。
            </div>
            <div class="card-body">
              <ol>
                <li>对象不可扩展属性或方法。</li>
                <li>对于已有属性，可修改其值。</li>
                <li>对于已有属性 [[Configurable]] 特性将被设置为 false，这意味着无法通过 delete 操作符删除属性；也不能把属性修改为访问器属性。</li>
                <li>密封对象使用 <strong class="danger">Object.seal() 方法</strong>。</li>
              </ol>
              <pre v-highlight>
<code>
  var obj = {
    color: "red"
  }
  Object.seal(obj)

  // 扩展属性时，抛出错误
  obj.username = "alex" => error

    // 对已有属性的修改
  obj.color = "green"
  obj => {"color": green}

  // 删除属性时，抛出错误
  delete obj.color => error
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>冻结对象</strong>。
            </div>
            <div class="card-body">
              <ol>
                <li>对象不可扩展属性或方法。</li>
                <li>对于已有属性，不可修改其值。（[[writable]] 特性将被设置为 false）</li>
                <li>对于已有属性 [[Configurable]] 特性将被设置为 false，这意味着无法通过 delete 操作符删除属性；也不能把属性修改为访问器属性。</li>
                <li>冻结对象使用 <strong class="danger">Object.freeze() 方法</strong>。</li>
              </ol>
              <pre v-highlight>
<code>
  var obj = {
    color: "red"
  }

  Object.freeze(obj);

  // 不可扩展
  // 不可修改值
  // 不可删除属性
  obj.color = "green" => error
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">4、间接调用函数</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong class="danger">Function.call()</strong> 方法。
            </div>
            <div class="card-body">
              <pre v-highlight>
<code>
  var obj = {
    name: "alex",
    age: 24
  }

  function fn() {
    return this.name + this.age
  }

  // 函数作为 window 对象上的一个方法调用call()
  // window 可省略
  // 该函数内部this指向obj
  fn.call(obj) => "alex24"
</code>
              </pre>
              <p>函数作为某个对象的一个方法调用 call() 方法。</p>
              <pre v-highlight>
<code>
  var obj = {
    name: "alex",
    age: 24,
    say: function() {
      return this.name + this.age
    }
  }

  var o = {
    name: "lee",
    age: 20
  }

  // 函数作为obj对象的一个方法调用 call()
  // 该函数内部this指向o
  obj.say.call(o) => "lee20"
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong class="danger">Function.apply()</strong> 方法。
            </div>
            <div class="card-body">
              <p>apply() 方法与 call() 方法的区别是：apply() 方法接受<strong>数组形式的参数</strong>。</p>
              <pre v-highlight>
<code>
  var obj = {
    name: "alex",
    age: 24,
    say: function(a, b) {
      return this.name + this.age + "-" + (a + b)
    }
  }

  var o = {
    name: "lee",
    age: 20
  }

  // 参数以数组的形式传入
  obj.say.apply(o, [10, 11]) => "lee20-21"
</code>
              </pre>
              <p>使用 apply() 方法，在数组上模拟 max() 方法。</p>
                            <pre v-highlight>
<code>
  // 获取最大值
  Math.max(1, 2, 3) => 3

  Math.max.apply(Math, [1, 2, 3]) => 3
  Math.max.apply(null, [1, 2, 3]) => 3
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">4、函数绑定</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong class="danger">bind()</strong> 方法。
            </div>
            <div class="card-body">
              <ol>
                <li>ECMAScript5 为所有函数定义了一个 bind() 方法，该方法会创建一个新函数。</li>
                <li>这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。</li>
              </ol>
              <pre v-highlight>
<code>
 /**
  * 有的时候我们需要将一个对象的某个方法单独拿出来使用
  * 由于作用域发生了变化，函数中的 this 不再指向当前对象
  * 若函数在全局作用域下被调用，则函数中的 this 指向 window
  * 这时我们需要将其绑定到特定对象上
  */
  // 全局变量
  var name = 'alex'
  var age = 24

  var person = {
    name: "lee",
    age: 20
  }

  var obj = {
    name: "alex",
    age: 24,
    say: function(a) {
      return this.name + this.age + "-" + a
    }
  }

  // 获取对象某个方法的引用
  var f = obj.say

  // 在全局作用域调用
  // 此时函数内部this指向window
  f(2) => "alex24-2"

  // 创建一个新函数
  // 将新函数的作用域绑定到特定对象
  // 同时可以传入参数（函数柯里化）
  var foo = f.bind(person, 1)
  foo() => "lee20-1"
</code>
              </pre>
              <p>函数绑定常常与回调函数、事件处理器一起使用，将函数作为变量传递的同时保留代码执行环境。</p>
              <pre v-highlight>
<code>
  var person = {
    age: 20,
    say: function() {
      return console.log(this.age)
    }
  }

  // 将函数指针以值的形式进行传递
  // 此时this指向myDiv元素
  // 因此打印后输出undefined
  EventUtil.addHandler(myDiv, 'click', person.say);

  // 使用函数绑定bind()方法，然后将函数指针以值的形式进行传递
  // 此时this指向person对象
  // 因此打印后输出20
  EventUtil.addHandler(myDiv, 'click', person.say.bind(person));
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
  name: 'function5',
  mixins: [reflowerMixins]
}
</script>

<style scoped lang="stylus">
</style>
